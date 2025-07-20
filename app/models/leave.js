const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const User = require('./user');

class Leave extends Model { }
Leave.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    from_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    to_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    all_day: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
},
    {
        sequelize,
        modelName: 'Leave',
        tableName: 'Leaves',
    });

Leave.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Leave, { foreignKey: 'user_id' });

module.exports = Leave;
