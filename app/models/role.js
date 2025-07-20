const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Location = require('./location');
const Client = require('./client');

class Role extends Model { }
Role.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  role_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    sequelize,
    timestamps: false,
  }
);

Location.hasMany(Role);
Client.hasMany(Role);
Role.belongsTo(Location);
Role.belongsTo(Client);

module.exports = Role;
