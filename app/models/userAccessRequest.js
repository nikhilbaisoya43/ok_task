const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");

class UserAccessRequest extends Model { }
UserAccessRequest.init({
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  azure_id: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  action: {
    type: DataTypes.STRING,
  },
  request: {
    type: DataTypes.DATE,
  },
  access_granted: {
    type: DataTypes.BOOLEAN,
  },
  updated_by: {
    type: DataTypes.INTEGER
  }
},
  {
    sequelize,
  }
);

module.exports = UserAccessRequest;
