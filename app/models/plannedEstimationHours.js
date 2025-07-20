const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class PlannedEstimationHours extends Model {}
PlannedEstimationHours.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
    },
    tag_id: {
      type: DataTypes.INTEGER,
    },
    estimation_hours: {
      type: DataTypes.DECIMAL(6, 2),
    },
    manager_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

module.exports = PlannedEstimationHours;
