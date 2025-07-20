const logger = require('../../services/winstonLogger');
const { WorklistManager } = require("./worklistManager");

module.exports = class WorklistController {

    async addVolume(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead adding volume for new worklist`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().addNewVolume(request.body, request.user.id);
            if (!addData) {
                throw new Error('Could not add volume / Returned Empty');
            }
            logger.info(`Manager/Team Lead added volume for Worklist#: ${request.body.worklist_no}`, { Path: request.url, User: request.user.id });
            response.status(201).json({
                success: true,
                message: 'Data successfully added',
                data: addData
            });
        } catch (error) {
            logger.error(`Worklist could not be created | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async getUserWorklistWithFilter(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getAllWorklistWithFilters(
                request.body,
                request.user,
                request.query.page,
                request.query.size);
            if (!data) {
                throw new Error('Could not get worklist / Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: 'Displayed successfully',
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async modifyCharts(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead modifying Tasks`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().updateCharts(request.body, request.user.id);
            if (!addData) {
                throw new Error('Could not modify tasks / Returned Empty');
            }
            logger.info(`Manager/Team Lead modified Task IDs: ${request.body.TaskId}`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Task(s) modified successfully',
            });
        } catch (error) {
            logger.error(`Task(s) could not be modified | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async addProjectMembers(request, response) {
        try {
            const usersToSave = request?.body?.usersToSave
            const worklistId = request?.body?.worklistId
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Addition of members to project`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().addProjectMembers(usersToSave, worklistId);
            if (addData !== true) {
                throw new Error('Could not add member/members to project');
            }
            logger.info(`Members successfully added`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Members added successfully'
            });
        } catch (error) {
            const { err, custom_err } = error;
            if (err && custom_err) {
                logger.error(`Members addition unsuccessfully | ${custom_err.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: custom_err.message,
                    error: err.details
                });
            }
            else {
                logger.error(`Members addition unsuccessfully | ${error.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: error.message,
                    error: error.errors
                });
            }
        }
    }

    async reallocationToAuditor(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Coder reallocating charts to Auditor`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().reallocateAuditor(request.body, request.user.id);
            if (!addData) {
                throw new Error('Could not reallocate Chart / Returned Empty');
            }
            logger.info(`Coder successfully reallocated Chart IDs: ${request.body.ChartIds} to Auditor ID: ${request.body.AuditorId}`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Auditor successfully allocated'
            });
        } catch (error) {
            const { err, custom_err } = error;
            if (err && custom_err) {
                logger.error(`Charts could not be reallocated | ${custom_err.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: custom_err.message,
                    error: err.details
                });
            }
            else {
                logger.error(`Charts could not be reallocated | ${error.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: error.message,
                    error: error.errors
                });
            }
        }
    }

    async getWorklistActivityLogById(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getWorklistActivityLogById(request.params.id);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.stack
            });
        }
    }

    async getWorklistById(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getWorklistById(request.params.id);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }
    async UpdateWorklistById(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().UpdateWorklistById(request.params.id, request.body, request.user.id);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Project updated succesfully",
                data: data
            });
            logger.info(`Worklist Details is updated for ID ${request.params.id}`, { Path: request.url, User: request.user.id });
        } catch (error) {
            logger.info(`Could not update Project with ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async reallocateChartsToCoder(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead reallocating charts`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().reallocateChartsToCoder(request.body, request.user.id);
            if (!addData) {
                throw new Error('Could not update charts / Returned Empty');
            }
            logger.info(`Manager/Team Lead successfully reallocated charts`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Charts successfully reallocated to Coder',
            });
        } catch (error) {
            const { err, custom_err } = error;
            if (err && custom_err) {
                logger.error(`Charts could not be reallocated | ${custom_err.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: custom_err.message,
                    error: err.details
                });
            }
            else {
                logger.error(`Charts could not be reallocated | ${error.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: error.message,
                    error: error.errors
                });
            }
        }
    }

    async allocateFreshChartsToCoder(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager/Team Lead allocating fresh charts`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().allocateFreshChartsToCoder(request.body, request.user.id);
            if (!addData) {
                throw new Error('Could not add volume / Returned Empty');
            }
            logger.info(`Manager/Team Lead successfully allocated fresh charts to Coders`, { Path: request.url, User: request.user.id });
            response.status(200).json({
                success: true,
                message: 'Charts allocated successfully',
            });
        } catch (error) {
            const { err, custom_err } = error;
            if (err && custom_err) {
                logger.error(`Charts could not be allocated | ${custom_err.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: custom_err.message,
                    error: err.details
                });
            }
            else {
                logger.error(`Charts could not be allocated | ${error.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json({
                    success: false,
                    message: error.message,
                    error: error.errors
                });
            }
        }
    }

    async getWorklistVolumeAvailableForAllocationById(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getWorklistVolumeAvailableForAllocationById(request.params.id);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async getChartProgressDetailsForWorklist(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getChartProgressDetailsForWorklist(request.params.id);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async deleteProjectMembers(request, response) {
        try {
            if (!request) {
                throw new Error('Not able to remove member');
            }
            const data = await new WorklistManager().deleteProjectMembers(request);
            if (!data) {
                throw new Error('Member not removed');
            }
            response.status(200).json({
                success: true,
                message: "Member removed successfully",
            });
        }catch(error){
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async getProjectMembers(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getProjectMembers(request);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async getManagerAllWorklistStatus(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getManagerAllWorklistStatus(request.user);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async getAvailableReallocationVolumeById(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().getAvailableReallocationVolumeById(request.params.id, request.query.from, request.query.to);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                message: "Displayed successfully",
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }

    async checkCoderWorklistAllocated(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new WorklistManager().checkCoderWorklistAllocated(request.params.id, request.params.worklist);
            if (!data) {
                throw new Error('Returned Empty');
            }
            response.status(200).json({
                success: true,
                data: data
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.stack
            });
        }
    }

    async addTaskByWorklistId(request,response){
       try {
           if (!request) {
            throw new Error('No Request | Request Failure');
           }
            const data = await new WorklistManager().addTaskByWorklistId(
              request.body, 
              request.user.id,
              request.params.id
            );
            if (!data) {
            throw new Error('Could not add task / Returned Empty');
            }
            logger.info(`Task successfully created with Task ID: ${data?.id} and Task Number: ${data?.unique_task_no}`,{ Path: request.url, User: request.user.id})
            response.status(201).json({
            success: true,
            message: 'Task successfully added',
            data : data
            });
        } catch (error) {
            logger.error(`Task could not be created | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
            success: false,
            message: error.message,
            error: error.errors
            });
        }    
    } 

    async deleteProjectById(request,response) {
        try {
            if (!request) {
            throw new Error("No Request | Request Failure");
            }
            
            const data = await new WorklistManager().deleteProjectById(
              request.params.id,
              request.user.RoleId,
              request.user.id,       
            );
            if (!data) {
            throw new Error('No Project deleted');
            }
               logger.info(`Project successfully deleted with Project ID: ${request.params.id} `,{ Path: request.url, User: request.user.id})
               response.status(200).json({
               success: true,
               message: "Project successfully deleted",
            });
        }  catch(error){
               logger.error(`Project could not be deleted | ${error.message}`, { Path: request.url, User: request.user.id });
               response.status(400).json({
               success: false,
               message: error.message,
               error: error
            })
        }
    }   
    
    async getEpicsAndSprintsByProjectId(request, response) {
        try {
            if (!request) {
                throw new Error("No Request | Request Failure");
            }
            const data = await new WorklistManager().getProjectEpicsAndSprints(request.params.id, request?.user?.dataValues?.RoleId);
            if (!data) {
                throw new Error('No details fetched');
            }
            response.status(200).json({
                success: true,
                message: "Project details successfully fetched",
                data: data
            });
        }  catch(error){
               logger.error(`Project details not be fetched | ${error.message}`, { Path: request.url, User: request.user.id });
               response.status(400).json({
               success: false,
               message: error.message,
               error: error
            })
        }
    }

    async getTasksByProjectId(request, response) {
        try {
          if (!request) {
            throw new Error('No Request | Request Failure');
          }
          const taskList = await new WorklistManager().getAllTasksForProjectById(request.params.id, request.user, request.query.id, request.query.backlog);
          if (!taskList) {
            throw new Error('Could not fetch Task list');
          }
          response.status(200).json({
            success: true,
            message: 'Task list fetched successfully',
            data: taskList
          });
        } catch (error) {
          logger.error(`Could not fetch Task list for Project ${request?.params?.id} | ${error.message}`, { Path: request.url, User: request.user.id });
          response.status(400).json({
            success: false,
            message: error.message,
            error: error.errors
          });
        }
    }

    async getSprintsByProjectId(request, response) {
        try {
            if (!request) {
                throw new Error("No Request | Request Failure");
            }
            const data = await new WorklistManager().getProjectSprints(request.params.id);
            if (!data) {
                throw new Error('No sprints fetched');
            }
            response.status(200).json({
                success: true,
                message: "Project sprints successfully fetched",
                data: data
            });
        }  catch(error){
               logger.error(`Project sprints not be fetched | ${error.message}`, { Path: request.url, User: request.user.id });
               response.status(400).json({
               success: false,
               message: error.message,
               error: error
            })
        }
    }

    async addEstimation(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Manager adding planned estimation for project`, { Path: request.url, User: request.user.id });
            const addData = await new WorklistManager().addEstimation(request.body, request.user.id);
            if (!addData) {
                throw new Error('Could not add estimation');
            }
            response.status(201).json({
                success: true,
                message: 'Data successfully added',
                data: addData
            });
        } catch (error) {
            logger.error(`Worklist could not be created | ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }

    async getPlannedVsActual(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
                console.log(request.params.id);
            const addData = await new WorklistManager().getPlannedVsActual(request.params.id);
            if (!addData) {
                throw new Error('Could not find estimations');
            }
            response.status(201).json({
                success: true,
                message: 'Data successfully added',
                data: addData
            });
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            });
        }
    }
}
