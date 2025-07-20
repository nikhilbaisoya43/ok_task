const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Sequelize = require('sequelize');
const Role = require("./role");
const Location = require('./location');
const Client = require('./client');
const Specialty = require('./specialty');
const Designation = require("./designation");

class User extends Model { }
User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
  },
  joining_date: {
    type: DataTypes.DATEONLY,
  },
  specialty: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee_id: {
    type: DataTypes.STRING,
  },
  azure_id: {
    type: DataTypes.STRING(50),
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  image_url: {
    type: DataTypes.STRING(1024),
    defaultValue: null,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('NOW'),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.fn('NOW'),
  },
  added_by: {
    type: DataTypes.INTEGER
  }
},
  {
    sequelize,
  }
);

Role.hasMany(User);
User.belongsTo(Role);

User.belongsTo(Designation);
Designation.hasMany(User);

User.belongsToMany(Location, { through: 'UserLocations' });
Location.belongsToMany(User, { through: 'UserLocations' })

User.belongsToMany(Client, { through: 'UserClients' });
Client.belongsToMany(User, { through: 'UserClients' });

User.belongsToMany(Specialty, { through: 'UserSpecialties' });
Specialty.belongsToMany(User, { through: 'UserSpecialties' });

User.belongsTo(User, { as: 'AddedByUser', foreignKey: 'added_by' });

module.exports = User;
