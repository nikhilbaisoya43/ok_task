const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const LogHours = require("./logHours");
const { Chart } = require("./chart");

class Tags extends Model { }
Tags.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        sequelize,
        paranoid: true,
        timestamps: false,
    }
);


Tags.belongsToMany(LogHours, {through: 'LogHoursTags' });
LogHours.belongsToMany(Tags, {through: 'LogHoursTags' });

Tags.belongsToMany(Chart,  {through: 'ChartTags' });
Chart.belongsToMany(Tags,  {through: 'ChartTags' });

module.exports = Tags;