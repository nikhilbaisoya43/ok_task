const UserManager = require("./userManager");
const AuthenticateUser = require("./userAuthentication");
const logger = require('../../services/winstonLogger');

module.exports = class UserController {


  async showAllUsersWithFilterInDB(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const allUsers = await new UserManager().showAllUsers(
        request.body,
        request.query.page,
        request.query.size,
      );
      if (!allUsers) {
        throw new Error('Could not display all users / Returned Empty');
      }
      response.status(200).json({
        success: true,
        message: 'Displayed successfully',
        data: allUsers
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  async addConfigurationMaster(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      const validateConfigMaster = await new UserManager().validateConfigurationMaster(request.body["locationId"], request.body["newData"], request.body["editData"], request.body["clientCurrentId"]);
      if (validateConfigMaster && validateConfigMaster.success == true) {
        const configMaster = await new UserManager().addConfigurationMaster(request.body["techStackCategories"],request.body["locationId"], request.body["newData"], request.body["clientCurrentId"], request.body["task_id"]);
        const editConfigMaster = await new UserManager().editConfigurationMaster(request.body["editData"],request.body["task_id"]);

        if (!configMaster || !editConfigMaster) {
          logger.error(`Configuration data could not be added for given Client ID: ${request.body["clientCurrentId"]} and Location ID: ${request.body["locationId"]}!`, { Path: request.url, User: request.user.id });
          response.status(400).json({
            success: false,
            message: "Unable to save configuration.",
          });
          return;
        }

        if (configMaster.success == true && editConfigMaster.success == true) {
          logger.info(`Configuration data successfully saved for given Client ID: ${request.body["clientCurrentId"]} and Location ID: ${request.body["locationId"]}!`, { Path: request.url, User: request.user.id })
          response.status(201).json(configMaster);
          return;
        } else {
          logger.error(`Configuration data could not be added for given Client ID: ${request.body["clientCurrentId"]} and Location ID: ${request.body["locationId"]}!`, { Path: request.url, User: request.user.id });
          response.status(400).json({
            success: false,
            message: "Unable to save configuration."
          });
        }
      } else {
        logger.error(`Configuration Master data could not be validated for given Client ID: ${request.body["clientCurrentId"]} and Location ID: ${request.body["locationId"]}!`, { Path: request.url, User: request.user.id });
        response.status(400).json(validateConfigMaster);
      }
    } catch (error) {
      logger.error(`Configuration data could not be added for given Client ID: ${request.body["clientCurrentId"]} and Location ID: ${request.body["locationId"]}!`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async addUser(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      const registerUser = await new UserManager().addNewUser(request.body,request.user.id);
      if (!registerUser) {
        throw new Error("User was not registered!");
      }
      logger.info(`User registered with email: ${registerUser.email} by User Id: ${request.user.id}`, { Path: request.url, User: request.user.id });
      response.status(201).json({
        success: true,
        message: `User Registered with email: ${registerUser.email}`,
      });
    } catch (error) {
      logger.error('Could not add new user', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async checkUserExistsAndAuthenticate(request, response, next) {
    try {
      const payload = await new AuthenticateUser().authenticateUser(request, response, next);
    } catch (error) {
      logger.error('User could not be authenticated. Email or password does not match.', { Path: request.url, User: request.user.id });
      response.status(403).json({
        success: false,
        message: "Email or password does not match",
      });
    }
  }

  async displayLoggedInUser(request, response) {
    try {
      const userData = await new UserManager().loggedInUserDetail(request.user);
      response.status(200).json({
        success: true,
        data: userData
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async addNewClient(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      const addClient = await new UserManager().addClient(request.body);
      if (!addClient) {
        throw new Error('Could not add client / Returned Empty');
      }
      logger.info(`Client "${request.body?.client_name}" successfully added`, { Path: request.url, User: request.user.id })
      response.status(201).json({
        success: true,
        message: 'Client successfully added'
      });
    } catch (error) {
      logger.error(`Client "${request.body?.client_name}" could not be added`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async displayUserById(request, response) {
    try {
      const userDetails = await new UserManager().showUserById(
        request.params.id
      );
      response.status(200).json({
        success: true,
        user_data: userDetails,
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async updateUser(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let updatedUser = await new UserManager().updateUser(
        request.body,
        request.params.id
      );
      response.status(201).json({
        success: true,
        message: `User with id ${updatedUser.id} is updated`,
      });
    } catch (error) {
      logger.error('User could not be updated', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: "Cannot update User",
        error: error.errors
      });
    }
  }

  async getUserStats(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new UserManager().getUserStats();
      if (!data) {
        throw new Error('Returned Empty');
      }
      response.status(200).json({
        success: true,
        message: "Displayed successfully",
        data: data
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async deleteUser(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let noOfDeletedUsers = await new UserManager().deleteUser(
        request.params.id,
        request.user.id
      );
      if (noOfDeletedUsers === 0) {
        throw new Error("No Users Deleted");
      }
      response.status(200).json({
        success: true,
        message: "User successfully deactivated.",
      });
    } catch (error) {
      logger.error('User could not be deleted', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async deleteConfiguration(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let deleteCheck = await new UserManager().deleteConfiguration(
        request.body
      );
      if (!deleteCheck) {
        throw new Error('configuration could not be deleted');
      }
      logger.info(`Configuration deleted successfully for Client ID: ${request.body?.ClientId} and Location ID: ${request.body?.LocationId}`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: `Configuration deleted successfully`,
      });
    } catch (error) {
      logger.error(`Configuration could not be deleted for Client ID: ${request.body?.ClientId} and Location ID: ${request.body?.LocationId}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: "Cannot delete configuration",
        error: error.message
      });
    }
  }

  async updateUserPassword(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let updatedUser = await new UserManager().updateUserPassword(
        request.body, request.user.id
      );
      if (updatedUser === 0) {
        throw new Error("Password could not be updated ");
      }
      else {
        response.status(200).json({
          success: true,
          message: "Password updated successfully",
        });
      }
    } catch (error) {
      logger.error('User password could not be updated', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async addDisplayLocation(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      const validateLocations = await new UserManager().validateLocation(request.body["newData"], request.params.client_id);
      if (validateLocations && validateLocations.success == true) {
        let addLocation = await new UserManager().addLocation(request.body["newData"], request.params.client_id);
        if (addLocation.success == true) {
          logger.info(`Location(s) added successfully for given Client ID: ${request.params.client_id}`, { Path: request.url, User: request.user.id });
          response.status(200).json({
            success: true,
            message: "Location added successfully",
          });
        } else {
          response.status(400).json(addLocation);
        }
      } else {
        logger.error(`Location data not could not be validated for given Client ID: ${request.params?.client_id}!`, { Path: request.url, User: request.user.id });
        response.status(400).json(validateLocations);
      }
    }
    catch (error) {
      logger.error(`Location could not be added for given Client ID: ${request.params?.client_id}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async displayLocations(request, response) {
    try {
      const requestData = request.params.client_id
      const allLocations = await new UserManager().displayLocations(requestData);
      if (allLocations) {
        response.status(200).json({
          success: true,
          data: allLocations,
        });
      } else {
        throw new Error("No locations available to fetch");
      }
    } catch (error) {
      response.status(400).json({
        success: false,
        message: "Could not display All locations",
        error: error.errors
      });
    }
  }

  async displayClient(request, response) {
    try {
      const allClients = await new UserManager().displayClient();
      if (allClients) {
        response.status(200).json({
          success: true,
          data: allClients,
        });
      } else {
        throw new Error("No clients available to fetch");
      }
    } catch (error) {
      response.status(400).json({
        success: false,
        message: "Could not display All clients",
        error: error.errors
      });
    }
  }

  async displayConfigurationByLocationId(request, response) {
    try {
      const LocationId = request.params.location_id;
      const ClientId = request.params.id;
      const requestData = {ClientId, LocationId}
      const configurationData = await new UserManager().displayConfigurationByLocationId(requestData);
      response.status(200).json({
        success: true,
        data: configurationData
      })
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      })
    }
  }

  async addUserAccess(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const checkUserExist = await new UserManager().requestAccess(request.body);
      if (!checkUserExist) {
        throw new Error("Could not generate access request for user. Please contact your Manager");
      }
      response.status(200).json({
        success: true,
        message: "User access request generated",
      });
    } catch (error) {
      logger.error('Could not generate access request for user', { Path: request.url, User: request?.body?.email });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getPendingRequests(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const data = await new UserManager().getPendingRequests(request.query.page, request.query.size);
      if (!data) {
        throw new Error('Returned Empty');
      }
      response.status(200).json({
        success: true,
        message: "Displayed successfully",
        data: data
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async userRequestAccess(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const pendingUserResponse = await new UserManager().pendingUser(request.body, request.params.id, request.params.access_status, request.user.id);
      if (!pendingUserResponse) {
        throw new Error("User access request could not be handled");
      }
      logger.info(`User access request ${request.params.id} handled by ${request.user.id}`,{ Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: pendingUserResponse,
      });
    } catch (error) {
      logger.error('User access request could not be handled', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async editUser(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let updatedUser = await new UserManager().editUser(
        request.body,
        request.params.id
      );
      if (!updatedUser) {
        throw new Error("User does not exist");
      }
      logger.info(`User successfully updated with User ID : ${request.user.id}`, { Path: request.url, User: request.user.id });
      response.status(201).json({
        success: true,
        message: "User successfully updated",
      });
    } catch (error) {
      logger.error('User could not be updated', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: "Cannot update User",
        error: error.errors
      });
    }
  }

  async updateLoggedInUser(request, response) {
    try {
      const userData = await new UserManager().updateLoggedInUser(request);
      logger.info("User updated self details", { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: "User successfully updated"
      });
    } catch (error) {
      logger.error('Cannot update User', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async applyLeaveForUser(request, response) {
    try {
      const userData = await new UserManager().applyLeaveForUser(request.body, request.user.id);
      response.status(200).json({
        success: true,
        message: userData
      });
    } catch (error) {
      logger.error('Cannot update leave', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getLeavesByUser(request, response) {
    try {
      const userData = await new UserManager().getLeavesByUser(request.params.id);
      response.status(200).json({
        success: true,
        data: userData
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getAttachments(request, response) {
    try{
      const attachments = await new UserManager().getAttachments(request.params.id);
      response.status(200).json({
        success: true,
        data: attachments
      });
    } catch(error){
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getMyLeaves(request, response) {
    try {
      const userData = await new UserManager().getMyLeaves(request.user.id, request.user.RoleId);
      response.status(200).json({
        success: true,
        data: userData
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async firstLogin(request, response) {
    try {
      if (!request) {
        throw new Error('No Request | Request Failure');
      }
      const userExistsAsActive = await new UserManager().firstLogin(request.body);
      if (!userExistsAsActive) {
        throw new Error('User does not exist or their account is inactive');
      }
      response.status(200).json({
        success: true,
        message: "User granted access",
      });
    } catch (error) {
      logger.error('User does not exist or their account is inactive', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getUserLeavesForMonth(request, response) {
    try {
      const leaveData = await new UserManager().getUserLeavesForMonth(request.params.id, request.query.month, request.query.year, request.user.RoleId);
      response.status(200).json({
        success: true,
        message: 'Leaves displayed successfully',
        data: leaveData
      });
    } catch (error) {
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async activateUserProfile(request, response) {
    if (!request) {
      throw new Error("No Request | Request Failure");
    }
    try {
      let activatedUser = await new UserManager().activateUserProfile(request.params.id);
      if (!activatedUser) {
        throw new Error('User profile could not be activated');
      }
      logger.error(`User profile successfully activated for ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: "User profile successfully activated.",
      });
    } catch (error) {
      logger.error(`User profile could not be activated for ID: ${request.params.id}`, { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async uploadProfileImage(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      const uploadedImage = await new UserManager().uploadProfileImage(request.user.id, request.body);
      if (!uploadedImage) {
        throw new Error("Could not upload profile image");
      }
      response.status(200).json({
        success: true,
        message: 'User profile image uploaded successfully',
      });
    } catch (error) {
      logger.error('Could not upload profile image', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async setNotificationAsRead(request, response) {
    try {
      if (!request) {
        throw new Error("No Request | Request Failure");
      }
      const marked = await new UserManager().setNotificationAsRead(request.user.id, request.body);
      if (!marked) {
        throw new Error("Notification could not be marked as read");
      }
      logger.info(`Notification with ID: ${request?.body?.notification_id} marked as read`, { Path: request.url, User: request.user.id });
      response.status(200).json({
        success: true,
        message: 'Notification marked as read successfully',
      });
    } catch (error) {
      logger.error("Notification could not be marked as read", { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async getReasonForNotLoggingHours(request, response){
    try {
      const userData = await new UserManager().getReasonForNotLoggingHours(request.user.id, request.params.notificationId);
      response.status(200).json({
        success: true,
        message: userData
      });
    } catch (error) {
      logger.error('Cannot update comment', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }

  async reasonForNotLoggingHours(request, response) {
    try {
      const userData = await new UserManager().reasonForNotLoggingHours(request.body, request.user.id);
      response.status(200).json({
        success: true,
        message: userData
      });
    } catch (error) {
      logger.error('Cannot update comment', { Path: request.url, User: request.user.id });
      response.status(400).json({
        success: false,
        message: error.message,
        error: error.errors
      });
    }
  }
};
