const express = require("express");
const router = express.Router();
const ChartController = require('../../app/modules/charts/v2');
const userAttendance = require('../../middleware/attendance');
const userRoles = require('../../middleware/authorization');
const passport = require('passport');
const passportAuthStrategy = require('../../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);

router.get('/user-stats', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, userAttendance.isUserAttending, new ChartController().getUserWorklistStats);

module.exports = router;
