const express = require("express");
const router = express.Router();
const { worklistValidator, allocateChartValidator, assignChartValidator, plannedEstimationValidator } = require('../middleware/validation');
const WorklistController = require('../app/modules/worklists');
const userRoles = require('../middleware/authorization');
const userAttendance = require('../middleware/attendance');
const passport = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);

router.post('/worklist-volume-addition', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, worklistValidator.validateWorklistVolume, new WorklistController().addVolume)

router.post('/worklist-filter', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getUserWorklistWithFilter);

router.post('/chart-modification', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, worklistValidator.validateModifyCharts, new WorklistController().modifyCharts);

router.post('/addition-project-members', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new WorklistController().addProjectMembers);

router.get("/get-project-members/:worklistId", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new WorklistController().getProjectMembers)

router.delete("/delete-project-member/:worklistId/:assignee_id", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new WorklistController().deleteProjectMembers)

router.post('/reallocation-auditor', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, worklistValidator.validateReallocationAuditor, new WorklistController().reallocationToAuditor);

router.get('/progress-status', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getManagerAllWorklistStatus);

router.get('/:id/available-reallocation-volume', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getAvailableReallocationVolumeById);

router.get('/:id/available-allocation-volume', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getWorklistVolumeAvailableForAllocationById);

router.get('/:id/worklist-chart-progress', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getChartProgressDetailsForWorklist);

router.get("/:id/epics-sprints", passport.authenticate('jwt', {
    session: false, failWithError: true
}), new WorklistController().getEpicsAndSprintsByProjectId);

router.post('/allocate-volume', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().reallocateChartsToCoder)

router.post('/assign-charts', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new WorklistController().allocateFreshChartsToCoder)

router.get('/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getWorklistById);

router.post('/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManager, worklistValidator.validateWorklistUpdate ,new WorklistController().UpdateWorklistById);

router.get('/:id/activity-log', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getWorklistActivityLogById);

router.get('/check-coder/:id/:worklist', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().checkCoderWorklistAllocated);

router.post('/:id/tasks', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new WorklistController().addTaskByWorklistId);

router.get('/:id/tasks', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getTasksByProjectId);

router.get("/:id/sprints", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLeadOrMember, new WorklistController().getSprintsByProjectId);

router.delete('/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new WorklistController().deleteProjectById);

router.post('/project/planned-estimation', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManager, plannedEstimationValidator.validatePlannedEstimation, new WorklistController().addEstimation)

router.get('/project/planned-vs-actual-hours/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManager,new WorklistController().getPlannedVsActual)

module.exports = router;
