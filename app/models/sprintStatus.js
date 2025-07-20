const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class SprintStatus extends Model { }
SprintStatus.init({
    id: {
        type: DataTypes.INTEGER,
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

module.exports = SprintStatus;