const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig');
const { HoldReason, ResponsibleParty, Milestone, Chart } = require('./chart');
const Specialty = require('./specialty');

class ChartAudit extends Model { }
ChartAudit.init({
    ChartAudits_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    id: {
        type: DataTypes.INTEGER,
    },
    s_no: {
        type: DataTypes.INTEGER,
    },
    start_date: {
        type: DataTypes.DATEONLY,
    },
    end_date: {
        type: DataTypes.DATEONLY,
    },
    unique_task_no: {
        type: DataTypes.STRING,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    assignee_id: {
        type: DataTypes.INTEGER
    },
    allocator_id: {
        type: DataTypes.INTEGER
    },
    created_by: {
        type: DataTypes.INTEGER,
    },
    updated_by: {
        type: DataTypes.INTEGER,
    },
    ProcessId: {
        type: DataTypes.INTEGER,
    },
    MilestoneId: {
        type: DataTypes.INTEGER,
    },
    SpecialtyId: {
        type: DataTypes.INTEGER,
    },
    PriorityId: {
        type: DataTypes.INTEGER,
    },
    WorklistId: {
        type: DataTypes.INTEGER,
    },
    UserId: {
        type: DataTypes.INTEGER,
    },
    TaskTypeId: {
        type: DataTypes.INTEGER,
    },
    type: {
        type: DataTypes.INTEGER,
    },

},
    {
        sequelize,
    }
);

Milestone.hasMany(ChartAudit);
ChartAudit.belongsTo(Milestone);
Specialty.hasMany(ChartAudit);
ChartAudit.belongsTo(Specialty);
Chart.hasMany(ChartAudit, { foreignKey: 'id', as: 'ChartAudit' });
ChartAudit.belongsTo(Chart, { foreignKey: 'id', as: 'Chart' });

// ChartAudit.belongsToMany(AuditOption, { through: 'ChartAuditsAuditOptions' })
ChartAudit.belongsToMany(HoldReason, { through: 'ChartAuditsHoldReasons' });
// ChartAudit.belongsToMany(ResponsibleParty, { through: 'ChartAuditsResponsibleParties' });

// AuditOption.belongsToMany(ChartAudit, { through: 'ChartAuditsAuditOptions' });
HoldReason.belongsToMany(ChartAudit, { through: 'ChartAuditsHoldReasons' });
// ResponsibleParty.belongsToMany(ChartAudit, { through: 'ChartAuditsResponsibleParties' });

// ChartAudit.sync({ alter: true })

module.exports = ChartAudit;
