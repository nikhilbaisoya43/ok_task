const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const User = require("./user");
const Notification = require("./notification");

class NotificationComment extends Model {}
NotificationComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    notification_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    user_message: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    paranoid: true,
  }
);

User.hasMany(NotificationComment, { foreignKey: "user_id" });
NotificationComment.belongsTo(User, { foreignKey: "user_id" });

Notification.hasMany(NotificationComment, { foreignKey: "notification_id" });
NotificationComment.belongsTo(Notification, { foreignKey: "notification_id" });
module.exports = NotificationComment;
