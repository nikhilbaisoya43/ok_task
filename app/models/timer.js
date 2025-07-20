const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const User = require("./user");
const { Chart } = require("./chart");
const Role = require("./role");
const Location = require('./location');
const Client = require('./client');

class Timer extends Model { }
Timer.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  start_time: {
    type: DataTypes.DATE,
  },
  stop_time: {
    type: DataTypes.DATE,
  },
  UserId: {
    type: DataTypes.INTEGER,
  },
  duration_time: {
    type: DataTypes.INTEGER,
  },
},
  {
    sequelize,
  }
);

User.hasMany(Timer);
Timer.belongsTo(User);
Role.hasMany(Timer);
Timer.belongsTo(Role);
Chart.hasMany(Timer);
Timer.belongsTo(Chart);
Location.hasMany(Timer);
Timer.belongsTo(Location);
Client.hasMany(Timer);
Timer.belongsTo(Client);

module.exports = Timer;
