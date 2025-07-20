const jwt = require('jsonwebtoken');
const moment = require('moment');

module.exports = class AuthManager {

    generateAndReturnAuthToken(payload) {
        try {
            const issueTime = moment().unix();
            const expireTime = moment().endOf('day').unix();
            const signOptions = {
                iat: issueTime,
                exp: expireTime,
                tokenPayload: payload,
            }
            const accessToken = jwt.sign(signOptions, process.env.TOKEN_SECRET);
            return accessToken;
        } catch (err) {
            throw err;
        }
    };
}
