const logger = require('../app/services/winstonLogger')
const { userRoleConstants } = require('../app/common/constants');

module.exports = userRoles = {

    isUserAdminOrManagerOrTeamLeadOrMember: (request, response, next) => {
        const { MANAGER_ID, TEAM_LEAD_ID, MEMBER_ID, ADMIN_ID } = userRoleConstants
        if (request.user.RoleId === MANAGER_ID || request.user.RoleId === TEAM_LEAD_ID || request.user.RoleId === MEMBER_ID || request.user.RoleId === ADMIN_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    },

    isUserAdminOrManagerOrTeamLead: (request, response, next) => {
        const { MANAGER_ID, TEAM_LEAD_ID, ADMIN_ID } = userRoleConstants
        if (request.user.RoleId === MANAGER_ID || request.user.RoleId === TEAM_LEAD_ID || request.user.RoleId === ADMIN_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    },

    isUserManager: (request, response, next) => {
        const { MANAGER_ID } = userRoleConstants
        if (request.user.RoleId === MANAGER_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    },
    isUserAdminOrManager: (request, response, next) => {
        const { MANAGER_ID, ADMIN_ID } = userRoleConstants
        if (request.user.RoleId === MANAGER_ID || request.user.RoleId === ADMIN_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    },

    isUserTeamLead: (request, response, next) => {
        const { TEAM_LEAD_ID } = userRoleConstants
        if (request.user.RoleId === TEAM_LEAD_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    },

    isUserCoder: (request, response, next) => {
        const { CODER_ID } = userRoleConstants
        if (request.user.RoleId === CODER_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    },

    isUserMember: (request, response, next) => {
        const { MEMBER_ID } = userRoleConstants
        if (request.user.RoleId === MEMBER_ID) {
            next();
        }
        else {
            logger.error('User access is not authorized');
            response.status(403).json({
                success: false,
                message: "User access is not authorized"
            })
        }
    }
}