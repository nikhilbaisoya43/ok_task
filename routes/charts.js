const express = require("express");
const router = express.Router();
const { chartValidator, chartTypeaheadValidator } = require('../middleware/validation');
const ChartController = require('../app/modules/charts');
const userAttendance = require('../middleware/attendance');
const passport = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);

router.get('/user-stats', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().getUserWorklistStats);

router.post('/filters/autocomplete', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().autocompleteChartFilter);

router.get('/:id/comments', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().getCommentsByChartId);

router.get('/:id/log-hours', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().getTaskLoggedHoursByTaskId);

router.post('/:id/log-hours', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, chartValidator.validateTaskLoggedHours, new ChartController().addTaskLoggedHoursByTaskId);

router.put('/:id/log-hours/:logId', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, chartValidator.validateTaskLoggedHours, new ChartController().updateTaskLoggedHoursByTaskId);

router.post('/', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().getUserChartsByPriorityWithFilter);

router.post('/:id/comments', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, chartValidator.validateChartComment, new ChartController().addComments);

router.post("/:id/timer", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().addTimer);

router.get('/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().getChartById);

router.post('/self-allocation', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().selfAllocateCharts);

router.post('/:id', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().saveNewChart);

router.post("/:id/total-time", passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().OverAllTime);

router.get('/:id/activity-log', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userAttendance.isUserAttending, new ChartController().getChartActivityLogById);

router.delete('/:id', passport.authenticate('jwt', {
    session: false, failWithError: true 
}), userAttendance.isUserAttending, new ChartController().deleteTaskById);

router.delete('/:id/log-hours/:logId', passport.authenticate('jwt', {
    session: false, failWithError: true
}), new ChartController().deleteTaskLoggedHoursByLogId);

module.exports = router;
