const User = require('../../models/user');
const Role = require('../../models/role');
const moment = require('moment');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const logger = require('../../services/winstonLogger');
const Locations = require('../../models/location');
const Attendance = require('../../models/attendance');
const Client = require('../../models/client');
const { FeedbackType } = require('../../models/auditInfo');
const { AuditOption, HoldReason, ResponsibleParty } = require('../../models/chart');
const Process = require('../../models/process');
const Specialty = require('../../models/specialty');
const { PrimDiagFeedback, SecDiagFeedback, ProceduresFeedback, EdEmFeedback, ModifierFeedback } = require('../../models/feedbackCategories');
const { userRoleConstants, notificationTypeContants } = require('../../common/constants');
const Designation = require('../../models/designation');
const UserAccessRequest = require('../../models/userAccessRequest');
const Leave = require('../../models/leave');
const sequelize = require('../../../config/dbConfig');
const Notification = require('../../models/notification');
const TechStackCategory = require('../../models/techStackCategory');
const NotificationComment = require("../../models/notificationComment");
const ProjectMembers = require('../../models/projectMembers');
const { sendRequestAccessNotificationMail, sendGrantAccessNotificationMail } = require('../../services/nodemailer');
const Attachments = require('../../models/attachments');
module.exports = class UserManager {

    async showAllUsers(requestData, page = 1, size) {
        try {
            let records = [];
            let counts = 0;
            let inactiveUsersCount = 0;
            const { limit, offset } = getPagination((page - 1), size);
            records = await getUserFilteredRecords(requestData, limit, offset);
            counts = parseInt(await getUserFilterCounts(requestData));
            inactiveUsersCount = parseInt(await getUserFilterCounts({ ...requestData, inactive: true }));
            const pendingUserCount = await UserAccessRequest.count({
                where: {
                    action: null
                }
            });
            const data = { totalRecords: counts, allUsers: records, inactiveUsersCount: inactiveUsersCount, pendingUserCount: pendingUserCount };
            return data;
        } catch (error) {
            throw error;
        }
    }

    async addClient(requestData) {
        if (!requestData) {
            throw new Error('No details Entered');
        };
        try {
            if (requestData.client_name) {
                if (requestData.client_name.trim() === '') {
                    throw new Error("Client name cannot be empty");
                }
                let clientDetail = await Client.findOne({
                    where: {
                        client_name: requestData.client_name
                    }
                });
                if (clientDetail) {
                    throw new Error('Client already exists');
                }
                else {
                    const newClient = await Client.create({
                        client_name: requestData.client_name
                    });
                    return newClient;
                }
            }
            else {
                throw new Error("No client details");
            }
        } catch (error) {
            throw error;
        }
    }

    async validateConfigurationMaster(LocationId = 0, requestData, editData, ClientId = 0) {
        if(Object.keys(requestData)?.length === 0){
            return {
                success: true,
                message: `No configuration to add`,
            }
        }

        if (!requestData) {
            throw new Error("No details Entered")
        }
        try {
            const { processes, specialties, primfeed, sec_diag_feed, procedure_feed, ed_em_feed, modifier_feed, auditorOption, feedback_types, hold_reasons, responsible_parties } = requestData;

            //validation start

            if (Object.keys(requestData).length === 0 && Object.keys(editData).length === 0) {
                return {
                    success: false,
                    message: `No configuration to add or update`,
                };
            }

            if (processes && processes.length > 0) {
                const noDuplicates = checkDuplicatesInArray(processes);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await Process.findAll({
                    where: {
                        proc_name: processes,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Process already exist")
                    return {
                        success: false,
                        message: `One or more Process already exist`,
                    };
                }
            }
            if (specialties && specialties.length > 0) {
                const noDuplicates = checkDuplicatesInArray(specialties);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await Specialty.findAll({
                    where: {
                        spec_name: specialties,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more specialties already exist")
                    return {
                        success: false,
                        message: `One or more specialties already exist`,
                    };
                }
            }
            if (primfeed && primfeed.length > 0) {
                const noDuplicates = checkDuplicatesInArray(primfeed);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await PrimDiagFeedback.findAll({
                    where: {
                        feedback_name: primfeed,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Primary Diagnosis already exist")
                    return {
                        success: false,
                        message: `One or more Primary Diagnosis already exist`,
                    };
                }
            }
            if (sec_diag_feed && sec_diag_feed.length > 0) {
                const noDuplicates = checkDuplicatesInArray(sec_diag_feed);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await SecDiagFeedback.findAll({
                    where: {
                        feedback_name: sec_diag_feed,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Secondary Diagnosis already exist")
                    return {
                        success: false,
                        message: `One or more Secondary Diagnosis already exist`,
                    };
                }
            }
            if (procedure_feed && procedure_feed.length > 0) {
                const noDuplicates = checkDuplicatesInArray(procedure_feed);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await ProceduresFeedback.findAll({
                    where: {
                        feedback_name: procedure_feed,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Procedures already exist")
                    return {
                        success: false,
                        message: `One or more Procedures already exist`,
                    };
                }
            }
            if (ed_em_feed && ed_em_feed.length > 0) {
                const noDuplicates = checkDuplicatesInArray(ed_em_feed);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await EdEmFeedback.findAll({
                    where: {
                        feedback_name: ed_em_feed,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more ED/EM Level already exist")
                    return {
                        success: false,
                        message: `One or more ED/EM Level already exist`,
                    };
                }
            }
            if (modifier_feed && modifier_feed.length > 0) {
                const noDuplicates = checkDuplicatesInArray(modifier_feed);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await ModifierFeedback.findAll({
                    where: {
                        feedback_name: modifier_feed,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Modifier already exist")
                    return {
                        success: false,
                        message: `One or more Modifier already exist`,
                    };
                }
            }
            if (auditorOption && auditorOption.length > 0) {
                const noDuplicates = checkDuplicatesInArray(auditorOption);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await AuditOption.findAll({
                    where: {
                        audit_opt: auditorOption,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Audit Options already exist")
                    return {
                        success: false,
                        message: `One or more Audit Options already exist`,
                    };
                }
            }
            if (feedback_types && feedback_types.length > 0) {
                const noDuplicates = checkDuplicatesInArray(feedback_types);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await FeedbackType.findAll({
                    where: {
                        feed_type_name: feedback_types,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Feedback Types already exist")
                    return {
                        success: false,
                        message: `One or more Feedback Types already exist`,
                    };
                }
            }
            if (hold_reasons && hold_reasons.length > 0) {
                const noDuplicates = checkDuplicatesInArray(hold_reasons);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await HoldReason.findAll({
                    where: {
                        hold_reason: hold_reasons,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Hold Reasons already exist")
                    return {
                        success: false,
                        message: `One or more Hold Reasons already exist`,
                    };
                }
            }
            if (responsible_parties && responsible_parties.length > 0) {
                const noDuplicates = checkDuplicatesInArray(responsible_parties);
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await ResponsibleParty.findAll({
                    where: {
                        resp_party_name: responsible_parties,
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Responsible Parties already exist")
                    return {
                        success: false,
                        message: `One or more Responsible Parties already exist`,
                    };
                }
            }
            //end validation

            //start edit validation
            if (editData.processes && Object.keys(editData.processes).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.processes));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await Process.findAll({
                    where: {
                        proc_name: Object.values(editData.processes),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Process already exist")
                    return {
                        success: false,
                        message: `One or more Process already exist`,
                    };
                }
            }
            if (editData.specialties && Object.keys(editData.specialties).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.specialties));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await Specialty.findAll({
                    where: {
                        spec_name: Object.values(editData.specialties),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more specialties already exist")
                    return {
                        success: false,
                        message: `One or more specialties already exist`,
                    };
                }
            }
            if (editData.primfeed && Object.keys(editData.primfeed).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.primfeed));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await PrimDiagFeedback.findAll({
                    where: {
                        feedback_name: Object.values(editData.primfeed),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Primary Diagnosis already exist")
                    return {
                        success: false,
                        message: `One or more Primary Diagnosis already exist`,
                    };
                }
            }
            if (editData.sec_diag_feed && Object.keys(editData.sec_diag_feed).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.sec_diag_feed));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await SecDiagFeedback.findAll({
                    where: {
                        feedback_name: Object.values(editData.sec_diag_feed),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Secondary Diagnosis already exist")
                    return {
                        success: false,
                        message: `One or more Secondary Diagnosis already exist`,
                    };
                }
            }
            if (editData.procedure_feed && Object.keys(editData.procedure_feed).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.procedure_feed));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await ProceduresFeedback.findAll({
                    where: {
                        feedback_name: Object.values(editData.procedure_feed),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Procedures already exist")
                    return {
                        success: false,
                        message: `One or more Procedures already exist`,
                    };
                }
            }
            if (editData.ed_em_feed && Object.keys(editData.ed_em_feed).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.ed_em_feed));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await EdEmFeedback.findAll({
                    where: {
                        feedback_name: Object.values(editData.ed_em_feed),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more ED/EM Level already exist")
                    return {
                        success: false,
                        message: `One or more ED/EM Level already exist`,
                    };
                }
            }
            if (editData.modifier_feed && Object.keys(editData.modifier_feed).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.modifier_feed));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await ModifierFeedback.findAll({
                    where: {
                        feedback_name: Object.values(editData.modifier_feed),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Modifier already exist")
                    return {
                        success: false,
                        message: `One or more Modifier already exist`,
                    };
                }
            }
            if (editData.auditorOption && Object.keys(editData.auditorOption).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.auditorOption));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await AuditOption.findAll({
                    where: {
                        audit_opt: Object.values(editData.auditorOption),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Audit Options already exist")
                    return {
                        success: false,
                        message: `One or more Audit Options already exist`,
                    };
                }
            }
            if (editData.feedback_types && Object.keys(editData.feedback_types).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.feedback_types));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await FeedbackType.findAll({
                    where: {
                        feed_type_name: Object.values(editData.feedback_types),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Feedback Types already exist")
                    return {
                        success: false,
                        message: `One or more Feedback Types already exist`,
                    };
                }
            }
            if (editData.hold_reasons && Object.keys(editData.hold_reasons).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.hold_reasons));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await HoldReason.findAll({
                    where: {
                        hold_reason: Object.values(editData.hold_reasons),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Hold Reasons already exist")
                    return {
                        success: false,
                        message: `One or more Hold Reasons already exist`,
                    };
                }
            }
            if (editData.responsible_parties && Object.keys(editData.responsible_parties).length > 0) {
                const noDuplicates = checkDuplicatesInArray(Object.values(editData.responsible_parties));
                if (!noDuplicates) {
                    return {
                        success: false,
                        message: `Cannot save duplicate entries`,
                    };
                }
                const check = await ResponsibleParty.findAll({
                    where: {
                        resp_party_name: Object.values(editData.responsible_parties),
                        LocationId,
                        ClientId
                    }
                });
                if (check && check.length > 0) {
                    logger.error("One or more Responsible Parties already exist")
                    return {
                        success: false,
                        message: `One or more Responsible Parties already exist`,
                    };
                }
            }

            //end edit validation
            return {
                success: true,
                message: `Configuration validate successfully`,
            };
        } catch (error) {
            return error;
        }
    }

    //add configuration details
    async addConfigurationMaster(techStackCategories,locationId, requestData, ClientId, task_id) {
        if (!requestData) {
            throw new Error("No details Entered");
        }
        try {
            const { processes, specialties, primfeed, sec_diag_feed, procedure_feed, ed_em_feed, modifier_feed, auditorOption, feedback_types, hold_reasons, responsible_parties, client, locations, attachments} = requestData;

            if (locations && locations.length > 0) {
                const proData = [];
                for (let a in locations) {
                    if (locations[a].trim() != "") {
                        proData.push({
                        loc_name: locations[a],
                        ClientId : 1
                        });
                    }
                }
                try {
                    await Locations.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (attachments && attachments.length > 0) {
                const proData = [];
                for (let a in attachments) {
                    if (attachments[a].trim() != "") {
                        proData.push({
                        link: attachments[a],
                        task_id : task_id
                        });
                    }
                }
                try {
                    await Attachments.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }
            
            if (client && client.length > 0) {
                const proData = [];
                for (let a in client) {
                    if (client[a].trim() != ""){ 
                        proData.push({
                        client_name: client[a],
                        });
                    }
                }
                try {
                    await Client.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (processes && processes.length > 0) {
                const proData = [];
                for (let a in processes) {
                    if (processes[a].trim() != "") proData.push({
                        proc_name: processes[a],
                    });
                }
                try {
                    await Process.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (specialties && specialties.length > 0) {
                const proData = [];
                for (let a in specialties) {
                    if (specialties[a].trim() != "") proData.push({
                        spec_name: specialties[a],
                        ClientId : 1
                    });
                }
                try {
                    const tech_stack_category = await TechStackCategory.findByPk(techStackCategories)
                    const speciality =  await Specialty.bulkCreate(proData);
                    const specialtyData = speciality.map(specialty => specialty.dataValues.id);
                    if (proData) {
                        tech_stack_category.addSpecialties(specialtyData)
                    }
                } catch (e) {
                    throw e;
                }
            }

            if (primfeed && primfeed.length > 0) {
                const proData = [];
                for (let a in primfeed) {
                    if (primfeed[a].trim() != "") proData.push({
                        feedback_name: primfeed[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await PrimDiagFeedback.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (sec_diag_feed && sec_diag_feed.length > 0) {
                const proData = [];
                for (let a in sec_diag_feed) {
                    if (sec_diag_feed[a].trim() != "") proData.push({
                        feedback_name: sec_diag_feed[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await SecDiagFeedback.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (procedure_feed && procedure_feed.length > 0) {
                const proData = [];
                for (let a in procedure_feed) {
                    if (procedure_feed[a].trim() != "") proData.push({
                        feedback_name: procedure_feed[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await ProceduresFeedback.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (ed_em_feed && ed_em_feed.length > 0) {
                const proData = [];
                for (let a in ed_em_feed) {
                    if (ed_em_feed[a].trim() != "") proData.push({
                        feedback_name: ed_em_feed[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await EdEmFeedback.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (modifier_feed && modifier_feed.length > 0) {
                const proData = [];
                for (let a in modifier_feed) {
                    if (modifier_feed[a].trim() != "") proData.push({
                        feedback_name: modifier_feed[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await ModifierFeedback.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (auditorOption && auditorOption.length > 0) {
                const proData = [];
                for (let a in auditorOption) {
                    if (auditorOption[a].trim() != "") proData.push({
                        audit_opt: auditorOption[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await AuditOption.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (feedback_types && feedback_types.length > 0) {
                const proData = [];
                for (let a in feedback_types) {
                    if (feedback_types[a].trim() != "") proData.push({
                        feed_type_name: feedback_types[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await FeedbackType.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }

            if (hold_reasons && hold_reasons.length > 0) {
                const proData = [];
                for (let a in hold_reasons) {
                    if (hold_reasons[a].trim() != "") proData.push({
                        hold_reason: hold_reasons[a],
                    });
                }
                try {
                    await HoldReason.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }


            if (responsible_parties && responsible_parties.length > 0) {
                const proData = [];
                for (let a in responsible_parties) {
                    if (responsible_parties[a].trim() != "") proData.push({
                        resp_party_name: responsible_parties[a],
                        LocationId: locationId,
                        ClientId
                    });
                }
                try {
                    await ResponsibleParty.bulkCreate(proData);
                } catch (e) {
                    throw e;
                }
            }
            return {
                success: true,
                message: `Configuration added successfully`,
            };
        } catch (error) {
            throw error;
        }
    }

    //update configuration details
    async editConfigurationMaster(requestData, task_id) {
        if (!requestData) {
            throw new Error("No details Entered");
        }
        try {
            const { locationId, processes, specialties, primfeed, sec_diag_feed, procedure_feed, ed_em_feed, modifier_feed, auditorOption, feedback_types, hold_reasons, responsible_parties, client, locations, attachments } = requestData;

            if (attachments) {
            const proData = [];
            for (let a in attachments) {
                if (attachments[a].trim() !== "") {
                proData.push({
                    id: a, // Use 'id' for updating
                    link: attachments[a],
                    task_id
                });
                }
            }
            try {
                await Attachments.bulkCreate(proData, {
                    updateOnDuplicate: ["link"], // Specify the field to be updated
                });
            } catch (e) {
                throw e;
            }
            }
            if (locations) {
                const proData = [];
                for (let a in locations) {
                    if (locations[a].trim() != ""){ 
                        proData.push({
                        loc_name: locations[a],
                        id: a,
                        });
                    }
                }
                try {
                    await Locations.bulkCreate(proData, {
                        updateOnDuplicate: ["loc_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }
            
            if (client) {
                const proData = [];
                for (let a in client) {
                    if (client[a].trim() != ""){
                        proData.push({
                            client_name: client[a],
                            id: a,
                        });
                    }
                }
                try {
                    await Client.bulkCreate(proData, {
                        updateOnDuplicate: ["client_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }
            
            if (processes) {
                const proData = [];
                for (let a in processes) {
                    if (processes[a].trim() != ""){
                        proData.push({
                            proc_name: processes[a],
                            id: a,
                        });
                    }
                }
                try {
                    await Process.bulkCreate(proData, {
                        updateOnDuplicate: ["proc_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (specialties) {
                const proData = [];
                for (let a in specialties) {
                    if (specialties[a].trim() != "")
                        proData.push({
                            spec_name: specialties[a],
                            id: a,
                        });
                }
                try {
                    await Specialty.bulkCreate(proData, {
                        updateOnDuplicate: ["spec_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (primfeed) {
                const proData = [];
                for (let a in primfeed) {
                    if (primfeed[a].trim() != "")
                        proData.push({
                            feedback_name: primfeed[a],
                            id: a,
                        });
                }
                try {
                    await PrimDiagFeedback.bulkCreate(proData, {
                        updateOnDuplicate: ["feedback_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (sec_diag_feed) {
                const proData = [];
                for (let a in sec_diag_feed) {
                    if (sec_diag_feed[a].trim() != "")
                        proData.push({
                            feedback_name: sec_diag_feed[a],
                            id: a,
                        });
                }
                try {
                    await SecDiagFeedback.bulkCreate(proData, {
                        updateOnDuplicate: ["feedback_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (procedure_feed) {
                const proData = [];
                for (let a in procedure_feed) {
                    if (procedure_feed[a].trim() != "")
                        proData.push({
                            feedback_name: procedure_feed[a],
                            id: a,
                        });
                }
                try {
                    await ProceduresFeedback.bulkCreate(proData, {
                        updateOnDuplicate: ["feedback_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (ed_em_feed) {
                const proData = [];
                for (let a in ed_em_feed) {
                    if (ed_em_feed[a].trim() != "")
                        proData.push({
                            feedback_name: ed_em_feed[a],
                            id: a,
                        });
                }
                try {
                    await EdEmFeedback.bulkCreate(proData, {
                        updateOnDuplicate: ["feedback_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (modifier_feed) {
                const proData = [];
                for (let a in modifier_feed) {
                    if (modifier_feed[a].trim() != "")
                        proData.push({
                            feedback_name: modifier_feed[a],
                            id: a,
                        });
                }
                try {
                    await ModifierFeedback.bulkCreate(proData, {
                        updateOnDuplicate: ["feedback_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (auditorOption) {
                const proData = [];
                for (let a in auditorOption) {
                    if (auditorOption[a].trim() != "")
                        proData.push({
                            audit_opt: auditorOption[a],
                            id: a,
                        });
                }
                try {
                    await AuditOption.bulkCreate(proData, {
                        updateOnDuplicate: ["audit_opt"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (feedback_types) {
                const proData = [];
                for (let a in feedback_types) {
                    if (feedback_types[a].trim() != "")
                        proData.push({
                            feed_type_name: feedback_types[a],
                            id: a,
                        });
                }
                try {
                    await FeedbackType.bulkCreate(proData, {
                        updateOnDuplicate: ["feed_type_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (hold_reasons) {
                const proData = [];
                for (let a in hold_reasons) {
                    if (hold_reasons[a].trim() != "")
                        proData.push({
                            hold_reason: hold_reasons[a],
                            id: a,
                        });
                }
                try {
                    await HoldReason.bulkCreate(proData, {
                        updateOnDuplicate: ["hold_reason"],
                    });
                } catch (e) {
                    throw e;
                }
            }

            if (responsible_parties) {
                const proData = [];
                for (let a in responsible_parties) {
                    if (responsible_parties[a].trim() != "")
                        proData.push({
                            resp_party_name: responsible_parties[a],
                            id: a,
                        });
                }
                try {
                    await ResponsibleParty.bulkCreate(proData, {
                        updateOnDuplicate: ["resp_party_name"],
                    });
                } catch (e) {
                    throw e;
                }
            }
            return {
                success: true,
                message: `Configuration update successfully`,
            };
        } catch (error) {
            throw error;
        }
    }

    async loggedInUserDetail(requestData) {
        const {LOG_HOUR} = notificationTypeContants;
        try {
            let user = await User.findByPk(requestData.id, {
                attributes: ['id', 'image_url',
                    ['first_name', 'first_name'],
                    ['last_name', 'last_name'],
                    ['date_of_birth', 'date_of_birth'],
                    ['joining_date', 'joining_date'],
                    ['email', 'email'],
                    ['employee_id', 'employee_id'],
                    [Sequelize.col('Role.id'), 'RoleId'],
                    [Sequelize.col('Role.role_name'), 'role'],
                    [Sequelize.col('AddedByUser.first_name'), 'added_by_user_first_name'],
                    [Sequelize.col('AddedByUser.last_name'), 'added_by_user_last_name'],
                    [Sequelize.col('AddedByUser.image_url'), 'added_by_user_image_url']
                ],
                include: [
                    {
                        model: Role,
                        attributes: []
                    },
                    {
                        model: Specialty,
                        attributes: [['id', 'id'], ['spec_name', 'name']],
                        through: {
                            attributes: [],
                        }
                    },
                    {
                        model: Locations,
                        attributes: [['id', 'id'], ['loc_name', 'name']],
                        through: {
                            attributes: [],
                        }
                    },
                    {
                        model: Client,
                        attributes: [['id', 'id'], ['client_name', 'name']],
                        through: {
                            attributes: [],
                        }
                    },
                    {
                        model: Designation,
                        attributes: [['id', 'id'], ['name', 'name']]
                    },
                    {
                        model: User,
                        as : "AddedByUser",
                        attributes: [],
                    }
                ],

            });
            if (user.dataValues.date_of_birth) {
                user.dataValues.date_of_birth = moment(user.date_of_birth).format("MM/DD/YYYY")
            }
            if (user.dataValues.joining_date) {
                user.dataValues.joining_date = moment(user.joining_date).format("MM/DD/YYYY")
            }

            user.dataValues.Role = user.dataValues.role;
            delete user.dataValues.role;

            const startOfMonth = moment().startOf('month');
            const presentDaysInThisMonth = await Attendance.count({
                where: {
                    UserId: user.id,
                    date: { [Op.gte]: startOfMonth },
                    is_on_leave: false
                }
            });

            const dayCountOfMonthTillToday = parseInt(moment().format('D'));
            const absentDays = dayCountOfMonthTillToday - presentDaysInThisMonth;

            user.dataValues.present = presentDaysInThisMonth ?? 0;
            user.dataValues.absent = absentDays ?? 0;

            const notifications = await Notification.findAll({
                where: {
                    user_id: requestData.id
                },
                raw: true,
                order: [['createdAt', 'DESC']]
            });

            const userMissedLogHour = await Notification.findAll({
                where: { [Op.and]: [{ user_id: requestData.id }, { notification_type_id: LOG_HOUR }] },
                raw: true,
                attributes: [["createdAt", "date"], ["id", "notification_id"], "user_id", "is_read", ["notification","notification_description"]],
            });

            user = {...user.dataValues, notifications, userMissedLogHour};
            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async showUserById(userId) {
        const {LOG_HOUR} = notificationTypeContants;
        try {
            let attending = false;
            let user = await User.findOne({
                include: [
                    {
                        model: Specialty,
                        attributes: [['id', 'id'], ['spec_name', 'name']],
                        through: {
                            attributes: [],
                        }
                    },
                    {
                        model: Locations,
                        attributes: [['id', 'id'], ['loc_name', 'name']],
                        through: {
                            attributes: [],
                        }
                    },
                    {
                        model: Client,
                        attributes: [['id', 'id'], ['client_name', 'name']],
                        through: {
                            attributes: [],
                        }
                    },
                    {
                        model: Designation,
                        attributes: [['id', 'id'], ['name', 'name']]
                    },
                    {
                        model: User,
                        as : "AddedByUser",
                        attributes: [['first_name', 'added_by_user_first_name'], ['last_name', 'added_by_user_last_name'], ['image_url', 'added_by_user_image_url']],
                    },
                ],
                where: {
                    id: userId
                },
            });
            let getAttendance = await Attendance.findOne({
                where: {
                    UserId: userId,
                    date: moment().format('YYYY-MM-DD')
                },
                attributes: ['is_on_leave']
            })
            if (getAttendance !== null) {
                getAttendance.dataValues;
                attending = !(getAttendance.dataValues.is_on_leave)
            }

            let userRole = await user.getRole();
            userRole = userRole.dataValues;
            const { id, role_name } = userRole;
            user = user.dataValues;
            if (user.date_of_birth) {
                user.date_of_birth = moment(user.date_of_birth).format("MM/DD/YYYY")
            }
            if (user.joining_date) {
                user.joining_date = moment(user.joining_date).format("MM/DD/YYYY")
            }

            const startOfMonth = moment().startOf('month');
            const presentDaysInThisMonth = await Attendance.count({
                where: {
                    UserId: user.id,
                    date: { [Op.gte]: startOfMonth },
                    is_on_leave: false
                }
            });

            // Fetching missed log hours from notification for specific UserId.
            const userMissedLogHour = await Notification.findAll({
                where: {
                    [Op.and]: [{ notification_type_id: LOG_HOUR }, { user_id: userId }],
                },
                attributes: [["createdAt", "date"], ["id", "notification_id"], "user_id", "is_read", ["notification","notification_description"]],
                raw: true
            })

            const dayCountOfMonthTillToday = parseInt(moment().format('D'));
            const absentDays = dayCountOfMonthTillToday - presentDaysInThisMonth;

            user.present = presentDaysInThisMonth ?? 0;
            user.absent = absentDays ?? 0;
            if (user.AddedByUser) {
                user.added_by_user_first_name = user.AddedByUser.dataValues?.added_by_user_first_name;
                user.added_by_user_last_name = user.AddedByUser.dataValues?.added_by_user_last_name;
                user.added_by_user_image_url = user.AddedByUser.dataValues?.added_by_user_image_url;
            } else {
                user.added_by_user_first_name = null;
                user.added_by_user_last_name = null;
                user.added_by_user_image_url = null;
            }
            delete user.AddedByUser;
            user = {
                ...user,
                Role: role_name,
                attending: attending,
                userMissedLogHour
            };
            if (!user) {
                throw new Error('User with given ID does not exist')
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserStats() {
        try {
            const { CODER_ID, TEAM_LEAD_ID, MEMBER_ID, MANAGER_ID } = userRoleConstants;
            const ActiveUsers = await User.count({
                where: {
                    is_active: true,
                    RoleId: {
                        [Op.in]: [CODER_ID, MEMBER_ID, TEAM_LEAD_ID, MANAGER_ID]
                    },
                },
                group: ['RoleId'],
                attributes: ['RoleId']
            });

            let active_coders = 0,
                active_auditors = 0,
                active_teamLeads = 0,
                active_managers = 0;
            const resp_map = ActiveUsers.forEach((obj) => {
                if (obj.RoleId === CODER_ID) {
                    active_coders = obj.count;
                }
                if (obj.RoleId === MEMBER_ID) {
                    active_auditors = obj.count;
                }
                if (obj.RoleId === TEAM_LEAD_ID) {
                    active_teamLeads = obj.count;
                }
                if (obj.RoleId === MANAGER_ID) {
                    active_managers = obj.count;
                }
            });
            const UsersIsOnLeave = await Attendance.count({
                where: {
                    is_on_leave: {
                        [Op.in]: [true, false],
                    },
                    date: moment()
                },
                group: ['is_on_leave'],
                attributes: ['is_on_leave']
            });

            let attending_users = 0,
                not_attending_users = 0;
            const res_map = UsersIsOnLeave.forEach((obj) => {
                if (obj.is_on_leave === false) {
                    attending_users = obj.count
                }
            });
            not_attending_users = (active_coders + active_auditors + active_teamLeads + active_managers) - attending_users;
            return {
                active_coders,
                active_auditors,
                active_teamLeads,
                attending_users,
                not_attending_users
            };
        }
        catch (error) {
            throw error;
        }
    }

    async addNewUser(requestData,userId) {
        if (!requestData) {
            throw new Error('No details Entered');
        };
        let { email } = requestData;
        try {
            let userDetail = await User.findOne({
                where: {
                    email: email
                }
            });
            if (userDetail) {
                logger.error('User already exists', { User: email })
                throw new Error('User already exists')
            }
            else {
                const hashedPassword = await bcrypt.hash(requestData.password, 10);
                const newUser = await User.create({
                    first_name: requestData.first_name,
                    last_name: requestData.last_name,
                    email: requestData.email,
                    password: hashedPassword,
                    date_of_birth: (requestData.date_of_birth !== "" && requestData.date_of_birth !== null) ? moment(requestData.date_of_birth, 'DD-MM-YYYY').format('YYYY-MM-DD') : null,
                    joining_date: (requestData.joining_date !== "" && requestData.joining_date !== null) ? moment(requestData.joining_date, 'DD-MM-YYYY').format('YYYY-MM-DD') : null,
                    employee_id: requestData.employee_id,
                    RoleId: requestData.role_id,
                    DesignationId: requestData.designation_id,
                    added_by: userId,
                });
                if (requestData.location_id) {
                    await newUser.setLocations(requestData.location_id);
                }
                if (requestData.client_id) {
                    await newUser.setClients(requestData.client_id);
                }
                if (requestData.Specialties) {
                    await newUser.setSpecialties(requestData.Specialties);
                }
                const defaultProjectIds = (process.env.DEFAULT_PROJECTS ?? "").split(",");
                if (defaultProjectIds && defaultProjectIds.length !== 0) {
                    for (const projectId of defaultProjectIds) {
                        if(projectId){
                            const assignProject = await ProjectMembers.create({
                                w_id: projectId,
                                u_id: newUser.id
                            })
                        }
                    }
                }
                
                return newUser;
            }
        } catch (error) {
            throw error;
        }
    }

    async updateUser(requestData, userId) {
        if (!requestData) {
            throw new Error('No details Entered');
        };
        const updatedUserId = userId;
        const user = {
            first_name: requestData.first_name,
            last_name: requestData.last_name,
            email: requestData.email,
            password: requestData.password,
            date_of_birth: requestData.date_of_birth,
            joining_date: requestData.joining_date,
            specialty: requestData.specialty,
            employee_id: requestData.employee_id,
            RoleId: requestData.RoleId
        };
        try {
            const foundUser = await User.findOne({
                where: { id: updatedUserId }
            });
            const updatedUser = await foundUser.update(user, { where: { id: userId } })
            return updatedUser;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteUser(userId, loggedInUserId) {
        try {
            if (userId == loggedInUserId) {
                throw new Error('You cannot deactivate your own account');
            }
            let noOfDeletedUsers = await User.update({ is_active: false }, { where: { id: userId } });
            return noOfDeletedUsers;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteConfiguration(requestData) {
        try {

            if(requestData.key.hasOwnProperty('attachments')){
                let check = await Attachments.destroy({
                    where: {
                        id: requestData.key['attachments']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('location')) {
                let check = await Locations.destroy({
                    where: {
                        id: requestData.key['location']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('client')) {
                let check = await Client.destroy({
                    where: {
                        id: requestData.key['client']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('processes')) {
                let check = await Process.destroy({
                    where: {
                        id: requestData.key['processes']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('specialties')) {
                let check = await Specialty.destroy({
                    where: {
                        id: requestData.key['specialties']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('primary_diagnosis')) {
                let check = await PrimDiagFeedback.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['primary_diagnosis']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('secondary_diagnosis')) {
                let check = await SecDiagFeedback.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['secondary_diagnosis']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('procedures')) {
                let check = await ProceduresFeedback.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['procedures']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('ed_em_level')) {
                let check = await EdEmFeedback.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['ed_em_level']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('modifier')) {
                let check = await ModifierFeedback.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['modifier']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('audit_options')) {
                let check = await AuditOption.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['audit_options']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('feedback_types')) {
                let check = await FeedbackType.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['feedback_types']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('hold_reasons')) {
                let check = await HoldReason.destroy({
                    where: {
                        id: requestData.key['hold_reasons']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
            if (requestData.key.hasOwnProperty('responsible_parties')) {
                let check = await ResponsibleParty.destroy({
                    where: {
                        ClientId: requestData.ClientId,
                        LocationId: requestData.LocationId,
                        id: requestData.key['responsible_parties']
                    }
                });
                if (check === 1) {
                    return true
                }
                else {
                    return false
                }
            }
        }
        catch (error) {
            throw error;
        }
    }

    async updateUserPassword(requestData, UserId) {
        try {
            const user = await User.findByPk(UserId, {
                raw: true,
                attributes: ['id', 'email', 'password']
            })
            const isPreviousPasswordCorrect = await bcrypt.compare(requestData.previous_password, user.password);
            if (isPreviousPasswordCorrect) {
                const hashedPassword = await bcrypt.hash(requestData.new_password, 10);
                const updatedUserPassword = await User.update(
                    { password: hashedPassword },
                    { where: { id: user.id } }
                )
                return updatedUserPassword;
            }
            else {
                logger.error('Wrong password entered', { User: UserId })
                throw new Error("Wrong password entered")
            }
        }
        catch (error) {
            throw error;
        }
    }

    async validateLocation(requestData, client_id) {
        if (!requestData) {
            throw new Error("No details Entered");
        }
        try {
            const { locations } = requestData;
            for (let i = 0; i < locations.length; i++) {
                const check = await Locations.findAll({
                    where: {
                        loc_name: locations[i],
                        ClientId: client_id
                    }
                });
                if (check && check.length > 0) {
                    logger.error(`One or more location already exist for this client with ID: ${client_id}`)
                    return {
                        success: false,
                        message: `One or more location already exist for this client`,
                    };
                }
            }
            return {
                success: true,
                message: `Configuration validate successfully`,
            };
        } catch (error) {
            throw error;
        }
    }

    async addLocation(requestData, client_id) {
        if (!requestData) {
            throw new Error("No details Entered");
        }
        try {
            const { locations } = requestData;
            if (locations && locations.length > 0) {
                const data = [];
                for (let a in locations) {
                    if (locations[a].trim() != "")
                        data.push({
                            loc_name: locations[a],
                            ClientId: client_id
                        });
                }
                try {
                    let check = await Client.findOne({
                        where: { id: client_id }
                    })
                    if (!check) {
                        return {
                            success: false,
                            message: `Client not found`,
                        };
                    } else {
                        const save = await Locations.bulkCreate(data);
                    }
                } catch (e) {
                    return {
                        success: false,
                        message: `Location already exist`,
                    };
                }
            }
            return {
                success: true,
                message: `Location added successfully`,
            };
        } catch (error) {
            throw error;
        }
    }

    async displayLocations(requestData) {
        try {
            const allLocations = await Locations.findAll({});
            return allLocations;
        } catch (error) {
            throw error;
        }
    }

    async displayClient() {
        try {
            const allClient = await Client.findAll({});
            return allClient;
        } catch (error) {
            throw error;
        }
    }

    async displayConfigurationByLocationId(requestData) {
        let data = {}
        try {
            let filterData = {};

            const processes = await this.getProcesses(requestData);
            const specialties = await this.getSpecialties(requestData);
            const audit_options = [] //await this.getAuditOptions(filterData);
            const hold_reasons = await this.getHoldReasons(requestData);
            const responsible_parties = []// await this.getResponsibleParties(filterData);
            const feedback_types = []// await this.getFeedbackType(filterData);
            const prim_diag_feed = []//await this.getPrimDiagFeedbacks(filterData);
            const sec_diag_feed = []// await this.getSecDiagFeedbacks(filterData);
            const procedure_feed = []//await this.getProceduresFeedbacks(filterData);
            const ed_em_feed = []// await this.getEdEmFeedbacks(filterData);
            const modifier_feed = []// await this.getModifierFeedbacks(filterData);

            data = {
                audit_options, hold_reasons, responsible_parties, processes, feedback_types,
                prim_diag_feed, sec_diag_feed, procedure_feed, ed_em_feed, modifier_feed, specialties
            };

            return data;
        } catch (error) {
            throw error;
        }
    }

    async getProcesses(requestData) {
        return await Process.findAll()
    }
    async getSpecialties(requestData) {
        return await Specialty.findAll()
    }
    async getAuditOptions(requestData) {
        return await AuditOption.findAll(requestData)
    }
    async getHoldReasons(requestData) {
        return await HoldReason.findAll()
    }
    async getResponsibleParties(requestData) {
        return await ResponsibleParty.findAll(requestData)
    }
    async getFeedbackType(requestData) {
        return await FeedbackType.findAll(requestData)
    }
    async getPrimDiagFeedbacks(requestData) {
        return await PrimDiagFeedback.findAll(requestData)
    }
    async getSecDiagFeedbacks(requestData) {
        return await SecDiagFeedback.findAll(requestData)
    }
    async getProceduresFeedbacks(requestData) {
        return await ProceduresFeedback.findAll(requestData)
    }
    async getEdEmFeedbacks(requestData) {
        return await EdEmFeedback.findAll(requestData)
    }
    async getModifierFeedbacks(requestData) {
        return await ModifierFeedback.findAll(requestData)
    }

    async requestAccess(requestData) {
        let { email } = requestData
        try {
            let userDetail = await UserAccessRequest.findOne({
                where: {
                    email: email
                }
            });
            if (userDetail) {
                const updatedUser = await UserAccessRequest.update(
                    { action: null, access_granted: false, request: moment() },
                    { where: { email: email } }
                )
                const userIdsToNotify = (process.env.ACCESS_NOTIFICATION_USERS ?? "").split(",");
                if (userIdsToNotify && userIdsToNotify.length !== 0) {
                    for (const userId of userIdsToNotify) {
                        if (userId) {
                            const user = await User.findByPk(userId, {
                                attributes: ['id', 'email', 'first_name', 'last_name'],
                                raw: true
                            });
                            sendRequestAccessNotificationMail({ request_email: email, assignee_name: `${user.first_name} ${user.last_name}`, assignee_email: user.email });
                        }
                    }
                }

                return updatedUser;
            }
            else {
                const newUserAccess = await UserAccessRequest.create({
                    email: requestData.email.toLowerCase(),
                    azure_id: requestData.azure_id ?? '',
                    first_name: requestData.first_name ?? '',
                    last_name: requestData.last_name ?? '',
                    action: null,
                    request: moment(),
                    access_granted: false
                })

                const userIdsToNotify = (process.env.ACCESS_NOTIFICATION_USERS ?? "").split(",");
                if (userIdsToNotify && userIdsToNotify.length !== 0) {
                    for (const userId of userIdsToNotify) {
                        if (userId) {
                            const user = await User.findByPk(userId, {
                                attributes: ['id', 'email', 'first_name', 'last_name'],
                                raw: true
                            });
                            sendRequestAccessNotificationMail({ request_email: requestData.email.toLowerCase(), assignee_name: `${user.first_name} ${user.last_name}`, assignee_email: user.email });
                        }
                    }
                }

                return newUserAccess;
            }
        } catch (error) {
            throw error;
        }
    }

    async getPendingRequests(page = 1, size) {
        try {
            const pendingUserCount = await UserAccessRequest.count({
                where: {
                    action: null
                }
            });
            const { limit, offset } = getPagination((page - 1), size);
            const allPendingUsers = await UserAccessRequest.findAll({
                attributes: ['id', 'email', 'request', 'first_name', 'last_name'],
                where: {
                    action: null
                },
                raw: true,
                limit: limit,
                offset: offset,
                order: [['createdAt', 'DESC']]
            });
            for (const user of allPendingUsers) {
                if (user.request != null) {
                    user.request = moment(user.request).format('DD MMM YY, hh:mm a');
                }
            }
            const activeUsersCount = parseInt(await getUserFilterCounts({}));
            const inActiveUsersCount = parseInt(await getUserFilterCounts({ inactive: true }));
            const data = {
                users: allPendingUsers,
                count: pendingUserCount,
                active_count: activeUsersCount,
                inactive_count: inActiveUsersCount
            }
            return data;
        } catch (error) {
            throw error;
        }
    }

    async pendingUser(requestData, UserId, accessStatus, loggedInUser) {
        try {
            if (accessStatus === "grant") {
                const grantUserAccess = await UserAccessRequest.update(
                    { action: accessStatus, access_granted: true, updated_by: loggedInUser },
                    { where: { id: UserId, action: null } }
                )
                let { email } = requestData;
                let userDetail = await User.findOne({
                    where: {
                        email: email
                    }
                });
                if (userDetail) {
                    const updatedUser = await User.update({ 
                        is_active: true, 
                        added_by: loggedInUser 
                    },{ 
                        where: { email: email } 
                    })
                    const user = await User.findOne({
                        where: { email },
                        attributes: ['id', 'email', 'first_name', 'last_name'],
                        raw: true
                    });

                    sendGrantAccessNotificationMail({assignee_name: `${user.first_name} ${user.last_name}`, assignee_email: user.email});

                    return "Access granted and user details updated successfully";
                }
                else {
                    const hashedPassword = await bcrypt.hash('notApassword', 10);
                    const newUser = await User.create({
                        first_name: requestData.first_name,
                        last_name: requestData.last_name,
                        employee_id: requestData.employee_id,
                        email: requestData.email,
                        date_of_birth: (requestData.date_of_birth !== "" && requestData.date_of_birth !== null) ? moment(requestData.date_of_birth, 'DD-MM-YYYY').format('YYYY-MM-DD') : null,
                        joining_date: (requestData.joining_date !== "" && requestData.joining_date !== null) ? moment(requestData.joining_date, 'DD-MM-YYYY').format('YYYY-MM-DD') : null,
                        RoleId: requestData.RoleId,
                        DesignationId: requestData.DesignationId,
                        password: hashedPassword,
                        is_active: true,
                        added_by: loggedInUser,
                    });
                    if (requestData.Locations) {
                        await newUser.setLocations(requestData.Locations);
                    }
                    if (requestData.Clients) {
                        await newUser.setClients(requestData.Clients);
                    }
                    if (requestData.Specialties) {
                        await newUser.setSpecialties(requestData.Specialties);
                    }
                    const defaultProjectIds = (process.env.DEFAULT_PROJECTS ?? "").split(",");
                    if (defaultProjectIds && defaultProjectIds.length !== 0) {
                        for (const projectId of defaultProjectIds) {
                            if(projectId){
                                const assignProject = await ProjectMembers.create({
                                    w_id: projectId,
                                    u_id: newUser.id
                                })
                            }
                        }
                    }
                    sendGrantAccessNotificationMail({assignee_name: `${newUser.first_name} ${newUser.last_name}`, assignee_email: newUser.email});

                    return "Access granted and user details updated successfully";
                }
            }
            else if (accessStatus === "decline") {
                const grantUserAccess = await UserAccessRequest.update(
                    { action: accessStatus, access_granted: false },
                    { where: { id: UserId, action: null } }
                )
                return 'Access request declined';
            }
        } catch (error) {
            throw error;
        }
    }

    async editUser(requestData, userId) {
        if (!requestData) {
            throw new Error('No details Entered');
        };
        const updatedUserId = userId;
        const user = {
            first_name: requestData.first_name,
            last_name: requestData.last_name,
            date_of_birth: (requestData.date_of_birth !== "" && requestData.date_of_birth !== null) ? moment(requestData.date_of_birth, 'DD-MM-YYYY').format('YYYY-MM-DD') : null,
            joining_date: (requestData.joining_date !== "" && requestData.joining_date !== null) ? moment(requestData.joining_date, 'DD-MM-YYYY').format('YYYY-MM-DD') : null,
            RoleId: requestData.RoleId,
            DesignationId: requestData.DesignationId,
            employee_id: requestData.employee_id
        };
        try {
            const foundUser = await User.findOne({
                where: { id: updatedUserId }
            });
            const updatedUser = await foundUser.update(user, { where: { id: userId } })
            if (requestData?.Clients) {
                await foundUser.setClients(requestData?.Clients);
            }
            if (requestData?.Locations) {
                await foundUser.setLocations(requestData?.Locations);
            }
            if (requestData?.Specialties) {
                await foundUser.setSpecialties(requestData?.Specialties);
            }

            return foundUser;
        }
        catch (error) {
            throw error;
        }
    }

    async updateLoggedInUser(request) {
        await this.editUser(request.body, request.user.id)
    }

    async applyLeaveForUser(requestData, userId) {
        if (!requestData) {
            throw new Error('No details Entered');
        }
        try {
            const startDate = moment(requestData.from_date).format('YYYY-MM-DD');
            const endDate = moment(requestData.to_date).format('YYYY-MM-DD');
            const findLeave = await Leave.count({
                where: {
                    user_id: userId,
                    [Op.or]: [
                        { from_date: { [Op.between]: [startDate, endDate] } },
                        { to_date: { [Op.between]: [startDate, endDate] } }
                    ]
                },
            });
            if (findLeave === 0) {
                const applyLeave = await Leave.create({
                    user_id: userId,
                    reason: requestData.reason,
                    from_date: moment(requestData.from_date).format('YYYY-MM-DD'),
                    to_date: moment(requestData.to_date).format('YYYY-MM-DD')
                });
                return "Leave successfully applied";
            } else {
                throw new Error('You already have leave(s) in selected range');
            }
        } catch (error) {
            throw error;
        }
    }

    async getAttachments(task_id){
        try{
           const attachments = await Attachments.findAll({
                attributes:['id','task_id','link'],
                where:{
                    task_id : task_id
                }
            })

            return attachments;
        } catch( error){
            throw error;
        }
    }

    async getLeavesByUser(userId, RoleId) {
        if (!userId) {
            throw new Error('No details Found');
        }
        try {
            const findLeaves = await fetchLeaves(userId)
            return findLeaves;
        } catch (error) {
            throw error;
        }
    }

    async getMyLeaves(userId, RoleId) {
        if (!userId) {
            throw new Error('No details Found');
        }
        try {
            const findLeaves = await fetchLeaves(userId, RoleId)
            return findLeaves;
        } catch (error) {
            throw error;
        }
    }

    async getUserLeavesForMonth(userId, month = '01', year = '2023', RoleId) {
        if (!userId) {
            throw new Error('No details Found');
        }
        try {
            month = parseInt(month) <= 9 ? '0' + parseInt(month) : month;
            const monthOfLeaves = moment(`${year}${month}`);
            const monthStart = monthOfLeaves.startOf('month').format('YYYY-MM-DD');
            const monthEnd = monthOfLeaves.endOf('month').format('YYYY-MM-DD');

            const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;

            let leaveWhereCondition = {
                [Op.or]: [
                    { from_date: { [Op.between]: [monthStart, monthEnd] } },
                    { to_date: { [Op.between]: [monthStart, monthEnd] } },
                ],
            }
            if (RoleId != MANAGER_ID && RoleId != TEAM_LEAD_ID) {
                leaveWhereCondition.user_id = userId;
            }

            let leaveIncludeModels = [];
            let leaveAttributes = ['id', 'reason', 'from_date', 'to_date'];
            if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
                leaveIncludeModels.push({
                    model: User,
                    attributes: ['first_name', 'last_name', 'employee_id']
                });
                const userAttributes = [
                    [Sequelize.col('User.first_name'), 'first_name'],
                    [Sequelize.col('User.last_name'), 'last_name'],
                    [Sequelize.col('User.employee_id'), 'employee_id'],]
                leaveAttributes.push(...userAttributes);
            }

            const getLeavesForThisMonth = await Leave.findAll({
                where: leaveWhereCondition,
                include: leaveIncludeModels,
                attributes: leaveAttributes,
                raw: true,
                order: [['id', 'DESC']]
            });

            let leaveReasons = [];
            if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
                for (const leave of getLeavesForThisMonth) {
                    leaveReasons.push({
                        id: leave.id, reason: leave.reason, name: `${leave.first_name} ${leave.last_name}`,
                        employee_id: leave.employee_id,
                        period: `${moment(leave.from_date).format('MM/DD/YYYY')} - ${moment(leave.to_date).format('MM/DD/YYYY')}`
                    })
                }
            }
            else {
                for (const leave of getLeavesForThisMonth) {
                    leaveReasons.push({
                        id: leave.id, reason: leave.reason,
                        period: `${moment(leave.from_date).format('MM/DD/YYYY')} - ${moment(leave.to_date).format('MM/DD/YYYY')}`
                    })
                }
            }
            return leaveReasons;
        } catch (error) {
            throw error;
        }
    }

    async firstLogin(requestData) {
        try {
            const { email } = requestData;
            let userExistsAsActive = await User.findOne({
                where: { email: email, is_active: true }
            });
            if (!userExistsAsActive) {
                return false;
            }
            return true;
        } catch (error) {
            throw error;
        }
    }

    async activateUserProfile(userId) {
        try {
            const activatedUser = await User.update(
                { is_active: true },
                { where: { id: userId } }
            );
            return activatedUser;
        }
        catch (error) {
            throw error;
        }
    }

    async uploadProfileImage(userId, requestData) {
        try {
            const image_url = requestData.image_url ?? null;
            const updateProfileImage = await User.update({
                image_url
            }, {
                where: { id: userId }
            });
            return updateProfileImage;
        }
        catch (error) {
            throw error;
        }
    }

    async setNotificationAsRead(user_id, requestData){
        try {
            const id = requestData?.notification_id;
            const markNotificationAsRead = await Notification.update({
                is_read: true
            }, {
                where: {
                    id,
                    user_id
                }
            });
            return markNotificationAsRead;
        }
        catch (error) {
            throw error;
        }
    }

    async getReasonForNotLoggingHours(userId, notification_id) {
        if (!userId) {
            throw new Error('No record found');
        }
        try {
            const notification = await NotificationComment.findAll({
                where: {
                    user_id: userId,
                    notification_id: notification_id
                },
                attributes: [
                    'user_message',
                    'notification_id',
                    'createdAt',
                    [Sequelize.col('User.first_name'), 'user_first_name'],
                    [Sequelize.col('User.last_name'), 'user_last_name'],
                    [Sequelize.col('User.image_url'), 'user_image_url']
                ],
                include: [
                    {
                        model: User,
                        attributes: [],
                    }
                ]
            });
          return notification
        } catch (error) {
            throw error;
        }
    }

    async reasonForNotLoggingHours(requestData, userId) {
        if (!requestData) {
            throw new Error('No details Entered');
        }
        try {
            const count = await Notification.count({
                where: {
                  user_id: userId,
                  id: requestData?.notification_id,
                },
            });
            if(count > 0) {
                const newComment = await NotificationComment.create({
                    user_id: userId,
                    notification_id: requestData?.notification_id,
                    user_message: requestData?.user_message,
                });
                return newComment;
            } else {
                throw new Error('Cannot comment on this notification');
            }

        } catch (error) {
            throw error;
        }
    }
}

async function fetchLeaves(userId, RoleId = 3) {
    try {
        const { MANAGER_ID, TEAM_LEAD_ID } = userRoleConstants;
        let leaveWhereCondition = {};
        if (RoleId != MANAGER_ID && RoleId != TEAM_LEAD_ID) {
            leaveWhereCondition.user_id = userId;
        }

        let leaveIncludeModels = [];
        let leaveAttributes = [['id', 'id'], ['reason', 'title'], ['from_date', 'start'], ['to_date', 'end'], ['all_day', 'allDay']];
        if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
            leaveIncludeModels.push({
                model: User,
                attributes: ['first_name', 'last_name', 'employee_id']
            });
            const userAttributes = [
                [Sequelize.col('User.first_name'), 'first_name'],
                [Sequelize.col('User.last_name'), 'last_name'],
                [Sequelize.col('User.employee_id'), 'employee_id'],]
            leaveAttributes.push(...userAttributes);
        }

        const findLeaves = await Leave.findAll({
            where: leaveWhereCondition,
            attributes: leaveAttributes,
            include: leaveIncludeModels,
            raw: true,
            order: [['id', 'DESC']]
        });

        let eventsArray = [];
        if (findLeaves?.length > 0) {
            if (RoleId === MANAGER_ID || RoleId === TEAM_LEAD_ID) {
                for (const item of findLeaves) {
                    eventsArray.push({
                        id: item.id,
                        title: item.title,
                        start: moment(item.start).format('YYYY-MM-DD'),
                        end: `${moment(item.end).format('YYYY-MM-DD')}T00:00:01`,
                        name: `${item.first_name} ${item.last_name}`,
                        employee_id: item.employee_id,
                    })
                }
            }
            else {
                for (const item of findLeaves) {
                    eventsArray.push({
                        id: item.id,
                        title: item.title,
                        start: moment(item.start).format('YYYY-MM-DD'),
                        end: `${moment(item.end).format('YYYY-MM-DD')}T00:00:01`,
                    })
                }
            }
            return eventsArray
        }
        return "No leaves available"
    } catch (error) {
        throw error;
    }

}

function getPagination(page, size) {
    try {
        const limit = size ? +size : 10;
        const offset = page ? page * limit : 0;
        return { limit, offset };
    } catch (error) {
        throw error;
    }
}

function getWhereConditionsForUserFilterQuery(requestData = {}) {
    let whereCondition = '';
    let andCondition = '';
    if (requestData.name && requestData.name !== '') {
        requestData.name = requestData.name.trim()
        if (requestData.name.includes(" ")) {
            const nameSplit = requestData.name.split(" ");
            requestData.first_name = nameSplit[0].trim();
            requestData.last_name = nameSplit[1].trim();
            whereCondition = whereCondition.concat('WHERE ', `
            "User"."first_name" ILIKE '%${requestData.first_name}%' 
            AND "User"."last_name" ILIKE '%${requestData.last_name}%'
            ` );
        }
        else {
            requestData.first_name = requestData.name;
            whereCondition = whereCondition.concat('WHERE ', `
            "User"."first_name" ILIKE '%${requestData.first_name}%'
            ` );
        }
    }
    if (requestData.employee_id && requestData.employee_id !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."employee_id" = '${requestData.employee_id}'
        `);
    }
    if (requestData.date_of_birth && requestData.date_of_birth !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        if (requestData.date_of_birth.includes("-")) {
            const dateSplit = requestData.date_of_birth.split("-");
            const startDate = moment(dateSplit[0].trim()).format('YYYY-MM-DD');
            const endDate = moment(dateSplit[1].trim()).format('YYYY-MM-DD');
            whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."date_of_birth" BETWEEN '${startDate}' AND '${endDate}'
        `);
        }
        else {
            whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."date_of_birth" = '${moment(requestData.date_of_birth).format('YYYY-MM-DD')}'
        `);
        }
    }
    if (requestData.joining_date && requestData.joining_date !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        if (requestData.joining_date.includes("-")) {
            const dateSplit = requestData.joining_date.split("-");
            const startDate = moment(dateSplit[0].trim()).format('YYYY-MM-DD');
            const endDate = moment(dateSplit[1].trim()).format('YYYY-MM-DD');
            whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."joining_date" BETWEEN '${startDate}' AND '${endDate}'
        `);
        }
        else {
            whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."joining_date" = '${moment(requestData.joining_date).format('YYYY-MM-DD')}'
        `);
        }
    }
    if (requestData.RoleId && requestData.RoleId !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."RoleId" IN (${requestData.RoleId.toString()})
        `);
    }
    if (requestData.DesignationId && requestData.DesignationId !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        whereCondition = whereCondition.concat(` ${andCondition} `, `
        "User"."DesignationId" IN (${requestData.DesignationId.toString()})
        `);
    }
    if (requestData.specialties && requestData.specialties !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        whereCondition = whereCondition.concat(` ${andCondition} `, `
        "UserSpecialties"."SpecialtyId" IN (${requestData.specialties.toString()})
        `);
    }
    if (requestData.locations && requestData.locations !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        whereCondition = whereCondition.concat(` ${andCondition} `, `
        "UserLocations"."LocationId" IN (${requestData.locations.toString()})
        `);
    }
    if (requestData.clients && requestData.clients !== '') {
        if (whereCondition !== '') {
            andCondition = 'AND'
        }
        else {
            whereCondition = 'WHERE'
        }
        whereCondition = whereCondition.concat(` ${andCondition} `, `
        "UserClients"."ClientId" IN (${requestData.clients.toString()})
        `);
    }

    // Return active/inactive users based in presence of inactive key
    if (whereCondition !== '') {
        andCondition = 'AND'
    }
    else {
        whereCondition = 'WHERE'
    }
    let activeCondition = true;
    if (requestData.inactive && requestData.inactive == true) {
        activeCondition = false;
    }
    whereCondition = whereCondition.concat(` ${andCondition} `, `"User"."is_active" IN (${activeCondition})`);

    return whereCondition;
}

async function getUserFilteredRecords(requestData = {}, limit = 10, offset = 0) {
    try {
        let attendanceStatus = `${true},${false}`;
        if (requestData.status && requestData.status !== '') {
            if (requestData.status == 'Not-attending') {
                attendanceStatus = true
            }
            if (requestData.status == 'Attending') {
                attendanceStatus = false
            }
        }
        let whereCondition = getWhereConditionsForUserFilterQuery(requestData);
        let dateToday = moment().format('YYYY-MM-DD');
        const recordQuery = await sequelize.query(
            `SELECT * FROM 
            (
            SELECT 
            "User"."id", 
            "User"."employee_id", 
            "User"."first_name", 
            "User"."last_name", 
            "User"."email", 
            "User"."image_url",
            array_to_string(
            array_agg(distinct "Role"."role_name"), 
            ', '
            ) AS "role", 
            array_to_string(
            array_agg(distinct "Designation"."name"), 
            ', '
            ) AS "designation", 
            array_to_string(
            array_agg(
            distinct "Specialties"."spec_name"
            ), 
            ', '
            ) AS "specialty", 
            array_to_string(
            array_agg(
            distinct "Clients"."client_name"
            ), 
            ', '
            ) AS "client", 
            COALESCE(
            (
            SELECT 
                "Attendances"."is_on_leave" 
            FROM 
                "Attendances" 
            WHERE 
                "User"."id" = "Attendances"."UserId" 
                AND "Attendances"."date" = '${dateToday}'
            LIMIT 1
            ), 
            true
            ) AS "user_on_leave" 
            FROM 
            public."Users" AS "User" 
            LEFT OUTER JOIN "Designations" AS "Designation" ON "User"."DesignationId" = "Designation"."id" 
            LEFT OUTER JOIN "Roles" AS "Role" ON "User"."RoleId" = "Role"."id" 
            LEFT OUTER JOIN "UserSpecialties" ON "UserSpecialties"."UserId" = "User"."id" 
            LEFT OUTER JOIN "Specialties" ON "Specialties"."id" = "UserSpecialties"."SpecialtyId" 
            LEFT OUTER JOIN "UserClients" ON "UserClients"."UserId" = "User"."id" 
            LEFT OUTER JOIN "Clients" ON "Clients"."id" = "UserClients"."ClientId"
            LEFT OUTER JOIN "UserLocations" ON "UserLocations"."UserId" = "User"."id" 
            LEFT OUTER JOIN "Locations" ON "Locations"."id" = "UserLocations"."LocationId"  
            ${whereCondition} 
            GROUP BY 
            "User"."id" 
            ORDER BY 
            "User"."first_name"
            ) AS "CONSOLIDATED" 
            WHERE "CONSOLIDATED"."user_on_leave" IN (${attendanceStatus}) 
            LIMIT ${limit} OFFSET ${offset};`
            , { raw: true, nest: true });

        for (const user of recordQuery) {
            if (user.user_on_leave === true) {
                user.status = 'Not-attending'
            }
            if (user.user_on_leave === false) {
                user.status = 'Attending'
            }
            user.full_name = `${user.first_name} ${user.last_name}`;
            delete user.user_on_leave;
        }
        return recordQuery
    }
    catch (error) {
        throw error;
    }
}

async function getUserFilterCounts(requestData = {}) {
    try {
        let attendanceStatus = `${true},${false}`;
        if (requestData.status && requestData.status !== '') {
            if (requestData.status == 'Not-attending') {
                attendanceStatus = true
            }
            if (requestData.status == 'Attending') {
                attendanceStatus = false
            }
        }
        let whereCondition = getWhereConditionsForUserFilterQuery(requestData);
        let dateToday = moment().format('YYYY-MM-DD');
        const recordCountQuery = await sequelize.query(
            `Select COUNT(*) FROM 
            (
            SELECT 
            * 
            FROM 
            (
            SELECT 
            "User"."id", 
            COALESCE(
                (
                SELECT 
                    "Attendances"."is_on_leave" 
                FROM 
                    "Attendances" 
                WHERE 
                    "User"."id" = "Attendances"."UserId" 
                    AND "Attendances"."date" = '${dateToday}'
                LIMIT 1
                ), 
                true
            ) AS "user_on_leave" 
            FROM 
            public."Users" AS "User" 
            LEFT OUTER JOIN "Designations" AS "Designation" ON "User"."DesignationId" = "Designation"."id" 
            LEFT OUTER JOIN "Roles" AS "Role" ON "User"."RoleId" = "Role"."id" 
            LEFT OUTER JOIN "UserSpecialties" ON "UserSpecialties"."UserId" = "User"."id" 
            LEFT OUTER JOIN "Specialties" ON "Specialties"."id" = "UserSpecialties"."SpecialtyId" 
            LEFT OUTER JOIN "UserClients" ON "UserClients"."UserId" = "User"."id" 
            LEFT OUTER JOIN "Clients" ON "Clients"."id" = "UserClients"."ClientId" 
            LEFT OUTER JOIN "UserLocations" ON "UserLocations"."UserId" = "User"."id" 
            LEFT OUTER JOIN "Locations" ON "Locations"."id" = "UserLocations"."LocationId" 
            ${whereCondition}  
            GROUP BY 
            "User"."id" 
            ) AS "CONSOLIDATED" 
            WHERE 
            "CONSOLIDATED"."user_on_leave" IN (${attendanceStatus}) 
            ) AS count`
            , { raw: true, nest: true });
        return recordCountQuery[0].count;
    }
    catch (error) {
        throw error;
    }
}

function checkDuplicatesInArray(array = []) {
    try {
        if (array.length <= 1) {
            return true;
        }
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    return false;
                }
            }
        }
        return true;
    }
    catch (error) {
        throw error;
    }
}
