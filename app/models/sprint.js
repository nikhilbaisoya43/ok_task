const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Worklist = require('./worklist');
const User = require('./user');
const SprintStatus = require('./sprintStatus');

class Sprint extends Model { };
Sprint.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    duration: {
        type: DataTypes.INTEGER,
    },
    start_date: {
        type: DataTypes.DATEONLY,
    },
    end_date: {
        type: DataTypes.DATEONLY,
    }
},
    {
        sequelize,
        paranoid: true,
    }
);

Worklist.hasMany(Sprint);
Sprint.belongsTo(Worklist);
Sprint.belongsTo(User);
User.hasMany(Sprint);
Sprint.belongsTo(SprintStatus);
SprintStatus.hasMany(Sprint);

module.exports = Sprint;
