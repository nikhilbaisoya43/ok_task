const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Location = require('./location');
const Client = require('./client');
const Role = require('./role');

class Designation extends Model { }
Designation.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
    }
);

Client.hasMany(Designation);
Designation.belongsTo(Client);
Location.hasMany(Designation);
Designation.belongsTo(Location);
Role.hasMany(Designation);
Designation.belongsTo(Role);

module.exports = Designation;
