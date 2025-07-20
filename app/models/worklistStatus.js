const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class WorklistStatus extends Model { }
WorklistStatus.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        sequelize,
    }
);

module.exports = WorklistStatus;
