const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Worklist = require('./worklist');
const User = require('./user');

class Epic extends Model { };
Epic.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
},
    {
        sequelize,
        paranoid: true,
    }
);

Worklist.hasMany(Epic);
Epic.belongsTo(Worklist);
Epic.belongsTo(User);
User.hasMany(Epic);

module.exports = Epic;
