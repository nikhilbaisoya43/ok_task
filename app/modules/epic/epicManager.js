const { Chart } = require('../../models/chart');
const Epic = require('../../models/epic');
const { Op } = require("sequelize");

module.exports = class EpicManager {

    async createEpic(requestData) {
        try {
            const result = await Epic.create({
                name: requestData.name,
                description: requestData.description,
                WorklistId: requestData.worklist_id,
            })

            if (requestData.associate_tasks && requestData.associate_tasks.length !== 0) {
                const resultChart = await Chart.update({ EpicId: result.id },
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

    async updateEpic(requestParamsId, requestData) {
        try {
            const epicInfo = await Epic.findOne({
                where: {
                    id: requestParamsId
                }
            });
            const updateValues = {
                name: requestData.name ?? epicInfo.name,
                description: requestData.description ?? epicInfo.description,
            }
            const updateEpic = await Epic.update(updateValues, {
                where: {
                    id: requestParamsId
                }
            });

            const { associate_tasks } = requestData;
            if (associate_tasks.length !== 0) {
                const associateTasksWithEpic = Chart.update({ EpicId: requestParamsId }, { where: { id: associate_tasks } });
            }
            const dissociateTasksWithEpic = Chart.update({ EpicId: null }, { where: { id: { [Op.notIn]: associate_tasks }, EpicId: requestParamsId } });

            return updateEpic ? true : false;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteEpic(requestId) {
        try {
            const removeEpicFromTasks = await Chart.update({ EpicId: null }, { where: { EpicId: requestId } });
            const result = Epic.destroy({
                where: {
                    id: requestId
                }
            });

            return result ? true : false;
        }
        catch (error) {
            throw error;
        }
    }

    async getEpicManagementTasksByEpicId(epicId, worklist_id) {
        try {
            const epicWorklistAssociatedTasks = await Chart.findAll({
                where: {
                    EpicId: { [Op.or]: [null, epicId] },
                    WorklistId: worklist_id,
                },
                attributes: [['id', 'value'], ['name', 'label'], 'EpicId'],
                raw: true
            });
            let associated_tasks = [];
            if (epicWorklistAssociatedTasks) {
                associated_tasks = epicWorklistAssociatedTasks
                    .filter(task => task.EpicId !== null)
                    .map(task => task.value);
            }
            return (epicWorklistAssociatedTasks) ? {
                data: {
                    all_tasks: epicWorklistAssociatedTasks,
                    associated_tasks: associated_tasks
                }
            } : {}
        }
        catch (error) {
            throw error;
        }
    }

    async getAllEpicManagementTasksByProjectId(worklist_id) {
        try {
            const epicWorklistAllTasks = await Chart.findAll({
                where: {
                    EpicId: null,
                    WorklistId: worklist_id,
                },
                attributes: [['id', 'value'], ['name', 'label']],
                raw: true
            });
            return (epicWorklistAllTasks) ? {
                data: {
                    all_tasks: epicWorklistAllTasks,
                }
            } : {}
        }
        catch (error) {
            throw error;
        }
    }
}
