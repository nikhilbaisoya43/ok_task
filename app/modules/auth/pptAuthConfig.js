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
            return done(null, false);
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
