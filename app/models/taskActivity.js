const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const User = require('./user');

class TaskActivity extends Model { }
TaskActivity.init({
    TaskActivity_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    s_no: {
        type: DataTypes.INTEGER,
    },
    start_date: {
        type: DataTypes.DATEONLY,
    },
    end_date: {
        type: DataTypes.DATEONLY,
    },
    unique_task_no: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    estimation: {
        type: DataTypes.STRING(5),
    },
    description: {
        type: DataTypes.TEXT,
    },
    assignee_id: {
        type: DataTypes.INTEGER
    },
    allocator_id: {
        type: DataTypes.INTEGER
    },
    created_by: {
        type: DataTypes.INTEGER,
    },
    updated_by: {
        type: DataTypes.INTEGER,
    },
    ProcessId: {
        type: DataTypes.INTEGER,
    },
    MilestoneId: {
        type: DataTypes.INTEGER,
    },
    PriorityId: {
        type: DataTypes.INTEGER,
    },
    WorklistId: {
        type: DataTypes.INTEGER,
    },
    UserId: {
        type: DataTypes.INTEGER,
    },
    TaskTypeId: {
        type: DataTypes.INTEGER,
    },
    ClientId: {
        type: DataTypes.INTEGER,
    },
    SprintId: {
        type: DataTypes.INTEGER,
    },
    EpicId: {
        type: DataTypes.INTEGER,
    },
    action: {
        type: DataTypes.STRING,
    },
    updated_task_at: {
        type: DataTypes.DATE
    }
},
    {
        sequelize,
    }
);

User.hasMany(TaskActivity, { as: 'Actor', foreignKey: 'updated_by' });
TaskActivity.belongsTo(User, { as: 'Actor', foreignKey: 'updated_by' });

module.exports = TaskActivity;
