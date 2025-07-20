const KanbanManager = require('./kanbanManager');
const logger = require('../../services/winstonLogger');
module.exports = class KanbanController {
    
    async getProjectsAndMembersList(request, response) {
        try {
            if (!request) {
                throw new Error("No Request | Request Failure");
            }
            const data = await new KanbanManager().getProjectsAndMembersList(
              request.user.id, request.user.RoleId
            );
           
            if (!data) {
                throw new Error("Returned Empty");
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data,
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors,
            });
        }
    }
    async updateTaskMilestone(request,response) {
        if (!request) {
            throw new Error("No Request | Request Failure");
          }
          try {
            const updateTask = await new KanbanManager().updateTaskMilestone(
              request.body,
              request.params.id
            );
            logger.info(`Task ID: ${request.params.id} milestone successfully updated`,{ Path: request.url, User: request.user.id})
            response.status(200).json({
              success: true,
              message: "Task milestone updated successfully"
            });
          } catch (error) {
            logger.error(`Cannot update milestone for Task ID: ${request.params.id}`,{ Path: request.url, User: request.user.id})
            response.status(400).json({
              success: false,
              message: "Cannot update task milestone",
              error: error.errors
            });
          }
    }
    async kanbanFilter(request,response) {
      try {
        if (!request) {
            throw new Error("No Request | Request Failure");
        }
        const data = await new KanbanManager().kanbanFilter(
            request.body,
            request.user,
        ); 
        if (!data) {
            throw new Error("Returned Empty");
        }
        response.status(200).json({
          success: true,
          data: data
        });
      } catch (error) {
        response.status(400).json({
            success: false,
            message: error.message,
            error: error.errors,
        });
      }
    }

};
