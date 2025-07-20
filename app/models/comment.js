const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const { Chart } = require('./chart');
const User = require('./user');
const CommentFlag = require('./commentFlag');
const Location = require('./location');
const Client = require('./client');

class Comment extends Model { }
Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  parent_id: {
    type: DataTypes.INTEGER,
  },
  comment_msg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment_timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
},
  {
    sequelize,
    timestamps: false,
  }
);

Location.hasMany(Comment);
Client.hasMany(Comment);
Chart.hasMany(Comment);
User.hasMany(Comment);
CommentFlag.hasMany(Comment);

Comment.belongsTo(Location);
Comment.belongsTo(Client);
Comment.belongsTo(CommentFlag);
Comment.belongsTo(Chart);
Comment.belongsTo(User);

module.exports = Comment;
