const attendanceManager = require("./attendanceManager");
const logger = require('../../services/winstonLogger');
module.exports = class AttendanceController {

  async addAttendance(request, response) {
    try {
      if (!request) {
        throw new Error("No request | Request Failure");
      }
      let registerAttendance = await new attendanceManager().addNewAttendance(
        request.body
      );
      if (!registerAttendance) {
        throw new Error("Attendance was not registered!");
      }
      response.status(201).json({
        success: true,
        message: `Attendance added`,
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async addAttendanceFlag(request, response) {
    try {
      if (!request) {
        throw new Error("No request | Request Failure");
      }
      logger.info(`Setting User Attendance`, { Path: request.url, User: request.user.id });
      const attendanceFlag = await new attendanceManager().addAttendanceFlag(request.user.id, request.query.attending);
      if (!attendanceFlag) {
        throw new Error("Attendance flag was not added / updated");
      }
      logger.info(`User Attendance successfully set`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: 'Attendance updated',
      });
    } catch (error) {
      logger.error(`Attendance could not be set | ${error.message}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async updateAttendance(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let updatedAttendance = await new attendanceManager().updateAttendance(
        request.body,
        request.params.id
      );
      response.status(200).json({
        success: true,
        message: `Attendance is updated`,
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }
};
