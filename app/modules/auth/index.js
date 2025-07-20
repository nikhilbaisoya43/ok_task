const logger = require('../../services/winstonLogger');
const AuthManager = require('./authManager');

module.exports = class AuthController {

    generateAuthToken(request, response) {
        try {
            const token = new AuthManager().generateAndReturnAuthToken(request.tokenPayload);
            logger.info(`User successfully logged in`, { Path: request.url, User: request.body.email });
            response.status(200).json({
                success: true,
                token: token,
                attending: request.isAttending
            })
        } catch (error) {
            logger.error("Error during token signing / Unable to generate Auth Token", { Path: request.url, User: request.body.email });
            response.status(400).json({
                success: false,
                message: error.message,
                error: error.errors
            })
        }
    };
}
