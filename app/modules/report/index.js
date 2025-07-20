const logger = require('../../services/winstonLogger');
const ReportManager = require("./reportManager");

module.exports = class ReportController {

    async getreport(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            logger.info(`Fetching Report`, { Path: request.url, User: request.user.id });
            const validateReport = await new ReportManager().validateGetReport(request.body);
            if (validateReport && validateReport.success == true) {
                const validateFilter = await new ReportManager().validateReportFilter(request.body);
                if (validateFilter.success === false) {
                    logger.info(`Filter validation:  ${validateFilter.message}`, { Path: request.url, User: request.user.id });
                    response.status(400).json(validateFilter);
                    return;
                }

                const getreport = await new ReportManager().getreport(request.body, request.query, request.user);
                if (!getreport) {
                    logger.info(`Unable to get report`, { Path: request.url, User: request.user.id });
                    response.status(400).json({
                        success: false,
                        message: "Unable to get report.",
                    });
                }
                logger.info(`Reports fetched successfully`, { Path: request.url, User: request.user.id });
                response.status(200).json({
                    success: true,
                    data: getreport
                })
            } else {
                logger.info(`Report validation:  ${validateReport.message}`, { Path: request.url, User: request.user.id });
                response.status(400).json(validateReport);
            }
        } catch (error) {
            logger.info(`Could not fetch report, ${error.message}`, { Path: request.url, User: request.user.id });
            response.status(400).json({
                success: false,
                message: "Could not fetch Report Data " + error.message
            })
        }
    }

    async getCustomizeFeild(request, response) {
        try {
            const getreport = await new ReportManager().getCustomizeFeild()
            response.status(200).json(getreport)
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not fetch Report Data " + error
            })
        }
    }

    async createTemplate(request, response) {
        try {
            const getreport = await new ReportManager().createTemplate(request.body);
            if (getreport.success === false) {
                response.status(400).json(getreport)
            }
            else {
                response.status(200).json(getreport)
            }
        } catch (error) {
            logger.error('Could not create Template', { Path: request.url, User: request.user.id });
            if (error.errors[0].type === 'unique violation') {
                response.status(400).json({
                    success: false,
                    message: 'Template name already exists',
                });
            }
            else {
                response.status(400).json({
                    success: false,
                    message: "Could not create Template  " + error.message,
                    error: error.errors
                })
            }
        }
    }

    async updateTemplate(request, response) {
        try {
            const getreport = await new ReportManager().updateTemplate(request.body)
            response.status(200).json(getreport)
        } catch (error) {
            logger.error('Could not update Template', { Path: request.url, User: request.user.id })
            response.status(400).json({
                success: false,
                message: "Could not update Template  " + error
            })
        }
    }

    async getTemplate(request, response) {
        try {
            const getreport = await new ReportManager().getTemplate(request.body)
            response.status(200).json(getreport)
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not fetch Template  " + error
            })
        }
    }

    async updateTemplateConfiguration(request, response) {
        try {
            const getreport = await new ReportManager().updateTemplateConfiguration(request.body, request.params.id)
            response.status(200).json(getreport)
        } catch (error) {
            logger.error('Could not update Template Configuration', { Path: request.url, User: request.user.id })
            response.status(400).json({
                success: false,
                message: "Could not update Template Configuration  " + error
            })
        }
    }

    async getProjects(request, response){
        try {
            if (!request) {
              throw new Error('No Request | Request Failure');
            }
            const data = await new ReportManager().getProjects(request?.user?.RoleId,request?.user?.id);
            if (!data) {
              throw new Error('No project found');
            }
            logger.info(`Successfully fetched projects`);
            response.status(200).json({
              success: true,
              message: 'Projects successfully fetched',
              data: data
            });
          } catch (error) {
            logger.error(`No project found`);
            response.status(400).json({
              success: false,
              message: error.message,
              error: error.errors
            });
          }
    }

    async getProjectMembers(request, response){
        try {
            if (!request) {
              throw new Error('No Request | Request Failure');
            }
            const data = await new ReportManager().getProjectMembersByUser(request.user);
            if (!data) {
              throw new Error('No users found');
            }
            logger.info(`Successfully fetched user data`);
            response.status(200).json({
              success: true,
              message: 'Users successfully fetched',
              data: data
            });
          } catch (error) {
            logger.error(`No user found`);
            response.status(400).json({
              success: false,
              message: error.message,
              error: error.errors
            });
          }
    }

    async getTasksAssigned(request, response){
        try {
            if (!request) {
              throw new Error('No Request | Request Failure');
            }
            const data = await new ReportManager().getTasksAssignedToUser(request.user, request?.query?.project);
            if (!data) {
              throw new Error('No tasks found');
            }
            logger.info(`Successfully fetched data`);
            response.status(200).json({
              success: true,
              message: 'Tasks fetched successfully',
              data: data
            });
          } catch (error) {
            logger.error(`No tasks found`);
            response.status(400).json({
              success: false,
              message: error.message,
              error: error.errors
            });
          }
    }

    async deleteTemplateConfiguration(request, response) {
        try {
            const getreport = await new ReportManager().deleteTemplateConfiguration(request.body, request.params.id)
            response.status(200).json(getreport)
        } catch (error) {
            logger.error('Could not delete Template Configuration', { Path: request.url, User: request.user.id })
            response.status(400).json({
                success: false,
                message: "Could not delete Template Configuration  " + error
            })
        }
    }

    async getTemplateConfiguration(request, response) {
        try {
            const getreport = await new ReportManager().getTemplateConfiguration(request.body, request.params.id)
            response.status(200).json(getreport)
        } catch (error) {
            response.status(400).json({
                success: false,
                message: "Could not fetch Template Configuration  " + error
            })
        }
    }

    async getLogHoursDetails(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new ReportManager().getLogDetailsBasedOnDate(request.user, request.query);
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

    async getMonthlyLogHours(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new ReportManager().getLogDetailsBasedOnMonth(request.user, request.body);
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

    async getMonthlyAttendance(request, response) {
        try {
            if (!request) {
                throw new Error('No Request | Request Failure');
            }
            const data = await new ReportManager().getAttendanceTimesheet(request.user, request.body);
            if (!data) {
                throw new Error('Returned Empty');
            }

            const downloadFileName = "exportData";

            response.setHeader(
                "Content-Type",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            );
            response.setHeader(
                "Content-Disposition",
                "attachment;filename=" + `${downloadFileName}.xlsx`
            );

            data.xlsx.write(response);
        } catch (error) {
            response.status(400).json({
                success: false,
                message: error.message,
                error: error
            })
        }
    }
}
