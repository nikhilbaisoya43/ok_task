const logger = require("../../services/winstonLogger");
const SprintManager = require("./sprintManager");

module.exports =  class SprintController {
    async addSprint(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead adding Sprint`, { Path: request.url, User: request.user.id });
            const addData = await new SprintManager().createSprint(request.body);
            if (!addData) {
                throw new Error('Could not add Sprint / Returned Empty');
            }
            logger.info(`Manager/Team Lead added Sprint: ${request.body.name}`, { Path: request.url, User: request.user.id });
            response.status(201).json({
                success: true,
                message: 'Sprint successfully added',
            });
        }
        catch (error) {
            logger.error(`Sprint could not be created | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message  ,
                error: error.errors
            });
        }
    }

    async updateSprint(request, response){
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead updating Sprint`, { Path: request.url, User: request.user.id });
            const updateData = await new SprintManager().updateSprint(request.params.id ,request.body);
            if (!updateData) {
                throw new Error('Could not update sprint data / Returned Empty');
            }
            logger.info(`Manager/Team Lead updated sprint: ${request.params.id}`, { Path: request.url, User: request.user.id });
            response.status(201).json({
                success: true,
                message: 'Sprint Data successfully updated',
            });
        }
        catch (error) {
            logger.error(`Sprint could not be updated | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async deleteSprint(request, response){
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead deleting Sprint`, { Path: request.url, User: request.user.id });
            const deleteData = await new SprintManager().deleteSprint(request.params.id);
            if (!deleteData) {
                throw new Error('Could not delete sprint / Returned Empty');
            }
            logger.info(`Manager/Team Lead deleted sprint: ${request.body.name}`, { Path: request.url, User: request.user.id });
            response.status(201).json({
                success: true,
                message: 'Sprint successfully deleted',
            });
        }
        catch (error) {
            logger.error(`Sprint could not be deleted | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async getSprintManagementTasks(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const getData = await new SprintManager().getSprintManagementTasksBySprintId(request.params.id, request.query.worklist);
            if (!getData) {
                throw new Error('Could not fetch tasks for Sprint / Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: 'Data successfully fetched',
                data: getData.data
            });
        }
        catch (error) {
            logger.error(`Sprint Management Task could not be fetched | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async getAllSprintManagementTasks(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const getData = await new SprintManager().getAllSprintManagementTasksByProjectId(request.query.worklist);
            if (!getData) {
                throw new Error('Could not fetch tasks for Sprint / Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: 'Data successfully fetched',
                data: getData.data
            });
        }
        catch (error) {
            logger.error(`Sprint Management Tasks could not be fetched | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async updateSprintStatus(request, response){
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Updating Sprint status`, { Path: request.url, User: request.user.id });
            const updateData = await new SprintManager().updateSprintStatusById(request.params.id, request.body);
            if (!updateData) {
                throw new Error('Could not update sprint status / Returned Empty');
            }
            logger.info(`Updated status of sprint: ${request.params.id}`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Sprint status successfully updated',
            });
        }
        catch (error) {
            logger.error(`Sprint status not be updated | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }
}