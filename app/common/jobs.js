const { userRoleConstants, } = require("../common/constants");
const moment = require("moment");
const logger = require("../services/winstonLogger");
const LogHours = require("../models/logHours");
const User = require("../models/user");
const ProjectMembers = require("../models/projectMembers");
const Sequelize = require("sequelize");
const {
  sendNotificationForNotLogging,
  sendNotificationForNotLoggingForThreeDays,
} = require("../services/nodemailer");
const Notification = require("../models/notification");
const { Op } = require("sequelize");
const Role = require("../models/role");

module.exports = class CronJobs {
  constructor() {
    this.getPreviousDay = this.getPreviousDay.bind(this);
    this.getLoggedUsersForDate = this.getLoggedUsersForDate.bind(this);
    this.getUniqueUsers = this.getUniqueUsers.bind(this);
    this.getUsersNotLoggedToday = this.getUsersNotLoggedToday.bind(this);
    this.sendNotificationForNotLogging =
      this.sendNotificationForNotLogging.bind(this);
    this.sendNotificationOnMissingOutTimeLogging =
      this.sendNotificationOnMissingOutTimeLogging.bind(this);
    this.findUserDetailsAndRole = this.findUserDetailsAndRole.bind(this);
    this.userNotifications = [];
  }

  async getPreviousDay() {
    return moment().subtract(1, "days");
  }

  async getLoggedUsersForDate(date) {
    return LogHours.findAll({
      where: {
        date: date.format("YYYY-MM-DD"),
      },
      attributes: ["assignee_id"],
      raw: true,
    });
  }

  async getUniqueUsers(users) {
    const arrayOfUsers = users?.map((response) => response?.assignee_id);
    const removeDuplicateUsers = new Set(arrayOfUsers);
    return [...removeDuplicateUsers];
  }

  async getUsersNotLoggedToday(uniqueLoggedUsers) {
    const { MEMBER_ID, TEAM_LEAD_ID } = userRoleConstants;
    return User.findAll({
      where: {
        id: {
          [Op.notIn]: uniqueLoggedUsers,
        },
        RoleId: { [Op.in]: [MEMBER_ID, TEAM_LEAD_ID] },
      },
      include: {
        model: Role,
        attributes: []
      },
      attributes: ["id", "first_name", "last_name", "email", [Sequelize.col("Role.role_name"), "role"]],
      raw: true,
    });
  }

  async sendNotificationForNotLogging(user, previousDay) {
    const assignee_name = `${user?.first_name} ${user?.last_name}`;
    const email = user?.email;
    await Notification.create({
      user_id: user.id,
      notification: "You have not filled your time sheet",
      is_read: false,
      notification_type_id: 1,
    });
    sendNotificationForNotLogging({
      assignee_name: assignee_name,
      email: email,
      date: previousDay.format("DD/MM/YYYY"),
    });
  }

  async sendNotificationOnMissingOutTimeLogging() {
    try {
      const yesterday = moment().subtract(1, 'day');
      if (isDayOff(yesterday)) {
        return;
      }

      const previousDay = await this.getPreviousDay();
      const UsersWhoHaveLoggedToday = await this.getLoggedUsersForDate(
        previousDay
      );
      const arrayAfterRemovingDuplicateUsers = await this.getUniqueUsers(
        UsersWhoHaveLoggedToday
      );
      const UsersWhoHaveNotLoggedToday = await this.getUsersNotLoggedToday(
        arrayAfterRemovingDuplicateUsers
      );

      for (const singleUser of UsersWhoHaveNotLoggedToday) {
        await this.sendNotificationForNotLogging(singleUser, previousDay);
      }

      const today = moment();
      const lastThreeWorkingDays = [{ date: '' }, { date: '' }, { date: '' }];
      let daysToSubtract = 1;
      let date;
      lastThreeWorkingDays.forEach(day => {
        date = today.subtract(daysToSubtract, 'days');
        while (isDayOff(date)) {
          date = today.subtract(daysToSubtract, 'days');
          daysToSubtract++;
        }
        day.date = date.format("YYYY-MM-DD");
        daysToSubtract = 1;
      });

      const UsersWhoHaveLoggedInLastThreeDays = await LogHours.findAll({
        where: {
          [Op.and]: lastThreeWorkingDays,
        },
        attributes: ["assignee_id"],
        raw: true,
      });

      const arrayAfterRemovingDuplicateUsersThreeDays =
        await this.getUniqueUsers(UsersWhoHaveLoggedInLastThreeDays);

      const UsersWhoHaveNotLoggedForThreeDays =
        await this.getUsersNotLoggedToday(
          arrayAfterRemovingDuplicateUsersThreeDays
        );

      for (const singleUser of UsersWhoHaveNotLoggedForThreeDays) {
        await this.findWorklistsByUserId(singleUser);
      }

      for (const sendNotification of this.userNotifications) {
        sendNotification.userDetails.sort((record1, record2) => (record1.first_name.toUpperCase() ?? "") > (record2.first_name.toUpperCase() ?? "") ? 1 : -1)
        await sendNotificationForNotLoggingForThreeDays(
          sendNotification.managerEmail,
          sendNotification.userDetails,
          lastThreeWorkingDays
        );
      }

      this.userNotifications = [];
    } catch (err) {
      logger.error(
        "Cron Job to send notification on missing out time logging failed | " + err
      );
    }
  }

  async findWorklistsByUserId(singleUser) {
    try {
      const user = await User.findByPk(singleUser.id);

      if (!user) {
        logger.error("User not found");
        return [];
      }

      const assignedWorkList = await ProjectMembers.findAll({
        where: { u_id: singleUser.id },
        raw: true,
      });

      const worklistIds = assignedWorkList.map((pm) => pm.w_id);

      const projectMembers = await ProjectMembers.findAll({
        where: { w_id: worklistIds },
        raw: true,
      });

      const uniqueUserIds = [
        ...new Set(projectMembers.map((member) => member.u_id)),
      ];

      const managerDetails = await this.findUserDetailsAndRole(uniqueUserIds);


      for (const managerEmail of managerDetails) {
        let managerEntry = this.userNotifications.find(
          (entry) => entry.managerEmail === managerEmail
        );

        if (!managerEntry) {
          managerEntry = {
            managerEmail: managerEmail,
            userDetails: [],
          };
          this.userNotifications.push(managerEntry);
        }

        managerEntry.userDetails.push({
          id: singleUser.id,
          first_name: singleUser.first_name,
          last_name: singleUser.last_name,
          email: singleUser.email,
          role: singleUser.role
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async findUserDetailsAndRole(uniqueUserIds) {
    try {
      const { MANAGER_ID } = userRoleConstants;
      const users = await User.findAll({
        where: { id: uniqueUserIds, RoleId: MANAGER_ID },
        attributes: ["id", "first_name", "last_name", "email"],
        raw: true,
      });
      const userEmails = users.map((user) => user.email);
      return userEmails;
    } catch (error) {
      throw error;
    }
  }
};

function isDayOff(date = moment()) {
  if (!moment.isMoment(date)) {
    date = moment(date);
  }
  const dayOfWeek = date.day();

  const SUNDAY_DAY_OF_WEEK = 0;
  const MONDAY_DAY_OF_WEEK = 1;
  const SATURDAY_DAY_OF_WEEK = 6;

  if (dayOfWeek >= MONDAY_DAY_OF_WEEK && dayOfWeek < SATURDAY_DAY_OF_WEEK) {
    return false;
  }

  if (dayOfWeek === SUNDAY_DAY_OF_WEEK) {
    return true;
  }

  if (dayOfWeek === SATURDAY_DAY_OF_WEEK) {
    return isFirstSaturday(date) || isThirdSaturday(date);
  }
}

function isFirstSaturday(date) {
  return isNthSaturday(date, 1);
}

function isThirdSaturday(date) {
  return isNthSaturday(date, 3);
}

function isNthSaturday(today, n) {
  const thisMonth = today.clone().startOf('month');
  const firstSaturday = thisMonth.day(6);
  const nthSaturday = firstSaturday.add(n - 1, 'week');
  return nthSaturday.date() === today.date();
}
