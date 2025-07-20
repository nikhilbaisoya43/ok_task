const { Chart, Milestone, Priority, Status, AuditOption, HoldReason, ResponsibleParty, Disposition, ChartHoldReason } = require('../../models/chart');
const { FeedbackType, QCStatus } = require('../../models/auditInfo');
const Worklist = require('../../models/worklist');
const moment = require('moment');
const sequelize = require('sequelize');
const { log } = require('winston');
const ChartAudit = require('../../models/chartAudit');
const Timer = require('../../models/timer');
const Specialty = require('../../models/specialty');
const ChartHoldReasons = require('../../models/chartHoldReasons');
const sequelizeServer = require('../../../config/dbConfig');
const WorklistStatus = require('../../models/worklistStatus');
const { milestoneConstants } = require('../../common/constants');
const Op = sequelize.Op;

module.exports = class GraphMaster {

    async filterDashboard (filterOptions){
        let filter = {}
        try {
            if (filterOptions.location && (filterOptions.location).length > 0) {
                filter.LocationId = {[sequelize.Op.in]: filterOptions.location}
            }
            if (filterOptions.speciality && (filterOptions.speciality).length > 0) {
                filter.SpecialtyId = {[sequelize.Op.in]: filterOptions.speciality}
            }
            if (filterOptions.Worklist && (filterOptions.Worklist).length > 0) {
                filter.WorklistId = {[sequelize.Op.in]: filterOptions.Worklist}
            }
            if (filterOptions.date_recieved && (filterOptions.date_recieved) != "") {
                let receivedDate = filterOptions.date_recieved;
                receivedDate = receivedDate.split('-');
                let from_date = receivedDate[0];
                let to_date = receivedDate[1];
                filter.end_date = {
                    [Op.between]:[`${moment(new Date(from_date)).format("YYYY-MM-DD")}`,
                                  `${moment(new Date(to_date)).format("YYYY-MM-DD")}`]
                }
            }
            if (filterOptions.start_date && (filterOptions.start_date) != "") {
                let serviceDate = filterOptions.start_date;
                serviceDate = serviceDate.split('-');
                let from_date = serviceDate[0];
                let to_date = serviceDate[1];
                filter.start_date = {
                    [Op.between]:[`${moment(new Date(from_date)).format("YYYY-MM-DD")}`,
                                  `${moment(new Date(to_date)).format("YYYY-MM-DD")}`]
                }
            }
            if (((!filterOptions.hasOwnProperty('date_recieved')) || filterOptions.date_recieved == "") 
                && ((!filterOptions.hasOwnProperty('start_date')) || filterOptions.start_date == "")
                && ((!filterOptions.Worklist) || (filterOptions.Worklist).length === 0)) {
                filter.end_date = {
                    [Op.between]: [`${moment().subtract(2, 'weeks').format("YYYY-MM-DD")}`,
                    `${moment().format("YYYY-MM-DD")}`]
                }
                filter.start_date = {
                    [Op.between]: [`${moment().subtract(2, 'weeks').format("YYYY-MM-DD")}`,
                    `${moment().format("YYYY-MM-DD")}`]
                }
            }
        return filter;
        } catch (error) {
            throw error;
        }
    }

    async filterAllocated (filterOptions){
        let filter = {}
        try {
            if (filterOptions.coder && (filterOptions.coder).length > 0) {
                filter.coder_id = {[sequelize.Op.in]: filterOptions.coder}
            }
            if (filterOptions.auditor && (filterOptions.auditor).length > 0) {
                filter.auditor_id = {[sequelize.Op.in]: filterOptions.auditor}
            }
            if (filterOptions.milestone && (filterOptions.milestone).length > 0) {
                filter.MilestoneId = {[sequelize.Op.in]: filterOptions.milestone}
            }
            if (filterOptions.chart_status && (filterOptions.chart_status).length > 0) {
                filter.StatusId = {[sequelize.Op.in]: filterOptions.chart_status}
            }
            if (filterOptions.date_of_completion && (filterOptions.date_of_completion) != "") {
                let completionDate = filterOptions.date_of_completion;
                completionDate = completionDate.split('-');
                let from_date = completionDate[0];
                let to_date = completionDate[1];
                filter.date_of_completion = {
                    [Op.between]:[`${moment(new Date(from_date)).format("YYYY-MM-DD")}`,
                                  `${moment(new Date(to_date)).format("YYYY-MM-DD")}`]
                }
            }
            if (filterOptions.date_of_completion === null) {
                filter.date_of_completion = {
                    [Op.is]: null,
                }
            }
        return filter;
        } catch (error) {
            throw error;
        }
    }

    async filterAllocatedDate (filterOptions){
        let filter = {}
        try {
            if (filterOptions.date_of_allocation && (filterOptions.date_of_allocation) != "") {
                let allocatedDate = filterOptions.date_of_allocation;
                allocatedDate = allocatedDate.split('-');
                let from_date = allocatedDate[0];
                let to_date = allocatedDate[1];

                const dateOfAllocationCharts = await sequelizeServer.query(`SELECT id FROM (SELECT "Charts"."id", "Charts"."updatedAt" as "date_of_allocation"FROM "Charts"WHERE "Charts"."MilestoneId" = 2 UNION SELECT "ChartAudits"."id", MIN("ChartAudits"."updatedAt") AS "date_of_allocation"FROM "ChartAudits"WHERE "ChartAudits"."MilestoneId" = 2 GROUP BY "ChartAudits"."id") AS qry WHERE "date_of_allocation"::date BETWEEN :start AND :end`, { raw: true, nest: true, replacements: { start: from_date, end: to_date},logging: console.log, });
                const chartIds = dateOfAllocationCharts.map((row) => { return row.id });

                filter.id = {
                    [Op.in]: chartIds
                }
            }
        return filter;
        } catch (error) {
            throw error;
        }
    }

    async filterUnAllocated (filterOptions){
        let filter = {}
        try {
            if (filterOptions.coder && (filterOptions.coder).length > 0) {
                filter.coder_id = {[sequelize.Op.in]: filterOptions.coder}
            }
        return filter;
        } catch (error) {
            throw error;
        }
    }

    async filterUnAllocatedHoldReason (filterOptions){
        let filter = {}
        try {
            if (filterOptions.hold_reason && (filterOptions.hold_reason).length > 0) {
                filter.HoldReasonId = {[sequelize.Op.in]: filterOptions.hold_reason}
            }
        return filter;
        } catch (error) {
            throw error;
        }
    }

    async getAllocatedStatistics(requestData) {
        try {
        let filter = {};
        let filterAllocated = {};
        let filterAllocatedDate = {};
        // if (Object.keys(requestData).length != 0) {
            filter = await this.filterDashboard(requestData);
        // }
        if (Object.keys(requestData).length != 0) {
            filterAllocated = await this.filterAllocated(requestData);
        }
        if (Object.keys(requestData).length != 0) {
            filterAllocatedDate = await this.filterAllocatedDate(requestData);
        } else { filterAllocatedDate = false; }

        let countMilestoneChart = [
            {"value":"0","key":"Ready to Allocate"},
            {"value":"0","key":"Ready to Code"},
            {"value":"0","key":"Coding in Progress"},
            {"value":"0","key":"Coding Done"},
            {"value":"0","key":"Ready to Audit"},
            {"value":"0","key":"Audit in Progress"},
            {"value":"0","key":"Audit Done"}
        ]
        const milestoneChart = await Chart.findAll({
            where:[filter,filterAllocated,filterAllocatedDate],
            group : ['Chart.MilestoneId','Milestone.id'],
            attributes: [[sequelize.fn('count', sequelize.col('Chart.MilestoneId')), 'value'],
            [sequelize.col('Milestone.milestone_name'),'key']],
            raw: true,
            order : [
                ['MilestoneId','ASC']
            ],
            include: {
                model:Milestone,
                attributes:[],
                right: true
            },
        })

        // Create a map to store the values from the DB array with keys as the lookup
        let milestoneChartMap = new Map(milestoneChart.map(item => [item.key, item.value]));

        // Replace the values in countMilestoneChart array using the keys from the map
        countMilestoneChart.forEach(item => {
            if (milestoneChartMap.has(item.key)) {
                item.value = milestoneChartMap.get(item.key);
            }
        });

        const chartCount= await Chart.count({
            where: [filter,filterAllocated, filterAllocatedDate],
        });

        const completeChart =  await Chart.findAll({
            where: [filter,filterAllocated, filterAllocatedDate],
            group:['Chart.StatusId','Status.status_name'],
            attributes: [[sequelize.fn('count', sequelize.col('Chart.StatusId')), 'value'],
            [sequelize.col('Status.status_name'),'key']],
            raw: true,
            order : [
                ['StatusId','ASC']
            ],
            include:[{
                model:Status,
                attributes:[]
            },
        ],
        });

        let countStatusComplete = [
            {"value":"0", "absoluteValue":"0","key":"Open"},
            {"value":"0", "absoluteValue":"0","key":"Complete"},
            {"value":"0", "absoluteValue":"0","key":"Incomplete"},
        ]

        let statusCompleteMap = new Map(completeChart.map(item => [item.key, item.value]));
        
        countStatusComplete.forEach(item => {
            if (statusCompleteMap.has(item.key)) {
                item.value = statusCompleteMap.get(item.key);
            }
        });

        for (let e = 0; e < countStatusComplete.length; e++) {
            let compPercent = (((countStatusComplete[e].value)*100)/chartCount).toFixed(2);
            countStatusComplete[e].absoluteValue = countStatusComplete[e].value;
            countStatusComplete[e].value = compPercent;
        }

        // Quality Control Starts here ----
        const qualityControl = await QCStatus.findAll();
        const chartQCData = await Chart.findAll({
            attributes: ['Chart.qc_status_id', [sequelize.fn("COUNT", sequelize.col('Chart.qc_status_id')), 'count']],
            group : ["Chart.qc_status_id"],
            where:[filter,filterAllocated, filterAllocatedDate,{
                qc_status_id:{
                    [sequelize.Op.not]: null,
                },
            }],
            raw: true,
        });

        let qualityData = [];
        let countQualityData = [
            {
                "absoluteValue": 0,
                "value": "0",
                "key": "Agree"
            },
            {
                "absoluteValue": 0,
                "value": "0",
                "key": "Feedback"
            },
            {
                "absoluteValue": 0,
                "value": "0",
                "key": "Un-audited"
            }
        ]
        let auditedCount = 0;
        for (let c = 0; c < chartQCData.length; c++) {
                let countData = {};
                let calPercent = (((chartQCData[c].count)*100)/chartCount).toFixed(2);
                countData.absoluteValue = chartQCData[c].count;
                auditedCount += parseInt(chartQCData[c].count);
                countData.value = calPercent;
            for (let d = 0; d < qualityControl.length; d++) {
                 if(qualityControl[d].id == chartQCData[c].qc_status_id)
                 {
                    countData.key = qualityControl[d].qc_status_name;
                 }
            }
            qualityData.push(countData);
        }
        qualityData.push({
            absoluteValue: chartCount - auditedCount,
            value: (((chartCount-auditedCount)*100)/chartCount).toFixed(2),
            key: "Un-audited",
        });
        
        countQualityData.forEach(item => {
            qualityData.forEach(itemNew => {
                if(item.key === itemNew.key) {
                    item.value = itemNew.value;
                    item.absoluteValue = itemNew.absoluteValue;
                }
            })
        });

        const allocatedChart = await ChartAudit.findAll({
            include:[
                {
                    model:Chart,
                    as:"Chart",
                    attributes:[],
                    where:[filter,filterAllocated, filterAllocatedDate],
                },
                {
                    model:Milestone,
                    attributes:[],
                    where:{
                        [sequelize.Op.or]: [{ milestone_name: "Ready to Code" }, { milestone_name: "Ready to Audit" }],
                    },
                },
            ],
            group:["ChartAudit.end_date"],
            attributes:[[sequelize.col('ChartAudit.end_date'),'key'],[
                sequelize.fn('count', sequelize.col('ChartAudit.end_date')), 'value']],
            raw: true,
            order : [
                ['end_date','ASC']
            ],
        });

        let worklistFilter = filter;
        if(worklistFilter.WorklistId) {
            worklistFilter.id = worklistFilter.WorklistId;
            delete worklistFilter.WorklistId;
        }
        const worklistStatus = await Worklist.findAll({
            where: [worklistFilter],
            group:['"Worklist"."WorklistStatusId"','WorklistStatus.name'],
            attributes: [[sequelize.fn('count', sequelize.col('"Worklist"."WorklistStatusId"')), 'value'],[sequelize.col('WorklistStatus.name'),'key']],
            raw: true,
            order : sequelize.col('"Worklist"."WorklistStatusId"'),
            include:[{
                model: WorklistStatus,
                attributes:[],
                right: true
            },
            ],
            raw: true,
        })

        let data = {
            "milestone_chart": countMilestoneChart,
            "chart_completion": countStatusComplete,
            "quality_control": countQualityData,
            "progress_to_date": allocatedChart,
            "worklist_by_status": worklistStatus
        }

        return data;
        } catch (error) {
            throw error;
        }
    };

    async getUnallocatedVolume (requestData){
        try {
            let filter = {};
            // if (Object.keys(requestData).length != 0) {
                filter = await this.filterDashboard(requestData);
            // }

            const worklists = await Worklist.findAll({
                attributes:['Worklist.worklist_no',[sequelize.fn('count', sequelize.col('WorklistId')), 'no_of_charts']],
                group:["Worklist.worklist_no"],
                include:{
                    model:Chart,
                    where: [filter, {'MilestoneId': 1}],
                    attributes:[],
                },
                order : [
                    ['worklist_no','ASC']
                ],
                raw: true,
            });

            //Unallocated volume
            const worklistsChartsUnallocated = await Chart.findAll({
                where: [filter, {'MilestoneId': 1}],
                raw: true,
                attributes:["WorklistId",[sequelize.fn('count', sequelize.col('WorklistId')), 'unallocated'], [sequelize.col("Worklist.worklist_no"), "worklist_no"], [sequelize.col("Worklist.no_of_charts"), "chart_received"]],
                group:["Worklist.id", "MilestoneId", "Chart.WorklistId"],
                having: sequelize.where(sequelize.fn('count', sequelize.col('WorklistId')), { [Op.gt]: 0 }),
                include:[
                    {
                        model:Worklist,
                        attributes:[]
                    }
                ],
                order: [[Worklist, 'createdAt', 'DESC']]
            });

            const speciality = await Chart.findAll({
                where: [filter, {'MilestoneId': 1}],
                group:['Chart.SpecialtyId','Specialty.spec_name'],
                attributes:[[sequelize.fn('count', sequelize.col('SpecialtyId')), 'count']],
                raw: true,
                order : [
                    ['SpecialtyId','ASC']
                ],
                include:{
                    model:Specialty,
                    attributes:['spec_name']
                }
            });

            const dateRecieved =  await Worklist.findAll({
                group:['Worklist.end_date'],
                attributes: ['end_date',[sequelize.fn('count', sequelize.col('Worklist.end_date')), 'count']],
                include:{
                    model:Chart,
                    where: [filter, {'MilestoneId': 1}],
                    attributes:[],
                },
                order : [
                    ['end_date','ASC']
                ],
                raw: true,
            });

            const dateService = await Worklist.findAll({
                group:['Worklist.start_date'],
                attributes: ['start_date',[sequelize.fn('count', sequelize.col('Worklist.start_date')), 'count']],
                raw: true,
                include:{
                     model:Chart,
                    where: [filter, {'MilestoneId': 1}],
                    attributes:[],
                },
                order : [
                    ['start_date','ASC']
                ]
            });

            let data = {
                "by_worklist": worklists,
                "unallocated_volume": worklistsChartsUnallocated,
                "by_speciality":speciality,
                "by_date_recieved":dateRecieved,
                "by_date_service":dateService
            }
            return data;
        } catch (error) {
            throw error;
        }
    };

    async getProductivity(requestData){
        try {
            let filter = {};
            // if (Object.keys(requestData).length != 0) {
                filter = await this.filterDashboard(requestData);
            // }
            let filterUnAllocated = {};
            if (Object.keys(requestData).length != 0) {
                filterUnAllocated = await this.filterUnAllocated(requestData);
            }
            let filterUnAllocatedHoldReason = {};
            if (Object.keys(requestData).length != 0) {
                filterUnAllocatedHoldReason = await this.filterUnAllocatedHoldReason(requestData);
            }
            
            let avgTimeToCodeIncludeCondition = [{
                model:Timer,
                attributes:[],
                where: [{"RoleId": 3}, {"duration_time": {[sequelize.Op.not]: null}}]
            }];

            if(filterUnAllocatedHoldReason.hasOwnProperty('HoldReasonId')) {
                avgTimeToCodeIncludeCondition.push({
                    model:ChartHoldReasons,
                    as:"ChartHoldReason",
                    attributes:[],
                    where:filterUnAllocatedHoldReason
                });
            }

            const specData = await Specialty.findAll({
                attributes:["spec_name", [sequelize.literal('ROUND(AVG(COALESCE("Charts->Timers"."duration_time",0))/60,2)'), 'average_time']],
                include:{
                    model:Chart,
                    attributes:[],
                    include: avgTimeToCodeIncludeCondition,
                    where:[filter,filterUnAllocated,{
                        chart_no:{
                            [sequelize.Op.not]: null,
                        },
                    }],
                },
                group: ["spec_name"],
                raw: true
            })
            
            // Volume
            let volumeIncludeCondition = [];
            if(filterUnAllocatedHoldReason.hasOwnProperty('HoldReasonId')) {
                volumeIncludeCondition.push({
                    model:ChartHoldReasons,
                    as:"ChartHoldReason",
                    attributes:[],
                    where:filterUnAllocatedHoldReason
                });
            }
            
            let volumeDataWhereCondArray = [filter,filterUnAllocated];
            if(((!filter.hasOwnProperty('end_date')) || filter.date_recieved == "")
            && ((!filter.WorklistId) || (filter.WorklistId).length === 0)) {
                filter.end_date = {
                        [sequelize.Op.eq]: moment().format('YYYY-MM-DD'),
                    }
            }

            const volumeData = await Specialty.findAll({
                attributes:["spec_name", [sequelize.literal('COUNT("Charts"."id")'), 'count']],
                include:{
                    model:Chart,
                    attributes:[],
                    include: volumeIncludeCondition,
                    where: volumeDataWhereCondArray,
                    required:false
                },
                group: ["spec_name"],
                raw: true
            })

            // Rework
            let reworkIncludeCondition = [];
            if (filterUnAllocatedHoldReason.hasOwnProperty('HoldReasonId')) {
                reworkIncludeCondition.push({
                    model: ChartHoldReasons,
                    as: "ChartHoldReason",
                    attributes: [],
                    where: filterUnAllocatedHoldReason
                });
            }

            let reworkData = [];
            const { AUDIT_DONE_MILESTONE_ID } = milestoneConstants;
            const reworkedChartsData = await Specialty.findAll({
                attributes: ['id', 'spec_name'],
                group: ["Specialty.id", "ChartAudits.id"],
                order: ['id'],
                raw: true,
                include: {
                    model: ChartAudit,
                    attributes: [],
                    required: true,
                    include: [{
                        model: Chart,
                        as: "Chart",
                        attributes: [],
                        where: [filter, filterUnAllocated],
                        include: reworkIncludeCondition,
                    }, {
                        model: Milestone,
                        attributes: [],
                        where: {
                            id: AUDIT_DONE_MILESTONE_ID
                        }
                    }],
                }
            });

            if(reworkedChartsData && reworkedChartsData.length != 0){
                const reworkChartsProcessed = reworkedChartsData.reduce((acc, { id }) => {
                    acc[id] = acc[id] || { id: id, count: 0 };
                    acc[id]['count'] += 1;
                    return acc;
                }, {});

                const totalProcessedCharts = await Specialty.findAll({
                    attributes: ['id', 'spec_name', [sequelize.literal('COUNT("Charts"."id")'), 'count']],
                    group: ["Specialty.id"],
                    order: ['id'],
                    raw: true,
                    include: {
                        model: Chart,
                        where: { chart_no: { [Op.ne]: null } },
                        attributes: []
                    }
                });

                for (const specialty of totalProcessedCharts) {
                    let reworkCharts = {};
                    let Percentage = 0;

                    if (reworkChartsProcessed.hasOwnProperty(specialty.id)) {
                        Percentage = ((reworkChartsProcessed[specialty.id]['count']) / specialty.count) * 100;
                        Percentage = parseInt(Percentage.toFixed(0));
                        reworkCharts.spec_name = specialty.spec_name;
                        reworkCharts.percentage = Percentage;
                        reworkData.push(reworkCharts);
                    }
                }
            }

            let data = {
                "average_time_to_code_chart":specData,
                "volume_per_day":  volumeData,
                "rework": reworkData,
            }

            return data;
        } catch (error) {
            throw error;
        }
    };
}
