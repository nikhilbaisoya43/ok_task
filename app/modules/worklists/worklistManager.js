const Client = require('../../models/client');
const Location = require('../../models/location');
const WorklistStatus = require('../../models/worklistStatus');
const Worklist = require('../../models/worklist');
const { Chart } = require('../../models/chart');
const { Milestone } = require('../../models/chart');
const ChartAudit = require('../../models/chartAudit');
const Process = require('../../models//process');
const Specialty = require('../../models/specialty');
const Attendance = require('../../models/attendance');
const sequelize = require('sequelize');
const moment = require('moment');
const {
  chartStatusConstants,
  milestoneConstants,
  priorityConstants,
  worklistStatusIdConstants,
  userRoleConstants,
  chartAuditLogTypeConstants,
  sprintStatusIdConstants
} = require('../../common/constants');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const logger = require('../../services/winstonLogger');
const User = require('../../models/user');
const Role = require('../../models/role');
const WorklistActivityLog = require('../../models/worklistActivityLog');
const Notification = require('../../models/notification');
const ProjectMembers = require('../../models/projectMembers');
const { sendNotificationMail } = require('../../services/nodemailer');
const Epic = require('../../models/epic');
const Sprint = require('../../models/sprint');
const SprintStatus = require('../../models/sprintStatus');
const Attachments = require('../../models/attachments');
const TaskActivity = require('../../models/taskActivity');
const PlannedEstimationHours = require('../../models/plannedEstimationHours');
const LogHours = require('../../models/logHours');
const Tags = require('../../models/tags');
const { tagConstants } = require("../../common/constants");
class WorklistManager {

  async deleteProjectMembers(request){
    try {
      ProjectMembers.destroy({
        where: {
          w_id: request.params.worklistId,
          u_id: request.params.assignee_id,
        },
      })

      const { TODO_MILESTONE_ID } = milestoneConstants;
      await Chart.update(
      { assignee_id: null, MilestoneId: TODO_MILESTONE_ID, UserId: null },
      { where: { WorklistId: request.params.worklistId, assignee_id: request.params.assignee_id } }
    );

      return true;
    } catch (error) {
      return error;
    }
  }

  async getProjectMembers(request){ 
    const { MANAGER_ID, TEAM_LEAD_ID, MEMBER_ID, ADMIN_ID } = userRoleConstants;
    try {
      const { worklistId } = request?.params;
      const { RoleId, id } = request?.user;
      let whereCondition = {};
      let attributes = [
          [Sequelize.col('User.id'), 'id'],
          [Sequelize.col('User.first_name'), 'first_name'],
          [Sequelize.col('User.last_name'), 'last_name'],
          [Sequelize.col('User.email'), 'email'],
          [Sequelize.col('User.employee_id'), 'employee_id'],
          [Sequelize.col('User.image_url'), 'image_url'],
      ];
      let groupBy = ['User.id'];

      if(worklistId === 'all'){
        const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);
        whereCondition = {
          w_id: {[Op.in] : projectIds}
        }
      } else {
        whereCondition = { w_id: worklistId };
        attributes = [...attributes, 
          [Sequelize.col('User.RoleId'), 'RoleId'],
          [Sequelize.col('User.Role.role_name'), 'role'],
        ]
        groupBy = [...groupBy, 'User->Role.role_name'];
      }

      const projectMembers = await ProjectMembers.findAll({
        where: whereCondition,
        attributes,
        raw: true,
        group: groupBy,
        include: [
          {
            model: User,
            attributes: [],
            where : {
              RoleId : {[Op.or]: [MANAGER_ID, TEAM_LEAD_ID, MEMBER_ID, ADMIN_ID ]},
              is_active: true
            },
            include : [
              {
                model : Role,
                attributes: []
              }
            ],
          }
        ],
      });
      if(worklistId === 'all'){
        projectMembers.unshift({ id: 'unassigned' });
      }
      return projectMembers;
    } catch (error) {
      throw error;
    }
  }

  async addProjectMembers(usersToSave,worklistId){
    try {
      for (const value of usersToSave) {
          // Check if a record with the given w_id and u_id already exists
          const existingRecord = await ProjectMembers.findOne({
              where: {
                  w_id: worklistId,
                  u_id: value
              }
          });

          if (!existingRecord) {
              // Create a new record only if it doesn't already exist
              await ProjectMembers.create({
                  w_id: worklistId,
                  u_id: value
              });
          }
      }
      return true;
    } catch(err){
      throw err;
    }
  }

  async addNewVolume(requestData, UserId) {
    if (!requestData) {
      throw new Error('No details Entered');
    }
    try {
      // const assigneeIdsNotNull = requestData.data_from_task.filter(item => item.assignee_id !== null).map(item => item.assignee_id);
      const OPEN_WORKLIST_STATUS_ID = worklistStatusIdConstants.OPEN_STATUS_ID;
      requestData.start_date = moment(
        requestData.start_date,
        'DD-MM-YYYY'
      ).format('YYYY-MM-DD');
      requestData.end_date = moment(requestData.end_date, 'DD-MM-YYYY').format(
        'YYYY-MM-DD'
      );
      const highestWorklistNumber = await Worklist.max('worklist_no',{
        where: {
          worklist_no : {
            [Op.iLike]: 'P-%'
          }
        },
        paranoid: false 
      });
      let highestNo = 1;
      if(highestWorklistNumber){
        highestNo = highestNo + parseInt(highestWorklistNumber.split('-')[1] ?? 0);
      }
      // Get all records including soft-deleted
      let existingProjectCode = await Worklist.findAll({
        where: {worklist_code : { [Op.ne]: null }},
        attributes: ['worklist_code'],
        paranoid: false,
        raw: true
      });
      // Refine only array of worklist code
      existingProjectCode = existingProjectCode.map((element)=> {
        return element.worklist_code;
      })
      // Project Code Generation
      let worklist_code = await allocateProjectCode(requestData.worklist_name, existingProjectCode);
      
        const newVolume = await Worklist.create({
        name: requestData.worklist_name,
        worklist_no: `P-${(highestNo).toString().padStart(4, '0')}`,
        ClientId: requestData.ClientId,
        ProcessId: requestData.ProcessId,
        start_date: requestData.start_date,
        end_date: requestData.end_date,
        status: OPEN_WORKLIST_STATUS_ID,
        changed_by: UserId,
        created_by: UserId,
        worklist_code: worklist_code,
        WorklistStatusId: OPEN_WORKLIST_STATUS_ID,
        owner: requestData.project_owner,
        duration: requestData.duration
      });

      const specialties = await Specialty.findAll({
        where: { id : { [Op.in] : requestData.SpecialtyId}},
        attributes: ['id', 'spec_name']
      })
     
     await newVolume.setSpecialties(specialties);
      const worklistAuditLog = await WorklistActivityLog.create({
        worklist_id: newVolume.id,
        type: 'create',
        assignee_id: null,
        activity_by: UserId,
        activity_time: newVolume.createdAt,
      });   
      const projectMembers = requestData.project_member.map(user => { return {w_id: newVolume.id, u_id: user}});
      projectMembers.push({w_id: newVolume.id, u_id: UserId})
      const assignedProjectMembers = await ProjectMembers.bulkCreate(projectMembers);  
      return {newVolume,specialties};
    } catch (err) {
      throw err;
    }
  }

  async getAllWorklistWithFilters(requestData, { RoleId, id }, page = 1, size) {
    const { limit, offset } = getPagination(page - 1, size);
    try {
      let filter = {};
      if (Object.keys(requestData).length != 0) {
        filter = await getFilterOptionsAndSetupInObject(requestData, id);
      }
      if(Object.keys(filter).length === 0){
        filter.WorklistStatusId = worklistStatusIdConstants.IN_PROGRESS_STATUS_ID;
      }
      
      let projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);

      if(requestData.SpecialtyId && requestData.SpecialtyId.length !== 0) {
        projectIds = await getProjectIdsAvailableByFilteredSpecialties(requestData.SpecialtyId, projectIds);
      }
      filter = { ...filter, [Op.and] : {id: {[Op.in]: projectIds}} };

      const { APPROVED_MILESTONE_ID } = milestoneConstants
      let worklistItem = await Worklist.findAll({
        attributes: ['worklist_no', 'id', 'created_by', 'status', 'name','start_date', 'end_date', 'owner',
          [Sequelize.col('Owner.first_name'), 'OwnerFirstName'],
          [Sequelize.col('Owner.last_name'), 'OwnerLastName'],
          [Sequelize.col('Owner.image_url'), 'owner_image_url'],
          [Sequelize.col('Process.proc_name'), 'ProcessName'],
          [Sequelize.col('Location.loc_name'), 'LocationName'],
          [Sequelize.col('WorklistStatus.name'), 'WorklistStatusName'],
          [Sequelize.literal(`( SELECT COUNT(*) FROM "Charts" AS ch WHERE "MilestoneId" != ${APPROVED_MILESTONE_ID} AND "deletedAt" IS NULL AND ch."WorklistId" = "Worklist".id )`), 'unapproved_tasks_count'],
          [Sequelize.literal(`( SELECT COUNT(*) FROM "Charts" AS ch WHERE "deletedAt" IS NULL AND ch."WorklistId" = "Worklist".id )`), 'total_tasks_count' ],
        ],
        limit: limit,
        subQuery:false,
        where: filter,
        offset: offset,
        raw : true,
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: User,
            as: 'Owner',
            attributes: [],
          },
          {
            model: Location,
            attributes: [],
          },
          {
            model: Process,
            attributes: [],
            paranoid: false,
          },
          {
            model: WorklistStatus,
            attributes: [],
          },
        ],
      })

      const total_records = await Worklist.count({
        where: filter,
      })

      worklistItem.forEach((Item) => {
        Item.status = Item.WorklistStatus;
        const ownerUserId = Item.owner;
        Item.owner = {
          id: ownerUserId,
          full_name: `${Item.OwnerFirstName} ${Item.OwnerLastName}`,
          image_url: Item.owner_image_url,
        };
      });

      const project_unapproved_task_counts = worklistItem.map(item=>parseInt(item?.unapproved_tasks_count) ?? 0);

      worklistItem = formatDatesInWorklists(worklistItem);
      return {
        worklistItem,
        totalRecords: total_records,
        no_of_tasks: project_unapproved_task_counts,
      };
    } catch (error) {
      throw error;
    }
  }

  async getWorklistVolumeAvailableForAllocationById(WorklistId) {
    try {
      const { TODO_MILESTONE_ID } = milestoneConstants;
      const { rows, count } = await Chart.findAndCountAll({
        where: {
          WorklistId: WorklistId,
          UserId: null,
          assignee_id: null,
          MilestoneId: TODO_MILESTONE_ID,
        },
        attributes: ['s_no', 'id', 'name'],
        raw: true,
        order: ['s_no'],
      });
      let data = { remaining_count: 0, tasks: [] };
      if (rows.length != 0) {
        data = { remaining_count: count, tasks: rows };
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getChartProgressDetailsForWorklist(WorklistId) {
    try {
      const { TODO_MILESTONE_ID } = milestoneConstants;
      const allocatedChartSerialNumbers = await Chart.findAll({
        where: {
          WorklistId: WorklistId,
          assignee_id: { [Op.ne]: null },
          MilestoneId: { [Op.ne]: TODO_MILESTONE_ID },
        },
        attributes: ['s_no'],
        order: ['s_no'],
        raw: true,
      });
      const unallocatedChartSerialNumbers = await Chart.findAll({
        where: {
          WorklistId: WorklistId,
          assignee_id: null,
          MilestoneId: TODO_MILESTONE_ID,
        },
        attributes: ['s_no'],
        order: ['s_no'],
        raw: true,
      });

      const allocatedChartsWithRange =
        await getRangeOfSerialNumbersFromObjectArray(
          allocatedChartSerialNumbers
        );
      const unallocatedChartsWithRange =
        await getRangeOfSerialNumbersFromObjectArray(
          unallocatedChartSerialNumbers
        );
      const combinedRanges = [
        ...allocatedChartsWithRange,
        ...unallocatedChartsWithRange,
      ];
      const sortedRanges = sortRangesInArray(combinedRanges);
      const {
        IN_PROGRESS_MILESTONE_ID,
        READY_FOR_QA_MILESTONE_ID,
        QA_IN_PROGRESS_MILESTONE_ID,
        APPROVED_MILESTONE_ID,
        READY_FOR_CLIENT_REVIEW_MILESTONE_ID,
      } = milestoneConstants;

      const data = [];


      const milestone_counts_unallocated = await Milestone.findAll({
        attributes:['id',
        [Sequelize.fn('COUNT', Sequelize.col('Charts.id')), 'count']
        ],
        include : {
          model: Chart,
          required: false,
          attributes :[],
          where: {
            WorklistId: WorklistId,
            assignee_id: null
          },
        },
        raw: true,
        group: ['Milestone.id'],
        order: [['id', 'ASC']]
      });

      const milestone_counts_allocated = await Milestone.findAll({
        attributes:['id',
        [Sequelize.fn('COUNT', Sequelize.col('Charts.id')), 'count']
        ],
        include : {
          model: Chart,
          required: false,
          attributes :[],
          where: {
            WorklistId: WorklistId,
            assignee_id: {[Op.ne]: null}
          },
        },
        raw: true,
        group: ['Milestone.id'],
        order: [['id', 'ASC']]
      })


        const total_charts_count = await getChartCountBasedOnFilter({
          WorklistId: WorklistId,
        });

        const completed_charts_count = await getChartCountBasedOnFilter({
          WorklistId: WorklistId,
          MilestoneId: APPROVED_MILESTONE_ID,
        });
        let progress_percentage =
          (total_charts_count !== 0) ? (completed_charts_count / total_charts_count) * 100 : 0;
        progress_percentage = progress_percentage.toFixed(2);

        let users = [];
        const lastCoders = await Chart.findAll({where:{WorklistId: WorklistId, MilestoneId: { [Op.ne]: TODO_MILESTONE_ID }}, raw:true});
        if (lastCoders.length != 0) {
           for await (let coder of lastCoders) {
             const coderDetails = await getBasicUserDetailsById(
               coder.assignee_id
            );
             users.push(coderDetails);
           }
        }

        data.push({
          milestone_counts_unallocated,
          milestone_counts_allocated,
          users,
          progress_percentage,
        });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getWorklistActivityLogById(worklistId) {
    try {
      const worklistActivityLogs = await WorklistActivityLog.findAll({
        where: { worklist_id: worklistId },
        order: ['id'],
      });

      let worklistActivityLogResult = [];
      for await (let row of worklistActivityLogs) {
        let activityTextLbl = '';
        const assignee = await getBasicUserDetailsById(row.assignee_id);
        const actor = await getBasicUserDetailsById(row.activity_by);

        switch (row.type) {
          case 'create':
            activityTextLbl = 'Worklist created';
            break;
          case 'allocate':
            activityTextLbl = `Volume ${row?.from ?? ''}-${
              row?.to ?? ''
            } allocated to ${assignee?.name} (${assignee?.role
              ?.slice(0, assignee?.role?.indexOf('('))
              .trim()})`;
            break;
          case 'reallocate':
            activityTextLbl = `Volume ${row?.from ?? ''}-${
              row?.to ?? ''
            } reallocated to ${assignee?.name} (${assignee?.role
              ?.slice(0, assignee?.role?.indexOf('('))
              .trim()})`;
            break;
        }

        worklistActivityLogResult.unshift({
          id: row.id,
          activityText: activityTextLbl,
          activityTime: moment(row.activity_time).format('DD MMM, HH:mm:ss'),
          activityBy: `${actor?.name}`,
        });
      }

      return worklistActivityLogResult;
    } catch (error) {
      throw error;
    }
  }

  async updateCharts(requestData, UserId) {
    try {
      const {
        TODO_MILESTONE_ID,
        IN_PROGRESS_MILESTONE_ID,
        READY_FOR_QA_MILESTONE_ID,
        QA_IN_PROGRESS_MILESTONE_ID,
        READY_FOR_CLIENT_REVIEW_MILESTONE_ID,
        APPROVED_MILESTONE_ID,
      } = milestoneConstants;

      let totalChartsCount = 0;
      let assignee_id;

      const isCoder = requestData.hasOwnProperty('coder')
        ? requestData.coder !== null && requestData.coder !== ''
          ? true
          : false
        : false;
      const isPrioritySelected = requestData.hasOwnProperty('PriorityId')
        ? requestData.PriorityId !== null && requestData.PriorityId !== ''
          ? true
          : false
        : false;
      if (isCoder || isPrioritySelected) {
        assignee_id = requestData.coder;
        totalChartsCount = await Chart.count({
          where: {
            id: requestData.TaskId,
          },
        });
      }

      if (
        requestData.TaskId.length !== 0 &&
        requestData.TaskId.length === totalChartsCount
      ) {
        const foundChart = await Chart.findAll({
          where: {
            id: requestData.TaskId,
          },
        });
        let updatedCount = 0;
        for (const chart of foundChart) {

          const updateChart = {
            updated_by: UserId,
          };

          if (assignee_id !== undefined) {
            updateChart.assignee_id = parseInt(assignee_id);
            updateChart.allocator_id = UserId;
          }
          if (requestData.PriorityId) {
            updateChart.PriorityId = parseInt(requestData.PriorityId);
          }

          const newCharts = await chart.update(updateChart);

          const {
            CRITICAL_PRIORITY_ID,
            HIGH_PRIORITY_ID,
            MED_PRIORITY_ID,
            LOW_PRIORITY_ID,
          } = priorityConstants;
          let priority = '';
          if (parseInt(requestData.PriorityId) === CRITICAL_PRIORITY_ID) {
            priority = 'CRITICAL';
          } else if (parseInt(requestData.PriorityId) === HIGH_PRIORITY_ID) {
            priority = 'HIGH';
          } else if (parseInt(requestData.PriorityId) === MED_PRIORITY_ID) {
            priority = 'MEDIUM';
          } else if (parseInt(requestData.PriorityId) === LOW_PRIORITY_ID) {
            priority = 'LOW';
          }
          logger.info(
            `Manager/Team Lead allocated task to User ID: ${assignee_id}, set priority to ${priority}, for Task ID: ${chart.id}`,
            { User: UserId }
          );
          updatedCount += 1;
        }
        return updatedCount;
      } else {
        throw new Error('Invalid selection. Please try again.');
        //   }
      }
    } catch (error) {
      throw error;
    }
  }

  async reallocateAuditor(requestData, UserId) {
    try {
      const { READY_FOR_QA_MILESTONE_ID, QA_IN_PROGRESS_MILESTONE_ID } = milestoneConstants;

      const totalCharts = await Chart.count({
        where: {
          id: requestData.ChartIds,
        },
      });

      const totalChartsCDMilestone = await Chart.count({
        where: {
          id: requestData.ChartIds,
          MilestoneId: READY_FOR_QA_MILESTONE_ID,
        },
      });

      if (totalCharts === totalChartsCDMilestone) {
        const foundChart = await Chart.findAll({
          where: {
            id: requestData.ChartIds,
          },
        });
        let updatedCount = 0;
        const { REALLOCATE } = chartAuditLogTypeConstants;
        for (const chart of foundChart) {
          // * SAVE Chart to Audit Log before updated priority and allocation
          const saveChartToLog = chart.toJSON();
          delete saveChartToLog.createdAt;
          delete saveChartToLog.updatedAt;
          const newMilestoneLog = await addChartAuditLogFromChart(
            saveChartToLog,
            {},
            REALLOCATE
          );
          if (!newMilestoneLog) {
            throw new Error('Chart audit log not saved');
          }

          const updateChart = await Chart.update(
            {
              UserId: requestData.AuditorId,
              MilestoneId: QA_IN_PROGRESS_MILESTONE_ID,
              updated_by: UserId,
            },
            {
              where: { id: requestData.ChartIds },
              individualHooks: true,
            }
          );
          updatedCount += updateChart.length;
        }

        return updatedCount;
      } else {
        throw new Error('Charts should be in Coding Done milestone');
      }
    } catch (error) {
      throw error;
    }
  }

  async getWorklistById(WorklistId) {
    try {
      let worklist = await Worklist.findByPk(WorklistId, {
        attributes: [
          'id',
          'worklist_no',
          'start_date',
          'end_date',
          'name',
          'duration',
          [Sequelize.col('Client.id'), 'client_id'],
          [Sequelize.col('Client.client_name'), 'client'],
          [Sequelize.col('Location.loc_name'), 'location'],
          [Sequelize.col('Process.id'), 'process_id'],
          [Sequelize.col('Process.proc_name'), 'process'],
          [Sequelize.col('WorklistStatus.name'), 'status'],
          [Sequelize.col('WorklistStatus.id'), 'status_id'],
          [Sequelize.col('Owner.id'), 'user_id'],
          [Sequelize.col('Owner.first_name'), 'user_firstname'],
          [Sequelize.col('Owner.last_name'), 'user_lastname'],
          [Sequelize.col('Owner.image_url'), 'user_image_url'],
        ],
        include: [
          {
            model: Client,
            attributes: [],
          },
          {
            model: WorklistStatus,
            attributes: [],
          },
          {
            model: Location,
            attributes: [],
          },
          {
            model: Process,
            attributes: [],
            paranoid: false,
          },
          {
            model: User,
            as: 'Owner',
            attributes: [],
          },
        ],
      });
      if (!worklist) {
        throw new Error('Worklist does not exist');
      }
    
      let specialty = await worklist.getSpecialties({raw:true});
      worklist = await worklist.toJSON();
      
      specialty = specialty.map(response => ({"id" : response.id, "spec_name" : response.spec_name}))

      //* Get Worklist Metadata
      let data = {};
      if (worklist.start_date) {
        worklist.start_date = moment(worklist.start_date, "YYYY-MM-DD").format('DD-MM-YYYY');
      }
      if (worklist.end_date) {
        worklist.end_date = moment(worklist.end_date, "YYYY-MM-DD").format('DD-MM-YYYY');
      }
      if (worklist.first_name && worklist.last_name) {
        worklist.name = `${worklist.first_name} ${worklist.last_name}`;
      }
      worklist.project_client = {
        value: worklist.client_id,
        label: worklist.client
      }
      worklist.project_process = {
        value: worklist.process_id,
        label: worklist.process
      }
      worklist.project_status = {
        value: worklist.status_id,
        label: worklist.status
      }
      worklist.project_user = {
        value: worklist.user_id,
        label: worklist.user_firstname + " " + worklist.user_lastname,
        image: worklist.user_image_url
      }
      delete worklist.first_name;
      delete worklist.last_name;
      data = { ...worklist };

      //* Get Worklist Progress

      const { TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, READY_FOR_QA_MILESTONE_ID, QA_IN_PROGRESS_MILESTONE_ID, 
        READY_FOR_CLIENT_REVIEW_MILESTONE_ID, APPROVED_MILESTONE_ID } = milestoneConstants;

      const taskMilestoneCounts = await Chart.count({
        where: { WorklistId },
        group: ['MilestoneId']
      });

      let todoTasksCount = 0;
      let inProgressTasksCount = 0;
      let readyForQATasksCount = 0;
      let qaInProgressTasksCount = 0;
      let readyForClientReviewTasksCount = 0;
      let approvedTasksCount = 0;
      let total_tasks = 0;

      taskMilestoneCounts.forEach(task => {
        if(task.MilestoneId === TODO_MILESTONE_ID){
          todoTasksCount = task.count;
          total_tasks += task.count;
        } else if(task.MilestoneId === IN_PROGRESS_MILESTONE_ID){
          inProgressTasksCount = task.count;
          total_tasks += task.count;
        } else if(task.MilestoneId === READY_FOR_QA_MILESTONE_ID){
          readyForQATasksCount = task.count;
          total_tasks += task.count;
        } else if(task.MilestoneId === QA_IN_PROGRESS_MILESTONE_ID){
          qaInProgressTasksCount = task.count;
          total_tasks += task.count;
        } else if(task.MilestoneId === READY_FOR_CLIENT_REVIEW_MILESTONE_ID){
          readyForClientReviewTasksCount = task.count;
          total_tasks += task.count;
        } else if(task.MilestoneId === APPROVED_MILESTONE_ID){
          approvedTasksCount = task.count;
          total_tasks += task.count;
        }
      })

      let progressPercentage = (total_tasks !== 0) ? (approvedTasksCount / total_tasks) * 100 : 0;
      progressPercentage = progressPercentage.toFixed(2);
      data = {
        ...data,
        progressPercentage,
        total_tasks,
        milestone_counts : {
          todoTasksCount,
          inProgressTasksCount,
          readyForQATasksCount,
          qaInProgressTasksCount,
          readyForClientReviewTasksCount,
          approvedTasksCount
        }
      };

      //* Get overall status of charts in worklist
      const allocatedCharts = await getChartCountBasedOnFilter({
        WorklistId: worklist.id,
        assignee_id: { [Op.ne]: null },
      });

      const totalCharts = total_tasks;

      //TODO fix later DV
      // const totalCharts = 20;
      const unallocatedCharts = totalCharts - allocatedCharts;

      data = { ...data, totalCharts, allocatedCharts, unallocatedCharts, specialty };
      return data;
    } catch (error) {
      throw error;
    }
  }
  async UpdateWorklistById(WorklistId, requestData) {
    try {
      // Get existing data of worklist
      const existingWorklistData = await Worklist.findByPk(WorklistId, {raw: true})

      // Data to be updated on worklist
      const worklistData = {
        name: requestData.name ?? existingWorklistData.name,
        ClientId: requestData.client ?? existingWorklistData.ClientId,
        ProcessId: requestData.ProcessId ?? existingWorklistData.ProcessId,
        duration: Number(requestData.duration) ?? existingWorklistData.duration,
        start_date: moment(requestData.start_date, "DD-MM-YYYY").format("YYYY-MM-DD") ?? existingWorklistData.start_date,
        end_date: moment(requestData.end_date, "DD-MM-YYYY").format("YYYY-MM-DD") ?? existingWorklistData.end_date,
        WorklistStatusId: requestData.status ?? existingWorklistData.WorklistStatusId,
        owner: requestData.owner ?? existingWorklistData.owner,
      }

      const worklist = await Worklist.update(worklistData, { 
        where: {id: WorklistId},
        raw: true,
        returning: true
      });

      if (!worklist) {
        throw new Error('Worklist not updated');
      }
      return worklist;
    } catch (error) {
      throw error;
    }
  }

  async reallocateChartsToCoder(requestData, UserId) {
    if (!requestData) {
      throw new Error('No details Entered');
    }
    try {
      const { IN_PROGRESS_MILESTONE_ID} = milestoneConstants;
        const updateChart = await Chart.update(
          {
            assignee_id: requestData.assign_to,
            MilestoneId : IN_PROGRESS_MILESTONE_ID,
            UserId: requestData.assign_to,
          },
          {
            where:{MilestoneId: IN_PROGRESS_MILESTONE_ID, 
              WorklistId: requestData?.worklistId, 
              id: requestData?.task_reassign},
            returning: true,
            raw: true,
            individualHooks: true,
          }
        );
        
        const dataRequiredForNotification = getDataRequiredForNotification(updateChart[1] ?? []);
        logger.info(
          `Manager/Team Lead reallocated Charts from ${requestData.from} to ${requestData.to} to User ID: ${requestData.userId} for Worklist ID: ${requestData.worklistId}`,
          { User: UserId }
        );

        if (dataRequiredForNotification !== null) {
          const notification = await Notification.create({
            user_id: dataRequiredForNotification.assignee_id,
            notification: `You have been assigned Task ${dataRequiredForNotification.unique_task_no} for Project ${requestData.worklist_no}`,
            is_read: false,
            task_id: dataRequiredForNotification.id
          });
        
          const userSocketId = socketUsers.get(notification.user_id);
        
          if (userSocketId) {
            socketIo.to(userSocketId).emit('notification', notification);
          }
          const assignedUser = await User.findByPk(dataRequiredForNotification.assignee_id, { attributes: ['email', 'first_name', 'last_name']});
          const sendMail = sendNotificationMail({task_id: dataRequiredForNotification.id, task_details: `${dataRequiredForNotification.unique_task_no ?? ""} ${updateChart[1][0].name ?? ""}`, project_no: requestData.worklist_no, assignee_name: `${assignedUser.first_name} ${assignedUser.last_name}`, email: assignedUser.email});
        }

        const worklistAuditLog = await WorklistActivityLog.create({
          worklist_id: requestData.worklistId,
          from: requestData.from,
          to: requestData.to,
          assignee_id: requestData.userId,
          type: 'reallocate',
          activity_by: UserId,
          activity_time: moment(),
        });

        return updateChart;
      
    } catch (err) {
      throw err;
    }
  }

  async allocateFreshChartsToCoder(requestData, UserId) {
    if (!requestData) {
      throw new Error('No details Entered');
    }
    try {
      let updateChart;
      let chartObj = requestData;
      // for (const input of chartObj.list) {
      //   updateChart = await validateFreshVolumeAllocation(input, chartObj?.worklistId);
      // }
      for (const input of chartObj.list) {
        updateChart = await allocateFreshChartVolume(
          input,
          chartObj?.worklistId,
          UserId
        );
      }
      //* Set Worklist Status to In Progress on volume allocation
      const { IN_PROGRESS_STATUS_ID } = worklistStatusIdConstants;
      const worklist = await Worklist.findByPk(requestData.worklistId, {
        raw: true,
        attributes: ['WorklistStatusId'],
      });
      if (!worklist) {
        throw new Error('Worklist does not exist');
      }

      if (worklist.WorklistStatusId != IN_PROGRESS_STATUS_ID) {
        const updateWorklistStatusToInProgress = await Worklist.update(
          { WorklistStatusId: IN_PROGRESS_STATUS_ID },
          { where: { id: requestData.worklistId } }
        );
        logger.info(
          `Worklist Status set to In Progress for Worklist ID: ${requestData.worklistId}`,
          { User: UserId }
        );
      }
      const notification = await Notification.create({
        user_id: UserId,
        notification: 'New Tasks assigned',
        is_read: false
      })

      return {addData: updateChart, notification};
    } catch (err) {
      throw err;
    }
  }

  async updateChartRecord(record, worklistId) {
    try {
      const { IN_PROGRESS_MILESTONE_ID } = milestoneConstants;
      const updateChart = await Chart.update(
        {
          UserId: record.userId,
          MilestoneId: IN_PROGRESS_MILESTONE_ID,
        },
        {
          where: {
            s_no: { [Op.between]: [record.from, record.to] },
            UserId: null,
            WorklistId: worklistId,
          },
          returning: true,
          individualHooks: true,
        }
      );
      return updateChart;
    } catch (error) {
      throw error;
    }
  }

  async getManagerAllWorklistStatus(user) {
    try {
      const {RoleId, id} = user;
      const { OPEN_STATUS_ID, IN_PROGRESS_STATUS_ID, ON_HOLD_STATUS_ID, CLOSED_STATUS_ID } = worklistStatusIdConstants;
      const { ADMIN_ID } = userRoleConstants;
      let filter = {};

      if(RoleId !== ADMIN_ID){
        const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);
        filter.id = projectIds;
      }

      const worklistStatusCounts = await Worklist.count({
        where: filter,
        group: ['WorklistStatusId']
      });

      let openStatusWorklistsCount = 0;
      let inProgressStatusWorklistsCount = 0;
      let onHoldStatusWorklistsCount = 0;
      let closedStatusWorklistsCount = 0;

      worklistStatusCounts.forEach(data => {
        if(data.WorklistStatusId === OPEN_STATUS_ID){
          openStatusWorklistsCount = data.count;
        } else if(data.WorklistStatusId === IN_PROGRESS_STATUS_ID){
          inProgressStatusWorklistsCount = data.count;
        } else if(data.WorklistStatusId === ON_HOLD_STATUS_ID){
          onHoldStatusWorklistsCount = data.count;
        } else if(data.WorklistStatusId === CLOSED_STATUS_ID){
          closedStatusWorklistsCount = data.count;
        }
      })

      let data = {
        openStatusWorklistsCount,
        inProgressStatusWorklistsCount,
        onHoldStatusWorklistsCount,
        closedStatusWorklistsCount,
      };
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAvailableReallocationVolumeById(WorklistId) {
    try {
      const {IN_PROGRESS_MILESTONE_ID} = milestoneConstants;
      const reallocate_charts = await Chart.findAll({
        where: {
          WorklistId: WorklistId,
          MilestoneId: IN_PROGRESS_MILESTONE_ID,
        },
        raw: true,
      });
    let data = {name: [reallocate_charts?.map(response => response?.name)], id: [reallocate_charts?.map(response => response?.id)]}
    return data;
    } catch (error) {
      throw error;
    }
  }

  async checkCoderWorklistAllocated(userId, worklistId) {
    try {
      let data = {
        found: false,
        message: 'Coder not found for this worklist',
      };
      const count = await Chart.count({
        where: {
          WorklistId: worklistId,
          UserId: userId,
        },
      });

      if (count > 0) {
        data.found = true;
        data.message =
          'Chart from this worklist has already been assigned to the coder.';
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async addTaskByWorklistId(requestData,userId,worklistId)
  {
    if (!requestData) {
      throw new Error('No details Entered');
    }
    try {
      const { TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID } = milestoneConstants;
      let attachments = requestData?.attachment;
      requestData.start_date = moment(requestData.start_date, 'DD-MM-YYYY' ).format('YYYY-MM-DD');
      requestData.end_date = moment(requestData.end_date, 'DD-MM-YYYY').format('YYYY-MM-DD');
      const highestSNoTask = await Chart.max('s_no', {
        where: {
          WorklistId: worklistId
        },
        paranoid: false
      });
      const worklist = await Worklist.findByPk(worklistId, {
        attributes: [
          'ClientId', 'ProcessId', 'worklist_no', 'worklist_code'
        ],
        raw: true
      });
      const data = await Chart.create({
        name : requestData.task_name,
        s_no : 1+highestSNoTask,
        description : requestData.description,
        start_date : requestData.start_date,
        end_date : requestData.end_date,
        assignee_id : requestData.assignee_id,
        PriorityId : requestData.priority_id,
        updated_by: userId,
        created_by: userId,
        allocator_id: userId,
        WorklistId : worklistId,
        UserId : userId,
        ClientId: worklist.ClientId,
        ProcessId: worklist.ProcessId,
        TaskTypeId: requestData?.task_type,
        // SpecialtyId: worklist.SpecialtyId,
        MilestoneId: TODO_MILESTONE_ID,
        unique_task_no: `${worklist?.worklist_code?.toUpperCase() ?? "T"}-${(highestSNoTask+1).toString().padStart(4, '0')}`,
        EpicId: requestData.epic_id === "" ? null : requestData.epic_id,
        SprintId: requestData.sprint_id === "" ? null : requestData.sprint_id,
      });

      const proData = [];
      for (let a in attachments) {
        if (attachments[a].trim() != "") {
          proData.push({
          link: attachments[a],
          task_id : data.id
          });
        }
      }
      try {
        await Attachments.bulkCreate(proData);
      } catch (e) {
        throw e;
      }

      const notification = await Notification.create({
        user_id: data.assignee_id,
        notification: `You have been assigned Task ${data.unique_task_no} for Project ${worklist.worklist_no}`,
        is_read: false,
        task_id: data.id
      });
      const userSocketId = socketUsers.get(notification.user_id);
      if(userSocketId){
        socketIo.to(userSocketId).emit('notification', notification);
      }
      const assignedUser = await User.findByPk(data.assignee_id, { attributes: ['email', 'first_name', 'last_name']});
      const sendMail = sendNotificationMail({task_id: data.id ?? "",task_details: `${data.unique_task_no ?? ""} ${data.name ?? ""}`, project_no: worklist.worklist_no, assignee_name: `${assignedUser.first_name} ${assignedUser.last_name}`, email: assignedUser.email});
      
      return data;   
    }
    catch (err) {
      throw err;
    }
  }

  async deleteProjectById(WorklistId,RoleId) {
    try {
      const { ADMIN_ID } = userRoleConstants;
      if (RoleId === ADMIN_ID){ 
        const deleteTasks = await Chart.destroy({
          where: { WorklistId }, 
        });

        const data = await  Worklist.destroy({
          where: {
            id : WorklistId 
          }, 
        });
        return data;
      } else {
        throw new Error("You don't have the required permissions to delete project.");
      }    
    } catch(err) {
      throw err;
    }
  }

  async getProjectEpicsAndSprints(WorklistId, roleId) {
    try {
      const data = {};
      const {APPROVED_MILESTONE_ID} = milestoneConstants;
      const sprints = await Sprint.findAll({
        where: {
          WorklistId
        },
        attributes: [['id', 'value'], ['name', 'label'], 'description',
        ['UserId', 'owner_id'], 'start_date', 'end_date', 'duration', 'SprintStatusId',
        [Sequelize.col('User.first_name'), 'owner_fname'],
        [Sequelize.col('User.last_name'), 'owner_lname'],
        [Sequelize.col('User.image_url'), 'owner_image'],
        [Sequelize.col('SprintStatus.name'), 'status'],
        [Sequelize.literal(`( SELECT COUNT(*) FROM "Charts" AS ch WHERE "MilestoneId" != ${APPROVED_MILESTONE_ID} AND "deletedAt" IS NULL AND ch."SprintId" = "Sprint".id )`), 'unapproved_tasks'],
        [Sequelize.literal(`( SELECT COUNT(*) FROM "Charts" AS ch WHERE "deletedAt" IS NULL AND ch."SprintId" = "Sprint".id )`), 'total_tasks_count' ],
        ],
        include: [{
          model: User,
          attributes: []
        },
        {
          model: SprintStatus,
          attributes: []
        }],
        order: [['name', 'ASC']],
        raw: true
      });
      if(sprints && sprints.length !== 0){
        data.sprints = sprints;
        const { IN_PROGRESS_STATUS_ID } = sprintStatusIdConstants;
        sprints.forEach(sprint=>{
          if(sprint.SprintStatusId === IN_PROGRESS_STATUS_ID){
            data.active_sprint = sprint
          }
        })
      }

      const epics = await Epic.findAll({
        where: {
          WorklistId
        },
        attributes: [['id', 'value'], ['name', 'label'], 'description',
        [Sequelize.literal(`( SELECT COUNT(*) FROM "Charts" AS ch WHERE "MilestoneId" != ${APPROVED_MILESTONE_ID} AND "deletedAt" IS NULL AND ch."EpicId" = "Epic".id )`), 'unapproved_tasks'],
        [Sequelize.literal(`( SELECT COUNT(*) FROM "Charts" AS ch WHERE "deletedAt" IS NULL AND ch."EpicId" = "Epic".id )`), 'total_tasks_count' ],
        ],
        order: [['name', 'ASC']],
        raw: true
      }); 
      data.epics = epics;

      const {ADMIN_ID} = userRoleConstants;
      if(roleId === ADMIN_ID) {
        const reworkCount = await getTasksListByProject(WorklistId);
        data.reworkCount = reworkCount;
      }
      
      return data;   
    } catch(err) {
      throw err;
    }
  }

  async getAllTasksForProjectById(WorklistId, {RoleId, id}, SprintId, backlog) {
    try {
      const data = {};
      let whereCondition = { WorklistId };
      if(backlog === 'true'){
        whereCondition = { ...whereCondition, SprintId: null }
        data.sprint_name = "Backlog";
      } else if (backlog === 'false') {
        whereCondition = { ...whereCondition, SprintId };
        const sprint = await Sprint.findByPk(SprintId, { attributes: ['id', 'name'], raw: true});
        data.sprint_name = sprint.name;
      }
      const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);
      if(projectIds.includes(parseInt(WorklistId))){
        const taskList = await Chart.findAll({
          attributes: ['id', ['unique_task_no', 'task_no'], ['name', 'task_name'], 
            [Sequelize.col('Milestone.milestone_name'), 'milestone'],
          ],
          include: [
            {
              model: Milestone,
              attributes: [],
            },
          ],
          where: whereCondition,
          raw: true,
          order: [['id', 'DESC']]
        });
        data.tasks = taskList;
      }
      return data;   
    } catch(err) {
      throw err;
    }
  }

  async getProjectSprints(WorklistId) {
    try {
      const active_sprints = [];
      const inactive_sprints = [];
      const { IN_PROGRESS_STATUS_ID } = sprintStatusIdConstants;
      const {TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, APPROVED_MILESTONE_ID} = milestoneConstants;
      const allSprints = await Sprint.findAll({
        where: {
          WorklistId
        },
        attributes: [['id', 'value'], ['name', 'label'], 'description',
          ['UserId', 'owner_id'], 'start_date', 'end_date', 'duration', 'SprintStatusId',
          [Sequelize.col('User.first_name'), 'owner_fname'],
          [Sequelize.col('User.last_name'), 'owner_lname'],
          [Sequelize.col('User.image_url'), 'owner_image'],
          [Sequelize.col('SprintStatus.name'), 'sprint_status'],
        ],
        include: [
          {
            model: User,
            attributes: []
          },
          {
            model: SprintStatus,
            attributes: []
          },
          {
            model: Chart,
            attributes: [['id', 'task_id'], ['unique_task_no', 'task_no'], ['name', 'task_name']],
            include: {
              model: Milestone,
              attributes: ['id', ['milestone_name', 'task_milestone']]
            }
          }
        ],
        order: [['SprintStatusId', 'ASC']],
      });

      if(allSprints && allSprints.length !== 0){
        for (const sprint_data of allSprints) {
          const sprint = await sprint_data.toJSON();
          let notStartedCount = 0;
          let inProgressCount = 0;
          let approvedCount = 0;
          sprint.Charts.forEach( task => {
            if(task?.Milestone?.id === TODO_MILESTONE_ID || task?.Milestone?.id === IN_PROGRESS_MILESTONE_ID){
              notStartedCount++
            } else if(task?.Milestone?.id === APPROVED_MILESTONE_ID){
              approvedCount++;
            } else {
              inProgressCount++;
            }
          })
          sprint.task_summary = `${notStartedCount} | ${inProgressCount} | ${approvedCount}`;
          sprint.total_tasks = sprint?.Charts?.length ?? 0;
          if(sprint.start_date){
            sprint.start_date = moment(sprint.start_date).format('DD-MM-YYYY');
          }
          if(sprint.end_date){
            sprint.end_date = moment(sprint.end_date).format('DD-MM-YYYY');
          }
          sprint.tasks = sprint.Charts.map(task=> { return { task_id: task.task_id, task_no: task.task_no ?? "", task_name: task.task_name ?? "", task_milestone: task.Milestone.task_milestone ?? ""} })
          delete sprint.Charts;
          if(sprint.SprintStatusId && sprint.SprintStatusId !== IN_PROGRESS_STATUS_ID) {
            inactive_sprints.push(sprint)
          }
          if(sprint.SprintStatusId && sprint.SprintStatusId === IN_PROGRESS_STATUS_ID) {
            active_sprints.push(sprint)
          }
        }
      }

      return {active_sprints, inactive_sprints};   
    } catch(err) {
      throw err;
    }
  }

  async getProjectIdsAvailableByRoleAndUser(roleId, userId){
    try {
      const { ADMIN_ID, MANAGER_ID } = userRoleConstants;
      let projectIds = [];
      let projectIdsForProjectMember = [];
  
      if(roleId !== ADMIN_ID){
        projectIdsForProjectMember = await Worklist.findAll({
          attributes: ['id'],
          include : {
            model: ProjectMembers,
            attributes: [],
            where: {
              u_id: userId
            }
          },
          raw: true
        });
        if(projectIdsForProjectMember){
          projectIds = projectIdsForProjectMember.map(row => row?.id);
        }
      }
  
      if(roleId === MANAGER_ID){
        const projectIdsForCreatedProjectsExcludingProjectMember = await Worklist.findAll({
          attributes: ['id'],
          where: {
            id: {[Op.notIn]: projectIds},
            created_by: userId
          },
          raw: true
        });
        if(projectIdsForCreatedProjectsExcludingProjectMember){
          const extractedIds = projectIdsForCreatedProjectsExcludingProjectMember.map(row => row?.id);
          projectIds = [...projectIds, ...extractedIds ];
        }
      }
  
      if(roleId === ADMIN_ID){
        projectIds = (await Worklist.findAll({ attributes: ['id'], raw: true})).map(row => row?.id);
      }

      return projectIds;
    } catch (error) {
      throw error;
    }
  }

  async addEstimation(requestData, UserId) {
    if (!requestData) {
      throw new Error("No details Entered");
    }
    try {
      const isRecordFound = await PlannedEstimationHours.findOne({
        where: {
          project_id: requestData?.project_id,
          tag_id: requestData?.tag_id
        }

      })
      if(!isRecordFound) {
        await PlannedEstimationHours.create({
          project_id: requestData?.project_id,
          tag_id: requestData?.tag_id,
          estimation_hours: requestData?.estimation_hours,
          manager_id: UserId,
        })

        return true;
      } else {
        throw new Error("Plan for this tag already exists");
      }
          
    } catch (err) {
      throw err;
    }
  }

  async getPlannedVsActual(WorklistId) {
    if (!WorklistId) {
        throw new Error("No details Entered");
    }
    let plannedActualHours = {}

    const taskList = await Chart.findAll({
        attributes: [
            "id",
            ["unique_task_no", "task_no"],
            ["name", "task_name"],
            [Sequelize.col("Milestone.milestone_name"), "milestone"],
        ],
        include: [{
            model: Milestone,
            attributes: [],
        }, ],
        where: {
            WorklistId: WorklistId,
        },
        raw: true,
        order: ["id"],
    });
    const taskIds = taskList.map((task) => task.id);


    const logHours = await LogHours.findAll({
        raw: true,
        attributes: [
            [sequelize.literal('"Tags"."id"'), 'tagId'],
            [sequelize.literal('"Tags"."name"'), 'tagName'],
            [sequelize.literal('"Tags"."category"'), 'tagCategory'],
            [sequelize.fn('SUM', sequelize.literal('"LogHours"."hours_calc"')), 'totalHours'],
        ],
        include: [{
            model: Tags,
            attributes: [],
            through: {
                attributes: []
            },
        }, ],
        where: {
            task_id: taskIds,
        },
        group: ['Tags.id', 'Tags.name', 'Tags.category'],
    });


    const plannedHours = await PlannedEstimationHours.findAll({
        raw: true,
        where: {
            project_id: WorklistId
        },
    });
 
    const mergedArray = plannedHours.map(plannedHourItem => {
      const matchingLogHour = logHours.find(logHourItem => Number(logHourItem.tagId) === Number(plannedHourItem.tag_id));
    
      if (!matchingLogHour && plannedHourItem.tag_id !== null) {
        const tagName = Object.keys(tagConstants).find(key => tagConstants[key] === plannedHourItem.tag_id);
    
        return {
          tagId: plannedHourItem.tag_id,
          tagName: tagName || null,
          tagCategory: plannedHourItem.tag_category || null,
          estimation_hours: plannedHourItem.estimation_hours,
        };
      }
    
      if (plannedHourItem.tag_id !== null) {
        return {
          tagId: matchingLogHour.tagId,
          tagName: matchingLogHour.tagName,
          tagCategory: matchingLogHour.tagCategory,
          totalHours: matchingLogHour.totalHours,
          estimation_hours: plannedHourItem.estimation_hours
        };
      }
    
     
    });
    
    logHours.forEach(logHourItem => {
      const isMatched = mergedArray.some(mergedItem => mergedItem.tagId === logHourItem.tagId);
      if (!isMatched) {
        mergedArray.push({
          tagId: logHourItem.tagId,
          tagName: logHourItem.tagName,
          tagCategory: logHourItem.tagCategory,
          totalHours: logHourItem.totalHours,
        });
      }
    });
    
      return plannedActualHours = mergedArray;
    } catch (err) {
      throw err;
  }
  
};

async function allocateProjectCode (worklist_name, existingProjectCode) {
  let isUnique = false;
  // Make array of strings
  const arr = worklist_name.toLowerCase().split(" ");
  const newArray = [];
  let taskInitials = "";
  // Remove empty strings and numbers
  arr.forEach((str, key) => {
      if (str.length !== 0 && isNaN(Number(str))) {
          // remove special characters
          let removedSpecialStr = str.replace(/[^a-zA-Z0-9 ]/g, '');
          newArray.push(removedSpecialStr);
      }
  })

  if (newArray.length == 1) {
      const element = newArray[0];
      let outputString = element.charAt(0);
      combinationLoop: for (let i = 1; i < element.length - 1; i++) {
          for (let j = i + 1; j < element.length; j++) {
              outputString = outputString + element.charAt(i) + element.charAt(j);
              if (!existingProjectCode.includes(outputString.toUpperCase())) {
                  taskInitials = outputString;
                  isUnique = true;
                  break combinationLoop;
              }
              outputString = element.charAt(0);
          }
      }
  }
  else if (newArray.length == 2) {
      newArray.forEach((element, index) => {
          if (index == 0) {
              for (let i = 0; i < element.length; i++) {
                  // Character should not be a Number
                  if (isNaN(Number(element.charAt(i)))) {
                      taskInitials = taskInitials + element.charAt(i);
                      break;
                  }
              }
          }
          else {
              let outputString = taskInitials;
              combinationLoop: for (let i = 0; i < element.length - 1; i++) {
                  if (i == 0 || (element.charAt(i) !== "a" && element.charAt(i) !== "e" && element.charAt(i) !== "i" && element.charAt(i) !== "o" && element.charAt(i) !== "u")) {
                      for (let j = i + 1; j < element.length; j++) {
                          if (j == 0 || (element.charAt(j) !== "a" && element.charAt(j) !== "e" && element.charAt(j) !== "i" && element.charAt(j) !== "o" && element.charAt(j) !== "u")) {
                              outputString = outputString + element.charAt(i) + element.charAt(j);
                              if (!existingProjectCode.includes(outputString.toUpperCase())) {
                                  taskInitials = outputString;
                                  isUnique = true;
                                  break combinationLoop;
                              }
                              outputString = taskInitials;
                          }
                      }
                  }
              }
          }
      })
  }
  else {
      let newStr = newArray[0].charAt(0);
      // "combinationLoop" is labels in javascript to break the loop at the specified condition.
      combinationLoop: for (let i = 0; i < newArray[1].length; i++) {
          if (i == 0) {
              for (let j = 0; j < newArray[2].length; j++) {
                  if (j == 0) {
                      newStr = newStr + newArray[1].charAt(i) + newArray[2].charAt(j)
                      if (!existingProjectCode.includes(newStr.toUpperCase())) {
                          taskInitials = newStr.toUpperCase();
                          isUnique = true;
                          break combinationLoop;
                      }
                      newStr = newArray[0].charAt(0);
                  }
                  else if (newArray[2].charAt(j) !== "a" && newArray[2].charAt(j) !== "e" && newArray[2].charAt(j) !== "i" && newArray[2].charAt(j) !== "o" && newArray[2].charAt(j) !== "u") {
                      newStr = newStr + newArray[1].charAt(i) + newArray[2].charAt(j)
                      if (!existingProjectCode.includes(newStr.toUpperCase())) {
                          taskInitials = newStr.toUpperCase();
                          isUnique = true;
                          break combinationLoop;
                      }
                      newStr = newArray[0].charAt(0);
                  }
              }
          }
          else if (newArray[1].charAt(i) !== "a" && newArray[1].charAt(i) !== "e" && newArray[1].charAt(i) !== "i" && newArray[1].charAt(i) !== "o" && newArray[1].charAt(i) !== "u") {
              for (let j = 0; j < newArray[2].length; j++) {
                  if (j == 0) {
                      newStr = newStr + newArray[1].charAt(i) + newArray[2].charAt(j)
                      if (!existingProjectCode.includes(newStr.toUpperCase())) {
                          taskInitials = newStr.toUpperCase();
                          isUnique = true;
                          break combinationLoop;
                      }
                      newStr = newArray[0].charAt(0);
                  }
                  else if (newArray[2].charAt(j) !== "a" && newArray[2].charAt(j) !== "e" && newArray[2].charAt(j) !== "i" && newArray[2].charAt(j) !== "o" && newArray[2].charAt(j) !== "u") {
                      newStr = newStr + newArray[1].charAt(i) + newArray[2].charAt(j)
                      if (!existingProjectCode.includes(newStr.toUpperCase())) {
                          taskInitials = newStr.toUpperCase();
                          isUnique = true;
                          break combinationLoop;
                      }
                      newStr = newArray[0].charAt(0);
                  }
              }
          }
      }
  }

  // Create random permutation from given Worklist Name and find unique "worklist_code"
  if (!isUnique) {
      function generateCombinations(characters){
        const combinations = [];
        combinationLoop: for(let i=0; i<characters.length; i++){
            for(let j=0; j<characters.length; j++){
                for(let k=0; k<characters.length; k++){
                    const combination = characters[i] + characters[j] + characters[k];
                    if(!existingProjectCode.includes(combination.toUpperCase())){
                        taskInitials = combination.toUpperCase();
                        break combinationLoop;
                    }
                }
            }
        }
        return combinations;
    }
    generateCombinations(worklist_name.replace(/[^a-zA-Z]/g, '').split(""));
  }
  return taskInitials.toUpperCase();
}

async function getFilterOptionsAndSetupInObject(filterOptions, UserId) {
  let filter = {};
  try {
    if (
      filterOptions.worklistId &&
      filterOptions.worklistId != null &&
      filterOptions.worklistId != ''
    ) {
      const filterWorklist = await Worklist.findAll({
        where: {
          worklist_no: { [Op.iLike]: `%${filterOptions.worklistId}%` },
        },
        raw: true,
      });
      if (filterWorklist) {
        const worklistsIds = filterWorklist.map((worklist) => worklist.id);
        filter.id = worklistsIds;
      } else {
        filter.id = 0;
      }
    }
    if (
      filterOptions.LocationId &&
      filterOptions.LocationId != null &&
      filterOptions.LocationId != ''
    ) {
      filter.LocationId = filterOptions.LocationId;
    }
    if (
      filterOptions.start_date &&
      filterOptions.start_date != null &&
      filterOptions.start_date != ''
    ) {
      const dateSplit = filterOptions.start_date.split(' - ');
      filterOptions.from_start_date = dateSplit[0].trim();
      filterOptions.to_start_date = dateSplit[1].trim();
      filterOptions.from_start_date = moment(
        filterOptions.from_start_date, "DD/MM/YYYY"
      ).format('YYYY-MM-DD');
      filterOptions.to_start_date = moment(filterOptions.to_start_date, "DD/MM/YYYY").format(
        'YYYY-MM-DD'
      );
      filter.start_date = {
        [Op.between]: [
          filterOptions.from_start_date,
          filterOptions.to_start_date,
        ],
      };
    }
    if (
      filterOptions.end_date &&
      filterOptions.end_date != null &&
      filterOptions.end_date != ''
    ) {
      const dateSplit = filterOptions.end_date.split(' - ');
      filterOptions.from_end_date = dateSplit[0].trim();
      filterOptions.to_end_date = dateSplit[1].trim();
      filterOptions.from_end_date = moment(filterOptions.from_end_date, "DD/MM/YYYY").format(
        'YYYY-MM-DD'
      );
      filterOptions.to_end_date = moment(filterOptions.to_end_date, "DD/MM/YYYY").format(
        'YYYY-MM-DD'
      );
      filter.end_date = {
        [Op.between]: [filterOptions.from_end_date, filterOptions.to_end_date],
      };
    }
    if (
      filterOptions.ProcessId &&
      filterOptions.ProcessId != null &&
      filterOptions.ProcessId != ''
    ) {
      filter.ProcessId = filterOptions.ProcessId;
    }
    if (
      filterOptions.StatusId &&
      filterOptions.StatusId != null &&
      filterOptions.StatusId != ''
    ) {
      filter.WorklistStatusId = filterOptions.StatusId;
    }
    if (
      filterOptions.owner_id &&
      filterOptions.owner_id !== null &&
      filterOptions.owner_id !== ''
    ) {
      filter.owner = filterOptions.owner_id;
    }
    return filter;
  } catch (error) {
    throw error;
  }
}

function getPagination(page, size) {
  try {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  } catch (error) {
    throw error;
  }
}

function formatDatesInWorklists(worklistItem) {
  try {
    worklistItem.forEach((worklist) => {
      if (worklist.start_date) {
        worklistItem.start_date = moment(worklist.start_date).format('DD-MMM-YY');
      }
      if (worklist.end_date) {
        worklistItem.end_date = moment(worklist.end_date).format('DD-MMM-YY');
      }
    });
    return worklistItem;
  } catch (error) {
    throw error;
  }
}

async function getChartCountBasedOnFilter(filter) {
  try {
    const chartCount = await Chart.count({
      where: filter,
    });
    return chartCount;
  } catch (error) {
    throw error;
  }
}

async function addChartAuditLogFromChart(chart, multipleOptions = {}, type) {
  try {
    chart.type = type;
    const newLog = await ChartAudit.create(chart);
    const { CODING_DONE, AUDIT_DONE } = chartAuditLogTypeConstants;
    if (type === CODING_DONE || type === AUDIT_DONE) {
      const { HoldReasons, ResponsibleParties, AuditOptions } = multipleOptions;
      if (HoldReasons.length != 0) {
        await newLog.setHoldReasons(HoldReasons);
      }
      if (ResponsibleParties.length != 0) {
        await newLog.setResponsibleParties(ResponsibleParties);
      }
      if (AuditOptions.length != 0) {
        await newLog.setAuditOptions(AuditOptions);
      }
    }
    return newLog;
  } catch (error) {
    throw error;
  }
}

async function getBasicUserDetailsById(UserId) {
  try {
    const foundUser = await User.findByPk(UserId, {
      attributes: [
        'id',
        'first_name',
        'last_name',
        'employee_id',
        'image_url',
        'email',
        [Sequelize.col('Role.role_name'), 'role'],
      ],
      include: {
        model: Role,
        attributes: [],
      },
      raw: true,
    });
    if (!foundUser) {
      return {};
    }
    const user = {
      id: foundUser.id,
      name: `${foundUser.first_name} ${foundUser.last_name}`,
      role: `${foundUser.role} (Emp ID: ${foundUser.employee_id})`,
      image_url: foundUser.image_url ?? null,
      email: foundUser.email ?? null
    };
    return user;
  } catch (error) {
    throw error;
  }
}

async function getRangeOfSerialNumbersFromObjectArray(
  chartSerialNumberInObjectArray
) {
  try {
    const s_NumberArray = await chartSerialNumberInObjectArray.map(
      (obj) => obj.s_no
    );
    const s_NumberRanges = await getRangeFromIntegerArray(s_NumberArray);
    if (s_NumberRanges.length === 0) {
      return [];
    }
    return s_NumberRanges;
  } catch (error) {
    throw error;
  }
}

async function getRangeFromIntegerArray(integerArray) {
  try {
    if (integerArray.length === 0) {
      return [];
    }
    let rangeArray = [];
    let j = 0;
    for (let i = 0; i < integerArray.length - 1; i++) {
      const rangeStartNumber = integerArray[j];
      const rangeEndNumber = integerArray[i];
      if (!(integerArray[i + 1] - integerArray[i] === 1)) {
        j = i + 1;
        rangeArray.push(`${rangeStartNumber} - ${rangeEndNumber}`);
      }
    }
    rangeArray.push(
      `${integerArray[j]} - ${integerArray[integerArray.length - 1]}`
    );
    return rangeArray;
  } catch (error) {
    throw error;
  }
}

async function getWorklistCountBasedOnFilter(filter) {
  try {
    const worklistCount = await Worklist.count({
      where: filter,
    });
    return worklistCount;
  } catch (error) {
    throw error;
  }
}

function sortRangesInArray(rangeArray) {
  try {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < rangeArray.length - 1; i++) {
        const firstNumberOfRange1 = parseInt(rangeArray[i].split('-'));
        const firstNumberOfRange2 = parseInt(rangeArray[i + 1].split('-'));
        if (firstNumberOfRange1 > firstNumberOfRange2) {
          let temp = rangeArray[i];
          rangeArray[i] = rangeArray[i + 1];
          rangeArray[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return rangeArray;
  } catch (error) {
    throw error;
  }
}

async function validateFreshVolumeAllocation(record, worklistId) {
  try {
    if (record.to < record.from) {
      throw {
        err: { details: { validRange: false } },
        custom_err: new Error('Range selected is invalid'),
      };
    }

    const { count, rows } = await Chart.findAndCountAll({
      where: {
        s_no: { [Op.between]: [record.from, record.to] },
        WorklistId: worklistId,
      },
    });
    if (!rows) {
      throw {
        err: { details: { validRange: false } },
        custom_err: new Error('Range selected is invalid'),
      };
    }

    const inputRangeCount = record.to - record.from + 1;
    if (count != inputRangeCount) {
      throw {
        err: { details: { validRange: false } },
        custom_err: new Error('Range selected is invalid'),
      };
    }

    const unallocatedChartCount = await Chart.count({
      where: {
        s_no: { [Op.between]: [record.from, record.to] },
        WorklistId: worklistId,
        UserId: null,
      },
    });
    if (inputRangeCount != unallocatedChartCount) {
      throw {
        err: { details: { validAllocation: false } },
        custom_err: new Error('Range already contains allocated Charts'),
      };
    }

    return true;
  } catch (error) {
    throw error;
  }
}

async function validateFreshVolumeReallocationToCoder(record, worklistId) {
  try {
    if (record.to < record.from) {
      throw {
        err: { details: { validRange: false } },
        custom_err: new Error('Range selected is invalid'),
      };
    }

    const { count, rows } = await Chart.findAndCountAll({
      where: {
        s_no: { [Op.between]: [record.from, record.to] },
        WorklistId: worklistId,
      },
    });
    if (!rows) {
      throw {
        err: { details: { validRange: false } },
        custom_err: new Error('Range selected is invalid'),
      };
    }

    const inputRangeCount = record.to - record.from + 1;
    if (count != inputRangeCount) {
      throw {
        err: { details: { validRange: false } },
        custom_err: new Error('Range selected is invalid'),
      };
    }

    const { IN_PROGRESS_MILESTONE_ID } = milestoneConstants;
    const readyToCodeChartCount = await Chart.count({
      where: {
        s_no: { [Op.between]: [record.from, record.to] },
        WorklistId: worklistId,
        MilestoneId: IN_PROGRESS_MILESTONE_ID,
      },
    });
    if (inputRangeCount != readyToCodeChartCount) {
      throw {
        err: { details: { validAllocation: false } },
        custom_err: new Error(
          'Range contains Charts that are not Ready to Code'
        ),
      };
    }

    return true;
  } catch (error) {
    throw error;
  }
}

async function allocateFreshChartVolume(record, worklistId, UserId) {
  try {
    const { IN_PROGRESS_MILESTONE_ID } = milestoneConstants;
    let updateChart;
    for (const task of record.taskId) {
      updateChart = await Chart.update(
        {
          UserId: record.userId,
          MilestoneId: IN_PROGRESS_MILESTONE_ID,
          updated_by: UserId,
          assignee_id: record.userId,
        },
        {
          where: {
            name: task.label,
            WorklistId: worklistId,
          },
          raw: true,
        }
      );
    }
    logger.info(
      `Manager/Team Lead allocated Charts from ${record.from} to ${record.to} to User ID: ${record.userId} for Worklist ID: ${worklistId}`,
      { User: UserId }
    );

    const worklistAuditLog = await WorklistActivityLog.create({
      worklist_id: worklistId,
      from: record.from,
      to: record.to,
      assignee_id: record.userId,
      type: 'allocate',
      activity_by: UserId,
      activity_time: moment(),
    });

    return updateChart;
  } catch (error) {
    throw error;
  }
}

async function getProjectIdsAvailableByRoleAndUser(roleId, userId, paranoid = true){
  try {
    const { ADMIN_ID, MANAGER_ID } = userRoleConstants;
    let projectIds = [];
    let projectIdsForProjectMember = [];

    if(roleId !== ADMIN_ID){
      projectIdsForProjectMember = await Worklist.findAll({
        attributes: ['id'],
        include : {
          model: ProjectMembers,
          attributes: [],
          where: {
            u_id: userId
          }
        },
        raw: true,
        paranoid
      });
      if(projectIdsForProjectMember){
        projectIds = projectIdsForProjectMember.map(row => row?.id);
      }
    }

    if(roleId === MANAGER_ID){
      const projectIdsForCreatedProjectsExcludingProjectMember = await Worklist.findAll({
        attributes: ['id'],
        where: {
          id: {[Op.notIn]: projectIds},
          created_by: userId
        },
        raw: true,
        paranoid
      });
      if(projectIdsForCreatedProjectsExcludingProjectMember){
        const extractedIds = projectIdsForCreatedProjectsExcludingProjectMember.map(row => row?.id);
        projectIds = [...projectIds, ...extractedIds ];
      }
    }

    if(roleId === ADMIN_ID){
      projectIds = (await Worklist.findAll({ attributes: ['id'], raw: true, paranoid})).map(row => row?.id);
    }

    return projectIds;
  } catch (error) {
    throw error;
  }
}

function getDataRequiredForNotification(updateChart) {
  for (const item of updateChart) {
    if (typeof item === 'object' && item.hasOwnProperty('assignee_id')) {
      return {assignee_id : item.assignee_id, unique_task_no: item.unique_task_no, WorklistId : item.WorklistId, id : item.id};
    }
  }
  return null; // Return null if assignee_id is not found
}

async function getProjectIdsAvailableByFilteredSpecialties(specialtyIds = [], existingProjectIds = []){
  try {
    const filteredSpecialtyIds = await Specialty.findAll({
      attributes: [],
      where: {
        id: specialtyIds
      },
      include: {
        model: Worklist,
        attributes: ['id'],
        where: {
          id: { [Op.in]: existingProjectIds }
        },
        through: {
          attributes: []
        }
      },
      raw: true,
      nest: true,
      group: ['Worklists.id']
    });

    let projectIds = [];
    if (filteredSpecialtyIds && filteredSpecialtyIds.length !== 0) {
      projectIds = filteredSpecialtyIds.map(specialty => specialty.Worklists.id);
    }
    if (projectIds.length === 0) {
      return false;
    } else {
      return projectIds;
    }
  } catch (error) {
    throw error;
  }
}

async function getTasksListByProject(projectId) {
  try {
    const taskList = await Chart.findAll({
      attributes: [
        "id",
        ["unique_task_no", "task_no"],
        ["name", "task_name"],
        [Sequelize.col("Milestone.milestone_name"), "milestone"],
      ],
      include: [
        {
          model: Milestone,
          attributes: [],
        },
      ],
      where: {
        WorklistId: projectId,
      },
      raw: true,
      order: ["id"],
    });

    const taskIds = taskList.map((task) => task.id);
    const totalCount = await getPerTaskActivityCount(taskIds);
    return totalCount;
  } catch (error) {
    throw error;
  }
}

async function getPerTaskActivityCount(taskIds) {
  try {
    let totalBugCountForDev = 0
    let totalBugCountForTester = 0;
    let bugCount;
    const taskCounts = await TaskActivity.findAll({
      attributes: ['id', [Sequelize.fn('COUNT', Sequelize.col('id')), 'taskCount']],
      where: {
        id: {
          [Op.in]: taskIds
        }
      },
      group: ['id'],
      raw: true
    });
    for (const task of taskCounts) {
      if(task?.taskCount > 2) {
      bugCount =  await getActivityLogOfSingleTask(task.id);
      }
      if(bugCount?.bugCountForTester) {
        totalBugCountForTester+= bugCount?.bugCountForDev;
      }
      if(bugCount?.bugCountForDev) {
        totalBugCountForDev+= bugCount?.bugCountForDev;
      }
    }
    return {totalBugCountForTester, totalBugCountForDev}
  } catch (error) {
    throw error;
  }
}

async function getActivityLogOfSingleTask(taskId) {
  try {
    
      const currentMilestone = await Chart.findOne({
        attributes: [
          "id",
          [
            Sequelize.literal(
              "TO_CHAR(\"updatedAt\" + INTERVAL '1 second', 'YYYY-MM-DD HH24:MI:SS')"
            ),
            "formattedUpdatedAt",
          ],
          [Sequelize.col("Milestone.milestone_name"), "milestone"],
          "MilestoneId",
        ],
        include: [
          {
            model: Milestone,
            attributes: [],
          },
        ],
        where: {
          id: taskId,
        },
        raw: true,
        order: ["id"],
      });

      const milestoneActivity = await TaskActivity.findAll({
        attributes: [
          "id",
          [
            Sequelize.literal(
              "TO_CHAR(\"updatedAt\", 'YYYY-MM-DD HH24:MI:SS')"
            ),
            "formattedUpdatedAt",
          ],
          [Sequelize.col("Milestone.milestone_name"), "milestone"],
          "MilestoneId",
        ],
        include: [
          {
            model: Milestone,
            attributes: [],
          },
        ],
        where: {
          id: taskId,
        },
        raw: true,
        order: ["id"],
      });
      milestoneActivity.push(currentMilestone);

      const bugCountForDev = await getBugCountForRole(milestoneActivity, "dev");
      const bugCountForTester = await getBugCountForRole(milestoneActivity, "tester");
      
      return {bugCountForDev, bugCountForTester};
    
  } catch (error) {
    throw error;
  }
}

async function getBugCountForRole(milestoneActivity, role) {
  try {
    const { TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID, QA_IN_PROGRESS_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID } = milestoneConstants;

    const transitionsCount = milestoneActivity?.reduce(
      (count, activity, index, array) => {
        if (index < array.length - 1) {
          const currentMilestone = activity.MilestoneId;
          const nextMilestone = array[index + 1].MilestoneId;
          if (
            (role === 'tester' && currentMilestone === READY_FOR_CLIENT_REVIEW_MILESTONE_ID) ||
            (role === 'dev' && currentMilestone === QA_IN_PROGRESS_MILESTONE_ID &&
              (nextMilestone === TODO_MILESTONE_ID || nextMilestone === IN_PROGRESS_MILESTONE_ID))
          )  {
            count++;
          }
        }
        return count;
      },
      0
    );
  
      return transitionsCount;
  } catch (error) {
    throw error;
  }
}


module.exports = { WorklistManager, getProjectIdsAvailableByRoleAndUser };