const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Client = require('./client')
const Sequelize = require('sequelize');

class Location extends Model { };
Location.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    loc_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
},
    {
        sequelize,
        paranoid:true,
    }
);

Client.hasMany(Location);
Location.belongsTo(Client);
module.exports = Location;
