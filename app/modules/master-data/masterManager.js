const { Milestone, Priority, TaskType, HoldReason, } = require('../../models/chart');
const { FeedbackType, QCStatus } = require('../../models/auditInfo');
const Location = require('../../models/location');
// const { PrimDiagFeedback, SecDiagFeedback, ProceduresFeedback, EdEmFeedback, EdEmLevelCodes, ModifierFeedback } = require('../../models/feedbackCategories');
const User = require('../../models/user');
const Role = require('../../models/role');
const CommentFlag = require('../../models/commentFlag');
const Client = require('../../models/client');
const Process = require('../../models/process');
const Specialty = require('../../models/specialty');
const WorklistStatus = require('../../models/worklistStatus');
const Tags = require('../../models/tags');
const { userRoleConstants, chartStatusConstants } = require('../../common/constants');
const Attendance = require('../../models/attendance');
const Designation = require('../../models/designation');
const moment = require('moment');
const sequelize = require('../../../config/dbConfig');
const { Op } = require('sequelize');
const TechStackCategory = require('../../models/techStackCategory');
const Sequelize = require('sequelize');
module.exports = class MasterManager {
 
    async getMasterData(ClientId = { [Op.ne]: null }, LocationId, RoleId = Object.values(userRoleConstants) ?? []) {
        try {
            const locations = await this.getLocations(ClientId);
            const processes = await this.getProcesses(ClientId);
            const milestones = await this.getMilestones();
            const priorities = await this.getPriorities();
            const statuses = await this.getStatuses();
            const statuses_all = await this.getAllStatuses();
            const specialties = await this.getSpecialties(ClientId);
            const worklist_statuses = await this.getWorklistStatuses();
            const hold_reasons = await this.getHoldReasons(ClientId);
            const designations = await this.getDesignations(RoleId);
            const users_all = await this.getAllUsers();
            const roles = await this.getRoles();
            const feedback_types = await this.getFeedbackTypes(ClientId);
            const qc_status = await this.getQCStatus();
            const comment_flags = await this.getCommentFlags();
            const clients = await this.getClients();
            const task_type = await this.getTaskType();
            const tech_stack = await this.getTechStackCategory();
            const speciality_by_techstack_category = await this.getSpecialtiesByTechStackCategory();
            const tags = await this.getTags();
            let data = { locations, processes, milestones, priorities, statuses, statuses_all, specialties, worklist_statuses,
                hold_reasons, roles, designations,
                users_all, feedback_types, qc_status, comment_flags, clients, task_type, speciality_by_techstack_category,tech_stack, tags}
 
            return data;
        } catch (error) {
            throw error;
        }
    }
 
    async getTags(){
        return await Tags.findAll({attributes: [['name', 'label'], ['category', 'value']]});
    }
 
    async getTechStackCategory(){
        return await TechStackCategory.findAll({
            attributes:["id", "group_name"]
        })
    }
 
    async getTaskType(){
        return await TaskType.findAll({
            attributes:["id", "name"]
        })
    }
 
    async getLocations(ClientId) {
        return await Location.findAll({
            attributes: ['id', ['loc_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getProcesses(ClientId) {
        return await Process.findAll({
            where: {
                ClientId
            },
            attributes: ['id', ['proc_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getMilestones() {
        return await Milestone.findAll({
            attributes: ['id', ['milestone_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getPriorities() {
        return await Priority.findAll({
            attributes: ['id', ['priority_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getStatuses() {
        const { COMPLETE_STATUS_ID, INCOMPLETE_STATUS_ID } = chartStatusConstants
        return await TaskType.findAll({
            attributes: ['id', 'name'],
            where: {
                id: [COMPLETE_STATUS_ID, INCOMPLETE_STATUS_ID]
            },
            order: ['id'], raw: true
        })
    }
    async getAllStatuses() {
        return await TaskType.findAll({
            attributes: ['id', 'name'],
            order: ['id'], raw: true
        })
    }
    async getSpecialties(ClientId) {
        return await Specialty.findAll({
            where: {
                ClientId
            },
            attributes: ['id', ['spec_name', 'name']],
            order: ['id'], raw: true
        })
    }
 
    async getSpecialtiesByTechStackCategory(){
        return await Specialty.findAll({
            attributes: ['id', 'spec_name', [Sequelize.col('TechStackCategories.id'), 'group_id'], [Sequelize.col('TechStackCategories.group_name'), 'group_name'] ],
            raw:true,
            include: {
              model: TechStackCategory,
              attributes: [],
              through: {
                attributes: [], // To exclude any attributes from the through table
              },
            },
          })
    }
    // async getDispositions(ClientId, LocationId) {
    //     return await Disposition.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['disposition_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    // async getAuditOptions(ClientId, LocationId) {
    //     return await AuditOption.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['audit_opt', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    async getHoldReasons(ClientId) {
        return await HoldReason.findAll({
            where: {
                ClientId
            },
            attributes: ['id', ['hold_reason', 'name']],
            order: ['id'], raw: true
        })
    }
    // async getResponsibleParties(ClientId, LocationId) {
    //     return await ResponsibleParty.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['resp_party_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    async getRoles() {
        return await Role.findAll({
            attributes: ['id', ['role_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getDesignations(RoleId) {
        return await Designation.findAll({
            where: { RoleId },
            attributes: ['id', 'name'],
            order: ['id'], raw: true
        })
    }
    async getAllUsers() {
        return await User.findAll({
            attributes: ['id', [sequelize.literal("first_name || ' ' || last_name || ' (' || role_name || ')'"), 'name'], 'image_url', 'RoleId',
            [Sequelize.col('Role.role_name'), 'role']],
            where:{is_active: true},
            include: {
                model: Role,
                attributes: [],
            },
            order: [['RoleId', 'DESC']], raw: true
        })
    }
    async getFeedbackTypes(ClientId) {
        return await FeedbackType.findAll({
            where: {
                ClientId
            },
            attributes: ['id', ['feed_type_name', 'name']],
            order: ['id'], raw: true
        })
    }
    // async getPrimDiagFeedbacks(ClientId, LocationId) {
    //     return await PrimDiagFeedback.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['feedback_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    // async getSecDiagFeedbacks(ClientId, LocationId) {
    //     return await SecDiagFeedback.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['feedback_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    // async getProceduresFeedbacks(ClientId, LocationId) {
    //     return await ProceduresFeedback.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['feedback_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    // async getEdEmFeedbacks(ClientId, LocationId) {
    //     return await EdEmFeedback.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['feedback_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    // async getEdEmLevels(ClientId, LocationId) {
    //     return await EdEmLevelCodes.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['level', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    // async getModifierFeedbacks(ClientId, LocationId) {
    //     return await ModifierFeedback.findAll({
    //         where: {
    //             ClientId,
    //             LocationId
    //         },
    //         attributes: ['id', ['feedback_name', 'name']],
    //         order: ['id'], raw: true
    //     })
    // }
    async getQCStatus() {
        return await QCStatus.findAll({
            attributes: ['id', ['qc_status_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getCommentFlags() {
        return await CommentFlag.findAll({
            attributes: ['id', ['flag', 'name']],
            order: ['id'], raw: true
        })
    }
    async getClients() {
        return await Client.findAll({
            attributes: ['id', ['client_name', 'name']],
            order: ['id'], raw: true
        })
    }
    async getWorklistStatuses() {
        return await WorklistStatus.findAll({
            attributes: ['id', 'name'],
            order: ['id'], raw: true
        })
    }
}