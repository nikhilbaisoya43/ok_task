const Attendance = require("../../models/attendance");
const logger = require('../../services/winstonLogger');
const moment = require('moment');
module.exports = class AttendanceManager {

  async addNewAttendance(requestData) {
    if (!requestData) {
      throw new Error("No details Entered");
    }
    let { user_id } = requestData;
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      var todayDate = mm + "/" + dd + "/" + yyyy;
      var today = new Date();
      const in_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      let attendanceDetail = await Attendance.findOne({
        where: {
          UserId: user_id,
          date: todayDate,
        },
      });
      if (attendanceDetail) {
        throw new Error("Id already exists");
      } else {
        const newAttendance = Attendance.create({
          user_id: user_id,
          is_on_leave: requestData.is_on_leave,
          date: todayDate,
          in_time: in_time,
        });
        return newAttendance;
      }
    } catch (error) {
      throw error;
    }
  }

  async addAttendanceFlag(UserId, attending = null) {
    if (attending === null) {
      throw new Error("Attendance not specified");
    }
    try {
      const userOnLeave = attending === 'true' ? false : true;
      const dateToday = moment().format('YYYY-MM-DD');

      let attendanceDetail = await Attendance.findOne({
        where: {
          UserId: UserId,
          date: dateToday,
        },
        raw: true
      });

      if (!attendanceDetail) {
        const newAttendance = await Attendance.create({
          UserId: UserId,
          date: dateToday,
          is_on_leave: userOnLeave
        })
        return newAttendance;
      }
      else {
        const updateAttendance = await Attendance.update({
          is_on_leave: userOnLeave,
        },
          {
            where: {
              UserId: UserId,
              date: dateToday,
            }
          });
        if (attending === 'true') {
          logger.info(`Set User attendance as: ATTENDING`, { User: UserId });
        }
        else {
          logger.info(`Set User attendance as: NOT ATTENDING`, { User: UserId });
        }
        return updateAttendance;
      }
    } catch (error) {
      throw error;
    }
  }

  async updateAttendance(requestData, userId) {
    if (!requestData) {
      throw new Error("No details Entered");
    } else {
      var today = new Date();
      const time_out = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }
    const updatedAttendance_id = userId;
    const attendance = {
      time_out: time_out,
    };
    try {
      const foundAttendance = await Attendance.findOne({
        where: { id: updatedAttendance_id },
      });
      const updatedAttendance = await Attendance.update(attendance, {
        where: { id: updatedAttendance_id },
      });
      return updatedAttendance;
    } catch (error) {
      throw error;
    }
  }
};
