const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const Location = require('./location');
const Client = require('./client');

class CommentFlag extends Model { }
CommentFlag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    flag: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        timestamps: false,
    }
);

Location.hasMany(CommentFlag);
Client.hasMany(CommentFlag);
CommentFlag.belongsTo(Location);
CommentFlag.belongsTo(Client);

module.exports = CommentFlag;
