const excel = require("exceljs");
const Template = require("../../models/template");
const TemplateConfigration = require("../../models/templateConfiguration");
const logger = require("../../services/winstonLogger");
const LogHours = require('../../models/logHours');
const path = require("path");
require("dotenv").config();
const {regexPatterns,userRoleConstants} = require('../../common/constants');
const sequelizeServer = require("../../../config/dbConfig");
const Crypto = require("crypto-js");
const { Op } = require("sequelize");
const { getProjectIdsAvailableByRoleAndUser } = require('../worklists/worklistManager');
const User = require("../../models/user");
const ProjectMembers = require("../../models/projectMembers");
const { Chart } = require("../../models/chart");
const Worklist = require("../../models/worklist");
const Sequelize = require("sequelize");
const moment = require("moment");
const exceljs = require("exceljs");

module.exports = class MasterManager {

	columnMap = {
		unique_task_no: {
			label: "Task #",
			type: "String",
			table: "Charts",
			inputType: "input",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct "Charts"."unique_task_no"), ', ') AS "unique_task_no"`,
		},
		name: {
			label: "Task Name",
			type: "String",
			table: "Charts",
			inputType: "input",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct "Charts"."name"), ', ') AS "name"`,
		},
		hours: {
			label: "Hours (HH:MM)",
			type: "String",
			table: "LogHours",
			inputType: "input",
		},
		hours_calc: {
			label: "Hours",
			type: "String",
			table: "LogHours",
			inputType: "input",
		},
		date: {
			label: "Log Date",
			type: "date",
			table: "LogHours",
			inputType: "date",
		},
		description: {
			label: "Description",
			type: "String",
			table: "LogHours",
			inputType: "input",
		},
		assignee_name: {
			label: "Owner",
			type: "integer",
			table: "assignee",
            column_name: "id",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct "assignee"."first_name" || ' ' ||  "assignee"."last_name"), ', ') AS "assignee_name"`,
			inputType: "select",
		},
		milestone_name: {
			label: "Milestone",
			type: "integer",
			table: "Milestones",
      		logic: true,
			logic_condition: `array_to_string(array_agg(distinct "Milestones"."milestone_name"), ', ') AS "milestone_name"`,
			inputType: "select",
			onlyFilter: true,
			filterTable: "Charts",
			filterColumn: "MilestoneId",
		},
		start_date: {
			label: "Start Date",
			type: "Date",
			table: "Charts",
			inputType: "date",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct to_char("Charts"."start_date", 'DD-MM-YYYY')), ', ') AS "start_date"`,
		},
		end_date: {
			label: "End Date",
			type: "Date",
			table: "Charts",
			inputType: "date",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct to_char("Charts"."end_date", 'DD-MM-YYYY')), ', ') AS "end_date"`,
		},
		worklist_no: {
			label: "Project #",
			type: "String",
			table: "Worklists",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct "Worklists"."worklist_no"), ', ') AS "worklist_no"`,
			inputType: "typeahead",
		},
		project_name: {
			column_name: 'name',
			label: "Project Name",
			type: "String",
			table: "Worklists",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct "Worklists"."name"), ', ') AS "project_name"`,
			inputType: "typeahead",
		},
		hold_reason: {
			label: "Hold Reason",
			type: "integer",
			table: "HoldReasons",
			joinTable: "ChartHoldReasons",
			logic: true,
			logic_condition: `array_to_string(array_agg(distinct "HoldReasons"."hold_reason"), ', ') AS "hold_reason"`,
			inputType: "select",
			onlyFilter: true,
			filterTable: "ChartHoldReasons",
			filterColumn: "HoldReasonId",
			filterJoinTable: true,
			duplicate: true,
		},
		spec_name: {
			label: "Speciality",
			type: "integer",
			table: "Specialties",
			joinTable: "ProjectSpecialties",
      		logic: true,
			logic_condition: `array_to_string(array_agg(distinct "Specialties"."spec_name"), ', ') AS "spec_name"`,
			inputType: "select",
			onlyFilter: true,
			filterTable: "ProjectSpecialties",
			filterColumn: "SpecialtyId",
			filterJoinTable: true,
			duplicate: true,
		},
		// comment_log: {
		// 	label: "Comment Log",
		// 	type: "custom",
		// 	table: "Comments",
		// 	inputType: "select",
		// 	multiselect: false,
		// 	subQuery: true,
		// }
	};

	subQuery = {
		hold_reason: `( SELECT ARRAY_AGG("ChartHoldReasons"."HoldReasonId")
    		FROM "Charts" LEFT JOIN "ChartHoldReasons" ON "ChartHoldReasons"."ChartId" = "Charts"."id" GROUP BY "ChartHoldReasons"."ChartId"),  `,
		spec_name: `( SELECT ARRAY_AGG("ProjectSpecialties"."SpecialtyId")
    		FROM "Worklists" LEFT JOIN "ProjectSpecialties" ON "ProjectSpecialties"."WorklistId" = "Worklists"."id" GROUP BY "ProjectSpecialties"."WorklistId"),  `,
		// modifier_feedback_name: `(SELECT "ModifierFeedbacks"."feedback_name" AS modifier_feedback_name FROM "Charts" LEFT JOIN "AuditInfos" ON "AuditInfos"."chart_id" = "Charts"."id"
		// 	LEFT JOIN "AuditInfoModifierFeedbacks" ON "AuditInfoModifierFeedbacks"."AuditInfoId" = "AuditInfos"."id"
		// 	LEFT JOIN "ModifierFeedbacks" ON "ModifierFeedbacks"."id" = "AuditInfoModifierFeedbacks"."ModifierFeedbackId" LIMIT 1),  `,
		// procedure_feedback_name: `(SELECT "ProceduresFeedbacks"."feedback_name" AS procedure_feedback_name FROM "Charts" LEFT JOIN "AuditInfos" ON "AuditInfos"."chart_id" = "Charts"."id"
		// 	LEFT JOIN "AuditInfoProceduresFeedbacks" ON "AuditInfoProceduresFeedbacks"."AuditInfoId" = "AuditInfos"."id"
		// 	LEFT JOIN "ProceduresFeedbacks" ON "ProceduresFeedbacks"."id" = "AuditInfoProceduresFeedbacks"."ProceduresFeedbackId" LIMIT 1),  `,
		// secdiag_feedback_name: `(SELECT "SecDiagFeedbacks"."feedback_name" AS secdiag_feedback_name FROM "Charts" LEFT JOIN "AuditInfos" ON "AuditInfos"."chart_id" = "Charts"."id"
		// 	LEFT JOIN "AuditInfoSecDiagFeedbacks" ON "AuditInfoSecDiagFeedbacks"."AuditInfoId" = "AuditInfos"."id"
		// 	LEFT JOIN "SecDiagFeedbacks" ON "SecDiagFeedbacks"."id" = "AuditInfoSecDiagFeedbacks"."SecDiagFeedbackId" LIMIT 1),  `,
		// updatedAt: ` ( SELECT "AuditInfos"."updatedAt" AS "updatedAt" FROM "AuditInfos" WHERE "AuditInfos"."chart_id" = "Charts"."id"), `,
		// comment_log: ` ( SELECT comment_details FROM get_comment_details("Charts"."id") ) AS comment_log `
	};

	joins = {
		LogHours: "",
		Worklists: `INNER JOIN "Worklists" ON "Charts"."WorklistId" = "Worklists"."id"`,
		Charts: `INNER JOIN "Charts" ON "Charts"."id" = "LogHours"."task_id" AND "LogHours"."deletedAt" IS NULL AND "Charts"."deletedAt" IS NULL`,
		ProjectSpecialties: `LEFT JOIN  "ProjectSpecialties" ON "ProjectSpecialties"."WorklistId" = "Worklists"."id"`,
		Specialties: `LEFT JOIN "Specialties" ON "Specialties"."id" = "ProjectSpecialties"."SpecialtyId"`,
		Clients: `LEFT JOIN "Clients" ON "Charts"."ClientId" = "Clients"."id"`,
		Milestones: `LEFT JOIN "Milestones" ON "Charts"."MilestoneId" = "Milestones"."id"`,
		assignee: `LEFT JOIN "Users" AS "assignee" ON "LogHours"."assignee_id" = "assignee"."id"`,
		ChartHoldReasons: `LEFT JOIN  "ChartHoldReasons" ON "ChartHoldReasons"."ChartId" = "Charts"."id"`,
		HoldReasons: `LEFT JOIN "HoldReasons" ON "HoldReasons"."id" = "ChartHoldReasons"."HoldReasonId"`,
	};

	whereClause = {
		Array: ` ":tableName".":column" IN(:value)`,
		DateMultiple: ` ":tableName".":column"::date BETWEEN ':valueOne' AND ':valueTwo'`,
		IntegerRange: ` ":tableName".":column" BETWEEN :valueOne AND :valueTwo`,
		Date: ` ":tableName".":column"::date = ':value'`,
		String: ` ":tableName".":column" ILIKE '%:value%'`,
		StringNotEqual: ` ":tableName".":column" :value`,
		integer: ` ":tableName".":column" = :value`,
	};

	async getWhere(tableName, columnName, values, modifiedColumnName, lower = false, isEqual = true) {
		if (!(columnName.endsWith('_total') || columnName.endsWith('_correct'))  && (values == "" || values == [] || values == {})) return "";
		if (isEqual === false) {
			let query = this.whereClause["StringNotEqual"];
			query = query.replace(":tableName", tableName);
			query = query.replace(":column", columnName);
			query = query.replace(":value", values);
			return query;
		}
		if (Array.isArray(values)) {
			let quotedValues = values.map(value => `'${value}'`).join(', ');
			let query = this.whereClause["Array"];
			if (lower) query = query.replace('":tableName".":column"', 'LOWER(":tableName".":column")');
			query = query.replace(":tableName", tableName);
			query = query.replace(":column", columnName);
			if (lower) query = query.replace(":value", "LOWER(:value)");
			query = query.replace(":value", quotedValues);
		  
			return query;
		}
		if (this.columnMap[modifiedColumnName]["type"].toLowerCase() === "date") {
			let dateMultiple = values.split("-");
			let query = '';
			if (dateMultiple[1]) {
				query = this.whereClause["DateMultiple"];
				query = query.replace(":tableName", tableName);
				query = query.replace(":column", columnName);
				query = query.replace(":valueOne", dateMultiple[0]);
				query = query.replace(":valueTwo", dateMultiple[1]);
			} else {
				query = this.whereClause["Date"];
				query = query.replace(":tableName", tableName);
				query = query.replace(":column", columnName);
				query = query.replace(":value", values);
			}
			return query;
		}

		if (this.columnMap[modifiedColumnName]["type"].toLowerCase() === "string") {
			let query = this.whereClause["String"];
			if (lower) query = query.replace('":tableName".":column"', 'LOWER(":tableName".":column")');
			query = query.replace(":tableName", tableName);
			query = query.replace(":column", columnName);
			if (lower) query = query.replace("'%:value%'", "LOWER('%:value%')");
			query = query.replace(":value", values);
			return query;
		}
		if (this.columnMap[modifiedColumnName]["type"].toLowerCase() === "integer" || this.columnMap[modifiedColumnName]["type"].toLowerCase() === "number") {
			let query = this.whereClause["integer"];
			query = query.replace(":tableName", tableName);
			query = query.replace(":column", columnName);
			query = query.replace(":value", values);
			return query;
		}
		if(this.columnMap[modifiedColumnName]["type"] === "IntegerRange"){
			let query = this.whereClause["IntegerRange"];
			let range = values.split("-");

			query = query.replace(":tableName", tableName);

			if(range[0] === "lt" || range[0] === "gt") {
				let lt_gt = (range[0] === "lt") ? "<" : ">";
				query = ` "${tableName}"."${columnName}" ${lt_gt} ${range[1]}`;
			} else {
				query = query.replace(":column", columnName);
				query = query.replace(":valueOne", range[0]);
				query = query.replace(":valueTwo", range[1]);
			}
			return query;
		}
		return "";
	}

	async validateTemplateConfiguration(requestData) {
		const { configuration } = requestData;
		for (let a in configuration) {
			if (configuration[a]["id"]) {
				if (isNaN(configuration[a]["id"])) {
					return {
						success: false,
						message: `ID is not valid of ${configuration[a]["id"]} OR blank`,
					};
				}
				if (!configuration[a]["key"] || configuration[a]["key"] == "") {
					return {
						success: false,
						message: `key is not valid of OR does not exists`,
					};
				}
				if (!configuration[a]["report"] || configuration[a]["report"] !== true || configuration[a]["report"] !== false) {
					return {
						success: false,
						message: `report is not valid of OR does not exists`,
					};
				}
				if (!configuration[a]["filter"] || configuration[a]["filter"] !== true || configuration[a]["filter"] !== false) {
					return {
						success: false,
						message: `report is not valid of OR does not exists`,
					};
				}
			}
		}
		return {
			success: true,
			message: `validate configuration successfully`,
		};
	}

	async validateGetReport(requestData) {
		try {
			const { fields = [], filters = {} } = requestData;
			for (let i = 0; i < fields.length; i++) {
				const e = fields[i];
				if (this.columnMap[e] == undefined) {
					return {
						success: false,
						message: `Field ${e} doesn't exist.`,
					};
				}
			}
			for (let filterName in filters) {
				if (this.columnMap[filterName] == undefined) {
					return {
						success: false,
						message: `Filter ${filterName} doesn't exist.`,
					};
				}
			}

			this.validateReportFilter(requestData);

			return {
				success: true,
				message: "Report validate successfully",
			};
		} catch (error) {
			throw error;
		}
	}
	async validateReportFilter(requestData) {
		const isStrings = (values) => (Array.isArray(values) ? values.every((i) => typeof i === "string" || i instanceof String) : typeof values === "string" || values instanceof String);
		const isNumbers = (values) => (Array.isArray(values) ? values.every((i) => typeof i === "number" || i instanceof Number) : typeof values === "number" || values instanceof Number);
		const isDate = (values) => {
			return Array.isArray(values)
				? values.every((i) => {
						return !isNaN(new Date(i).getTime());
				  })
				: !isNaN(new Date(values).getTime());
		};

		try {
			const { filters = {} } = requestData;
			for (let filterName in filters) {
				let type = this.columnMap[filterName]["type"];
				if (type.toLowerCase() === "string") {
					let checkString = isStrings(filters[filterName]);
					if (!checkString) {
						return {
							success: false,
							message: `Invalid value type for filter ${checkString}. String required`,
						};
					}
				}
				if (type.toLowerCase() === "number" || type.toLowerCase() === "integer") {
					let checkNumber = isNumbers(parseInt(filters[filterName]));
					if (!checkNumber) {
						return {
							success: false,
							message: `Invalid  value type for filter ${filterName}. Number required`,
						};
					}
				}
				if (type.toLowerCase() === "date") {
					let checkDate = isDate(filters[filterName].split("-"));
					if (!checkDate) {
						return {
							success: false,
							message: `Filter ${filterName} is not a valid date.`,
						};
					}
				}
			}
			return {
				success: true,
				message: "Report validate successfully",
			};
		} catch (error) {
			throw error;
		}
	}

	async getreport(requestData, pagination, {RoleId, id: userId}) {
		try {
			let { size = 10, page = 1 } = pagination;
			let offset = (parseInt(page) - 1) * size;
			let columns = `array_to_string(array_agg(distinct "Charts"."id"), ', ') AS "task_id",`; // To fetch task Ids by default on every query
			let subQueryColumns = "";
			let joinColumn = [];
			let whereCondition = [];
			let baseQuery;
			let count = 0;
			let nextPage = null;
			let result;
			let resultCount = 0;
			let worksheetColumns = [];

			/**
			 * Get Role and Project Member based Project Ids to pass into query
			*/
			let restrictedProjectsQuery = '';
			const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, userId);
			if(projectIds && projectIds.length !== 0){
				restrictedProjectsQuery += `AND "Worklists"."id" IN( ${projectIds.join(',')} ) `
			}
			joinColumn = [this.joins["Charts"], this.joins["Worklists"], restrictedProjectsQuery]; // Join Charts and Worklists by default on every query due to project Id restriction according to role and project member

			const { fields = [], filters = {}, encryptedFields = [] } = requestData;
			for (let i = 0; i < fields.length; i++) {
				let excelFields = {};
				let e = fields[i];
				excelFields.key = e;
				excelFields.header = this.columnMap[fields[i]].label;
				worksheetColumns.push(excelFields);

				if (this.columnMap[fields[i]].subQuery) {
					if(fields[i] === 'comment_log') {
						if(filters['comment_log'] === 'auditor') {
							subQueryColumns += `${this.subQuery[fields[i]].replace('"Charts"."id"', '"Charts"."id", ARRAY[4]')}`;
						} else if(filters['comment_log'] === 'coder') {
							subQueryColumns += `${this.subQuery[fields[i]].replace('"Charts"."id"', '"Charts"."id", ARRAY[3]')}`;
						} else if(filters['comment_log'] === 'both') {
							subQueryColumns += `${this.subQuery[fields[i]].replace('"Charts"."id"', '"Charts"."id", ARRAY[3,4]')}`;
						} else {
							subQueryColumns += `${this.subQuery[fields[i]]}`;
						}
					} else {
						subQueryColumns += `${this.subQuery[fields[i]]}`;
					}
				} else {
					if (this.columnMap[fields[i]].encrypted) {
						encryptedFields.push(e);
					}

					if (this.columnMap[fields[i]].extraFilterCondition && whereCondition.indexOf(this.columnMap[fields[i]].extraFilterCondition) == -1) {
						whereCondition.push(this.columnMap[fields[i]].extraFilterCondition);
					}

					if (this.columnMap[e].logic) {
						e = this.columnMap[e].logic_condition;
						columns += `${e},`;
					} else {
						if(this.columnMap[e]["type"] && this.columnMap[e]["type"].toLowerCase() === 'date') {
							columns += `to_char("${this.columnMap[e]["table"]}"."${e}", 'DD-MM-YYYY') AS "${e}" ,`;
						} else {
							columns += `"${this.columnMap[e]["table"]}"."${e}",`;
						}
					}
					if (this.columnMap[fields[i]].joinTable) {
						let joinArray = this.columnMap[fields[i]].joinTable.split(",");
						joinArray.forEach((joinElement) => {
							if (joinColumn.indexOf(`${this.joins[joinElement]}`) == -1) {
								joinColumn.push(`${this.joins[joinElement]}`);
							}
						});
					}
					if (joinColumn.indexOf(`${this.joins[this.columnMap[fields[i]]["table"]]}`) == -1 && this.joins[this.columnMap[fields[i]]["table"]]) {
						joinColumn.push(`${this.joins[this.columnMap[fields[i]]["table"]]}`);
					}
				}
			}

			for (let filterKey in filters) {
				let filterValue = filters[filterKey];
				let columnKey = filterKey;
				let isEqual = true;
				if (this.columnMap[filterKey]["isEqual"]) {
					isEqual = false;
					if (filterValue == 0) {
						filterValue = "IS NULL";
					} else if (filterValue == 1) {
						filterValue = "IS NOT NULL";
					}
				}

				if (this.columnMap[filterKey].onlyFilter) {
					if (this.columnMap[filterKey].filterJoinTable) {
						let joinFilterArray = this.columnMap[filterKey]["joinTable"].split(",");

						joinFilterArray.forEach((joinElement) => {
							if (joinColumn.indexOf(`${this.joins[joinElement]}`) == -1) {
								joinColumn.push(`${this.joins[joinElement]}`);
							}
						});
					}

					if (whereCondition.indexOf(`${await this.getWhere(this.columnMap[filterKey]["filterTable"], this.columnMap[filterKey]["filterColumn"], filterValue, filterKey, this.columnMap[filterKey]["lower"], isEqual)}`) == -1) {
            			whereCondition.push(`${await this.getWhere(this.columnMap[filterKey]["filterTable"], this.columnMap[filterKey]["filterColumn"], filterValue, filterKey, this.columnMap[filterKey]["lower"], isEqual)}`);
					}
				} else {
					if (this.columnMap[filterKey].column_name) {
						columnKey = this.columnMap[filterKey].column_name;
					}
					if (this.columnMap[filterKey].joinTable) {
						let joinFilterArray = this.columnMap[filterKey]["joinTable"].split(",");

						joinFilterArray.forEach((joinElement) => {
							if (joinColumn.indexOf(`${this.joins[joinElement]}`) == -1) {
								joinColumn.push(`${this.joins[joinElement]}`);
							}
						});
					}

					if (joinColumn.indexOf(`${this.joins[this.columnMap[filterKey]["table"]]}`) == -1 && this.joins[this.columnMap[filterKey]["table"]]) {
						joinColumn.push(`${this.joins[this.columnMap[filterKey]["table"]]}`);
					}

					if ((Array.isArray(filterValue) && filterValue.length > 0) || (filterValue !== "" && !Array.isArray(filterValue))) {
						if (whereCondition.indexOf(`${ await this.getWhere(this.columnMap[filterKey]["table"], columnKey, filterValue, filterKey, this.columnMap[filterKey]["lower"], isEqual)}`) == -1) {
							whereCondition.push(`${ await this.getWhere(this.columnMap[filterKey]["table"], columnKey, filterValue, filterKey, this.columnMap[filterKey]["lower"], isEqual)}`);
						}
					}
				}
			}
				
			columns = columns.substring(0, columns.length - 1);
			if (subQueryColumns != "" && columns != "") {
				columns += ",";
			}
			subQueryColumns = subQueryColumns.replace(/,\s*$/, "");			
			if (fields.length > 0) {
				let GroupByCond = "";
        		GroupByCond = 'GROUP BY "LogHours"."id"';
				const orderByCond = 'ORDER BY "LogHours"."date" DESC';

				const fullWhereCondition = whereCondition[0]?.length ? " WHERE " + whereCondition.filter((el) => {return el.length>0 }).join(" AND ") : "";

				count = `Select COUNT(*) FROM ( SELECT "LogHours"."id" FROM public."LogHours" ${joinColumn.join(" ")} ${fullWhereCondition} ${GroupByCond} ) AS count`;

				baseQuery = `Select ${columns} ${subQueryColumns} FROM public."LogHours" ${joinColumn.join(" ")} ${fullWhereCondition} ${GroupByCond} ${orderByCond}`;
				
				if (!requestData.export) {
					baseQuery += ` LIMIT ${size} OFFSET ${offset}`;
				}
				result = await sequelizeServer.query(baseQuery, { raw: true, nest: true });
				resultCount = await sequelizeServer.query(count, { raw: true, nest: true });
				{
					resultCount[0].count ? (count = resultCount[0].count) : (count = 0);
				}
			} else {
				result = null;
			}
      
			if (encryptedFields.length > 0 && requestData.export) {
				for (let c = 0; c < encryptedFields.length; c++) {
					for (let r = 0; r < result.length; r++) {
						let decrptVal = Crypto.AES.decrypt(result[r][encryptedFields[c]] ?? "", process.env.AES_CRYPTO_KEY);
						decrptVal = decrptVal.toString(Crypto.enc.Utf8);
						result[r][encryptedFields[c]] = decrptVal;
					}
				}
			}

			let excelFile = "";
			let fileName = "MindIT-WMT-Report-" + Date.now() + ".xlsx";

			if (requestData.export) {

				for(let row of result) {
					if(row.hasOwnProperty('hours_calc') && row.hours_calc !== '') {
						row.hours_calc = parseFloat(row.hours_calc)
					}
				}

				let workbook = new excel.Workbook();
				let worksheet = workbook.addWorksheet("Reports");

				worksheet.columns = worksheetColumns;
				worksheet.addRows(result);

				// save under export.xlsx
				excelFile = path.join("reportExcel/" + fileName);
				await workbook.xlsx.writeFile(excelFile);
			}

			let total_pages = Math.ceil(count / size);

			if (+page + 1 > total_pages) {
				nextPage = null;
			} else {
				nextPage = +page + 1;
			}

			let finalResult = {
				result: requestData.export
					? {
							url: process.env.APP_URL + "/" + excelFile,
							name: fileName,
					  }
					: result || [],
				total_pages: total_pages || 0,
				total_records: count || 0,
				current_page: page || 0,
				next_page: nextPage,
			};
			return finalResult;
		} catch (error) {
			throw error;
		}
	}

	secondsToTime = (duration) => {// Hours, minutes and seconds
		const hrs = ~~(duration / 3600);
		const mins = ~~((duration % 3600) / 60);
		const secs = ~~duration % 60;

		// Output like "1:01" or "4:03:59" or "123:03:59"
		let ret = "";

		if (hrs > 0) {
			ret += (hrs < 10 ? "0" : "") + hrs + ":";
		} else {
			ret += "00:"
		}

		ret += (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;

		return ret;
	}

	async getCustomizeFeild() {
		try {
			return {
				success: true,
				data: this.columnMap,
			};
		} catch (error) {
			throw error;
		}
	}

	async createTemplate(requestData) {
		try {
			const { name, configuration } = requestData;

			if (!name || /[^a-zA-Z0-9\-\s\_\']/.test(name) || name.trim() === '') {
				return {
					success: false,
					message: `Please enter a valid name.`,
				};
			}

			const result = await Template.create({
				name,
			});
			let postData = [];
			for (let a in configuration) {
				postData.push({
					TemplateId: result.id,
					field_name: configuration[a]["key"],
					report: configuration[a]["report"],
					filter: configuration[a]["filter"],
				});
			}
			const promise = await TemplateConfigration.bulkCreate(postData);

			return {
				success: true,
				data: result,
			};
		} catch (error) {
			logger.error(error);
			throw error;
		}
	}

	async getTemplate() {
		try {
			const where = {};

			const result = await Template.findAll({
				where,
			});

			return {
				success: true,
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async updateTemplate(requestData) {
		try {
			const { id, name } = requestData;
			const result = await Template.update(
				{
					name,
				},
				{
					where: {
						id,
					},
				}
			);
			return {
				success: true,
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getProjects(RoleId, userId){
		try {
			const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, userId);

			const projectData = await Worklist.findAll({
				attributes: ['id', 'worklist_no', 'name'],
				where: {
					id: projectIds
				},
				raw: true,
				order: [['name', 'ASC']]
			})
			return projectData;
		  }
		  catch (error) {
			throw error;
		  }
	}

	async getProjectMembersByUser({ id, RoleId }) {
		try {
			const {TEAM_LEAD_ID, MEMBER_ID, MANAGER_ID} = userRoleConstants;
			let userCondition = {};
			if (RoleId === MANAGER_ID) {
				userCondition.RoleId = { [Op.in]: [MEMBER_ID, TEAM_LEAD_ID, MANAGER_ID] }
			} else if (RoleId === TEAM_LEAD_ID) {
				userCondition.RoleId = { [Op.in]: [MEMBER_ID, TEAM_LEAD_ID] }
			}

			const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);
			const tasks = await ProjectMembers.findAll({
				attributes: [[Sequelize.col('User.first_name'), 'firstName'],[Sequelize.col('User.last_name'), 'lastName'], 'u_id', [Sequelize.col('User.image_url'), 'image_url']],
				where:{
					w_id: { [Op.in]: projectIds }
				},
				include: [
					{
						model: User,
						attributes: [],
						where: userCondition
					},
				],
				order: [['firstName', 'ASC']],
				group : ['u_id', 'User.first_name', 'User.last_name', 'User.image_url']
			}); 
			return tasks;
		  }
		  catch (error) {
			throw error;
		  }
	}

	async getTasksAssignedToUser({ id, RoleId }, projectId = "") {
		try {
			let projectFilter = {};
			if (projectId) {
				projectFilter = projectId
			} else {
				const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, id);
				projectFilter = { [Op.in]: projectIds }
			}
			const tasks = await Chart.findAll({
				attributes: ['id', 'name'],
				where: {
					assignee_id: id,
					WorklistId: projectFilter
				},
				raw: true
			});
	  
			return tasks;
		  }
		  catch (error) {
			throw error;
		  }
	}

	async updateTemplateConfiguration(requestData, template_id) {
		try {
			const { configuration } = requestData;
			const proData = [];
			for (let a in configuration) {
				const result =
					configuration[a]["id"] === undefined
						? await TemplateConfigration.create({
								TemplateId: template_id,
								field_name: configuration[a]["key"],
								report: configuration[a]["report"],
								filter: configuration[a]["filter"],
						  })
						: await TemplateConfigration.update(
								{
									TemplateId: template_id,
									field_name: configuration[a]["key"],
									report: configuration[a]["report"],
									filter: configuration[a]["filter"],
								},
								{
									where: {
										id: configuration[a]["id"],
										TemplateId: template_id,
									},
								}
						  );
			}
			return {
				success: true,
				message: "Template configuration updated successfully.",
			};
		} catch (error) {
			throw error;
		}
	}

	async deleteTemplateConfiguration(requestData, template_id) {
		try {
			const result = await TemplateConfigration.destroy({
				where: {
					template_id,
				},
			});

			return {
				success: true,
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getTemplateConfiguration(requestData, template_id) {
		try {
			const result = await TemplateConfigration.findAll({
				where: {
					TemplateId: template_id,
				},
			});

			return {
				success: true,
				data: result,
			};
		} catch (error) {
			throw error;
		}
	}

	async getLogDetailsBasedOnDate({ id: userId, RoleId }, { user, project, date }) {
		try {
			const { MEMBER_ID } = userRoleConstants;
			if (!user || !project || !date) {
				throw new Error('Request does not contain sufficient details');
			}
			const logDetailsForUser = await LogHours.findAll({
				attributes: ['id', 'description', 'task_id', 'assignee_id', 'hours', 'date', 'hours_calc',
					[Sequelize.col('User.first_name'), 'user_fname'], [Sequelize.col('User.last_name'), 'user_lname'],
					[Sequelize.col('Chart.name'), 'task_name'], [Sequelize.col('Chart.unique_task_no'), 'task_no'],
				],
				where: {
					date
				},
				include: [
					{
						model: User,
						attributes: [],
						required: true,
						where: {
							id: RoleId === MEMBER_ID ? userId : user
						}
					},
					{
						model: Chart,
						attributes: [],
						required: true,
						include: [{
							model: Worklist,
							attributes: [],
							required: true,
							where: {
								id: project
							}
						}]
					}
				],
				raw: true
			});

			let total_hours = 0;
			logDetailsForUser.forEach(log => {
				total_hours += parseFloat(log.hours_calc);
				log['user_name'] = `${log.user_fname} ${log.user_lname}`;
			})

			return { logDetailsForUser, total_hours };
		} catch (err) {
			throw err;
		}
	}

	async getLogDetailsBasedOnMonth({ id: userId , RoleId }, requestData) {
		try {
			if (!requestData) {
				throw new Error('Request does not contain sufficient details');
			}

			const { users = [], month = moment().format('MM'), year = moment().format('YYYY'), projects = [] } = requestData;

			const dateStart = moment(`${month && month !== "" ? month : moment().format('MM')}-${year}`, 'MM-YYYY').startOf('month').format('YYYY-MM-DD');
			const dateEnd = moment(`${month && month !== "" ? month : moment().format('MM')}-${year}`, 'MM-YYYY').endOf('month').format('YYYY-MM-DD');

			//Generating headers for the month
			const startEndDiff = moment(dateEnd).diff(moment(dateStart), "days");
			const headers = [{ heading: 'Project' }, { heading: 'User' }, { heading: 'Total' }];
			for (let i = 0; i <= startEndDiff; i++) {
				const singleDate = moment(dateStart).add(i, "d");
				headers.push({ date: singleDate.format("DD"), day: singleDate.format("dd").toUpperCase()})
			}

			const logFilter = {
				date : {
					[Op.between]: [dateStart, dateEnd]
				}
			}
			const projectFilter = {}
			const userFilter = {}

			if(projects && projects.length !== 0){
				projectFilter.id = {
					[Op.in]: projects
				}
			} else if (projects && projects.length === 0) {
				const projectIds = await getProjectIdsAvailableByRoleAndUser(RoleId, userId);
				projectFilter.id = {
					[Op.in]: projectIds
				}
			}

			const { TEAM_LEAD_ID, MEMBER_ID } = userRoleConstants
			if (RoleId === MEMBER_ID) {
				logFilter.assignee_id = userId;
			} else if (RoleId === TEAM_LEAD_ID) {
				if (users && users.length !== 0) {
					logFilter.assignee_id = {
						[Op.in]: users
					}
				} else {
					userFilter.RoleId = {
						[Op.in]: [TEAM_LEAD_ID, MEMBER_ID]
					}
				}
			} else if (users && users.length !== 0) {
				logFilter.assignee_id = {
					[Op.in]: users
				}
			}

			const fetchedLogs = await LogHours.findAll({
				where: logFilter,
				attributes: ['id', 'hours_calc', 'date'],
				include: [{
					model: Chart,
					attributes: [],
					required: true,
					include: {
						model: Worklist,
						required: true,
						attributes: ['name', 'id'],
						where: projectFilter
					}
				}, {
					model: User,
					where: userFilter,
					required: true,
					attributes: ['id', 'first_name', 'last_name']
				}],
				raw: true,
				nest: true,
			});

			const newRecords = fetchedLogs.map(record => {
				return {
					hours: record.hours_calc,
					date: record.date,
					project: record.Chart.Worklist.name,
					project_id: record.Chart.Worklist.id,
					user: `${record.User.first_name} ${record.User.last_name}`,
					user_id: record.User.id
				}
			}).sort((record1, record2) => record1.project > record2.project ? 1 : -1);

			const groupedByProjectRecords = groupByProject(newRecords)
			const groupedRecords = [];
			groupedByProjectRecords.map(project => {

				project.records = project.records.sort((record1, record2) => record1.user > record2.user ? -1 : 1);
				const groupedByUserRecords = groupByUser(project.records);

				groupedByUserRecords.map((user) => {

					// Group records by date
					user.records.sort((record1, record2) => record1.date > record2.date ? 1 : -1);
					const { groupedDates, hoursRecordedByDate } = groupByDate(user.records);
					user.date_with_hours = hoursRecordedByDate;
					user.dates = groupedDates;

					// Calculate hours logged for 1 month based on the current user
					const totalRangeDates = [];
					let total_hours = 0;
					for (let i = 0; i <= startEndDiff; i++) {
						const singleDate = moment(dateStart).add(i, "d").format("YYYY-MM-DD");
						const { date_with_hours } = user;
						let hours = null;
						if (date_with_hours[singleDate]) {
							hours = +date_with_hours[singleDate].toFixed(2);
							total_hours += +date_with_hours[singleDate].toFixed(2);
						}
						totalRangeDates.push({ date: singleDate, row_data: hours });
					}
					totalRangeDates.unshift({ project_id: user.project_id, row_data: user.project },
						{ user_id: user.user_id, row_data: user.user },
						{ total_hours, row_data: +total_hours.toFixed(2)});
					user.data = totalRangeDates;
					user.total_hours = total_hours;
					delete user.date_with_hours;
					delete user.records;
					delete user.dates;
				});
				groupedRecords.push(groupedByUserRecords);
			})
			const finalRecords = groupedRecords.flat().sort((record1, record2) => record1.project > record2.project ? 1 : -1);

			return {records: finalRecords, headers};

		} catch (err) {
			throw err;
		}
	}

	async getAttendanceTimesheet(userData, requestData){
		try{
			const UserData = await this.getLogDetailsBasedOnMonth(userData, requestData);

			// Remove the duplicate data and combine records
			const userRefinedData = usersDataForAttendance(UserData);

			//Create Excel Sheet
			const workbook = new exceljs.Workbook();
			const sheet = workbook.addWorksheet("User Attendance");
						
			// Header data
			const day = [...userRefinedData.headers];
			
			// Day count start from 3 index of day(array)
			let dayCount = 3;
			// First 2 entries of column is always pre-defined/constant
			sheet.getCell(`A1`).value = "";
			sheet.getCell(`A2`).value = "User";
			sheet.getCell(`A2`).font= {family: 4,size: 12,bold: true};
			
			
			const start = 66; //A
			const end = 90;   //Z
			// Range of letter of excel 
			let initialLetter = "";
			// Loop from A-Z and Wrtting Columns in Excel Worksheet
			for (let i = start; i <= end; i++) {
				// Decode letter from loop
				const entryLetter = String.fromCharCode(i);
				// Curent letter with respect to excel row alphabatic order
				const letter = initialLetter + entryLetter;
				// Reset the value when at last of the loop till the data in ended in day(array)
				if (entryLetter === "Z") {
					i = 64;
					if (initialLetter === "") {
						initialLetter = "A"
					}
					else {
						// Assignment of value to get next combination of letter with respect to excel row.
						initialLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
					}
				}
				
				
				// Find Letter - A,B,C ....
				let cellPosition1 = sheet.getCell(`${letter}1`);
				let cellPosition2 = sheet.getCell(`${letter}2`);
				
				// STYLING
				cellPosition1.font= {family: 4,size: 12,bold: true};
				cellPosition2.font= {family: 4,size: 12,bold: true};
		
				// First and second row values of excel.
				  if (dayCount < day.length) {
					  cellPosition1.value = day[dayCount].date;
					  cellPosition2.value = day[dayCount].day;
					}
					// Apply "Total Hours" and break when data in day(array) ended
					else {
						cellPosition2.value = "Total";
						break;
				}
				dayCount++;
			}
				
			// Records data
			const usersRecord = [...userRefinedData.records];
			
			// Excel row start for userRefinedData
			let rowCount = 3;
			//Grand Total for all users log-hours
			let grandTotalLogHours = 0;
			let grandTotalLogHoursColumn="";

			usersRecord.map((userInfo) => {

				// Data index count for date
				let dataIndexUserInfo = 3;

				// Range of letter of excel 
				let initialLetterRow = "";
				// To find weekly off saturdays 
				const saturdayWeeklyOff = [1,3];
				let saturdayCount = 0
				// Loop from A-Z
				for (let i = 65; i <= 90; i++) {
					// Decode letter from loop
					const entryLetter = String.fromCharCode(i);
					// Curent letter with respect to excel row alphabatic order
					const letter = initialLetterRow + entryLetter;
					// Reset the value when at last of the loop till the data in ended in day(array)
					if (entryLetter === "Z") {
						i = 64;
						if (initialLetterRow === "") {
							initialLetterRow = "A"
						}
						else {
							// Assignment of value to get best combination of letter with respect to excel row.
							initialLetterRow = String.fromCharCode(initialLetterRow.charCodeAt(0) + 1);
						}
					}
				
					if(letter === "A"){
						sheet.getCell(`${letter} + ${rowCount}`).value = userInfo.user;
						sheet.getCell(`${letter} + ${rowCount}`).font= {bold: true};
					}
					else if(dataIndexUserInfo < userInfo.data.length){
						// if the date is on sunday and If the user is working on sunday
						if(moment(userInfo.data[dataIndexUserInfo].date, "YYYY-MM-DD").format("dddd").toLowerCase() === "sunday"){
							if(userInfo.data[dataIndexUserInfo].row_data === 0){
								sheet.getCell(`${letter} + ${rowCount}`).value = "WO";
							}
							else{
								if(userInfo.data[dataIndexUserInfo].row_data > 0 ){
									sheet.getCell(`${letter} + ${rowCount}`).value = "PW";
								}
								else{
									sheet.getCell(`${letter} + ${rowCount}`).value = 'Null';
								}
							}
						}
						else{
							// if the day is either 1st or 3rd saturday
							if(moment(userInfo.data[dataIndexUserInfo].date, "YYYY-MM-DD").format("dddd").toLowerCase() === "saturday"){
								saturdayCount++;
								if(saturdayWeeklyOff.includes(saturdayCount)){
									if(userInfo.data[dataIndexUserInfo].row_data === 0){
										sheet.getCell(`${letter} + ${rowCount}`).value = "WO";
									}
									// if the user is working on weekly-off saturday
									else{
										if(userInfo.data[dataIndexUserInfo].row_data > 0 ){
											sheet.getCell(`${letter} + ${rowCount}`).value = "PW";
										}
										else{
											sheet.getCell(`${letter} + ${rowCount}`).value = 'Null';
										}
									}
								}
								else{
									if(userInfo.data[dataIndexUserInfo].row_data === 0 ){
										sheet.getCell(`${letter} + ${rowCount}`).value = "A";
									}
									else if(userInfo.data[dataIndexUserInfo].row_data >= 8){
										sheet.getCell(`${letter} + ${rowCount}`).value = "P"; 
									}
									else if(userInfo.data[dataIndexUserInfo].row_data < 8){
										sheet.getCell(`${letter} + ${rowCount}`).value = "H";
									}
									else{
										sheet.getCell(`${letter} + ${rowCount}`).value = 'Null';
									}
								}
							}
							// For all remaining weekdays
							else{
								if(userInfo.data[dataIndexUserInfo].row_data === 0 ){
									sheet.getCell(`${letter} + ${rowCount}`).value = "A";
								}
								else if(userInfo.data[dataIndexUserInfo].row_data >= 8){
									sheet.getCell(`${letter} + ${rowCount}`).value = "P"; 
								}
								else if(userInfo.data[dataIndexUserInfo].row_data < 8){
									sheet.getCell(`${letter} + ${rowCount}`).value = "H";
								}
								else{
									sheet.getCell(`${letter} + ${rowCount}`).value = 'Null';
								}
							}
						}
						dataIndexUserInfo++;
					}
					// Show total hours and break to next line.
					else{
						sheet.getCell(`${letter} + ${rowCount}`).value = userInfo.total_hours;
						sheet.getCell(`${letter} + ${rowCount}`).font= {family: 4,size: 12,bold: true};

						// Grand Total log hours
						grandTotalLogHoursColumn=`${letter} + ${rowCount+1}`;
						grandTotalLogHours = grandTotalLogHours + userInfo.total_hours;

						break;
					}
					
				}
				rowCount++;
			})
			
			// Grand Total log hours alloted on column
			sheet.getCell(grandTotalLogHoursColumn).value = grandTotalLogHours;
			sheet.getCell(grandTotalLogHoursColumn).font= {family: 4,size: 12,bold: true};
			
			return workbook;

		}catch(err){
			throw err;
		}
	}
};

function groupByProject(dataArray = []) {
	try {
		const groupedRecords = [];
		let projectToCompare = "";

		dataArray.forEach(record => {
			const obj = {}
			if (projectToCompare !== `${record.project}`) {
				projectToCompare = record.project;
				obj.project = projectToCompare;
				groupedRecords.push(obj);
			}
		});

		groupedRecords.map(record => {
			const fetchedRecordsByProject = dataArray.filter(data => data.project === record.project);
			record.records = fetchedRecordsByProject;
		});

		return groupedRecords;
	} catch (error) {
		throw error;
	}
}

function groupByUser(dataArray = []) {
	try {
		const groupedRecords = [];
		let userToCompare = "";

		dataArray.forEach(record => {
			const obj = {}
			if (userToCompare !== `${record.user}`) {
				userToCompare = record.user;
				obj.user = userToCompare;
				obj.project = record.project;
				obj.project_id = record.project_id;
				obj.user_id = record.user_id; 
				groupedRecords.push(obj);
			}
		});

		groupedRecords.map(record => {
			const fetchedRecordsByUser = dataArray.filter(data => data.user === record.user);
			record.records = fetchedRecordsByUser;
		});

		return groupedRecords;
	} catch (error) {
		throw error;
	}
}
  
function groupByDate(dataArray = []) {
	try {
		const groupedDates = [];
		let dateToCompare = "";
		const hoursRecordedByDate = {};

		dataArray.forEach(record => {
			if (dateToCompare !== record.date) {
				dateToCompare = record.date;
				hoursRecordedByDate[dateToCompare] = 0;
			}
			hoursRecordedByDate[dateToCompare] = hoursRecordedByDate[dateToCompare] + parseFloat(record.hours);
		});
		Object.keys(hoursRecordedByDate).forEach(key => {
			groupedDates.push({ date: key, hours: hoursRecordedByDate[key] })
		});

		return { groupedDates, hoursRecordedByDate };
	} catch (error) {
		throw error;
	}
}

function usersDataForAttendance(data){
	// To store and keep check of already updated data
    const userAleadyEntered = [];
    // Refined data of "records" only
    const userRefinedData = [];

    data.records.map((userInfo) => {
        if (userAleadyEntered.includes(userInfo.user_id)) {
            userRefinedData.map((userInfoExisting) => {

                // Check if user_id is same then proceed towards update the records.
                if (userInfo.user_id === userInfoExisting.user_id) {

                    userInfo.data.map((userDate) => {

                        userInfoExisting.data.map((userExistingDate) => {
                            // If date match with exiting records and values are not null then update
                            if (userExistingDate.date === userDate.date && !(userExistingDate.row_data!==null && userDate.row_data!==null)) {
                                userExistingDate.row_data = userExistingDate.row_data + userDate.row_data;
                            }
                        });

                    });
                    // Total Hours Update
                    userInfoExisting.total_hours = userInfoExisting.total_hours + userInfo.total_hours;
                }
            });
        }
        
        // If records are not already Added then do Add
        else {
			userAleadyEntered.push(userInfo.user_id);
            userRefinedData.push(userInfo);
        }
    });

    // Updating the records value in data.
    data.records = userRefinedData;

    return data;

}
