const { Chart, TaskType } = require("../../models/chart");
const Sequelize = require("sequelize");
const Worklist = require("../../models/worklist");
const User = require("../../models/user");
const Role = require("../../models/role");
const moment = require("moment");
const { Op } = require("sequelize");
const { milestoneConstants, userRoleConstants } = require("../../common/constants");
const ProjectMembers = require("../../models/projectMembers");
const { getProjectIdsAvailableByRoleAndUser } = require('../worklists/worklistManager');
module.exports = class KanbanManager {
    async getProjectsAndMembersList(UserId, RoleId) {
        try {
            const { ADMIN_ID } = userRoleConstants;
            let projectWhereCondition = {}
            if (RoleId !== ADMIN_ID) {
                const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, UserId);
                projectWhereCondition = { id: { [Op.in]: projectIds } }
            }

            const projectList = await Worklist.findAll({
                where: projectWhereCondition,
                attributes: ["name", "id"],
                include: [
                    {
                        model: ProjectMembers,
                        attributes: [],
                        include: [
                            {
                                model: User,
                                attributes: ["id", "first_name", "last_name", "RoleId"],
                            },
                        ],
                    },
                ],
                raw: true,
            });
            const allData = [];
            const data = projectList.reduce((map, item) => {
                const { 
                    "id": projectId, 
                    "name": projectName, 
                    "ProjectMembers.User.id": memberId, 
                    "ProjectMembers.User.first_name": firstName, 
                    "ProjectMembers.User.last_name": lastName,
                    "ProjectMembers.User.RoleId": roleId,
                } = item;
                
                const member = { id: memberId, first_name: firstName, last_name: lastName, role_id: roleId };
                const project = map.get(projectId);
                
                if (project) {
                    project.Members.push(member);
                } else {
                    map.set(projectId, { Project: { id: projectId, name: projectName }, Members: [member] });
                }
                return map;
            }, new Map());

            data.forEach((value) => {
                if (value.Project.id !== null) {
                    allData.push(value);
                }
            });
            return allData;
        } catch (error) {
            throw error;
        }
    }

    async updateTaskMilestone(requestData, taskId) {
        try {
            if (!requestData) {
                throw new Error("No details Entered");
            }
            const task = {
                MilestoneId: requestData.milestone_id,
            };
            const foundTask = await Chart.update(task, {
                where: { id: taskId },
                individualHooks: true
            });
            return foundTask;
        } catch (error) {
            throw error;
        }
    }

    async kanbanFilter(requestData, {id, RoleId}) {
        try {
            let filter = {};
            const { ADMIN_ID } = userRoleConstants;
            if (Object.keys(requestData).length !== 0) {
                filter = getFilterOptionsAndSetupInObject(requestData);
            }
            if(RoleId !== ADMIN_ID && !filter.WorklistId){
                filter.WorklistId = await getProjectIdsAvailableByRoleAndUser(RoleId, id);
            }
            let TaskItem = await Chart.findAll({
                attributes: ["id","WorklistId","start_date", "end_date", "created_by", "assignee_id", "TaskTypeId", "estimation", "MilestoneId", "unique_task_no", "name", 
                [Sequelize.col("Assignee.first_name"), "assigneeFirstName"], 
                [Sequelize.col("Assignee.last_name"), "assigneeLastName"], 
                [Sequelize.col('Assignee.image_url'), 'assignee_image_url'], 
                [Sequelize.col("TaskType.name"), "taskTypeName"]],
                include: [
                    {
                        model: User,
                        as: "Assignee",
                        attributes: [],
                    },
                    {
                        model: TaskType,
                        attributes: [],
                    },
                ],
                raw: true,
                where: filter,
            });
            const organizedTasks = organizeTasksByMilestone(TaskItem);
            return organizedTasks;
        } catch (error) {
            throw error;
        }
    }
};

function getFilterOptionsAndSetupInObject(filterOptions) {
    let filter = {};
    try {
        if (filterOptions.start_date && filterOptions.start_date != null && filterOptions.start_date != "") {
            const dateSplit = filterOptions.start_date.split(" - ");
            filterOptions.from_start_date = dateSplit[0].trim();
            filterOptions.to_start_date = dateSplit[1].trim();
            filterOptions.from_start_date = moment(filterOptions.from_start_date).format("YYYY-MM-DD");
            filterOptions.to_start_date = moment(filterOptions.to_start_date).format("YYYY-MM-DD");
            filter.start_date = {
                [Op.between]: [filterOptions.from_start_date, filterOptions.to_start_date],
            };
        }
        if (filterOptions.end_date && filterOptions.end_date != null && filterOptions.end_date != "") {
            const dateSplit = filterOptions.end_date.split(" - ");
            filterOptions.from_end_date = dateSplit[0].trim();
            filterOptions.to_end_date = dateSplit[1].trim();
            filterOptions.from_end_date = moment(filterOptions.from_end_date).format("YYYY-MM-DD");
            filterOptions.to_end_date = moment(filterOptions.to_end_date).format("YYYY-MM-DD");
            filter.end_date = {
                [Op.between]: [filterOptions.from_end_date, filterOptions.to_end_date],
            };
        }
        if (filterOptions.assignee && filterOptions.assignee != null && filterOptions.assignee != "") {
            filter.assignee_id = filterOptions.assignee;
        }
        if (filterOptions.created_by && filterOptions.created_by != null && filterOptions.created_by != "") {
            filter.created_by = filterOptions.created_by;
        }
        if (filterOptions.estimation && filterOptions.estimation != null && filterOptions.estimation != "") {
            const estimationArray = []
            filterOptions.estimation.forEach(estimation=>{
                estimationArray.push({[Op.iLike]: `${estimation.padStart(2, '0')}:%`});
            })
            const estimationFilter = {
                [Op.or]: estimationArray
            }
            filter.estimation =  estimationFilter; 
        }
        if (filterOptions.task_type && filterOptions.task_type != null && filterOptions.task_type != "") {
            filter.TaskTypeId = filterOptions.task_type;
        }
        if (filterOptions.worklist_id && filterOptions.worklist_id != null && filterOptions.worklist_id != "") {
            filter.WorklistId = filterOptions.worklist_id;
        }
        return filter;     
    } catch (error) {
        throw error;
    }
}

function organizeTasksByMilestone(TaskItem) {
    const tasksByMilestone = {
        todo: [],
        in_progress: [],
        ready_for_qa: [],
        qa_in_progress: [],
        ready_for_client_review: [],
        approved: [],
    };
    const milestoneKeyMapping = {
        1: "todo",
        2: "in_progress",
        3: "ready_for_qa",
        4: "qa_in_progress",
        5: "ready_for_client_review",
        6: "approved",
    };
    TaskItem.forEach((task) => {
        const milestoneId = task.MilestoneId;
        const customKey = milestoneKeyMapping[milestoneId];
        if (tasksByMilestone[customKey]) {
            const taskWithoutMilestoneId = { ...task };
            delete taskWithoutMilestoneId.MilestoneId;
            tasksByMilestone[customKey].push(taskWithoutMilestoneId);
        }
    });

    return tasksByMilestone;
}
