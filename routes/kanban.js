const express = require("express");
const router = express.Router();
const KanbanController = require('../app/modules/kanban');
const passport = require('passport');
const userAttendance = require('../middleware/attendance');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);

router.get('/projects-list', passport.authenticate('jwt', {
    session: false, failWithError: true
}),new KanbanController().getProjectsAndMembersList);

router.put('/tasks/:id', passport.authenticate('jwt',{
    session: false, failWithError: true
}),userAttendance.isUserAttending, new KanbanController().updateTaskMilestone);

router.post('/filter', passport.authenticate('jwt', {
    session:false, failWithError: true
}), new KanbanController().kanbanFilter);

module.exports = router;