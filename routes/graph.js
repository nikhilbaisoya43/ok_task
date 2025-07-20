const express = require("express");
const router = express.Router();
const graphController = require('../app/modules/graph');
const userRoles = require('../middleware/authorization');
const passport = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
passport.use(passportAuthStrategy);

router.post('/allocated-statistics', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new graphController().getAllocatedStatistics)

router.post('/unallocated', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new graphController().getUnallocatedVolume)

router.post('/productivity', passport.authenticate('jwt', {
    session: false, failWithError: true
}), userRoles.isUserAdminOrManagerOrTeamLead, new graphController().getProductivity)

module.exports = router;