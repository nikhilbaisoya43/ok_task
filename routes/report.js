const express = require("express");
const router = express.Router();
const ReportController = require('../app/modules/report');
const userRoles = require('../middleware/authorization');
const passport = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
const { timesheetValidator } = require("../middleware/validation");
passport.use(passportAuthStrategy);

router.post('/', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().getreport);

router.get('/fields', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().getCustomizeFeild);

router.post('/template', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().createTemplate);

router.put('/template', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().updateTemplate);

router.get('/templates', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().getTemplate);

router.get('/template-configuration/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().getTemplateConfiguration);

router.put('/template-configuration/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().updateTemplateConfiguration);

router.delete('/template-configuration/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().deleteTemplateConfiguration);

router.get('/assigned-tasks', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new ReportController().getTasksAssigned);

router.get('/project-members', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().getProjectMembers);

router.get('/projects', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new ReportController().getProjects);

router.get('/timesheet/log-hours-details', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new ReportController().getLogHoursDetails);

router.post('/timesheet/log-hours', passport.authenticate('jwt', { session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, 
timesheetValidator.validateTimesheetRequest, new ReportController().getMonthlyLogHours);

router.post('/timesheet/attendence', passport.authenticate('jwt', { session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new ReportController().getMonthlyAttendance);

module.exports = router;
