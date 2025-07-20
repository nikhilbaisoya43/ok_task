const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Location = require('./location');
const Client = require('./client');
const Specialty = require('./specialty');
const Process = require('./process');
const User = require('./user');
const WorklistStatus = require('./worklistStatus');

class Worklist extends Model { }
Worklist.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  worklist_no: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  worklist_code: {
    type: DataTypes.STRING,
    unique: true,
  },
  name : {
    type: DataTypes.STRING,
    validate: {
      len: [3, 100]
    }
  },
  start_date: {
    type: DataTypes.DATEONLY,
  },
  end_date: {
    type: DataTypes.DATEONLY,
  },
  created_by: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  owner: {
    type: DataTypes.INTEGER,
  },
},
  {
    sequelize,
    paranoid: true
  }
);

Location.hasMany(Worklist);
Client.hasMany(Worklist);
Worklist.belongsTo(Location);
Worklist.belongsTo(Client);
Process.hasMany(Worklist);
Worklist.belongsTo(Process);
WorklistStatus.hasMany(Worklist);
Worklist.belongsTo(WorklistStatus);
User.hasOne(Worklist, { foreignKey: 'changed_by' });
Worklist.belongsTo(User, { foreignKey: 'changed_by' });
User.hasOne(Worklist, { foreignKey: 'owner', as: 'Owner' });
Worklist.belongsTo(User, { foreignKey: 'owner', as: 'Owner' });
Specialty.belongsToMany(Worklist, { through: 'ProjectSpecialties' });
Worklist.belongsToMany(Specialty, { through: 'ProjectSpecialties' });

module.exports = Worklist;
