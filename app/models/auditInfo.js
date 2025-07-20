const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbConfig");
const { PrimDiagFeedback, SecDiagFeedback, ProceduresFeedback, EdEmFeedback, EdEmLevelCodes, ModifierFeedback } = require('./feedbackCategories');
const Location = require('./location');
const Client = require('./client');

class FeedbackType extends Model { }
FeedbackType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    feed_type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    paranoid: true
  }
);
Location.hasMany(FeedbackType);
Client.hasMany(FeedbackType);
FeedbackType.belongsTo(Location);
FeedbackType.belongsTo(Client);

class QCStatus extends Model { }
QCStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    qc_status_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);
Location.hasMany(QCStatus);
Client.hasMany(QCStatus);
QCStatus.belongsTo(Location);
QCStatus.belongsTo(Client);

class AuditInfo extends Model { }
AuditInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    ed_em_total: {
      type: DataTypes.INTEGER,
    },
    ed_em_correct: {
      type: DataTypes.INTEGER,
    },
    proc_total: {
      type: DataTypes.INTEGER,
    },
    proc_correct: {
      type: DataTypes.INTEGER,
    },
    prim_diag_total: {
      type: DataTypes.INTEGER,
    },
    prim_diag_correct: {
      type: DataTypes.INTEGER,
    },
    sec_diag_total: {
      type: DataTypes.INTEGER,
    },
    sec_diag_correct: {
      type: DataTypes.INTEGER,
    },
    modifier_total: {
      type: DataTypes.INTEGER,
    },
    modifier_correct: {
      type: DataTypes.INTEGER,
    },
    total_total: {
      type: DataTypes.INTEGER,
    },
    total_correct: {
      type: DataTypes.INTEGER,
    },
    chart_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
  }
);

FeedbackType.hasMany(AuditInfo);
QCStatus.hasMany(AuditInfo);
Location.hasMany(AuditInfo);
Client.hasMany(AuditInfo);

AuditInfo.belongsTo(FeedbackType);
AuditInfo.belongsTo(QCStatus);
AuditInfo.belongsTo(Location);
AuditInfo.belongsTo(Client);

PrimDiagFeedback.belongsToMany(AuditInfo, { through: 'AuditInfoPrimDiagFeedbacks' });
SecDiagFeedback.belongsToMany(AuditInfo, { through: 'AuditInfoSecDiagFeedbacks' });
ProceduresFeedback.belongsToMany(AuditInfo, { through: 'AuditInfoProceduresFeedbacks' });
EdEmFeedback.belongsToMany(AuditInfo, { through: 'AuditInfoEdEmFeedbacks' });
ModifierFeedback.belongsToMany(AuditInfo, { through: 'AuditInfoModifierFeedbacks' });

AuditInfo.belongsToMany(PrimDiagFeedback, { through: 'AuditInfoPrimDiagFeedbacks' });
AuditInfo.belongsToMany(SecDiagFeedback, { through: 'AuditInfoSecDiagFeedbacks' });
AuditInfo.belongsToMany(ProceduresFeedback, { through: 'AuditInfoProceduresFeedbacks' });
AuditInfo.belongsToMany(EdEmFeedback, { through: 'AuditInfoEdEmFeedbacks' });
AuditInfo.belongsToMany(ModifierFeedback, { through: 'AuditInfoModifierFeedbacks' });

module.exports = {
  AuditInfo,
  FeedbackType,
  QCStatus,
};
