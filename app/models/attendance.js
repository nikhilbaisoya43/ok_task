const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const User = require("./user");
const Client = require('./client');
const Location = require('./location');

class Attendance extends Model { }
Attendance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    in_time: {
      type: DataTypes.TIME,
    },
    out_time: {
      type: DataTypes.TIME,
    },
    duration: {
      type: DataTypes.TIME,
    },
    is_on_leave: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);

User.hasMany(Attendance);
Location.hasMany(Attendance);
Client.hasMany(Attendance);

Attendance.belongsTo(User);
Attendance.belongsTo(Client);
Attendance.belongsTo(Location);

module.exports = Attendance;
