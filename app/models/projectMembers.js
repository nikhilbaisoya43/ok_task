const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Users = require('../models/user');
const Worklist = require("./worklist");

class ProjectMembers extends Model { }
ProjectMembers.init({
  w_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  u_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},
  {
    sequelize,
    timestamps: false,
  }
);

ProjectMembers.belongsTo(Users, { foreignKey: 'u_id' });
Worklist.hasMany(ProjectMembers, {
  foreignKey: 'w_id', // This should be the foreign key in ProjectMembers that links to Worklist
  sourceKey: 'id',    // This is the local key in Worklist
});

ProjectMembers.hasMany(Worklist , {
  foreignKey: 'id',
  sourceKey: 'w_id',
});

module.exports = ProjectMembers;