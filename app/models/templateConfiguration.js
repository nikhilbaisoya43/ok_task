const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Template = require('./template');

class TemplateConfiguration extends Model { };
TemplateConfiguration.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    field_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    report: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }, filter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false
    }
);

Template.hasMany(TemplateConfiguration);
TemplateConfiguration.belongsTo(Template);

module.exports = TemplateConfiguration;
