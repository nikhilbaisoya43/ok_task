const moment = require('moment');
const User = require('../../models/user');
const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const Role = require('../../models/role');
const { userRoleConstants } = require('../../common/constants');
const { Chart } = require('../../models/chart');
const Worklist = require('../../models/worklist');
const ChartAudit = require('../../models/chartAudit');
const sequelize = require('../../../config/dbConfig');
const {getProjectIdsAvailableByRoleAndUser} = require("../worklists/worklistManager");

module.exports = class GlobalSearchManager {

    async getGlobalSearchRecords(requestData, UserId, roleId) {
        try {
            let { type = [], keyword = '', date = null } = requestData;
            if (type != null) {
                const { CODER_ID, MEMBER_ID } = userRoleConstants;
                let records = {};
                const RECORD_LIMIT = 10;
                keyword = keyword.trim();
                if ((type.length === 0 || type.includes('user')) && roleId != CODER_ID && roleId != MEMBER_ID) {
                    let users = [];
                    let whereCond = {};
                    if (keyword != '') {
                        whereCond = {
                            [Op.or]: [{ first_name: { [Op.iLike]: `%${keyword}%` } }, { last_name: { [Op.iLike]: `%${keyword}%` }} , 
                            sequelize.literal(`"User"."first_name" || ' ' || "User"."last_name" ILIKE '%${keyword}%' `),
                            { employee_id: { [Op.iLike]: `%${keyword}%` } }]
                        }
                    }
                    if (date != null) {
                        whereCond.date_of_birth = setupDateRangeFilter(date);
                        whereCond.joining_date = setupDateRangeFilter(date);
                    }
                    const userRecordsFound = await User.findAll({
                        where: {
                            ...whereCond
                        },
                        include: {
                            model: Role,
                            attributes: [],
                        },
                        limit: 10,
                        attributes: ['id', 'first_name', 'last_name', 'employee_id', 'RoleId', [Sequelize.col('Role.role_name'), 'userRole'],],
                        order: [['first_name', 'ASC']],
                        raw: true
                    });
                    if (userRecordsFound && userRecordsFound.length > 0) {
                        for (const user of userRecordsFound) {
                            const formattedUser = formatUserDetails(user);
                            users.push(formattedUser);
                        }
                        records.users = users;
                    }
                }
                if (type.length === 0 || type.includes('chart')) {
                    const charts = await getAutocompleteRecords(keyword, 'chartList', { id: UserId, RoleId: roleId }, date);
                    if (charts.length != 0) {
                        records.charts = charts;
                    }
                }
                if ((type.length === 0 || type.includes('worklist')) && roleId != CODER_ID) {
                    const worklists = await getAutocompleteRecords(keyword, 'workList', { id: UserId, RoleId: roleId }, date);
                    if (worklists.length != 0) {
                        records.worklists = worklists;
                    }
                }

                const formattedRecords = setRecordsReturnedByLimit(records, RECORD_LIMIT);
                return formattedRecords;
            }
        }
        catch (error) {
            throw error;
        }
    }
}

function formatUserDetails(user) {
    return {
        id: user.id,
        name: `${user.first_name} ${user.last_name}`,
        employee_id: user.employee_id,
        role: user.userRole
    }
}

function setupDateRangeFilter(date) {
    try {
        const dateSplit = date.split("-");
        const start_date = moment(dateSplit[0].trim()).format('YYYY-MM-DD');
        const end_date = moment(dateSplit[1].trim()).format('YYYY-MM-DD');
        return {
            [Op.between]: [start_date, end_date]
        }
    }
    catch (error) {
        throw error;
    }
}

async function getAutocompleteRecords(fieldValue, modelType, userObj, date = null) {
    try {
        let records=[];
        const { CODER_ID } = userRoleConstants;
        const canUserSeeAllChartsData = userObj?.RoleId !== CODER_ID;
        let projectCreatedByUser = [];
        let projectUserMember = [];
        if (modelType === "chartList") {
            if (fieldValue === "") {
                let whereCond = {
                    chart_no: {
                        [Op.ne]: null
                    }
                };
                if (date != null && date != '') {
                    const dateSearch = setupDateRangeFilter(date);
                    whereCond.end_date = dateSearch;
                    whereCond.start_date = dateSearch;
                    whereCond.admit_date = dateSearch;
                    whereCond.discharge_date = dateSearch;
                    whereCond.date_of_completion = dateSearch;
                }
                if (!canUserSeeAllChartsData) {
                    whereCond.UserId = userObj.id;
                }

                records = await Chart.findAll({
                    where: whereCond,
                    order: [['updatedAt', 'DESC']],
                    limit: 10,
                    attributes: ['chart_no', 'id'],
                    raw: true
                });
            }
            else {
                let whereCond = { unique_task_no: { [Op.iLike]: `%${fieldValue}%` } };
                if (date != null && date != '') {
                    const dateSearch = setupDateRangeFilter(date);
                    whereCond.end_date = dateSearch;
                    whereCond.start_date = dateSearch;
                    whereCond.admit_date = dateSearch;
                    whereCond.discharge_date = dateSearch;
                    whereCond.date_of_completion = dateSearch;
                }
                if (!canUserSeeAllChartsData) {
                    const userPreviouslyAssociated = await ChartAudit.findAll({
                        where: {
                            UserId: userObj.id
                        },
                        raw: true,
                        attributes: ['id'],
                        group: ['id']
                    });
                    if (!userPreviouslyAssociated || userPreviouslyAssociated.length === 0) {
                        whereCond.UserId = userObj.id;
                    }
                    else {
                        const userPreviouslyAssociatedChartIds = userPreviouslyAssociated.map(chart => chart.id);
                        whereCond.id = userPreviouslyAssociatedChartIds;
                    }
                }

                records = await Chart.findAll({
                    where: whereCond,
                    limit: 10,
                    attributes: ['unique_task_no', 'id'],
                    raw: true
                })
            }
        }
        else {
            let whereCond = canUserSeeAllChartsData ? {} : { UserId: userObj.id };
            if (date != null && date != '') {
                const dateSearch = setupDateRangeFilter(date);
                whereCond.end_date = dateSearch;
                whereCond.start_date = dateSearch;
            }
            if (!canUserSeeAllChartsData) {
                const userPreviouslyAssociated = await ChartAudit.findAll({
                    where: {
                        UserId: userObj.id,
                    },
                    raw: true,
                    attributes: ['id'],
                    group: ['id']
                });
                if (!userPreviouslyAssociated || userPreviouslyAssociated.length === 0) {
                    whereCond.UserId = userObj.id;
                }
                else {
                    const userPreviouslyAssociatedChartIds = userPreviouslyAssociated.map(chart => chart.id);
                    whereCond = { [Op.or]: [{ UserId: userObj.id }, { id: userPreviouslyAssociatedChartIds }] };
                }
            }
            if (fieldValue === "") {
                records = await Worklist.findAll({
                    where: { worklist_no: { [Op.ne]: null } },
                    include: [{ model: Chart, where: whereCond, attributes: [] }],
                    order: [['updatedAt', 'DESC']],
                    limit: 10,
                    group: [['Worklist.id']],
                    attributes: ['worklist_no', 'id'],
                    raw: true, subQuery: false
                })
            }
            else {
                projectCreatedByUser = await Worklist.findAll({
                    where: { [Op.and]: [{ worklist_no: { [Op.iLike]: `%${fieldValue}%` } }, { created_by: userObj.id }]},
                    limit: 10,
                    group: [['Worklist.id']],
                    attributes: ['worklist_no', 'id'],
                    raw: true,
                    subQuery: false
                })

                 let projectIdsByRole = await getProjectIdsAvailableByRoleAndUser(userObj.RoleId, userObj.id);
                 projectUserMember = await Worklist.findAll({
                    where: { [Op.and]: [{ worklist_no: { [Op.iLike]: `%${fieldValue}%` } }, {id: {[Op.or]: projectIdsByRole}}]},
                    limit: 10,
                    group: [['Worklist.id']],
                    attributes: ['worklist_no', 'id'],
                    raw: true,
                    subQuery: false
                })
            }
            const allProjectData = [...projectCreatedByUser, ...projectUserMember];    
            // Remove duplicates from an array     
            records = allProjectData.filter((obj, index, self) => index === self.findIndex((t) => t.id === obj.id));
        }

        return records;
    }
    catch (error) {
        throw error;
    }
}

function setRecordsReturnedByLimit(records, limit = 10) {
    try {
        const { users = null, charts = null, worklists = null } = records;
        let formattedRecords = {};
        if (users != null) {
            formattedRecords.users = [];
        }
        if (charts != null) {
            formattedRecords.charts = [];
        }
        if (worklists != null) {
            formattedRecords.worklists = [];
        }
        let count = 0;
        for (let i = 0; i < limit; i++) {
            if (users != null && users.length > i && count < limit) {
                formattedRecords.users.push(users[i]);
                count++;
            }
            if (charts != null && charts.length > i && count < limit) {
                formattedRecords.charts.push(charts[i]);
                count++;
            }
            if (worklists != null && worklists.length > i && count < limit) {
                formattedRecords.worklists.push(worklists[i]);
                count++;
            }
        }

        return formattedRecords;
    }
    catch (error) {
        throw error;
    }
}
