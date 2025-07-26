const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');

// Add this check to debug
if (!sequelize) {
    console.error('Sequelize instance is undefined. Check dbConfig.js');
    process.exit(1);
}

class Client extends Model { };
Client.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    client_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Use DataTypes.NOW instead of Sequelize.literal
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize, // shorthand for sequelize: sequelize
    modelName: 'Client',
    paranoid: true
});

module.exports = Client;