const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Sequelize = require('sequelize');

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

module.exports = Client;
