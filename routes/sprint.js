const express = require("express");
const router = express.Router();
const passport = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);
const {sprintValidator} = require("../middleware/validation");
const SprintController = require("../app/modules/sprint/index");
const userRoles = require("../middleware/authorization");

router.post("/", passport.authenticate('jwt', {session: false, failWithError: true}),  userRoles.isUserAdminOrManagerOrTeamLead ,sprintValidator.validateAddSprint,new SprintController().addSprint);
router.put("/:id", passport.authenticate('jwt', {session: false, failWithError: true}), userRoles.isUserAdminOrManagerOrTeamLead ,sprintValidator.validateUpdateSprint,new SprintController().updateSprint);
router.delete("/:id", passport.authenticate('jwt', {session: false, failWithError: true}), userRoles.isUserAdminOrManagerOrTeamLead ,sprintValidator.validateDeleteSprint,new SprintController().deleteSprint);
router.get("/unassociated-tasks?", passport.authenticate('jwt', {session: false, failWithError: true}),userRoles.isUserAdminOrManagerOrTeamLead, new SprintController().getAllSprintManagementTasks);
router.get("/:id/management-tasks", passport.authenticate('jwt', {session: false, failWithError: true}), userRoles.isUserAdminOrManagerOrTeamLead ,sprintValidator.validateSprintManagementTasks,new SprintController().getSprintManagementTasks);
router.put("/:id/status", passport.authenticate('jwt', {session: false, failWithError: true}), userRoles.isUserAdminOrManagerOrTeamLead, new SprintController().updateSprintStatus);
module.exports = router;
