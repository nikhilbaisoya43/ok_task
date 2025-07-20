const logger = require('../../services/winstonLogger');
const ChartManager = require("./chartManager");
module.exports = class ChartController {

  async saveNewChart(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      logger.info(`Saving Chart Information for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      const addedChart = await new ChartManager().saveNewChartForm(request.body, request.params.id, request.user.id, request.user.RoleId);
      if (!addedChart) {
        throw new Error('Could not save chart data');
      }
      logger.info(`Successfully saved Chart Information for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: 'Chart successfully saved'
      });
    } catch (error) {
      const { err, custom_err } = error;
      if (err && custom_err) {
        logger.error(`Chart could not be saved | ${custom_err.message}`, { Path: request.url, User: request.user.id });
        response.status(400).json({
          success: false,
          message: custom_err.message,
          error: err.details
        });
      }
      else {
        logger.error(`Chart could not be saved | ${error.message}`, { Path: request.url, User: request.user.id });
        response.status(400).json({
          success: false,
          message: error.message,
          error: error.errors
        });
      }
    }
  }

  async getUserChartsByPriorityWithFilter(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getAllChartsByPriorityWithFilters(
        request.user,
        request.query.page,
        request.query.size,
        request.query.priority,
        request.body,
        request.user.RoleId);
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
        error: error.errors
      });
    }
  }

  async getUserWorklistWithFilter(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getAllWorklistWithFilters(
        request.user.id,
        request.query.page,
        request.body);
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
        error: error.errors
      });
    }
  }

  async getChartById(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getChartById(request.params.id, request.user.id, request.user.RoleId);
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
        error: error.errors
      });
    }
  }

  async getChartActivityLogById(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getChartActivityLogById(request.params.id, request.user.id, request.user.RoleId);
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
        error: error.errors
      });
    }
  }

  async getUserWorklistStats(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getUserWorklistStats(request.user);
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
        error: error.errors
      });
    }
  }

  async addComments(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      logger.info(`Adding comments for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      const addData = await new ChartManager().addNewChartComments(request.body, request.params.id, request.user.id, request.user.RoleId);
      if (!addData) {
        throw new Error('Could not add comments / Returned Empty');
      }
      logger.info(`Successfully added comments for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      response.status(201).json({
        success: true,
        message: 'Comments successfully added'
      });
    } catch (error) {
      logger.error(`Comments could not be added | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getCommentsByChartId(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().getCommentsByChartId(request.params.id)
      if (!data) {
        throw new Error('Returned Empty');
      }
      response.status(200).json({
        success: true,
        message: "Displayed Successfully",
        data: data
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async addTimer(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      logger.info(`Operating Timer for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      const { timerData, message } = await new ChartManager().addNewTimer(request);
      if (!timerData) {
        throw new Error("No timer data received");
      }
      logger.info(`${message} for Chart ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: message,
        data: timerData,
      });
    } catch (error) {
      const { err, custom_err } = error;
      if (err && custom_err) {
        logger.error(`Timer could not be operated | ${custom_err.message}`, { Path: request.url, User: request.user.id });
        response.status(400).json({
          success: false,
          message: custom_err.message,
          error: err.details
        });
      }
      else {
        logger.error(`Timer could not be operated | ${error.message}`, { Path: request.url, User: request.user.id });
        response.status(400).json({
          success: false,
          message: error.message,
          error: error.errors
        });
      }
    }
  }

  async OverAllTime(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      const getTime = await new ChartManager().getTotalTime(request.body, request.params.id)
      if (!getTime) {
        throw new Error('Could not get timer data');
      }
      response.status(200).json({
        success: true,
        message: 'Successfully added',
        data: getTime
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      })
    }
  }

  async autocompleteChartFilter(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const addData = await new ChartManager().typeaheadChartFilter(request.body, request.user);
      if (!addData) {
        throw new Error('No records found');
      }
      response.status(201).json({
        success: true,
        message: 'Records successfully fetched',
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

  async selfAllocateCharts(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      logger.info(`Self allocating Charts IDs: ${request.body.chart_id}`, { Path: request.url, User: request.user.id });
      const selfAllocated = await new ChartManager().selfAllocateCharts(request.body, request.user.id);
      if (!selfAllocated) {
        throw new Error('Could not self-allocate');
      }
      logger.info(`Successfully self allocated Charts IDs: ${request.body.chart_id}`, { Path: request.url, User: request.user.id });
      response.status(201).json({
        success: true,
        message: 'Charts successfully self-allocated'
      });
    } catch (error) {
      logger.error(`Could not self-allocate | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getTaskLoggedHoursByTaskId(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const loggedHours = await new ChartManager().getTaskLoggedHoursByTaskId(request.params.id);
      if (!loggedHours) {
        throw new Error('Could not fetch logged hours');
      }
      response.status(200).json({
        success: true,
        message: 'Logged hours fetched successfully',
        data: loggedHours
      });
    } catch (error) {
      logger.error(`Could not fetch logged hours for Task ${request?.params?.id} | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async addTaskLoggedHoursByTaskId(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      logger.info(`Adding log hours for Task ID: ${request?.params?.id}`, { Path: request.url, User: request.user.id });
      const loggedHours = await new ChartManager().addTaskLoggedHoursByTaskId(request.params.id, request.user.id, request.body);
      if (!loggedHours) {
        throw new Error('Could not add logged hours');
      }
      logger.info(`Successfully added log hours for Task ID: ${request?.params?.id}`, { Path: request.url, User: request.user.id });
      response.status(201).json({
        success: true,
        message: 'Logged hours successfully',
      });
    } catch (error) {
      logger.error(`Could not add logged hours for Task ${request?.params?.id} | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async updateTaskLoggedHoursByTaskId(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      logger.info(`Updating log hours for Log ID: ${request?.params?.logId}`, { Path: request.url, User: request.user.id });
      const loggedHours = await new ChartManager().updateTaskLoggedHoursByTaskId(request.params.logId, request.body);
      if (!loggedHours) {
        throw new Error('Could not update logged hours');
      }
      logger.info(`Successfully updated log hours for Log ID: ${request?.params?.logId}`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: 'Logged hours updated successfully',
      });
    } catch (error) {
      logger.error(`Could not update logged hours for Log ID: ${request?.params?.logId} | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async deleteTaskLoggedHoursByLogId(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      logger.info(`Deleting log hours for Log ID: ${request?.params?.logId}`, { Path: request.url, User: request.user.id });
      const deleted = await new ChartManager().deleteTaskLoggedHours(request.params.logId, request.user.id);
      if (!deleted) {
        throw new Error('Could not delete logged hours');
      }
      logger.info(`Successfully delete log hours for Log ID: ${request?.params?.logId}`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: 'Logged hours deleted successfully',
      });
    } catch (error) {
      logger.error(`Could not delete logged hours for Log ID: ${request?.params?.logId} | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async deleteTaskById(request,response){
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new ChartManager().deleteTaskById(
        request.params.id,
        request.body,
        request.user.RoleId,
        request.user.id,
      );  
      if (!data) {
        throw new Error('No Task deleted');
      }
      logger.info(`Task successfully deleted with Task ID: ${request.params.id} `,{ Path: request.url, User: request.user.id})
      response.status(200).json({
        success: true,
        message: "Task successfully deleted",
      });
    } catch (error) {
      logger.error(`Task could not be deleted | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

};
