const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class NotificationType extends Model { }
NotificationType.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    sequelize,
    paranoid: true
  }
);

module.exports = NotificationType;
