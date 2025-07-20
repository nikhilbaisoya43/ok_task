const express = require("express");
const router = express.Router();
const { userValidator, configurationValidator, locationValidator, newUserValidator, profileValidator, commentValidator } = require('../middleware/validation');
const userRoles = require('../middleware/authorization');
const UserController = require('../app/modules/users/');
const AttendanceController = require('../app/modules/attendance/index');
const userAttendance = require('../middleware/attendance');
const passport = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);

router.post("/user-filter", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().showAllUsersWithFilterInDB);

router.get("/profile",
    passport.authenticate("jwt", { session: false, failWithError: true }),
    new UserController().displayLoggedInUser
);

router.post("/password",
    passport.authenticate('jwt', { session: false, failWithError: true }),
    userAttendance.isUserAttending,
    new UserController().updateUserPassword
);

router.post("/register", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, userValidator.validateAddUser, new UserController().addUser);

router.post('/attendances/today', passport.authenticate('jwt', {
    session: false, failWithError: true
}), new AttendanceController().addAttendanceFlag);

router.post("/profile/image", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new UserController().uploadProfileImage);

router.get("/stats", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().getUserStats);

router.get("/pending", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().getPendingRequests);

router.get("/:id/leaves", passport.authenticate('jwt', {
    session: false, failWithError: true
}), new UserController().getUserLeavesForMonth);

router.get("/:id", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().displayUserById);

router.put("/notifications", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new UserController().setNotificationAsRead);

router.put("/:id", userValidator.validateUpdateUser,
    passport.authenticate('jwt', {
        session: false, failWithError: true
    }), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().updateUser);

router.delete(
    "/configurations",
    passport.authenticate('jwt', { session: false, failWithError: true }),
    userRoles.isUserAdminOrManagerOrTeamLeadOrMember,
    new UserController().deleteConfiguration
);

router.delete(
    "/:id",
    passport.authenticate('jwt', { session: false, failWithError: true }),
    userRoles.isUserAdminOrManagerOrTeamLead, new UserController().deleteUser
);

router.post(
    "/display/addLocation/:client_id",
    passport.authenticate('jwt', { session: false, failWithError: true }),
    userRoles.isUserAdminOrManagerOrTeamLead,
    locationValidator.validateAddLocation,
    new UserController().addDisplayLocation
);

router.get(
    "/location/:id/:client_id?",
    passport.authenticate('jwt', { session: false, failWithError: true }),
    userRoles.isUserAdminOrManagerOrTeamLead,
    new UserController().displayLocations
);

router.post(
    "/client/add",
    passport.authenticate('jwt', { session: false, failWithError: true }),
    userRoles.isUserAdminOrManagerOrTeamLead,
    new UserController().addNewClient
);

router.get("/client/:id", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().displayClient);

router.get("/getcongfiguration/:id/:location_id?", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().displayConfigurationByLocationId);

router.post("/addcongfiguration/", passport.authenticate('jwt', {
    session: false, failWithError: true
}), [userRoles.isUserAdminOrManagerOrTeamLeadOrMember, configurationValidator.validateAddConfiguration,], new UserController().addConfigurationMaster);

router.post("/user-access-request/:id/:access_status", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, newUserValidator.validateNewUser, new UserController().userRequestAccess);

router.post("/user-access", new UserController().addUserAccess);

router.post("/first-login", new UserController().firstLogin);

router.post("/edit-user/:id", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, profileValidator.validateProfile, new UserController().editUser);

router.post("/me", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, profileValidator.validateProfile, new UserController().updateLoggedInUser);

router.post("/request-leave/me", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, userValidator.validateApplyLeave, new UserController().applyLeaveForUser);

router.post("/:id/profile-activation", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().activateUserProfile);

router.get("/user-leave-details/:id", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new UserController().getLeavesByUser);

router.get("/leave-details/me", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new UserController().getMyLeaves);

router.post("/comment/timeNotLogged", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, commentValidator.validateComment, new UserController().reasonForNotLoggingHours);

router.get("/comment/timeNotLogged/:notificationId", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new UserController().getReasonForNotLoggingHours);

router.get("/attachments/:id", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new UserController().getAttachments);

module.exports = router;
