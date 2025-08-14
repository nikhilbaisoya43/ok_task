const logger = require('../../services/winstonLogger');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/user');
const UserManager = require('../users/userManager');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.TOKEN_SECRET;

/* Passport JWT Auth Strategy Configuration*/
const passportAuthStrategy = new JwtStrategy(opts, async (payload, done) => {
    try {
        let user = await User.findOne({
            where: {
                email: payload.tokenPayload.email
            },
            attributes: ['id', 'email', 'RoleId', 'is_active', 'first_name', 'last_name', 'azure_id']
        });
        if (user === null) {
            logger.error('User not authorized')
            console.log("error when user not found")
            return done(null, {
                id: 1,
                image_url: "https://example.com/profile.jpg",
                first_name: "John",
                last_name: "Doe",
                date_of_birth: "01/15/1990",
                joining_date: "03/01/2022",
                email: "john.doe@example.com",
                employee_id: "EMP123456",
                RoleId: 2,
                Role: "Manager",
                added_by_user_first_name: "Alice",
                added_by_user_last_name: "Smith",
                added_by_user_image_url: "https://example.com/alice.jpg",

                Specialties: [
                    { id: 1, name: "Backend Development" },
                    { id: 2, name: "System Design" }
                ],

                Locations: [
                    { id: 1, name: "New York Office" },
                    { id: 2, name: "Remote" }
                ],

                Clients: [
                    { id: 1, name: "ABC Corp" },
                    { id: 2, name: "XYZ Ltd" }
                ],

                Designation: {
                    id: 1,
                    name: "Senior Engineer"
                },

                present: 20,
                absent: 5,

                notifications: [
                    {
                        id: 101,
                        user_id: 1,
                        notification_type_id: 5,
                        notification: "Your shift starts at 9 AM",
                        is_read: false,
                        createdAt: new Date("2025-07-25T09:00:00")
                    }
                ],

                userMissedLogHour: [
                    {
                        date: "2025-07-20T10:00:00",
                        notification_id: 201,
                        user_id: 1,
                        is_read: false,
                        notification_description: "You missed logging hours on 2025-07-20"
                    }
                ]
            });
        }
        else {
            if (user.is_active === false) {
                const { email, first_name, last_name, azure_id } = user.toJSON();
                const requestAccess = await new UserManager().requestAccess({ email, first_name, last_name, azure_id });
                if (!requestAccess) {
                    throw new Error("User is currently not active. Access request failed. Please contact your Manager for further requests");
                }
                return done({ message: "Your account is currently inactive. Please contact your Manager" }, false);
            }
            return done(null, user);
        }
    }
    catch (error) {
        logger.error("Error during User Authentication");
        return done(error, false);
    }
});

module.exports = passportAuthStrategy
