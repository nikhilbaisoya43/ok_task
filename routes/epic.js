const express = require("express");
const router = express.Router();
const passport = require('passport');
const { epicValidator } = require('../middleware/validation');
const EpicController = require("../app/modules/epic/index");
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
const userRoles = require("../middleware/authorization");
passport.use(passportAuthStrategy);

router.post("/", passport.authenticate('jwt', { session: false, failWithError: true }), userRoles.isUserAdminOrManagerOrTeamLead, epicValidator.validateAddEpic, new EpicController().addEpic);
router.put("/:id", passport.authenticate('jwt', { session: false, failWithError: true }), userRoles.isUserAdminOrManagerOrTeamLead, epicValidator.validateUpdateEpic, new EpicController().updateEpic);
router.delete("/:id", passport.authenticate('jwt', { session: false, failWithError: true }), userRoles.isUserAdminOrManagerOrTeamLead, epicValidator.validateDeleteEpic, new EpicController().deleteEpic);
router.get("/unassociated-tasks?", passport.authenticate('jwt', { session: false, failWithError: true }), userRoles.isUserAdminOrManagerOrTeamLead, new EpicController().getAllEpicManagementTasks);
router.get("/:id/management-tasks", passport.authenticate('jwt', { session: false, failWithError: true }), userRoles.isUserAdminOrManagerOrTeamLead, epicValidator.validateEpicManagementTask, new EpicController().getEpicManagementTasks);

module.exports = router;
