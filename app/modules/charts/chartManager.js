const { Chart, Milestone, Priority, AuditOption, HoldReason, TaskType } = require('../../models/chart');
const Worklist = require('../../models/worklist');
const User = require('../../models/user');
const Role = require('../../models/role');
const Timer = require('../../models/timer');
const Comment = require('../../models/comment');
const CommentFlag = require('../../models/commentFlag');
const Client = require('../../models/client');
const Process = require('../../models/process');
const Tags = require('../../models/tags');
const ProjectMembers = require("../../models/projectMembers")
const Specialty = require('../../models/specialty');
const TaskActivity = require('../../models/taskActivity');
const Notification = require('../../models/notification');
const LogHours = require('../../models/logHours');
const moment = require('moment');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const logger = require('../../services/winstonLogger');
const { chartValidator } = require('../../../middleware/validation');
const { milestoneConstants, commentFlagConstants, userRoleConstants, regexPatterns,
  qcStatusConstants, priorityConstants, worklistStatusIdConstants, taskAuditLogTypeConstants } = require('../../common/constants');
const { sendNotificationMail } = require('../../services/nodemailer');
const Epic = require('../../models/epic');
const Sprint = require('../../models/sprint');
const { WorklistManager, getProjectIdsAvailableByRoleAndUser } = require('../worklists/worklistManager');
module.exports = class ChartManager {

  async saveNewChartForm(requestData, TaskId, UserId, userRoleId) {
    if (!requestData) {
      throw new Error('No details Entered')
    }
    try {
      const newChart = await Chart.findOne({
        where: {
          id: TaskId,
        },
        include : {
          model: Worklist,
          attributes: ['id','worklist_no'],
        }
      });
      let chartInfo = {};
      let holdReasonIds = [];

      const holdReasons = await newChart.getHoldReasons({ raw: true });

      if(requestData.task_tags !== "" && requestData.task_tags !== null && requestData.task_tags!==undefined ){
        await newChart.setTags([requestData.task_tags]);
      }

      if (holdReasons) {
        holdReasonIds = await holdReasons.map(obj => parseInt(obj.id)).sort();
      }
      chartInfo = {
        name: requestData.name ?? newChart.name,
        description: requestData.description ?? newChart.description,
        end_date: requestData.end_date ?? newChart.end_date,
        start_date: requestData.start_date ?? newChart.start_date,
        unique_task_no: requestData.task_no ?? newChart.unique_task_no,
        MilestoneId: requestData.milestone_id ?? newChart.MilestoneId,
        assignee_id: requestData.assignee_id ?? newChart.assignee_id,
        TaskTypeId: requestData.task_type ?? newChart.TaskTypeId,
        estimation: requestData.estimation ?? newChart.estimation,
        release_version: requestData.release_version ?? newChart.release_version,
        EpicId: requestData.epic_id ?? newChart.EpicId,
        SprintId: requestData.sprint_id ?? newChart.SprintId,
        PriorityId: requestData.priority_id ?? newChart.PriorityId
      };
      if (chartInfo.start_date) {
        chartInfo.start_date = moment(chartInfo.start_date, 'DD-MM-YYYY').format("YYYY-MM-DD");
      }
      if (chartInfo.end_date) {
        chartInfo.end_date = moment(chartInfo.end_date, 'DD-MM-YYYY').format("YYYY-MM-DD");
      }
      if(chartInfo.estimation) {
        const parsedEstimation = getParsedDuration(chartInfo.estimation);
        if(parsedEstimation){
          chartInfo.estimation = parsedEstimation;
        } else {
          throw new Error('Estimation format not supported. Please try again.')
        }
      }

      const validateChartInfo = {
        ...chartInfo,
        HoldReasons: requestData.HoldReasons ?? holdReasonIds,
      }
      const taskValidated = await chartValidator.validateChartFormData(validateChartInfo);
      if (!taskValidated) {
        throw new Error('Task form validation failed');
      }

      let areHoldReasonsChanged = false;
      if (requestData?.HoldReasons) {
        const incomingHoldReasonIds = requestData?.HoldReasons.map(id => parseInt(id)).sort();
        if (JSON.stringify(holdReasonIds) !== JSON.stringify(incomingHoldReasonIds)) {
          areHoldReasonsChanged = true
        }
      }

      if (validateChartInfo.HoldReasons) {
        await newChart.setHoldReasons(validateChartInfo.HoldReasons);
      }
      chartInfo.updated_by = UserId;
      let isAssigneeChanged = false;
      if(requestData.assignee_id && (parseInt(requestData.assignee_id) !== parseInt(newChart.assignee_id))){
        chartInfo.allocator_id = UserId;
        isAssigneeChanged = true;
      }

      const updatedTask = await Chart.update(chartInfo, { where: { id: newChart.id }, returning: true, individualHooks: true, areHoldReasonsChanged, HoldReasons: holdReasonIds });

      if(isAssigneeChanged){
        const notification = await Notification.create({
          user_id: updatedTask[1][0].dataValues.assignee_id,
          notification: `You have been assigned Task ${updatedTask[1][0].dataValues?.unique_task_no ?? ""} for Project ${newChart.dataValues?.Worklist?.worklist_no ?? "assigned to you"}`,
          is_read: false,
          task_id: updatedTask[1][0].dataValues.id
        });

        const {socketIo, socketUsers} = global;
        const userSocketId = await socketUsers.get(parseInt(notification.user_id));
        if(userSocketId){
          socketIo.to(userSocketId).emit('notification', notification);
        }
        const assignedUser = await User.findByPk(updatedTask[1][0].dataValues.assignee_id, { attributes: ['email', 'first_name', 'last_name']});
        const sendMail = sendNotificationMail({task_id: updatedTask[1][0].dataValues.id, task_details: `${chartInfo.unique_task_no ?? ""} ${chartInfo.name ?? ""}`, project_no: newChart.dataValues?.Worklist?.worklist_no ?? "", assignee_name: `${assignedUser.first_name} ${assignedUser.last_name}`, email: assignedUser.email});
      }

      return updatedTask;
    } catch (error) {
      throw error;
    }
  }

  async getAllChartsByPriorityWithFilters(userData, page = 1, size, priority = 'Critical', requestData, roleId) {
    try {
      const { CRITICAL_PRIORITY_ID, HIGH_PRIORITY_ID, MED_PRIORITY_ID, LOW_PRIORITY_ID } = priorityConstants;
      const { ADMIN_ID } = userRoleConstants;

      let filter = {};
      if (Object.keys(requestData).length != 0) {
        filter = await getFilterOptionsAndSetupInObject(requestData);
      }
      
      if(Object.keys(filter).length === 0){
        // Default assignee_id if user didn't sent anything in filter
        filter.assignee_id=userData.id;
        
        filter.MilestoneId = {
          [Op.not]: milestoneConstants.APPROVED_MILESTONE_ID
        };
      }

      // Milestone data (for specific user and with respect to chart-filter)
      const milestone_data = await this.getUserWorklistStats(userData, { ...filter });      

      if(roleId !== ADMIN_ID && !filter.WorklistId){
        filter.WorklistId = await getProjectIdsAvailableByRoleAndUser(roleId, userData.id);
      }

      if ((requestData.hold_reasons && requestData.hold_reasons !== '') || (requestData.audit_options && requestData.audit_options !== '')) {
        const filteredIds = await getFilteredIncludingHoldReasonAuditOptionChartIds(requestData.hold_reasons, requestData.audit_options, filter);
        if (filteredIds.length !== 0) {
          filter = { id: filteredIds }
        }
        else {
          return {
            counts: {
              Critical: 0,
              High: 0,
              Medium: 0,
              Low: 0
            },
            charts: []
          };
        }
      }
      const chartCountInfo = await Chart.count({
        where: filter,
        group: 'PriorityId',
        attributes: ['PriorityId']
      });
      const chartCounts = await getChartCountsAndReturnWithPriority(chartCountInfo)

      if (priority == 'Critical') {
        filter = { ...filter, PriorityId: CRITICAL_PRIORITY_ID, };
      }
      else if (priority == 'High') {
        filter = { ...filter, PriorityId: HIGH_PRIORITY_ID, }
      }
      else if (priority == 'Medium') {
        filter = { ...filter, PriorityId: MED_PRIORITY_ID, }
      }
      else if (priority == 'Low') {
        filter = { ...filter, PriorityId: LOW_PRIORITY_ID, }
      }

      const { limit, offset } = getPagination((page - 1), size);

      let includeModels = [
        {
          model: User,
          attributes: [],
          include: {
            model: Role,
            attributes: [],
          }
        },
        {
          model: User,
          as: 'Assignee',
          attributes: [],
          include: {
            model: Role,
            attributes: [],
          }
        },
        {
          model: User,
          as: 'Allocator',
          attributes: [],
          include: {
            model: Role,
            attributes: [],
          }
        },
        {
          model: Process,
          attributes: [],
          paranoid: false
        },
        {
          model: Priority,
          attributes: [],
        },
        {
          model: Milestone,
          attributes: [],
        },
        {
          model: Specialty,
          attributes: [],
          paranoid: false
        },
        {
          model: Epic,
          attributes: [],
          paranoid: false
        },
        {
          model: Worklist,
          attributes: [],
        },
        {
          model: TaskType,
          attributes: [],
        }
      ]

      let taskRecords = await Chart.findAll({
        attributes: [['id', 'Id'], ['s_no', 'SNo'],
        ['start_date', 'StartDate'], ['end_date', 'EndDate'],
        ['unique_task_no', 'TaskNo'], ['name', 'TaskName'],
        ['description', 'Description'],
        [Sequelize.col('User.first_name'), 'UserFirstName'],
        [Sequelize.col('User.last_name'), 'UserLastName'],
        [Sequelize.col('User.id'), 'UserId'],
        [Sequelize.col('User.Role.role_name'), 'UserRole'],
        [Sequelize.col('Assignee.first_name'), 'AssigneeFirstName'],
        [Sequelize.col('Assignee.last_name'), 'AssigneeLastName'],
        [Sequelize.col('Assignee.id'), 'assignee_id'],
        [Sequelize.col('Assignee.employee_id'), 'assignee_emp_id'],
        [Sequelize.col('Assignee.image_url'), 'assignee_image_url'],
        [Sequelize.col('Assignee.Role.role_name'), 'AssigneeRole'],
        [Sequelize.col('Allocator.first_name'), 'AllocatorFirstName'],
        [Sequelize.col('Allocator.last_name'), 'AllocatorLastName'],
        [Sequelize.col('Allocator.id'), 'allocator_id'],
        [Sequelize.col('Allocator.employee_id'), 'allocator_emp_id'],
        [Sequelize.col('Allocator.image_url'), 'allocator_image_url'],
        [Sequelize.col('Allocator.Role.role_name'), 'AllocatorRole'],
        [Sequelize.col('Process.proc_name'), 'Process'],
        [Sequelize.col('Priority.priority_name'), 'Priority'],
        [Sequelize.col('Milestone.milestone_name'), 'Milestone'],
        [Sequelize.col('Specialty.spec_name'), 'Specialty'],
        [Sequelize.col('Worklist.name'), 'Worklist'],
        [Sequelize.col('Epic.name'), 'epic_name'],
        [Sequelize.col('TaskType.name'), 'task_type'],
        ],
        include: includeModels,
        raw: true,
        subQuery: false,
        limit: limit,
        offset: offset,
        where: filter,
        order: ['MilestoneId'],
      });
      taskRecords = formatDatesInCharts(taskRecords);

      return { counts: chartCounts, charts: taskRecords, milestoneData: milestone_data };
    }
    catch (error) {
      throw error;
    }
  }

  async getAllWorklistWithFilters(UserId, page = 1, requestData) {
    let filter = {};
    if (Object.keys(requestData).length != 0) {
      filter = getFilterOptionsAndSetupInObject(requestData);
      if (filter.WorklistId) {
        const filterWorklist = await Worklist.findOne({
          where: {
            worklist_no: filter.WorklistId
          },
          raw: true
        });
        filter.WorklistId = filterWorklist.id
      }
    }
    filter = { ...filter, UserId };

    const worklistCountInfo = await Worklist.count({
      where: filter
    })
  }

  async getChartById(ChartId, UserId, RoleId) {
    try {
      let chart = await Chart.findByPk(ChartId, {
        attributes: [['id', 'Id'], ['s_no', 'SNo'], ['start_date', 'StartDate'],
        ['end_date', 'EndDate'], ['unique_task_no', 'TaskNo'], ['name', 'TaskName'],
        ['description', 'Description'],['TaskTypeId', "TaskType"], 'estimation', 'release_version',
        [Sequelize.col('TaskType.name'), 'task_type_name'],
        [Sequelize.col('Assignee.first_name'), 'assignee_first_name'],
        [Sequelize.col('Assignee.last_name'), 'assignee_last_name'],
        [Sequelize.col('Assignee.id'), 'assignee_id'],
        [Sequelize.col('Assignee.Role.role_name'), 'assignee_role'],
        [Sequelize.col('Assignee.image_url'), 'assignee_image'],
        [Sequelize.col('Allocator.first_name'), 'allocator_first_name'],
        [Sequelize.col('Allocator.last_name'), 'allocator_last_name'],
        [Sequelize.col('Allocator.id'), 'allocator_id'],
        [Sequelize.col('Allocator.Role.role_name'), 'allocator_role'],
        [Sequelize.col('Process.proc_name'), 'Process'],
        [Sequelize.col('Priority.priority_name'), 'Priority'],
        [Sequelize.col('Priority.id'), 'priority_id'],
        [Sequelize.col('Milestone.id'), 'MilestoneId'],
        [Sequelize.col('Milestone.milestone_name'), 'Milestone'],
        [Sequelize.col('Specialty.spec_name'), 'Specialty'],
        [Sequelize.col('Worklist.worklist_no'), 'Worklist'],
        [Sequelize.col('Client.id'), 'ClientId'],
        [Sequelize.col('Client.client_name'), 'ClientName'],
        [Sequelize.col('Worklist.id'), 'WorklistId'],
        [Sequelize.col('Worklist.name'), 'worklist_name'],
        [Sequelize.col('Epic.id'), 'epic_id'],
        [Sequelize.col('Epic.name'), 'epic_name'],
        [Sequelize.col('Sprint.id'), 'sprint_id'],
        [Sequelize.col('Sprint.name'), 'sprint_name'],
        ],
        include: [
          {
            model: User,
            as: 'Assignee',
            attributes: [],
            include: {
              model: Role,
              attributes: [],
            }
          },
          {
            model: User,
            as: 'Allocator',
            attributes: [],
            include: {
              model: Role,
              attributes: [],
            }
          },
          {
            model: Client,
            attributes: []
          },
          {
            model: Process,
            attributes: [],
            paranoid: false
          },
          {
            model: Priority,
            attributes: [],
          },
          {
            model: Milestone,
            attributes: [],
          },
          {
            model: Specialty,
            attributes: [],
            paranoid: false
          },
          {
            model: Worklist,
            attributes: [],
          },
          {
            model: Epic,
            attributes: [],
          },
          {
            model: Sprint,
            attributes: [],
          },
          {
            model: TaskType,
            attributes: [],
          }
        ],
        raw: true
      });
      if (chart === null) {
        throw new Error('Chart not found');
      }

      if (chart.StartDate) {
        chart.StartDate = moment(chart.StartDate).format("DD-MM-YYYY");
      }
      if (chart.EndDate) {
        chart.EndDate = moment(chart.EndDate).format("DD-MM-YYYY");
      }

      const coders = [];
      chart = { ...chart, coders };
      const auditors = [];
      chart = { ...chart, auditors };

      const ArrayData = await Chart.findByPk(ChartId, {
        attributes: [],
        include: [
          {
            model: HoldReason,
            attributes: [['id', 'value'], ['hold_reason', 'label']],
            through: {
              attributes: [],
            },
            paranoid: false
          }
        ]
      });

      const TagsData = await Chart.findByPk(ChartId, {
        attributes: [],
        include: [
          {
            model: Tags,
            attributes: [['name', 'label'], ['category', 'value']],
            through: {
              attributes: [],
            },
            paranoid: false,
            raw: true
          }
        ]
      });

      if (ArrayData) {
        let { HoldReasons } = ArrayData
        chart = { ...chart, HoldReasons };
      }

      if(TagsData){
        let {Tags} = TagsData
        chart = {...chart, Tags};
      }

      let timer = null;
      chart = { ...chart, timer };
      let date_of_coding = null;
      let date_of_auditing = null;
      chart = { ...chart, date_of_coding, date_of_auditing };

      return chart;
    }
    catch (error) {
      throw error;
    }
  }

  async getChartActivityLogById(ChartId, UserId, RoleId) {
    try {
      const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, UserId);
      const taskActivity = await TaskActivity.findAll({
        where: {
          id: ChartId,
          WorklistId: projectIds
        },
        include: [
          {
            model: User,
            as: 'Actor',
            attributes: ['id', 'first_name', 'last_name', 'employee_id', 'image_url'],
            include: [{
              model: Role,
              attributes: ['id', 'role_name']
            }],
          },
          {
            model: User,
            as: 'TaskAssignee',
            attributes: ['first_name', 'last_name']
          },
          {
            model: Milestone,
            attributes: ['milestone_name']
          },
          {
            model: Priority,
            attributes: ['priority_name']
          },
          {
            model: TaskType,
            attributes: ['name']
          },
          {
            model: Sprint,
            attributes: ['name']
          },
          {
            model: Epic,
            attributes: ['name']
          },
        ],
        order: [['updated_task_at', 'ASC']]
      });

      let data = {};

      if (taskActivity && taskActivity.length > 0) {
        for (let i = 0; i < taskActivity.length; i++) {
          const { id, first_name, last_name, employee_id, image_url, Role: role } = await taskActivity[i].dataValues.Actor.toJSON();
          const user = {
            id: id,
            name: `${first_name} ${last_name}`,
            role: `${role.role_name} (Emp ID: ${employee_id})`,
            image_url: image_url
          }

          const activityData = taskActivity[i].dataValues;
          let date = moment(activityData.updated_task_at).format('DD-MM-YYYY');
          let Changed = [];
          let timestamp = moment(activityData.updated_task_at).format('DD-MM-YYYY hh:mm:ss a');
          let activity_by = user;
          let formChanges = [];
          let activity = '';

          if (!data[date]) {
            data[date] = [];
          }

          if (activityData.action === 'CREATE') {
            activity = `Task Created`;
            data[date].unshift({
              activity,
              timestamp,
              by_user: activity_by,
              Changed: [],
              timer: null
            });
            continue;
          } else if (activityData.action === 'UPDATE') {
            activity = `Task Updated`;
          }

          const currentMultiSelectRecord = taskActivity[i]
          const previousMultiSelectRecord = taskActivity[i - 1];
          const multiSelectChanges = await getMultiSelectChanges(previousMultiSelectRecord, currentMultiSelectRecord);
          formChanges = await getFormChangeArray(taskActivity[i].toJSON(), taskActivity[i - 1].toJSON());
          Changed = [...formChanges, ...multiSelectChanges];

          data[date].unshift({
            activity,
            timestamp,
            by_user: activity_by,
            Changed,
            timer: null
          });
        }
      }

      //* get latest record from Chart and add to Activity Log
      const latestTaskRecord = await Chart.findByPk(ChartId, {
        include: [
          {
            model: User,
            as: 'Updater',
            attributes: ['id', 'first_name', 'last_name', 'employee_id', 'image_url'],
            include: [{
              model: Role,
              attributes: ['id', 'role_name']
            }],
          },
          {
            model: User,
            as: 'Assignee',
            attributes: ['first_name', 'last_name']
          },
          {
            model: Milestone,
            attributes: ['milestone_name']
          },
          {
            model: Priority,
            attributes: ['priority_name']
          },
          {
            model: TaskType,
            attributes: ['name']
          },
          {
            model: Sprint,
            attributes: ['name']
          },
          {
            model: Epic,
            attributes: ['name']
          },
        ],
      });

      const { id, first_name, last_name, employee_id, image_url, Role: role } = await latestTaskRecord.dataValues.Updater.toJSON();
      const user = {
        id: id,
        name: `${first_name} ${last_name}`,
        role: `${role.role_name} (Emp ID: ${employee_id})`,
        image_url: image_url
      }

      const activityData = latestTaskRecord.dataValues;
      let date = moment(activityData.updatedAt).format('DD-MM-YYYY');
      let Changed = [];
      let timestamp = moment(activityData.updatedAt).format('DD-MM-YYYY hh:mm:ss a');
      let activity_by = user;
      let formChanges = [];
      let activity = '';

      if (!data[date]) {
        data[date] = [];
      }

      if (!taskActivity || taskActivity.length === 0) {
        activity = `Task Created`;
        data[date].unshift({
          activity,
          timestamp,
          by_user: activity_by,
          Changed,
          timer: null
        });
        return data;
      } else {
        activity = `Task Updated`;
      }

      const currentMultiSelectRecord = latestTaskRecord;
      const previousMultiSelectRecord = taskActivity[taskActivity.length - 1];
      const multiSelectChanges = await getMultiSelectChanges(previousMultiSelectRecord, currentMultiSelectRecord);
      formChanges = await getFormChangeArray(latestTaskRecord.toJSON(), taskActivity[taskActivity.length - 1].toJSON());
      Changed = [...formChanges, ...multiSelectChanges];

      data[date].unshift({
        activity,
        timestamp,
        by_user: activity_by,
        Changed,
        timer: null
      });

      let result = {}
      Object.keys(data).reverse().forEach((key) => {result[key] = data[key]});
      return result;
    }
    catch (error) {
      throw error;
    }
  }

  async getUserWorklistStats(user, filter={}) {
    try {
      const {
        TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, READY_FOR_QA_MILESTONE_ID,
        QA_IN_PROGRESS_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID, APPROVED_MILESTONE_ID } = milestoneConstants;
      const { MEMBER_ID, ADMIN_ID } = userRoleConstants;
      const {RoleId: userRoleId, id} = user;

      const openStatusCount = 0;
      let completeStatusCount = 0;
      let incompleteStatusCount = 0;

      let data = {
        open_status: openStatusCount,
        complete_status: completeStatusCount,
        incomplete_status: incompleteStatusCount,
      };

      if (userRoleId === MEMBER_ID) {
        data = { ...data, milestones: { qc_pass: 0, qc_fail: 0, ready_to_audit: 0 } };
      }
      if(userRoleId !== ADMIN_ID && !filter.WorklistId){
        filter.WorklistId = await getProjectIdsAvailableByRoleAndUser(userRoleId, id);
      }
      
      const taskMilestoneCounts = await Chart.count({
        attributes: ['MilestoneId'],
        where: filter,
        include: {
          model: Milestone,
          attributes: [],
          //TODO Project specific milestones to be fetched with Ids (when milestone creation is implemented) making this a dynamic condition
          where: {
            id: [TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, READY_FOR_QA_MILESTONE_ID,
              QA_IN_PROGRESS_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID, APPROVED_MILESTONE_ID]
          },
        },
        group: ['MilestoneId', 'Milestone.milestone_name'],
        raw: true
      });

      let todoCount = 0;
      let inProgressCount = 0;
      let readyForQACount = 0;
      let qaInProgressCount = 0;
      let readyForClientReviewCount = 0;
      let approvedCount = 0;

      taskMilestoneCounts.forEach(row => {
        switch (row.MilestoneId) {
          case TODO_MILESTONE_ID:
            todoCount = row.count;            
            break;
          case IN_PROGRESS_MILESTONE_ID:
            inProgressCount = row.count;            
            break;
          case READY_FOR_QA_MILESTONE_ID:
            readyForQACount = row.count;            
            break;
          case QA_IN_PROGRESS_MILESTONE_ID:
            qaInProgressCount = row.count;            
            break;
          case READY_FOR_CLIENT_REVIEW_MILESTONE_ID:
            readyForClientReviewCount = row.count;            
            break;
          case APPROVED_MILESTONE_ID:
            approvedCount = row.count;            
            break; 
          default:
            break;
        }
      });

      data = { ...data, milestones: { todo: todoCount, in_progress: inProgressCount, ready_for_qa: readyForQACount, qa_in_progress: qaInProgressCount, ready_for_client_review: readyForClientReviewCount, approved: approvedCount }, current_chart_stats: {} };

      return data;
    } catch (error) {
      throw error;
    }
  }

  async addNewChartComments(requestData, ChartId, UserId, RoleId) {
    if (!requestData) {
      throw new Error("No details Entered");
    } else {
      try {
        const chart = await Chart.findByPk(ChartId, { raw: true });
        if (!chart) {
          throw new Error('Chart not found');
        }

        const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
        const { READY_FOR_CLIENT_REVIEW_MILESTONE_ID } = milestoneConstants;
        if ((RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) &&
          (chart.MilestoneId === READY_FOR_CLIENT_REVIEW_MILESTONE_ID) &&
          (chart.UserId != UserId)) {
          throw new Error('Cannot add comments for In-progress chart');
        }

        const { NEUTRAL_COMMENT_FLAG_ID } = commentFlagConstants;
        const timestamp = moment().format("YYYY-MM-DD hh:mm:ss a");
        if (requestData.FlaggedCommentId) {
          const updateParentComment = await Comment.update(
            { CommentFlagId: requestData.FlagId },
            { where: { id: requestData.FlaggedCommentId } })
        }

        const newComment = await Comment.create({
          parent_id: requestData.parent_id,
          comment_msg: requestData.comment_msg,
          comment_timestamp: timestamp,
          ChartId: ChartId,
          UserId: UserId,
          CommentFlagId: NEUTRAL_COMMENT_FLAG_ID,
          LocationId: chart.LocationId,
          ClientId: chart.ClientId
        });

        return newComment;
      } catch (error) {
        throw error;
      }
    }
  }

  async getCommentsByChartId(ChartId) {
    try {
      let comments = await Comment.findAll({
        where: {
          ChartId: ChartId,
          parent_id: null
        },
        attributes: ['id', 'parent_id', 'comment_msg', 'comment_timestamp',
          [Sequelize.col('User.first_name'), 'user_first_name'],
          [Sequelize.col('User.last_name'), 'user_last_name'],
          [Sequelize.col('User.id'), 'UserId'],
          [Sequelize.col('User.image_url'), 'user_image_url'],
          [Sequelize.col('User.Role.role_name'), 'role'],
          [Sequelize.col('CommentFlag.flag'), 'Flag'],
        ],
        include: [
          {
            model: User,
            attributes: [],
            include: [
              {
                model: Role,
                attributes: []
              }
            ]
          },
          {
            model: CommentFlag,
            attributes: []
          }
        ],
        order: ['comment_timestamp'],
        raw: true
      });

      let response = [];
      for (let comment of comments) {
        comment.comment_timestamp = moment(comment.comment_timestamp).format("DD-MM-YYYY hh:mm:ss a").toString();
        const replies = await Comment.findAll({
          where: {
            ChartId: ChartId,
            parent_id: comment.id
          },
          attributes: ['id', 'parent_id', 'comment_msg', 'comment_timestamp',
            [Sequelize.col('User.first_name'), 'user_first_name'],
            [Sequelize.col('User.last_name'), 'user_last_name'],
            [Sequelize.col('User.id'), 'UserId'],
            [Sequelize.col('User.image_url'), 'user_image_url'],
            [Sequelize.col('User.Role.role_name'), 'role'],
            [Sequelize.col('CommentFlag.flag'), 'Flag'],
          ],
          include: [
            {
              model: User,
              attributes: [],
              include: [
                {
                  model: Role,
                  attributes: []
                }
              ]
            },
            {
              model: CommentFlag,
              attributes: []
            }
          ],
          order: ['comment_timestamp'],
          raw: true
        });

        for (let reply of replies) {
          reply.comment_timestamp = moment(reply.comment_timestamp).format("DD-MM-YYYY hh:mm:ss a").toString();
        }
        comment = { ...comment, Replies: replies };
        response.push(comment)
      }

      return response;
    }
    catch (error) {
      throw error;
    }
  }

  async addNewTimer(request) {
    if (!request) {
      throw new Error("No Details Entered");
    }
    try {

      const { MANAGER_ID, TEAM_LEAD_ID, CODER_ID, MEMBER_ID } = userRoleConstants;
      const { TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, READY_FOR_QA_MILESTONE_ID,
        QA_IN_PROGRESS_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID, APPROVED_MILESTONE_ID } = milestoneConstants;
      const { REALLOCATE, CODING_IN_PROGRESS, CODING_DONE, AUDIT_IN_PROGRESS, AUDIT_DONE, ALLOCATE, NEUTRAL } = chartAuditLogTypeConstants;

      // * TIMER START
      const foundChart = await Chart.findByPk(request.params.id);
      if (foundChart.MilestoneId === IN_PROGRESS_MILESTONE_ID ||
        foundChart.MilestoneId === QA_IN_PROGRESS_MILESTONE_ID ||
        foundChart.MilestoneId === APPROVED_MILESTONE_ID ||
        ((request.user.RoleId === MANAGER_ID || request.user.RoleId === TEAM_LEAD_ID)
          && foundChart.MilestoneId != READY_FOR_CLIENT_REVIEW_MILESTONE_ID
          && foundChart.MilestoneId != TODO_MILESTONE_ID)) {

        let userRoleId = null;
        let milestoneInProgressId = null;
        let inProgressType = NEUTRAL;
        if (foundChart.MilestoneId === IN_PROGRESS_MILESTONE_ID) {
          milestoneInProgressId = IN_PROGRESS_MILESTONE_ID;
          userRoleId = CODER_ID;
          inProgressType = CODING_IN_PROGRESS;
        }
        if (foundChart.MilestoneId === QA_IN_PROGRESS_MILESTONE_ID || foundChart.MilestoneId === APPROVED_MILESTONE_ID) {
          milestoneInProgressId = READY_FOR_CLIENT_REVIEW_MILESTONE_ID;
          userRoleId = MEMBER_ID;
          inProgressType = AUDIT_IN_PROGRESS;
        }

        const start_timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
        const newTimer = await Timer.create({
          UserId: request.user.id,
          RoleId: userRoleId,
          ChartId: request.params.id,
          start_time: start_timestamp,
          LocationId: foundChart.LocationId,
          ClientId: foundChart.ClientId
        });

        // * Update Worklist Status to In-Progress
        const { IN_PROGRESS_STATUS_ID } = worklistStatusIdConstants;
        const worklist = await Worklist.findByPk(
          foundChart.WorklistId,
          { raw: true, attributes: ['WorklistStatusId'] });
        if (worklist.WorklistStatusId != IN_PROGRESS_STATUS_ID) {
          const updateWorklistStatusToInProgress = await Worklist.update(
            { WorklistStatusId: IN_PROGRESS_STATUS_ID },
            { where: { id: foundChart.WorklistId } });
        }

        const updatedChart = await Chart.findByPk(request.params.id);

        //* SAVE to Audit Log before Timer START
        const saveChartToLog = updatedChart.toJSON();
        delete saveChartToLog.createdAt;
        delete saveChartToLog.updatedAt;
        const savedChartMultipleOptions = await getChartMultipleOptions(updatedChart);
        const inProgressLog = await addChartAuditLogFromChart(saveChartToLog, savedChartMultipleOptions, inProgressType);
        if (!inProgressLog) {
          throw new Error('Chart audit log not saved');
        }

        updatedChart.changed('PriorityId', true);
        const updateMilestoneInChart = await updatedChart.update({
          MilestoneId: milestoneInProgressId,
          updated_by: request.user.id
        });
        logger.info(`Milestone update to In Progress on Timer START for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });

        const timerData = {
          start_time: start_timestamp,
          stop_time: null,
          duration_time: null
        }

        const message = "Timer successfully started";
        return { message, timerData }
      }

      // * TIMER STOP
      else if ((foundChart.MilestoneId === READY_FOR_CLIENT_REVIEW_MILESTONE_ID)
        && foundChart.UserId === request.user.id) {
        const foundTimer = await Timer.findOne({
          where: {
            ChartId: request.params.id,
            UserId: request.user.id,
            stop_time: null,
          },
          order: [["updatedAt", "DESC"]],
        });

        // * Chart validation before TIMER STOP for CODER
        let holdReasonIds = [];
        let responsiblePartyIds = [];
        let auditOptionIds = [];

        const holdReasons = await foundChart.getHoldReasons({ raw: true });
        if (holdReasons) {
          holdReasonIds = await holdReasons.map(obj => obj.id);
        }
        const responsibleParties = await foundChart.getResponsibleParties({ raw: true });
        if (responsibleParties) {
          responsiblePartyIds = await responsibleParties.map(obj => obj.id);
        }
        const auditOptions = await foundChart.getAuditOptions({ raw: true });
        if (auditOptions) {
          auditOptionIds = await auditOptions.map(obj => obj.id);
        }

        const chartCopy = foundChart.toJSON();
        if (chartCopy.StatusId === COMPLETE_STATUS_ID) {
          foundChart.dataValues.date_of_completion = moment().format("YYYY-MM-DD");
          const updateDateOfCompletionInChart = await Chart.update(
            {
              date_of_completion: moment().format("YYYY-MM-DD"),
              updated_by: request.user.id
            },
            {
              where: { id: foundChart.id },
            }
          );
        }
        else if (chartCopy.StatusId === INCOMPLETE_STATUS_ID) {
          foundChart.dataValues.date_of_completion = null;
          const updateDateOfCompletionInChart = await Chart.update(
            {
              date_of_completion: null,
              updated_by: request.user.id
            },
            {
              where: { id: foundChart.id },
            }
          );
        }

        if (chartCopy.StatusId === OPEN_STATUS_ID) {
          throw new Error('Chart status has to be updated');
        }

        const validateChartInfo = {
          ...chartCopy,
          HoldReasons: holdReasonIds,
          ResponsibleParties: responsiblePartyIds,
          AuditOptions: auditOptionIds,
        };

        const chartValidated = await chartValidator.validateChartFormData(validateChartInfo);
        if (!chartValidated) {
          throw new Error('Chart form validation failed');
        };

        // * SAVE Chart to Audit Log before new chart form saved
        const saveChartToLog = foundChart.toJSON();
        delete saveChartToLog.createdAt;
        delete saveChartToLog.updatedAt;
        const savedChartMultipleOptions = await getChartMultipleOptions(foundChart);
        const coderChartLog = await addChartAuditLogFromChart(saveChartToLog, savedChartMultipleOptions, CODING_DONE);
        if (!coderChartLog) {
          throw new Error('Chart audit log not saved');
        };

        const chartUpdateFieldsOnCodingDone = {
          MilestoneId: READY_FOR_QA_MILESTONE_ID,
          updated_by: request.user.id
        }

        const allChartTimers = await Timer.findAll({
          where: {
            ChartId: request.params.id,
            stop_time: { [Op.ne]: null },
            RoleId: CODER_ID
          },
          order: [["createdAt", "ASC"]],
        });

        if (allChartTimers.length === 1) {
          chartUpdateFieldsOnCodingDone.follow_up_coder = request.user.id;
        }
        else if (allChartTimers.length > 1) {
          chartUpdateFieldsOnCodingDone.latest_coder = request.user.id;
        }

        const updateMilestoneInChart = await Chart.update(chartUpdateFieldsOnCodingDone,
          {
            where: { id: foundChart.id },
            individualHooks: true
          }
        );
        logger.info(`Milestone changed to CODING DONE on Timer STOP for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });


        let stop_timestamp = moment();
        const start_timestamp = moment(foundTimer.start_time);
        const stop_duration = moment(
          stop_timestamp.format("YYYY-MM-DD HH:mm:ss")
        );
        const duration = (stop_duration.diff(start_timestamp)) / 1000;
        const updateStopTimeInTimer = await Timer.update(
          {
            stop_time: stop_timestamp.format("YYYY-MM-DD HH:mm:ss"),
            duration_time: duration,
          },
          {
            where: { id: foundTimer.id },
          }
        );

        const timerData = {
          start_time: start_timestamp.format("YYYY-MM-DD HH:mm:ss"),
          stop_time: stop_timestamp.format("YYYY-MM-DD HH:mm:ss"),
          duration_time: duration
        }

        const message = "Timer successfully stopped";
        return { message, timerData }
      }
    } catch (error) {
      throw error;
    }
  }

  async getTotalTime(requestData, ChartId) {
    if (!requestData) {
      throw new Error('No details Entered')
    }
    try {
      const { CODER_ID, MEMBER_ID } = userRoleConstants;
      const sumOfDuration = await Timer.findAll({
        attributes: [
          [Sequelize.literal('(SUM((duration_time)))'), 'total_time'],
          'RoleId'
        ],
        where: {
          ChartId: ChartId,
          RoleId: { [Op.or]: [CODER_ID, MEMBER_ID] }
        },
        raw: true,
        group: 'RoleId'
      })

      let coder_time = 0,
        auditor_time = 0,
        total_time = 0;
      const resp_map = sumOfDuration.map((obj) => {
        if (obj.RoleId === CODER_ID && obj.total_time != null) {
          coder_time = obj.total_time;
        } else if (obj.RoleId === MEMBER_ID && obj.total_time != null) {
          auditor_time = obj.total_time
        }
      });

      let total_coder_time = '00:00';
      if (coder_time != 0) {
        total_coder_time = getTimeTrackerDuration(coder_time * 1000);
      }
      let total_auditor_time = '00:00'
      if (auditor_time != 0) {
        total_auditor_time = getTimeTrackerDuration(auditor_time * 1000);
      }
      let total_working_time = '00:00';
      if (coder_time != 0 || auditor_time != 0) {
        total_time = parseInt(coder_time) + parseInt(auditor_time);
        total_working_time = getTimeTrackerDuration(total_time * 1000);
      }

      return {
        "coder_total_time": total_coder_time,
        "auditor_total_time": total_auditor_time,
        "total_time_taken": total_working_time
      };
    } catch (error) {
      throw error;
    }
  }

  async typeaheadChartFilter(requestData, userObj) {
    if (!requestData) {
      throw new Error("No record found");
    } else {
      try {
        let response;
        let jsonData = {};
        let res;
        let worklistNameRes;
        let taskNameRes;
        if (requestData.hasOwnProperty('chart_no')) {
          if (requestData?.chart_no != null && requestData?.chart_no !== undefined) {
            response = await getAutocompleteRecords(requestData.chart_no, "chartList", userObj)
          }
        }
        if (requestData.hasOwnProperty('task_name')) {
          if (requestData?.task_name != null && requestData?.task_name !== undefined) {
            taskNameRes = await getAutocompleteRecords(requestData.task_name, "taskName", userObj)
          }
        }
        // if (requestData.hasOwnProperty('worklist_no')) {
        //   if (requestData?.worklist_no != null && requestData?.worklist_no !== undefined) {
        //     res = await getAutocompleteRecords(requestData.worklist_no, "workList", userObj)
        //   }
        // }
        // if (requestData.hasOwnProperty('worklist_name')) {
        //   if (requestData?.worklist_name != null && requestData?.worklist_name !== undefined) {
        //     worklistNameRes = await getAutocompleteRecords(requestData.worklist_name, "workListName", userObj)
        //   }
        // }
        if (requestData.hasOwnProperty('worklist')) {
            if (requestData?.worklist != null && requestData?.worklist !== undefined) {
              res = await getAutocompleteRecords(requestData.worklist, "workList", userObj)
            }
          }
        if (response?.length !== 0) {
          jsonData = {
            typeaheadChartRecord: response,
            typeaheadWorkListRecord: res,
            typeaheadWorkListNameRecord: worklistNameRes,
            typeAheadTaskName : taskNameRes
          }
        } else {
          jsonData = {
            typeaheadWorkListRecord: res,
            typeaheadWorkListNameRecord: worklistNameRes,
            typeAheadTaskName : taskNameRes
          }
        }

        return jsonData;
      } catch (error) {
        throw error;
      }
    }
  }

  async selfAllocateCharts(requestData, userId) {
    if (!requestData) {
      throw new Error("No details Entered");
    }
    try {
      const chartsCountFromRequest = requestData.chart_id.length;
      const { TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, READY_FOR_QA_MILESTONE_ID,
        QA_IN_PROGRESS_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID, APPROVED_MILESTONE_ID } = milestoneConstants;

      const validChartsToSelfAllocate = await Chart.findAndCountAll({
        where: {
          id: requestData.chart_id,
          MilestoneId: {
            [Op.notIn]: [TODO_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID]
          },
          coder_id: { [Op.ne]: userId },
          auditor_id: {
            [Op.or]: [{ [Op.is]: null }, { [Op.ne]: userId }]
          }
        }
      });
      if (chartsCountFromRequest !== validChartsToSelfAllocate.count) {
        throw new Error('Charts cannot be self allocated in Coding in Progress, Audit in Progress and Ready to Allocate milestone(s). They also should not be previously allocated to you.');
      }

      for (const chart of validChartsToSelfAllocate.rows) {
        let nextMilestoneId;
        if (chart.MilestoneId === IN_PROGRESS_MILESTONE_ID) {
          nextMilestoneId = IN_PROGRESS_MILESTONE_ID;
        }
        if (chart.MilestoneId === READY_FOR_QA_MILESTONE_ID || chart.MilestoneId === QA_IN_PROGRESS_MILESTONE_ID
          || chart.MilestoneId === APPROVED_MILESTONE_ID) {
          nextMilestoneId = QA_IN_PROGRESS_MILESTONE_ID;
        }

        //* SAVE to Audit Log before self-allocation
        const { REALLOCATE } = chartAuditLogTypeConstants;
        const saveChartToLog = chart.toJSON();
        delete saveChartToLog.createdAt;
        delete saveChartToLog.updatedAt;
        const inProgressLog = await addChartAuditLogFromChart(saveChartToLog, {}, REALLOCATE);
        if (!inProgressLog) {
          throw new Error('Chart audit log not saved')
        }

        const selfAllocateChart = await Chart.update({
          MilestoneId: nextMilestoneId,
          UserId: userId,
          updated_by: userId
        }, {
          where: {
            id: chart.id
          },
          individualHooks: true
        });
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  async getTaskLoggedHoursByTaskId(taskId) {
    try {
      const logHours = await LogHours.findAll({
        where: {
          task_id: taskId,
        },
        attributes: ['id', 'date', 'hours', 'description', 'hours_calc',
          [Sequelize.col('User.first_name'), 'assignee_first_name'],
          [Sequelize.col('User.last_name'), 'assignee_last_name'],
          [Sequelize.col('User.id'), 'assignee_id'],
          [Sequelize.col('Chart.id'), 'task_id'],
          [Sequelize.col('Chart.unique_task_no'), 'task_no'],
          [Sequelize.col('Tags.category'), 'tags_category'],
        ],
        include:[
        {
          model: User,
          attributes: [],
        },
        {
          model: Chart,
          attributes: [],
        },
        {
          model: Tags,
          attributes: [],
        },
      ],
        order: [['date', 'DESC']],
        raw: true
      });

      logHours.forEach(log => {
        log.assignee_name = `${log.assignee_first_name} ${log.assignee_last_name}`
        delete log.assignee_first_name;
        delete log.assignee_last_name;
        if (log.date) {
          log.date = moment(log.date).format('DD-MM-YYYY');
        }
      })

      return logHours;
    }
    catch (error) {
      throw error;
    }
  }

  async addTaskLoggedHoursByTaskId(task_id, assignee_id, requestData) {
    try {
      const { date, hours, description, taskTags } = requestData;

      const logInputHours = getParsedDuration(hours);
      if(!logInputHours){
        throw new Error('Log Hours format not supported. Please try again.')
      }

      // Convert Hours into Decimal format
      const decimal_hours = moment.duration(logInputHours).asHours();

      const logHoursData = {
        date: moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD'), hours: logInputHours, description, task_id, assignee_id, hours_calc: decimal_hours
      }
      const logHours = await LogHours.create(logHoursData);

      if(taskTags !== "" && taskTags !== null && taskTags !==undefined ){
        await logHours.setTags([taskTags]);
      }

      return logHours;
    }
    catch (error) {
      throw error;
    }
  }

  async updateTaskLoggedHoursByTaskId(id, requestData) {
    try {
      const { date, hours, description, taskTags } = requestData;

      const logInputHours = getParsedDuration(hours);
      if(!logInputHours){
        throw new Error('Log Hours format not supported. Please try again.')
      }

      // Convert Hours into Decimal format
      const decimal_hours = moment.duration(logInputHours).asHours();

      const updateLogHoursData = {
        date: moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD'), hours: logInputHours, description, hours_calc: decimal_hours
      }

      const logHours = await LogHours.update(updateLogHoursData, { where: { id } });

      const logHoursFind = await LogHours.findOne({where: {id}})
      if(taskTags !== "" && taskTags !== null && taskTags !==undefined ){
        await logHoursFind.setTags([taskTags]);
      }

      if (logHours) {
        return true;
      } else {
        return false;
      }
    }
    catch (error) {
      throw error;
    }
  }

  async deleteTaskLoggedHours(id, userId) {
    try {
      const isLoggedByUser = await LogHours.findOne({
          where: {
          id, 
          assignee_id: userId
        },
        attributes: ['id'],
      });
      if(isLoggedByUser){
        await isLoggedByUser.destroy();
        return true;        
      } else {
        return false;
      }
    }
    catch (error) {
      throw error;
    }
  }

  async deleteTaskById(id,requestData,RoleId,userId) {
    if (!requestData) {
      throw new Error('No details Entered');
    }
    try {
      const { MANAGER_ID, TEAM_LEAD_ID, ADMIN_ID } = userRoleConstants;
      let canDelete = false;
      if (RoleId === ADMIN_ID) {
        canDelete = true;
      } else if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
        const worklist = await Worklist.findOne({ attributes: ['id'],
          include: [
            {
              model: Chart,
              attributes: [],
              where : {
                id
              }
            },
            {
              model: ProjectMembers,
              attributes:[],
              where: {
                u_id: userId
              }
            }
          ],
          subQuery : false    
        });
        if (worklist) {
          canDelete = true;
        }  
      } else {
        throw new Error ("You don't have the required permissions to delete this task.");
      }

      if (canDelete) {
        const data = await Chart.destroy({ where : { id }});
        return data;
      } else {
        throw new Error ("You don't have the required permissions to delete this task.");
      }
    } catch (error) {
      throw error;
    }
  }

}

async function getAutocompleteRecords(fieldValue, modelType, userObj) {
  try {
    let records;
    let whereCond = {};
    let attributes = [];
    const { id, RoleId } = userObj;
    const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);

    if (modelType === "chartList" || modelType === "taskName") {
      if (modelType === "chartList") {
        attributes = ['unique_task_no', 'id']
        whereCond = {
          unique_task_no: { [Op.iLike]: `%${fieldValue}%` },
          [Op.and] : { WorklistId: { [Op.in]: projectIds } }
        };
      }
      if (modelType === "taskName") {
        attributes = ['name', 'id']
        whereCond = {
          name: { [Op.iLike]: `%${fieldValue}%` },
          [Op.and] : { WorklistId: { [Op.in]: projectIds } }
        };
      }
      if (fieldValue === "") {
        whereCond = {
          unique_task_no: { [Op.ne]: null },
          [Op.and] : { WorklistId: { [Op.in]: projectIds } }
        };
      }
      records = await Chart.findAll({
        where: whereCond,
        limit: 10,
        attributes,
        raw: true
      })
    } else if (modelType === "workList") {
      if (modelType === "workList") {
        attributes = ['name','worklist_no','id']
        whereCond = {
          [Op.and] : { id: { [Op.in]: projectIds } },
          [Op.or]: [
            { name: { [Op.iLike]: `%${fieldValue}%` } },
            { worklist_no: { [Op.iLike]: `%${fieldValue}%` } }
          ]      
        };
      }  
      if (fieldValue === "") {
        whereCond = {
          worklist_no: { [Op.ne]: null },
          [Op.and] : { id: { [Op.in]: projectIds } }
        };
      }
      records = await Worklist.findAll({
        where: whereCond,
        limit: 10,
        group: ['Worklist.id'],
        attributes,
        raw: true,
        subQuery: false
      })
    }
    return records;
  }
  catch (err) {
    throw err
  }
}

function getTimeTrackerDuration(time) {
  let duration = moment.duration(time, 'milliseconds');
  let minutes = Math.floor(duration.asMinutes());
  let seconds = Math.floor(duration.asSeconds() - minutes * 60);
  return Math.floor(duration.asSeconds()) >= 60 ? (minutes <= 9 ? '0' + minutes : minutes) + ':' + (seconds <= 9 ? '0' + seconds : seconds)
    : '00:' + (seconds <= 9 ? '0' + seconds : seconds);
}

async function getUserIdAndName(UserId) {
  try {
    const foundUser = await User.findByPk(UserId, {
      attributes: ['id', 'first_name', 'last_name', 'employee_id', 'image_url',
        [Sequelize.col('Role.role_name'), 'role']],
      include: {
        model: Role,
        attributes: []
      },
      raw: true
    });
    if (!foundUser) {
      return {};
    }

    const user = {
      id: foundUser.id,
      name: `${foundUser.first_name} ${foundUser.last_name}`,
      role: `${foundUser.role} (Emp ID: ${foundUser.employee_id})`,
      actual_role: `${foundUser.role}`,
      image_url: foundUser.image_url
    }

    return user;
  }
  catch (error) {
    throw error;
  }
}

async function countChartMilestonesById(milestoneId, UserId, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const { count, rows } = await Chart.findAndCountAll({
        where: {
          MilestoneId: milestoneId,
        },
      });

      return count;
    }

    const { count, rows } = await Chart.findAndCountAll({
      where: {
        MilestoneId: milestoneId,
        UserId: UserId
      },
    });

    return count;
  } catch (error) {
    throw error;
  }
}

async function countChartMilestonesByIdWithDate(milestoneId, RoleId, processedChartIds = []) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const count = await Chart.count({
        where: {
          id: processedChartIds,
          MilestoneId: milestoneId,
        },
      });

      return count;
    }
  } catch (error) {
    throw error;
  }
}

async function countChartStatusById(statusId, UserId, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const count = await Chart.count({
        where: {
          StatusId: statusId,
          updatedAt: {
            [Op.between]: [
              moment().startOf('day'),
              moment().startOf('second'),
            ]
          },
        }
      });

      return count;
    };

    const chartCount = await Chart.count({
      where: {
        StatusId: statusId,
        [Op.or]: [
          { coder_id: UserId },
          { auditor_id: UserId },
        ],
        updatedAt: {
          [Op.between]: [
            moment().startOf('day'),
            moment().startOf('second'),
          ]
        },
      },
    });

    return chartCount;
  } catch (error) {
    throw error;
  }
}

async function getChartCountBasedOnFilter(filter) {
  try {
    const chartCount = await Chart.count({
      where: filter
    });

    return chartCount;
  }
  catch (error) {
    throw error;
  }
}

async function getChartCountsAndReturnWithPriority(chartCounts) {
  try {
    const { CRITICAL_PRIORITY_ID, HIGH_PRIORITY_ID, MED_PRIORITY_ID, LOW_PRIORITY_ID } = priorityConstants;
    let countsWithPriority = {
      Critical: 0,
      High: 0,
      Medium: 0,
      Low: 0
    };
    for await (priorityCount of chartCounts) {
      if (priorityCount.PriorityId == CRITICAL_PRIORITY_ID) {
        countsWithPriority.Critical = priorityCount.count
      }
      if (priorityCount.PriorityId == HIGH_PRIORITY_ID) {
        countsWithPriority.High = priorityCount.count
      }
      if (priorityCount.PriorityId == MED_PRIORITY_ID) {
        countsWithPriority.Medium = priorityCount.count
      }
      if (priorityCount.PriorityId == LOW_PRIORITY_ID) {
        countsWithPriority.Low = priorityCount.count
      }
    }

    return countsWithPriority;
  } catch (error) {
    throw error;
  }
}

async function addChartAuditLogFromChart(chart, multipleOptions = {}, type) {
  try {
    chart.type = type;
    const newLog = await ChartAudit.create(chart);
    const { HoldReasons } = multipleOptions;
    if (HoldReasons.length !== 0) {
      await newLog.addHoldReasons(HoldReasons)
    }
    return newLog;
  } catch (error) {
    throw error;
  }
}

async function getChartMultipleOptions(chart) {
  try {
    const multipleOptions = {};
    const holdReasons = await chart.getHoldReasons({ raw: true, attributes: ['id'] });
    if (holdReasons) {
      let holdReasonIds = await holdReasons.map(obj => obj.id);
      multipleOptions.HoldReasons = holdReasonIds;
    }
    return multipleOptions;
  } catch (error) {
    throw error;
  }
}

async function getFilterOptionsAndSetupInObject(filterOptions) {
  let filter = {};
  try {
    if (filterOptions.worklist_number && filterOptions.worklist_number != null && filterOptions.worklist_number != '') {
      let whereCond = { worklist_no: { [Op.iLike]: `%${filterOptions.worklist_number}%` } };
      if (filterOptions.worklist_id && filterOptions.worklist_id != null && filterOptions.worklist_id != '') {
        whereCond = { id: filterOptions.worklist_id }
      }
      const filterWorklist = await Worklist.findAll({
        where: whereCond,
        raw: true,
        attributes: ['id']
      });
      if (filterWorklist) {
        const worklistIds = [];
        for (const worklist of filterWorklist) {
          worklistIds.push(worklist.id)
        }
        filter.WorklistId = worklistIds;
      }
      else {
        filter.WorklistId = 0;
      }
    }
    if ((filterOptions.s_no_from != null && filterOptions.s_no_to != null) && (filterOptions.s_no_from !== '' || filterOptions.s_no_to !== '')) {
      if (filterOptions.s_no_from !== '' && filterOptions.s_no_to === '') {
        filterOptions.s_no_to = filterOptions.s_no_from;
      }
      if (filterOptions.s_no_from === '' && filterOptions.s_no_to !== '') {
        filterOptions.s_no_from = filterOptions.s_no_to;
      }
      filter.s_no = {
        [Op.between]: [filterOptions.s_no_from, filterOptions.s_no_to]
      }
    }
    if (filterOptions.chart_no && filterOptions.chart_no != null && filterOptions.chart_no != '') {
      filter.unique_task_no = { [Op.iLike]: `%${filterOptions.chart_no}%` }
    }
    if (filterOptions.task_name && filterOptions.task_name !== null && filterOptions.task_name !== '') {
      filter.name = { [Op.iLike]: `%${filterOptions.task_name}%` }
    }
    if (filterOptions.qc_status_id && filterOptions.qc_status_id != null && filterOptions.qc_status_id != '') {
      filter.qc_status_id = filterOptions.qc_status_id
    }
    if (filterOptions.assignee && filterOptions.assignee != null && filterOptions.assignee != '') {
      filter.assignee_id = filterOptions.assignee === 'unassigned' ? null : filterOptions.assignee
    }
    if (filterOptions.auditor && filterOptions.auditor != null && filterOptions.auditor != '') {
      filter.auditor_id = filterOptions.auditor
    }
    if (filterOptions.start_date && filterOptions.start_date != null && filterOptions.start_date != '') {
      const dateSplit = filterOptions.start_date.split(" - ");
      filterOptions.from_start_date = dateSplit[0].trim();
      filterOptions.to_start_date = dateSplit[1].trim();
      filterOptions.from_start_date = moment(filterOptions.from_start_date, "DD/MM/YYYY").format("YYYY-MM-DD");
      filterOptions.to_start_date = moment(filterOptions.to_start_date, "DD/MM/YYYY").format("YYYY-MM-DD");
      filter.start_date = {
        [Op.between]: [filterOptions.from_start_date, filterOptions.to_start_date]
      }
    }
    if (filterOptions.end_date && filterOptions.end_date != null && filterOptions.end_date != '') {
      const dateSplit = filterOptions.end_date.split(" - ");
      filterOptions.from_end_date = dateSplit[0].trim();
      filterOptions.to_end_date = dateSplit[1].trim();
      filterOptions.from_end_date = moment(filterOptions.from_end_date, "DD/MM/YYYY").format("YYYY-MM-DD");
      filterOptions.to_end_date = moment(filterOptions.to_end_date, "DD/MM/YYYY").format("YYYY-MM-DD");
      filter.end_date = {
        [Op.between]: [filterOptions.from_end_date, filterOptions.to_end_date]
      }
    }
    if (filterOptions.completion_date && filterOptions.completion_date != null && filterOptions.completion_date != '') {
      const dateSplit = filterOptions.completion_date.split(" - ");
      filterOptions.from_completion_date = dateSplit[0].trim();
      filterOptions.to_completion_date = dateSplit[1].trim();
      filterOptions.from_completion_date = moment(filterOptions.from_completion_date).format("YYYY-MM-DD");
      filterOptions.to_completion_date = moment(filterOptions.to_completion_date).format("YYYY-MM-DD");
      filter.date_of_completion = {
        [Op.between]: [filterOptions.from_completion_date, filterOptions.to_completion_date]
      }
    }
    if (filterOptions.admit_date && filterOptions.admit_date != null && filterOptions.admit_date != '') {
      const dateSplit = filterOptions.admit_date.split("-");
      filterOptions.from_admit_date = dateSplit[0].trim();
      filterOptions.to_admit_date = dateSplit[1].trim();
      filterOptions.from_admit_date = moment(filterOptions.from_admit_date).format("YYYY-MM-DD");
      filterOptions.to_admit_date = moment(filterOptions.to_admit_date).format("YYYY-MM-DD");
      filter.admit_date = {
        [Op.between]: [filterOptions.from_admit_date, filterOptions.to_admit_date]
      }
    }
    if (filterOptions.discharge_date && filterOptions.discharge_date != null && filterOptions.discharge_date != '') {
      const dateSplit = filterOptions.discharge_date.split("-");
      filterOptions.from_discharge_date = dateSplit[0].trim();
      filterOptions.to_discharge_date = dateSplit[1].trim();
      filterOptions.from_discharge_date = moment(filterOptions.from_discharge_date).format("YYYY-MM-DD");
      filterOptions.to_discharge_date = moment(filterOptions.to_discharge_date).format("YYYY-MM-DD");
      filter.discharge_date = {
        [Op.between]: [filterOptions.from_discharge_date, filterOptions.to_discharge_date]
      }
    }
    if (filterOptions.location && filterOptions.location != null && filterOptions.location != '') {
      filter.LocationId = filterOptions.location
    }
    if (filterOptions.processid && filterOptions.processid != null && filterOptions.processid != '') {
      filter.ProcessId = filterOptions.processid
    }
    if (filterOptions.specialty && filterOptions.specialty != null && filterOptions.specialty != '') {
      filter.SpecialtyId = filterOptions.specialty
    }
    if (filterOptions.milestone && filterOptions.milestone != null && filterOptions.milestone != '') {
      filter.MilestoneId = filterOptions.milestone
    }
    if (filterOptions.coder_comments && filterOptions.coder_comments != null && filterOptions.coder_comments != '') {
      if (filterOptions.coder_comments === "empty") {
        filter.coder_comments = {
          [Op.eq]: null
        }
      } else {
        filter.coder_comments = {
          [Op.and]: [
            { [Op.ne]: null },
            { [Op.ne]: "" }
          ]
        }
      }
    }
    if(filterOptions.task_type && filterOptions.task_type !== null && filterOptions.task_type !== ''){
      filter.TaskTypeId = filterOptions.task_type
    }

    return filter;
  } catch (error) {
    throw error;
  }
}

async function updateChartsWithCoderAndAuditorDetails(charts) {
  try {
    for await (let chart of charts) {
      if (chart.coder_id != null) {
        chart.Coder = {
          id: chart.coder_id,
          name: `${chart.CoderFirstName} ${chart.CoderLastName}`,
          role: `${chart.CoderRole} (Emp ID: ${chart.coder_emp_id})`
        }
      }
      if (chart.follow_up_coder_id != null) {
        chart.follow_up_coder = {
          id: chart.follow_up_coder_id,
          name: `${chart.FollowUpCoderFirstName} ${chart.FollowUpCoderLastName}`,
          image_url: chart.follow_up_coder_image_url
        }
      }
      if (chart.auditor_id != null) {
        chart.Auditor = {
          id: chart.auditor_id,
          name: `${chart.AuditorFirstName} ${chart.AuditorLastName}`,
          role: `${chart.AuditorRole} (Emp ID: ${chart.auditor_emp_id})`
        }
        chart.original_auditor = {
          id: chart.auditor_id,
          name: `${chart.AuditorFirstName} ${chart.AuditorLastName}`,
          image_url: chart.auditor_image_url
        }
      }
      if (chart.follow_up_auditor_id != null) {
        chart.follow_up_auditor = {
          id: chart.follow_up_auditor_id,
          name: `${chart.FollowUpAuditorFirstName} ${chart.FollowUpAuditorLastName}`,
          image_url: chart.follow_up_auditor_image_url
        }
      }
    };
    return charts;
  }
  catch (error) {
    throw error;
  }
}

async function getFormChangeArray(record1, record2) {
  const changeArray = [];
  try {
    const keys = Object.keys(record1);
    if(record1.Assignee){
      record1.TaskAssignee = record1.Assignee
    }

    for (let i = 0; i < keys.length; i++) {
      if (record1[keys[i]] !== record2[keys[i]]) {
        switch (keys[i]) {
          case 'name':
            changeArray.push(`Task Name changed from <b>${record2[keys[i]] ?? "---"}</b> to <b>${record1[keys[i]] ?? "---"}</b>`);
            break;
          case 'start_date':
            changeArray.push(`Start Date changed from <b>${moment(record2[keys[i]]).format("DD-MM-YYYY") ?? "---"}</b> to <b>${moment(record1[keys[i]]).format("DD-MM-YYYY") ?? "---"}</b>`);
            break;
          case 'end_date':
            changeArray.push(`End Date changed from <b>${moment(record2[keys[i]]).format("DD-MM-YYYY") ?? "---"}</b> to <b>${moment(record1[keys[i]]).format("DD-MM-YYYY") ?? "---"}</b>`);
            break;
          case 'estimation':
            changeArray.push(`Estimation changed from <b>${record2[keys[i]] ?? "---"}</b> to <b>${record1[keys[i]] ?? "---"}</b>`);
            break;
          case 'description':
            changeArray.push('Description Updated');
            break;
          case 'assignee_id':
            const previousAssigneeValue = `${record2.TaskAssignee?.first_name ?? ""} ${record2.TaskAssignee?.last_name ?? ""}`;
            const newAssigneeValue = `${record1.TaskAssignee?.first_name ?? ""} ${record1.TaskAssignee?.last_name ?? ""}`;
            changeArray.push(`Assignee changed from <b>${previousAssigneeValue !== " " ? previousAssigneeValue : "---"}</b> to <b>${newAssigneeValue !== " " ? newAssigneeValue : "---"}</b>`);
            break;
          case 'MilestoneId':
            const previousMilestoneValue = record2.Milestone?.milestone_name ?? "---";
            const newMilestoneValue = record1.Milestone?.milestone_name ?? "---";
            changeArray.push(`Milestone changed from <b>${previousMilestoneValue}</b> to <b>${newMilestoneValue}</b>`);
            break;
          case 'PriorityId':
            const previousPriorityValue = record2.Priority?.priority_name ?? "---";
            const newPriorityValue = record1.Priority?.priority_name ?? "---";
            changeArray.push(`Priority changed from <b>${previousPriorityValue}</b> to <b>${newPriorityValue}</b>`);
            break;
          case 'TaskTypeId':
            const previousTaskTypeValue = record2.TaskType?.name ?? "---";
            const newTaskTypeValue = record1.TaskType?.name ?? "---";
            changeArray.push(`Task Type changed from <b>${previousTaskTypeValue}</b> to <b>${newTaskTypeValue}</b>`);
            break;
          case 'SprintId':
            const previousSprintValue = record2.Sprint?.name ?? "---";
            const newSprintValue = record1.Sprint?.name ?? "---";
            changeArray.push(`Sprint changed from <b>${previousSprintValue}</b> to <b>${newSprintValue}</b>`);
            break;
          case 'EpicId':
            const previousEpicValue = record2?.Epic?.name ?? "---";
            const newEpicValue = record1?.Epic?.name ?? "---";
            changeArray.push(`Epic changed from <b>${previousEpicValue}</b> to <b>${newEpicValue}</b>`);
            break;
          default:
        }
      }
    }
    return changeArray;
  }
  catch (error) {
    throw error;
  }
}

async function getMultiSelectChanges(record1, record2) {
  const changeArray = [];
  try {
    let record1HoldReasons = await record1.getHoldReasons({ raw: true });
    if(record1HoldReasons.length !== 0){
      record1HoldReasons = record1HoldReasons.map(record=> parseInt(record.id)).sort();
    }
    let record2HoldReasons = await record2.getHoldReasons({ raw: true });
    if(record2HoldReasons.length !== 0){
      record2HoldReasons = record2HoldReasons.map(record=> parseInt(record.id)).sort();
    }

    let areHoldReasonsChanged = false;
    if (JSON.stringify(record1HoldReasons) !== JSON.stringify(record2HoldReasons)) {
      areHoldReasonsChanged = true
    }
    if(areHoldReasonsChanged){
      changeArray.push('Hold Reasons Updated');
    }

    return changeArray;
  }
  catch (error) {
    throw error;
  }
}

function mapMultiselectObjectArrayToIds(arrayObject) {
  return arrayObject.map(obj => obj.id);
}

function formatDatesInCharts(charts) {
  try {
    charts.forEach(chart => {
      if (chart.StartDate) {
        chart.StartDate = moment(chart.StartDate).format("DD-MM-YYYY");
      }
      if (chart.EndDate) {
        chart.EndDate = moment(chart.EndDate).format("DD-MM-YYYY");
      }
    })
    return charts;
  } catch (error) {
    throw error;
  }
}

function getPagination(page, size) {
  try {
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  } catch (error) {
    throw error;
  }
}

function getWeekOfMonthFromTimestamp(timestamp = '2023-04-01T10:48:03.185Z') {
  const date = moment(timestamp);
  const weekInYear = date.isoWeek();
  let result = weekInYear - date.startOf('month').isoWeek() + 1;
  if (result > 4) {
    result = 4;
  }
  return result < 0 ? weekInYear : result;
}

async function getFilteredIncludingHoldReasonAuditOptionChartIds(hold_reasons = '', audit_options = '', filter = {}) {
  try {
    let includeModel = [];
    if (hold_reasons !== '') {
      includeModel.push({
        model: HoldReason,
        attributes: [],
        where: {
          id: hold_reasons
        },
        required: true,
        through: {
          attributes: []
        },
        paranoid: false
      });
    }
    if (audit_options !== '') {
      includeModel.push({
        model: AuditOption,
        attributes: [],
        where: {
          id: audit_options
        },
        required: true,
        through: {
          attributes: []
        },
        paranoid: false
      });
    }
    let findOptions = {
      attributes: ['id'],
      where: filter,
      subQuery: false,
      raw: true,
      group: ['Chart.id']
    };
    if (includeModel.length != 0) {
      findOptions.include = includeModel;
    }
    let holdReasonAuditOptionFilteredCharts = await Chart.findAll(findOptions);
    let filteredChartIds = [];
    if (holdReasonAuditOptionFilteredCharts.length !== 0) {
      filteredChartIds = holdReasonAuditOptionFilteredCharts.map(chart => chart.id);
    }
    return filteredChartIds;
  }
  catch (error) {
    throw error;
  }
}

function getParsedDuration(duration = '00:00'){
  try{
    const {DURATION_GLOBAL, DURATION_MINUTES_ONLY} = regexPatterns
    if(duration.match(DURATION_GLOBAL)){
      let hours = "00";
      let minutes = "00";

      if(duration.match(DURATION_MINUTES_ONLY)){
        minutes = duration.replace('m', '').padStart(2, '0');
      } else {
        const parsedString = duration.replace(/h|\./, ':').replace('m', '');
        hours = (parsedString.split(':')[0] ?? "00").padStart(2, '0');
        if(duration.includes('.')){
          const rawMinutes = (duration.split('.')[1] ?? 0) ;
          minutes = ((parseInt(rawMinutes) * 60) / 100).toFixed(0).padEnd(2, '0');
        }
        else {
          minutes = (parsedString.split(':')[1] ?? "00").padStart(2, '0');
        }
      }
    
      return `${hours}:${minutes}`;
    }
    else {
      return false;
    }
  } catch(error){
    throw error;
  }
}
