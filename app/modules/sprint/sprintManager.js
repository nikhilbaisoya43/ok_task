const moment = require("moment");
const { Chart } = require("../../models/chart");
const Sprint = require("../../models/sprint");
const User = require('../../models/user');
const { Op } = require("sequelize");
const { sprintStatusIdConstants } = require("../../common/constants");

module.exports = class SprintManager{

    async createSprint(requestData) {
        try {
            const DURATION_OF_2_WEEKS = 2;
            const { NOT_STARTED_STATUS_ID } = sprintStatusIdConstants;
            if(requestData.start_date){
                requestData.start_date = moment(requestData.start_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            }
            if(requestData.end_date){
                requestData.end_date = moment(requestData.end_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            }
            let duration = 0;
            if(requestData.start_date && requestData.end_date){
                duration = moment.duration(moment(requestData?.end_date).diff(moment(requestData?.start_date))).asDays();
            }
            const result = await Sprint.create({
                name: requestData.name,
                description: requestData.description,
                UserId: requestData?.sprint_owner === "" ? null : requestData?.sprint_owner,
                WorklistId: requestData.worklist_id,
                duration: requestData?.duration ?? DURATION_OF_2_WEEKS,
                start_date: requestData.start_date,
                end_date: requestData.end_date,
                SprintStatusId: NOT_STARTED_STATUS_ID
            });

            if (requestData.associate_tasks && requestData.associate_tasks.length !== 0) {
                const resultChart = await Chart.update({ SprintId: result.id },
                    {
                        where: {
                            id: {
                                [Op.in]: requestData.associate_tasks
                            }
                        }
                    })
            }
            return result ? true : false;
        }
        catch (error) {
            throw error;
        }
    }

    async updateSprint(sprintId, requestData){
        try {
            const sprintInfo = await Sprint.findOne({
                where: {
                    id: sprintId
                }
            });

            const updateValues = {
                name: requestData.name ?? sprintInfo.name,
                description: requestData.description ?? sprintInfo.description,
                WorklistId: requestData.worklist_id ?? sprintInfo.worklist_id,
                UserId: requestData.sprint_owner && requestData.sprint_owner !== "" ? requestData.sprint_owner : sprintInfo.UserId,
                start_date: requestData.start_date ?? sprintInfo.start_date,
                end_date: requestData.end_date ?? sprintInfo.end_date,
                duration: requestData.duration ?? sprintInfo.duration
            }
            if(updateValues.start_date && updateValues.start_date !== ""){
                updateValues.start_date = moment(updateValues.start_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            }
            if(updateValues.end_date && updateValues.end_date !== ""){
                updateValues.end_date = moment(updateValues.end_date, 'DD/MM/YYYY').format('YYYY-MM-DD');
            }
            let duration = 0;
            if(updateValues.start_date && updateValues.end_date){
                duration = moment.duration(moment(updateValues?.end_date).diff(moment(updateValues?.start_date))).asDays();
            }

            const updateSprint = await Sprint.update(updateValues, {
                where: {
                    id: sprintId
                }
            });

            const { associate_tasks } = requestData;
            if (associate_tasks.length !== 0) {
                const associateTasksWithSprint = await Chart.update({ SprintId: sprintId }, { where: { id: associate_tasks } });
            }
            const dissociateTasksWithSprint = await Chart.update({ SprintId: null }, { where: { id: { [Op.notIn]: associate_tasks }, SprintId: sprintId } });

            return updateSprint ? true : false;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteSprint(sprintId){
        try{
            const removeSprintFromTasks = await Chart.update({ SprintId: null }, { where: { SprintId: sprintId } });
            const deleteSprintData = await Sprint.destroy({
                where: {
                    id: sprintId
                }
            });

            return deleteSprintData ? true : false
        }
        catch(error){
            throw error;
        }
    }

    async getSprintManagementTasksBySprintId(sprintId, worklist_id) {
        try {
            const sprintWorklistAssociatedTasks = await Chart.findAll({
                where: {
                    SprintId: { [Op.or]: [null, sprintId] },
                    WorklistId: worklist_id,
                },
                attributes: [['id', 'value'], ['name', 'label'], 'SprintId'],
                raw: true
            });
            let associated_tasks = [];
            if (sprintWorklistAssociatedTasks) {
                associated_tasks = sprintWorklistAssociatedTasks
                    .filter(task => task.SprintId !== null)
                    .map(task => task.value);
            }
            return (sprintWorklistAssociatedTasks) ? {
                data: {
                    all_tasks: sprintWorklistAssociatedTasks,
                    associated_tasks: associated_tasks
                }
            } : {}
        }
        catch (error) {
            throw error;
        }
    }

    async getAllSprintManagementTasksByProjectId(worklist_id) {
        try {
            const sprintWorklistAllTasks = await Chart.findAll({
                where: {
                    SprintId: null,
                    WorklistId: worklist_id,
                },
                attributes: [['id', 'value'], ['name', 'label']],
                raw: true
            });
            return (sprintWorklistAllTasks) ? {
                data: {
                    all_tasks: sprintWorklistAllTasks,
                }
            } : {}
        }
        catch (error) {
            throw error;
        }
    }

    async updateSprintStatusById(sprintId, requestData) {
        try {
            const { IN_PROGRESS_STATUS_ID, COMPLETED_STATUS_ID } = sprintStatusIdConstants;
            const { status, worklist_id: WorklistId } = requestData;
            const SprintStatusId = status === 'start' ? IN_PROGRESS_STATUS_ID : COMPLETED_STATUS_ID;
            if(SprintStatusId === IN_PROGRESS_STATUS_ID){
                const currentSprintsInProgress = await Sprint.count({
                    where: {
                        SprintStatusId: IN_PROGRESS_STATUS_ID,
                        WorklistId
                    }
                });
                if(currentSprintsInProgress > 0){
                    throw new Error('Another Sprint is already in progress. Please stop the previous Sprint to start a new one.');
                }
            }
            const sprintStatusUpdate = await Sprint.update({
                SprintStatusId
            }, {
                where: {
                    id: sprintId
                }
            });

            return sprintStatusUpdate ? true : false;
        }
        catch (error) {
            throw error;
        }
    }
}
