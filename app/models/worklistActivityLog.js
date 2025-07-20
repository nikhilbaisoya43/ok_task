const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class WorklistActivityLog extends Model { };
WorklistActivityLog.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    worklist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    from: {
        type: DataTypes.INTEGER
    },
    to: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activity_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    assignee_id: {
        type: DataTypes.INTEGER
    },
    activity_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,

    }
);

module.exports = WorklistActivityLog;
