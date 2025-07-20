const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const { Chart } = require("./chart");

class ChartHoldReasons extends Model { }
ChartHoldReasons.init(
  {
    ChartId: {
      type: DataTypes.INTEGER,
    },
    HoldReasonId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);
Chart.hasMany(ChartHoldReasons, {foreignKey: 'ChartId', as: 'ChartHoldReason'});
ChartHoldReasons.belongsTo(Chart,{foreignKey: 'ChartId', as: 'Chart'});


module.exports = ChartHoldReasons;
