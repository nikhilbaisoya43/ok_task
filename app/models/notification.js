const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const User = require('./user');
const NotificationType = require('./notificationType');

class Notification extends Model { }
Notification.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  notification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_read: {
    type: DataTypes.BOOLEAN,
  },
  task_id: {
    type: DataTypes.INTEGER,
  },
  notification_type_id: {
    type: DataTypes.INTEGER,
  },
},
  {
    sequelize,
    paranoid: true
  }
);

User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

NotificationType.hasMany(Notification, { foreignKey: 'notification_type_id' });
Notification.belongsTo(NotificationType, { foreignKey: 'notification_type_id' });

module.exports = Notification;
