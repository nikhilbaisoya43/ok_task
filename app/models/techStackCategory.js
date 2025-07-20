const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class TechStackCategory extends Model { };
TechStackCategory.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    group_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);

module.exports = TechStackCategory;
