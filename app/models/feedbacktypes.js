const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class FeedbackTypes extends Model { }
FeedbackTypes.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  feed_type_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    sequelize,
    paranoid: true
  }
);

module.exports = FeedbackTypes;