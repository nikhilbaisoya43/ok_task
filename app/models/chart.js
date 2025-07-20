const { Model, DataTypes, Op } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Worklist = require('./worklist');
const User = require('./user');
const Client = require('./client');
const Process = require('./process');
const Specialty = require('./specialty');
const Epic = require('./epic');
const Sprint = require('./sprint');
const { milestoneConstants, worklistStatusIdConstants } = require('../common/constants');
const TaskActivity = require('./taskActivity');

class Milestone extends Model { };
Milestone.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    milestone_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
},
    {
        sequelize,
        timestamps: false
    }
);
Client.hasMany(Milestone);
Milestone.belongsTo(Client);

class Priority extends Model { };
Priority.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    priority_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
},
    {
        sequelize,
        timestamps: false
    }
);
Client.hasMany(Priority);
Priority.belongsTo(Client);

class TaskType extends Model { };
TaskType.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
},
    {
        sequelize,
        timestamps: false
    }
);
Client.hasMany(TaskType);
TaskType.belongsTo(Client);

class HoldReason extends Model { };
HoldReason.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    hold_reason: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);
Client.hasMany(HoldReason);
HoldReason.belongsTo(Client);

class Chart extends Model { }
Chart.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    s_no: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    release_version: {
        type: DataTypes.STRING,
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
    task_type: {
        type: DataTypes.INTEGER,
    },
},
    {
        sequelize,
        paranoid: true,
        hooks: {
            beforeUpdate: async (task, options) => {
                try {
                    const previousValues = task._previousDataValues;
                    let { areHoldReasonsChanged = false, HoldReasons } = options;
                    const changedArray = task.changed();
    
                    if (changedArray.length !== 0 && !(changedArray.length === 1 && changedArray.includes('updatedAt')) && !(changedArray.length === 2 && changedArray.includes('updatedAt') && changedArray.includes('updated_by')) || changedArray.length > 2 || areHoldReasonsChanged) {
                        previousValues.updated_task_at = previousValues.updatedAt;
                        const existingActivityLog = await TaskActivity.findOne({where: {id: task.dataValues.id}, attributes: ['id']});
                        if(!existingActivityLog){
                            previousValues.action = 'CREATE';
                        } else {
                            previousValues.action = 'UPDATE';
                        }
                        if(!HoldReasons){
                            HoldReasons = await task.getHoldReasons();
                        }
                        const insertTaskActivityLog = await TaskActivity.create(previousValues);
                        await insertTaskActivityLog.setHoldReasons(HoldReasons);
                    }
                } catch (error) {
                    throw error;
                }
            }
        }
    }
);

Sprint.hasMany(Chart);
Epic.hasMany(Chart);
Process.hasMany(Chart);
Milestone.hasMany(Chart);
Priority.hasMany(Chart);
TaskType.hasMany(Chart);
Specialty.hasMany(Chart);
Worklist.hasMany(Chart);
Client.hasMany(Chart);
User.hasMany(Chart);
User.hasMany(Chart, { as: 'Assignee', foreignKey: 'assignee_id' });
User.hasMany(Chart, { as: 'Allocator', foreignKey: 'allocator_id' });
User.hasMany(Chart, { as: 'Updater', foreignKey: 'updated_by' });

Chart.belongsTo(Sprint);
Chart.belongsTo(Epic);
Chart.belongsTo(Process);
Chart.belongsTo(Milestone);
Chart.belongsTo(Priority);
Chart.belongsTo(TaskType);
Chart.belongsTo(Specialty);
Chart.belongsTo(Worklist);
Chart.belongsTo(Client);
Chart.belongsTo(User);
Chart.belongsTo(User, { as: 'Assignee', foreignKey: 'assignee_id' });
Chart.belongsTo(User, { as: 'Allocator', foreignKey: 'allocator_id' });
Chart.belongsTo(User, { as: 'Updater', foreignKey: 'updated_by' });

Chart.belongsToMany(HoldReason, { through: 'ChartHoldReasons' });
HoldReason.belongsToMany(Chart, { through: 'ChartHoldReasons' });

Chart.hasMany(TaskActivity, { foreignKey: 'id', as: 'TaskActivity' });
TaskActivity.belongsTo(Chart, { foreignKey: 'id', as: 'Chart' });
TaskActivity.belongsToMany(HoldReason, { through: 'TaskActivityHoldReasons' });
HoldReason.belongsToMany(TaskActivity, { through: 'TaskActivityHoldReasons' });

Sprint.hasMany(TaskActivity);
Epic.hasMany(TaskActivity);
Process.hasMany(TaskActivity);
Milestone.hasMany(TaskActivity);
Priority.hasMany(TaskActivity);
TaskType.hasMany(TaskActivity);
Worklist.hasMany(TaskActivity);
Client.hasMany(TaskActivity);
User.hasMany(TaskActivity);
User.hasMany(TaskActivity, { as: 'TaskAssignee', foreignKey: 'assignee_id' });

TaskActivity.belongsTo(Sprint);
TaskActivity.belongsTo(Epic);
TaskActivity.belongsTo(Process);
TaskActivity.belongsTo(Milestone);
TaskActivity.belongsTo(Priority);
TaskActivity.belongsTo(TaskType);
TaskActivity.belongsTo(Worklist);
TaskActivity.belongsTo(Client);
TaskActivity.belongsTo(User, { as: 'TaskAssignee', foreignKey: 'assignee_id' });

module.exports = { Chart, Milestone, Priority, TaskType, HoldReason };