const User = require('../../models/user');
const Attendance = require('../../models/attendance');
const bcrypt = require('bcrypt');
const logger = require('../../services/winstonLogger');
const moment = require('moment');

module.exports = class AuthenticateUser {

    async authenticateUser(request, response, next) {
        try {
            const userEmail = request.body.email.toLowerCase();
            const existingUser = await User.findOne({
                where: {
                    email: userEmail,
                    is_active: true
                },
                attributes: ['id', 'email', 'password', 'RoleId'],
                raw: true
            }).then(async (user) => {
                const isPasswordValid = await bcrypt.compare(request.body.password, user.password);
                if (isPasswordValid) {
                    return user
                }
                else {
                    throw new Error('Invalid password entered');
                }
            }).catch(error => {
                logger.error('User not found', { Path: request.url, User: userEmail })
                throw error;
            })

            const payload = { email: existingUser.email, RoleId: existingUser.RoleId }
            request.tokenPayload = payload;

            const dateToday = moment();
            const isAttending = await Attendance.findOne({
                where: {
                    UserId: existingUser.id,
                    date: dateToday,
                    is_on_leave: false
                },
                raw: true
            })

            if (isAttending) {
                request.isAttending = true;
            }
            else {
                request.isAttending = false;
            }
            next();
        }
        catch (error) {
            throw error;
        }
    };
}

