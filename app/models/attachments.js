const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class Attachments extends Model { }
Attachments.init(
    { id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid:true,
  }
);

module.exports = Attachments;