const { userRoleConstants } = require('../app/common/constants');
const Attendance = require('../app/models/attendance');
const moment = require('moment');

module.exports = userAttendance = {
    isUserAttending: async (request, response, next) => {
        const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
        if (request.user.RoleId === MANAGER_ID || request.user.RoleId === TEAM_LEAD_ID) {
            next();
        }
        else {
            const dateToday = moment().format('YYYY-MM-DD');
            const userAttendance = await Attendance.findOne({
                where: {
                    UserId: request.user.id,
                    date: dateToday,
                },
                attributes: ['is_on_leave'],
                raw: true
            });
            if (!userAttendance || (userAttendance.is_on_leave === true)) {
                response.status(403).json({
                    success: false,
                    message: "User access is not authorized"
                });
            }
            else {
                next();
            }
        };
    }
}
