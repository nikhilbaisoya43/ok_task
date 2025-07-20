const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Location = require('./location');
const Client = require('./client');
const TechStackCategory = require("./techStackCategory");
class Specialty extends Model { };
Specialty.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    spec_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);

Location.hasMany(Specialty);
Client.hasMany(Specialty);
Specialty.belongsTo(Location);
Specialty.belongsTo(Client);

Specialty.belongsToMany(TechStackCategory, { through: 'TechStackCategorySpecialties' });
TechStackCategory.belongsToMany(Specialty, { through: 'TechStackCategorySpecialties' });

module.exports = Specialty;
