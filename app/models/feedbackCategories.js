const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const Location = require('./location');
const Client = require('./client');

class PrimDiagFeedback extends Model { }
PrimDiagFeedback.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    feedback_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);
Location.hasMany(PrimDiagFeedback);
Client.hasMany(PrimDiagFeedback);
PrimDiagFeedback.belongsTo(Location);
PrimDiagFeedback.belongsTo(Client);

class SecDiagFeedback extends Model { }
SecDiagFeedback.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    feedback_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);
Location.hasMany(SecDiagFeedback);
Client.hasMany(SecDiagFeedback);
SecDiagFeedback.belongsTo(Location);
SecDiagFeedback.belongsTo(Client);

class ProceduresFeedback extends Model { }
ProceduresFeedback.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    feedback_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);
Location.hasMany(ProceduresFeedback);
Client.hasMany(ProceduresFeedback);
ProceduresFeedback.belongsTo(Location);
ProceduresFeedback.belongsTo(Client);

class EdEmFeedback extends Model { }
EdEmFeedback.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    feedback_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);
Location.hasMany(EdEmFeedback);
Client.hasMany(EdEmFeedback);
EdEmFeedback.belongsTo(Location);
EdEmFeedback.belongsTo(Client);

class EdEmLevelCodes extends Model { }
EdEmLevelCodes.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false
    }
);
Location.hasMany(EdEmLevelCodes);
Client.hasMany(EdEmLevelCodes);
EdEmLevelCodes.belongsTo(Location);
EdEmLevelCodes.belongsTo(Client);

class ModifierFeedback extends Model { }
ModifierFeedback.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    feedback_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        paranoid: true
    }
);
Location.hasMany(ModifierFeedback);
Client.hasMany(ModifierFeedback);
ModifierFeedback.belongsTo(Location);
ModifierFeedback.belongsTo(Client);

module.exports = { PrimDiagFeedback, SecDiagFeedback, ProceduresFeedback, EdEmFeedback, EdEmLevelCodes, ModifierFeedback };
