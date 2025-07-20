const User = require('../../models/user');
const UserAccessRequest = require('../../models/userAccessRequest');
const Attendance = require('../../models/attendance');
const passportAzureAd = require('passport-azure-ad');
const moment = require('moment');

// Verify environment variables are set
if (!process.env.TENANT_ID || !process.env.CLIENT_ID) {
    throw new Error('Required environment variables TENANT_ID and CLIENT_ID must be set');
}

const passportConfig = {
    credentials: {
        tenantID: process.env.TENANT_ID,
        clientID: process.env.CLIENT_ID
    },
    metadata: {
        authority: "login.microsoftonline.com",
        discovery: ".well-known/openid-configuration",
        version: "v2.0"
    },
    settings: {
        validateIssuer: true,
        passReqToCallback: true,
        loggingLevel: "info",
        loggingNoPII: true,
    },
};

// Verify config values before creating strategy
if (!passportConfig.credentials.clientID || !passportConfig.credentials.tenantID) {
    throw new Error('Invalid configuration: clientID and tenantID must be non-empty strings');
}

const passportAuthStrategy = new passportAzureAd.BearerStrategy({
    identityMetadata: `https://${passportConfig.metadata.authority}/${passportConfig.credentials.tenantID}/${passportConfig.metadata.version}/${passportConfig.metadata.discovery}`,
    clientID: passportConfig.credentials.clientID,
    issuer: `https://${passportConfig.metadata.authority}/${passportConfig.credentials.tenantID}/${passportConfig.metadata.version}`,
    audience: passportConfig.credentials.clientID,
    validateIssuer: passportConfig.settings.validateIssuer,
    passReqToCallback: passportConfig.settings.passReqToCallback,
    loggingLevel: passportConfig.settings.loggingLevel,
    loggingNoPII: passportConfig.settings.loggingNoPII,
}, async (req, token, done) => {
    /**
     * Access tokens that have neither the 'scp' (for delegated permissions) nor
     * 'roles' (for application permissions) claim are not to be honored.
     */
    if (!token.hasOwnProperty('scp') && !token.hasOwnProperty('roles')) {
        return done(new Error('Unauthorized'), null, "No delegated or app permission claims found");
    }

    const user = await User.findOne({
        where: {
            email: token.preferred_username.toLowerCase(),
            is_active: true
        },
        attributes: ['id', 'email', 'RoleId', 'azure_id', 'first_name', 'last_name', 'is_active'],
        raw: true
    });
    if (!user) {
        const userAccessRequest = await UserAccessRequest.findOne({
            where: {
                email: token.preferred_username.toLowerCase(),
                action: null
            },
            raw: true
        });
        if (!userAccessRequest) {
            req.custom_err = true;
            return done({ success: false, message: 'User does not exist' }, null, "User account does not exist in Valerion database");
        }
        else {
            req.pendingAccess = true;
            return done({ success: false, message: 'User already requested access' },
                null, "User access request is pending confirmation");
        }
    }
    if (user.azure_id === null) {
        await User.update({ azure_id: token.oid }, { where: { id: user.id } }).catch(err => { throw err; });
    }
    req.user = user;
    req.body.email = token.preferred_username.toLowerCase();
    const payload = { email: user.email, RoleId: user.RoleId }
    req.tokenPayload = payload;

    const dateToday = moment();
    const isAttending = await Attendance.findOne({
        where: {
            UserId: user.id,
            date: dateToday,
            is_on_leave: false
        },
        raw: true
    })
    if (isAttending) {
        req.isAttending = true;
    }
    else {
        req.isAttending = false;
    }

    return done(null, {}, token);
});

module.exports = passportAuthStrategy
