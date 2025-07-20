const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const User = require('./user');
const { Chart } = require('./chart');

class LogHours extends Model { }
LogHours.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hours: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500)
    },
    hours_calc: {
        type: DataTypes.DECIMAL(4,2)
    }
},
    {
        sequelize,
        paranoid: true
    }
);

User.hasMany(LogHours, { foreignKey: 'assignee_id' });
LogHours.belongsTo(User, { foreignKey: 'assignee_id' });

Chart.hasMany(LogHours, { foreignKey: 'task_id' });
LogHours.belongsTo(Chart, { foreignKey: 'task_id' });

module.exports = LogHours;
