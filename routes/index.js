var express = require("express");
var router = express.Router();
const moment = require('moment');
const { userValidator } = require('../middleware/validation');
const passport = require('passport');
const passportAD = require('passport');
const passportAuthStrategy = require('../app/modules/auth/pptAuthConfig');
const passportADAuthStrategy = require('../app/modules/auth/pptAuthConfigAD');
const AttendanceController = require('../app/modules/attendance');
const MasterController = require('../app/modules/master-data');
const V2MasterController = require('../app/modules/master-data/v2');
const UserController = require('../app/modules/users/');
const AuthController = require('../app/modules/auth/index');
const GlobalSearchController = require('../app/modules/global-search');
const userRouter = require('./users');
const chartRouter = require('./charts');
const chartRouterV2 = require('./v2/charts');
const worklistRouter = require('./worklists');
const graphRouter = require('./graph');
const reportRouter = require('./report');
const kanbanRouter = require('./kanban');
const epicRouter = require('./epic');
const sprintRouter = require('./sprint');
const logger = require('../app/services/winstonLogger');

// passport.use(passportAuthStrategy);
// passportAD.use(passportADAuthStrategy);
router.use('/users', userRouter);
router.use('/charts', chartRouter);
router.use('/v2/charts', chartRouterV2);
router.use('/worklists', worklistRouter);
router.use('/graphs', graphRouter);
router.use('/reports', reportRouter);
router.use('/kanban', kanbanRouter);
router.use('/epics', epicRouter);
router.use('/sprints', sprintRouter);

router.get("/", function (req, res) {
  res.status(200).json({
    HOMEPAGE: `${moment().format('LTS / DD/MM/YYYY')} - WELCOME TO MIND IT WORKFLOW MANAGEMENT TOOL!`,
  });
});
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  // Basic validation for required fields
  if (!email || !password) {
    logger.error('Missing email or password', { Path: req.url, User: email ?? '' });
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  try {
    // Mock user data (no DB check, to be added later)
    const user = { id: 1, email, isAttending: true };

    // Set token payload and user data
    req.user = user;
    req.tokenPayload = { id: user.id, email };
    req.isAttending = user.isAttending;

    logger.info(`User login attempt`, { Path: req.url, User: email });
    next();
  } catch (err) {
    logger.error('Error during login', { Path: req.url, User: email ?? '', Error: err.message });
    return res.status(400).json({
      success: false,
      message: 'Login failed'
    });
  }
}, new AuthController().generateAuthToken);
router.post("/login-val", (request, response, next) => {
  logger.info(`User login attempt`, { Path: request.url, User: request.body.email });
  next();
}, 
userValidator.validateLoginUser, 
new UserController().checkUserExistsAndAuthenticate,
  new AuthController().generateAuthToken);

router.post("/login-ad", passportAD.authenticate('oauth-bearer', { session: false, failWithError: true }),
  (request, response, next) => {
    logger.info(`User login attempt`, { Path: request.url, User: request.user.email });
    next();
  }, new AuthController().generateAuthToken);

/*
Add user attendance in database
*/
router.post("/attendance/register", new AttendanceController().addAttendance);

/*
MASTER DATA
*/
router.get("/hn-master-data", passport.authenticate('jwt', {
  session: false, failWithError: true
}), new MasterController().getMasterData);
router.post("/v2/hn-master-data", passport.authenticate('jwt', {
  session: false, failWithError: true
}), new V2MasterController().getMasterData);

/*
GLOBAL SEARCH
*/
router.post("/global-search", passport.authenticate('jwt', {
  session: false, failWithError: true
}), new GlobalSearchController().getGlobalSearchRecords);

module.exports = router;
