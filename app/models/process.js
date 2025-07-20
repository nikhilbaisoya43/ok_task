const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Location = require('./location');
const Client = require('./client');

class Process extends Model { };
Process.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    proc_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);

Location.hasMany(Process);
Client.hasMany(Process);
Process.belongsTo(Location);
Process.belongsTo(Client);

module.exports = Process;
