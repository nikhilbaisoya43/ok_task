const { Milestone, Priority, TaskType, HoldReason, } = require('../../../models/chart');
const { FeedbackType, QCStatus } = require('../../../models/auditInfo');
const Location = require('../../../models/location');
// const { PrimDiagFeedback, SecDiagFeedback, ProceduresFeedback, EdEmFeedback, EdEmLevelCodes, ModifierFeedback } = require('../../../models/feedbackCategories');
const User = require('../../../models/user');
const Role = require('../../../models/role');
const CommentFlag = require('../../../models/commentFlag');
const Client = require('../../../models/client');
const Process = require('../../../models/process');
const Specialty = require('../../../models/specialty');
const { userRoleConstants, chartStatusConstants } = require('../../../common/constants');
const { Op, Sequelize } = require('sequelize');
const { request } = require('express');
const sequelizeServer = require('../../../../config/dbConfig');
const Worklist = require('../../../models/worklist');
module.exports = class MasterManager {

    async getMasterData(RoleId, request) {
        try {
            const loc_name = await this.getLocations();
            const worklist = await this.getWorklists();
            const processes = await this.getProcesses();
            const milestone_name = await this.getMilestones();
            const priorities = await this.getPriorities();
            const status_name = await this.getStatuses(RoleId);
            const spec_name = await this.getSpecialties();
            const hold_reason = await this.getHoldReasons();
            const assignee_name = await this.getCoders();
            const roles = await this.getRoles();
            const qc_status_name = await this.getQCStatus();
            const comment_flags = await this.getCommentFlags();
            const client_name = await this.getClients();
            const coder_comments = [{ id: 0, name: "Empty" }, { id: 1, name: "Non-Empty" }];
            const coder_processing_seconds = await this.getProcessingTimes();
            const auditor_processing_seconds = await this.getProcessingTimes();
            const overall_processing_seconds = await this.getProcessingTimes();
            const comment_log = await this.getCommentLog();

            let data = {
                loc_name, worklist, processes, milestone_name, priorities, status_name, spec_name,
                hold_reason, roles,
                assignee_name, qc_status_name, comment_flags, client_name, coder_comments,
                coder_processing_seconds, auditor_processing_seconds, overall_processing_seconds, comment_log
            };

            if (request.filters) {
                let filterData = {};
                for (let f = 0; f < (request.filters).length; f++) {
                    let filterValue = request.filters[f];
                    filterData[filterValue] = data[filterValue];
                }
                data = filterData;
            }

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getLocations() {
        return await Location.findAll({
            attributes: ['id', ['loc_name', 'name']], raw: true
        })
    }
    async getWorklists() {
        return await Worklist.findAll({
            attributes: ['id', ['worklist_no', 'name']], raw: true
        })
    }
    async getProcesses() {
        return await Process.findAll({
            attributes: ['id', ['proc_name', 'name']], raw: true
        })
    }
    async getMilestones() {
        return await Milestone.findAll({
            attributes: ['id', ['milestone_name', 'name']], raw: true
        })
    }
    async getPriorities() {
        return await Priority.findAll({
            attributes: ['id', ['priority_name', 'name']], raw: true
        })
    }
    async getStatuses(RoleId) {
        const { CODER_ID, MEMBER_ID } = userRoleConstants;
        const { COMPLETE_STATUS_ID, INCOMPLETE_STATUS_ID } = chartStatusConstants
        let filter = {};
        if (RoleId === CODER_ID || RoleId === MEMBER_ID) {
            filter = {
                id: {
                    [Op.in]: [COMPLETE_STATUS_ID, INCOMPLETE_STATUS_ID]
                }
            }
        }
        return await TaskType.findAll({
            attributes: ['id', 'name'],
            where: filter, raw: true
        })
    }
    async getSpecialties() {
        return await Specialty.findAll({
            attributes: ['id', ['spec_name', 'name']], raw: true
        })
    }
    async getHoldReasons() {
        return await HoldReason.findAll({
            attributes: ['id', ['hold_reason', 'name']], raw: true
        })
    }
    async getResponsibleParties() {
        return await ResponsibleParty.findAll({
            attributes: ['id', ['resp_party_name', 'name']], raw: true
        })
    }
    async getRoles() {
        return await Role.findAll({
            attributes: ['id', ['role_name', 'name']], raw: true
        })
    }
    async getAuditors() {
        const { MEMBER_ID, MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
        return await User.findAll(
            {
                where: { RoleId: [MEMBER_ID, MANAGER_ID, TEAM_LEAD_ID] },
                attributes: ['id', [sequelizeServer.literal("first_name || ' ' || last_name || ' (' || role_name || ')'"), 'name']],
                include: {
                    model: Role,
                    attributes: ['role_name'],
                },
                order: [['RoleId', 'DESC']], raw: true
            }
        )
    }
    async getCoders() {
        return await User.findAll(
            {
                attributes: ['id', [sequelizeServer.literal("first_name || ' ' || last_name || ' (' || role_name || ')'"), 'name']],
                include: {
                    model: Role,
                    attributes: ['role_name'],
                },
                order: [['RoleId', 'DESC']], raw: true
            }
        )
    }
    async getFeedbackTypes() {
        return await FeedbackType.findAll({
            attributes: ['id', ['feed_type_name', 'name']], raw: true
        })
    }
    async getPrimDiagFeedbacks() {
        return await PrimDiagFeedback.findAll({
            attributes: ['id', ['feedback_name', 'name']], raw: true
        })
    }
    async getSecDiagFeedbacks() {
        return await SecDiagFeedback.findAll({
            attributes: ['id', ['feedback_name', 'name']], raw: true
        })
    }
    async getProceduresFeedbacks() {
        return await ProceduresFeedback.findAll({
            attributes: ['id', ['feedback_name', 'name']], raw: true
        })
    }
    async getEdEmFeedbacks() {
        return await EdEmFeedback.findAll({
            attributes: ['id', ['feedback_name', 'name']], raw: true
        })
    }
    async getEdEmLevels() {
        return await EdEmLevelCodes.findAll({
            attributes: ['id', ['level', 'name']], raw: true
        })
    }
    async getModifierFeedbacks() {
        return await ModifierFeedback.findAll({
            attributes: ['id', ['feedback_name', 'name']], raw: true
        })
    }
    async getQCStatus() {
        return await QCStatus.findAll({
            attributes: ['id', ['qc_status_name', 'name']], raw: true
        })
    }
    async getCommentFlags() {
        return await CommentFlag.findAll({
            attributes: ['id', ['flag', 'name']], raw: true
        })
    }
    async getClients() {
        return await Client.findAll({
            attributes: ['id', ['client_name', 'name']], raw: true
        })
    }
    async getProcessingTimes() {
        return [
            { id: "lt-120", name: "< 2 mins" },
            { id: "120-300", name: "2-5 mins" },
            { id: "300-420", name: "5-7 mins" },
            { id: "420-600", name: "7-10 mins" },
            { id: "600-900", name: "10-15 mins" },
            { id: "900-1200", name: "15-20 mins" },
            { id: "1200-1500", name: "20-25 mins" },
            { id: "1500-1800", name: "25-30 mins" },
            { id: "gt-1800", name: "> 30 mins" },
        ]
    }
    async getCommentLog() {
        return [
            { id: "auditor", name: "Auditor" },
            { id: "coder", name: "Coder" },
            { id: "both", name: "Both" },
        ]
    }
}