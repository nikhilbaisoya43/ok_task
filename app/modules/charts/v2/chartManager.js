const { Chart, Milestone } = require('../../../models/chart');
const ChartAudit = require('../../../models/chartAudit');
const User = require('../../../models/user');
const Role = require('../../../models/role');
const Timer = require('../../../models/timer');
const moment = require('moment');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { milestoneConstants, chartStatusConstants, userRoleConstants,
  qcStatusConstants } = require('../../../common/constants');
const Worklist = require('../../../models/worklist');

module.exports = class ChartManager {

  async getUserWorklistStats(user) {
    try {
      const {
        IN_PROGRESS_MILESTONE_ID, READY_FOR_QA_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID,
        QA_IN_PROGRESS_MILESTONE_ID, APPROVED_MILESTONE_ID, DEV_IN_PROGRESS_MILESTONE_ID, TODO_MILESTONE_ID } = milestoneConstants;
      const { QC_PASS_ID, QC_FAIL_ID } = qcStatusConstants
      const { OPEN_STATUS_ID, COMPLETE_STATUS_ID, INCOMPLETE_STATUS_ID } = chartStatusConstants;
      const UserId = user.id;

      const userRole = await User.findByPk(user.id, {
        include: {
          model: Role,
          attributes: []
        },
        attributes: [[Sequelize.col('Role.id'), 'id'],]
      });

      const { CODER_ID, MEMBER_ID, MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;

      let completeStatusCount = 0;
      let incompleteStatusCount = 0;

      if (userRole.id != MANAGER_ID && userRole.id != TEAM_LEAD_ID) {
        const chartsWorkedOnByUser = await ChartAudit.findAll({
          where: {
            [Op.or]: [
              { coder_id: user.id },
              { auditor_id: user.id },
            ],
            createdAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: ['id'],
          raw: true,
          group: ['id']
        });
        const chartsWorkedOnByUserIds = chartsWorkedOnByUser.map(chart => chart.id);

        const chartsWorkedOnByUserToday = await Timer.findAll({
          where: {
            ChartId: chartsWorkedOnByUserIds,
            UserId: user.id,
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: [['ChartId', 'id']],
          group: ['ChartId'],
          raw: true
        });
        const chartsWorkedOnByUserTodayIds = chartsWorkedOnByUserToday.map(chart => chart.id);

        const chartsWithStatusFromCharts = await Chart.findAll({
          where: {
            id: chartsWorkedOnByUserTodayIds,
            StatusId: { [Op.ne]: OPEN_STATUS_ID },
            [Op.or]: [
              { coder_id: user.id },
              { auditor_id: user.id },
            ],
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: ['id', 'StatusId'],
          raw: true
        });

        for (const chart of chartsWithStatusFromCharts) {
          if (chart.StatusId === COMPLETE_STATUS_ID) {
            completeStatusCount++;
          }
          if (chart.StatusId === INCOMPLETE_STATUS_ID) {
            incompleteStatusCount++;
          }
        }
      }

      let data = {
        complete_status: completeStatusCount,
        incomplete_status: incompleteStatusCount,
      };

      if (userRole.id === CODER_ID) {
        const readyToCodeCount = await countChartMilestonesById(IN_PROGRESS_MILESTONE_ID, user.id, userRole.id);

        //* Chart Coding Done count for coder
        const codingDoneCharts = await ChartAudit.findAll({
          attributes: ['id'],
          where: {
            MilestoneId: READY_FOR_QA_MILESTONE_ID,
            coder_id: user.id,
            createdAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          order: ['id'],
          raw: true,
          group: ['id']
        });
        const codingDoneChartIdsFromChartAudit = codingDoneCharts.map(chart => chart.id);

        const codingDoneChartsToday = await Timer.findAll({
          where: {
            ChartId: codingDoneChartIdsFromChartAudit,
            UserId: user.id,
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: [['ChartId', 'id']],
          group: ['ChartId'],
          raw: true
        });
        const codingDoneChartsTodayIds = codingDoneChartsToday.map(chart => chart.id);
        let codingDoneCountForCoderHistory = 0;
        if (codingDoneChartsToday) {
          codingDoneCountForCoderHistory = codingDoneChartsToday.length;
        }

        const chartCodingDoneCount = await Chart.count({
          where: {
            id: {
              [Op.notIn]: codingDoneChartsTodayIds
            },
            MilestoneId: READY_FOR_QA_MILESTONE_ID,
            coder_id: user.id,
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          }
        });

        //* Chart Ready To Audit count for coder
        const chartsWorkedOnByCoder = await ChartAudit.findAll({
          attributes: ['id'],
          where: {
            coder_id: user.id,
            createdAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          order: ['id'],
          raw: true,
          group: ['id']
        });
        const chartsWorkedOnByCoderIds = chartsWorkedOnByCoder.map(chart => chart.id);

        const codedChartsToday = await Timer.findAll({
          where: {
            ChartId: chartsWorkedOnByCoderIds,
            UserId: user.id,
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: [['ChartId', 'id']],
          group: ['ChartId'],
          raw: true
        });
        const codedChartsTodayIds = codedChartsToday.map(chart => chart.id);

        const chartReadyToAuditCount = await Chart.count({
          where: {
            id: codedChartsTodayIds,
            MilestoneId: QA_IN_PROGRESS_MILESTONE_ID,
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          }
        });

        const codingDoneCount = chartCodingDoneCount + codingDoneCountForCoderHistory;
        const readyToAuditCount = chartReadyToAuditCount;
        data = { ...data, milestones: { ready_to_code: readyToCodeCount, coding_done: codingDoneCount, ready_to_audit: readyToAuditCount } };
      }
      if (userRole.id === MEMBER_ID) {
        const readyToAuditCount = await countChartMilestonesById(QA_IN_PROGRESS_MILESTONE_ID, user.id, userRole.id);

        const chartsWorkedOnByAuditor = await ChartAudit.findAll({
          where: {
            createdAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
            auditor_id: user.id
          },
          attributes: ['id'],
          raw: true,
          group: ['id']
        });
        const chartsWorkedOnByAuditorIds = chartsWorkedOnByAuditor.map(chart => chart.id);

        const chartsWorkedOnByAuditorToday = await Timer.findAll({
          where: {
            ChartId: chartsWorkedOnByAuditorIds,
            UserId: user.id,
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: [['ChartId', 'id']],
          group: ['ChartId'],
          raw: true
        });
        const chartsWorkedOnByAuditorTodayIds = chartsWorkedOnByAuditorToday.map(chart => chart.id);

        const qcAuditedChartsWithChartAuditsToday = await Chart.findAll({
          where: {
            id: chartsWorkedOnByAuditorTodayIds,
            qc_status_id: { [Op.ne]: null },
            updatedAt: {
              [Op.between]: [
                moment.utc().startOf('day'),
                moment.utc().startOf('second'),
              ]
            },
          },
          attributes: ['id', 'qc_status_id'],
          raw: true
        });

        let qcPassCount = 0;
        let qcFailCount = 0;
        for (const chart of qcAuditedChartsWithChartAuditsToday) {
          if (chart.qc_status_id === QC_PASS_ID) {
            qcPassCount++;
          }
          if (chart.qc_status_id === QC_FAIL_ID) {
            qcFailCount++;
          }
        }

        data = { ...data, milestones: { qc_pass: qcPassCount, qc_fail: qcFailCount, ready_to_audit: readyToAuditCount } };
      }
      if (userRole.id === MANAGER_ID || userRole.id === TEAM_LEAD_ID) {

        const groupedStatusCount = await countChartByOptions({
          where: {
            StatusId: [INCOMPLETE_STATUS_ID, COMPLETE_STATUS_ID]
          },
          group: ['StatusId']
        }, userRole.id);

        for (const groupedStatus of groupedStatusCount) {
          if (groupedStatus.StatusId === INCOMPLETE_STATUS_ID) {
            data.incomplete_status = groupedStatus.count
          }
          if (groupedStatus.StatusId === COMPLETE_STATUS_ID) {
            data.complete_status = groupedStatus.count
          }
        }

        const groupedMilestoneCount = await countChartByOptions({
          where: {
            MilestoneId: [TODO_MILESTONE_ID, IN_PROGRESS_MILESTONE_ID,
              DEV_IN_PROGRESS_MILESTONE_ID, READY_FOR_CLIENT_REVIEW_MILESTONE_ID]
          },
          group: ['MilestoneId']
        }, userRole.id);

        let readyToAllocateCount, readyToCodeCount, codingInProgressCount, auditInProgressCount = 0;
        for (const groupedMilestone of groupedMilestoneCount) {
          if (groupedMilestone.MilestoneId === TODO_MILESTONE_ID) {
            readyToAllocateCount = groupedMilestone.count
          }
          if (groupedMilestone.MilestoneId === IN_PROGRESS_MILESTONE_ID) {
            readyToCodeCount = groupedMilestone.count
          }
          if (groupedMilestone.MilestoneId === DEV_IN_PROGRESS_MILESTONE_ID) {
            codingInProgressCount = groupedMilestone.count
          }
          if (groupedMilestone.MilestoneId === READY_FOR_CLIENT_REVIEW_MILESTONE_ID) {
            auditInProgressCount = groupedMilestone.count
          }
        }

        data = {
          ...data, milestones: {
            ready_to_allocate: readyToAllocateCount,
            ready_to_code: readyToCodeCount,
            in_progress: codingInProgressCount + auditInProgressCount
          }
        };
      }

      const totalWorkLists = await Worklist.count();
      const totalCharts = await Chart.count();

      const worklistData = await Worklist.count({
        include: {
          model: Chart,
          where: { "MilestoneId": 1 }
        },
        group: '"Charts"."WorklistId"',
      });

      const chartData = await Chart.count({
        where: { "MilestoneId": 1 }
      });

      let unallocatedCount = {
        worklist: {
          unallocated: worklistData.length,
          total: totalWorkLists
        },
        charts: {
          unallocated: chartData,
          total: totalCharts
        }
      }

      data = { ...data, unallocatedCount };
      return data;
    } catch (error) {
      throw error;
    }
  }
}

async function countChartMilestonesById(milestoneId, UserId, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const { count, rows } = await Chart.findAndCountAll({
        where: {
          MilestoneId: milestoneId,
        },
      });
      return count;
    }
    const { count, rows } = await Chart.findAndCountAll({
      where: {
        MilestoneId: milestoneId,
        UserId: UserId
      },
    });
    return count;
  } catch (error) {
    throw error;
  }
}

async function countChartByOptions(countOptions, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const count = await Chart.count(countOptions);
      return count;
    }
    return 0;
  } catch (error) {
    throw error;
  }
}

async function countChartStatusById(statusId, UserId, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const count = await Chart.count({
        where: {
          StatusId: statusId,
          updatedAt: {
            [Op.between]: [
              moment.utc().startOf('day'),
              moment.utc().startOf('second'),
            ]
          },
        }
      });
      return count;
    };

    const chartCount = await Chart.count({
      where: {
        StatusId: statusId,
        [Op.or]: [
          { coder_id: UserId },
          { auditor_id: UserId },
        ],
        updatedAt: {
          [Op.between]: [
            moment.utc().startOf('day'),
            moment.utc().startOf('second'),
          ]
        },
      },
    });
    return chartCount;
  } catch (error) {
    throw error;
  }
}

async function countChartMilestonesByIdWithDate(milestoneId, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const count = await Chart.count({
        where: {
          MilestoneId: milestoneId,
          updatedAt: {
            [Op.between]: [
              moment.utc().startOf('day'),
              moment.utc().startOf('second'),
            ]
          }
        },
      });
      return count;
    }
  } catch (error) {
    throw error;
  }
}

async function countQCStatusById(qcStatusId, UserId, RoleId) {
  try {
    const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
    if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
      const count = await Chart.count({
        where: {
          qc_status_id: qcStatusId,
          updatedAt: {
            [Op.between]: [
              moment.utc().startOf('day'),
              moment.utc().startOf('second'),
            ]
          },
        },
      });
      return count;
    }

    const chartCount = await Chart.count({
      where: {
        qc_status_id: qcStatusId,
        auditor_id: UserId,
        updatedAt: {
          [Op.between]: [
            moment.utc().startOf('day'),
            moment.utc().startOf('second'),
          ]
        },
      }
    });
    return chartCount;
  } catch (error) {
    throw error;
  }
}

async function getChartCountBasedOnFilter(filter) {
  try {
    const chartCount = await Chart.count({
      where: filter
    });
    return chartCount;
  }
  catch (error) {
    throw error;
  }
}
