const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');

class Template extends Model { };
Template.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
},
    {
        sequelize,
        timestamps: false
    }
);

module.exports = Template;
