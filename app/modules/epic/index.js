const logger = require('../../services/winstonLogger');
const EpicManager = require('./epicManager');

module.exports = class EpicController {

    async addEpic(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead creating Epic`, { Path: request.url, User: request.user.id });
            const addData = await new EpicManager().createEpic(request.body);
            if (!addData) {
                throw new Error('Could not add epic / Returned Empty');
            }
            logger.info(`Manager/Team Lead created Epic: ${request.body.name}`, { Path: request.url, User: request.user.id });
            response.status(201).json({
                success: true,
                message: 'Epic successfully created',
            });
        }
        catch (error) {
            logger.error(`Epic could not be created | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async updateEpic(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead updating Epic`, { Path: request.url, User: request.user.id });
            const updateData = await new EpicManager().updateEpic(request.params.id ,request.body);
            if (!updateData) {
                throw new Error('Could not update epic data / Returned Empty');
            }
            logger.info(`Manager/Team Lead updated Epic: ${request.params.id}`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Epic successfully updated',
            });
        }
        catch (error) {
            logger.error(`Epic could not be updated | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async deleteEpic(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead Deleting Epic`, { Path: request.url, User: request.user.id });
            const deleteData = await new EpicManager().deleteEpic(request.params.id);
            if (!deleteData) {
                throw new Error('Could not delete epic / Returned Empty');
            }
            logger.info(`Manager/Team Lead deleted Epic: ${request.body.name}`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Epic successfully deleted',
            });
        }
        catch (error) {
            logger.error(`Epic could not be deleted | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async getEpicManagementTasks(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const getData = await new EpicManager().getEpicManagementTasksByEpicId(request.params.id, request.query.worklist);
            if (!getData) {
                throw new Error('Could not fetch tasks for Epic / Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: 'Data successfully fetched',
                data: getData.data
            });
        }
        catch (error) {
            logger.error(`Epic Management Task could not be fetch | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async getAllEpicManagementTasks(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const getData = await new EpicManager().getAllEpicManagementTasksByProjectId(request.query.worklist);
            if (!getData) {
                throw new Error('Could not fetch tasks for Epic / Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: 'Data successfully fetched',
                data: getData.data
            });
        }
        catch (error) {
            logger.error(`Epic Management Task could not be fetch | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }
}
