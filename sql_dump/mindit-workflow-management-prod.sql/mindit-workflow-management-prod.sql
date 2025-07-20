-- Adminer 4.8.1 PostgreSQL 14.7 dump

CREATE SEQUENCE "Attendances_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Attendances" (
    "id" integer DEFAULT nextval('"Attendances_id_seq"') NOT NULL,
    "date" date,
    "in_time" time without time zone,
    "out_time" time without time zone,
    "duration" time without time zone,
    "is_on_leave" boolean,
    "UserId" integer,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Attendances_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Attendances" ("id", "date", "in_time", "out_time", "duration", "is_on_leave", "UserId", "LocationId", "ClientId") VALUES
(1,	'2023-10-05',	NULL,	NULL,	NULL,	'f',	2,	NULL,	NULL),
(2,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	2,	NULL,	NULL),
(3,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	3,	NULL,	NULL),
(4,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(5,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(6,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	5,	NULL,	NULL),
(7,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	6,	NULL,	NULL),
(8,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	7,	NULL,	NULL),
(9,	'2023-10-06',	NULL,	NULL,	NULL,	'f',	8,	NULL,	NULL),
(10,	'2023-10-09',	NULL,	NULL,	NULL,	't',	8,	NULL,	NULL),
(11,	'2023-10-09',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(12,	'2023-10-09',	NULL,	NULL,	NULL,	'f',	9,	NULL,	NULL),
(13,	'2023-10-09',	NULL,	NULL,	NULL,	'f',	34,	NULL,	NULL),
(14,	'2023-10-09',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(15,	'2023-10-09',	NULL,	NULL,	NULL,	'f',	5,	NULL,	NULL),
(16,	'2023-10-10',	NULL,	NULL,	NULL,	'f',	36,	NULL,	NULL),
(18,	'2023-10-10',	NULL,	NULL,	NULL,	'f',	34,	NULL,	NULL),
(19,	'2023-10-10',	NULL,	NULL,	NULL,	'f',	10,	NULL,	NULL),
(20,	'2023-10-10',	NULL,	NULL,	NULL,	'f',	11,	NULL,	NULL),
(17,	'2023-10-10',	NULL,	NULL,	NULL,	't',	9,	NULL,	NULL),
(21,	'2023-10-10',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(22,	'2023-10-10',	NULL,	NULL,	NULL,	't',	6,	NULL,	NULL),
(23,	'2023-10-10',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(24,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	5,	NULL,	NULL),
(25,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	11,	NULL,	NULL),
(26,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(27,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(28,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	34,	NULL,	NULL),
(29,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	6,	NULL,	NULL),
(30,	'2023-10-11',	NULL,	NULL,	NULL,	'f',	6,	NULL,	NULL),
(31,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(32,	'2023-10-12',	NULL,	NULL,	NULL,	't',	9,	NULL,	NULL),
(33,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(34,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	30,	NULL,	NULL),
(35,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(36,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	13,	NULL,	NULL),
(37,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	5,	NULL,	NULL),
(38,	'2023-10-12',	NULL,	NULL,	NULL,	'f',	35,	NULL,	NULL),
(39,	'2023-10-13',	NULL,	NULL,	NULL,	'f',	15,	NULL,	NULL),
(40,	'2023-10-13',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(41,	'2023-10-13',	NULL,	NULL,	NULL,	'f',	13,	NULL,	NULL),
(42,	'2023-10-13',	NULL,	NULL,	NULL,	'f',	14,	NULL,	NULL),
(43,	'2023-10-13',	NULL,	NULL,	NULL,	'f',	30,	NULL,	NULL),
(44,	'2023-10-13',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(45,	'2023-10-14',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(46,	'2023-10-16',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(47,	'2023-10-16',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(48,	'2023-10-17',	NULL,	NULL,	NULL,	't',	14,	NULL,	NULL),
(49,	'2023-10-17',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(50,	'2023-10-17',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(51,	'2023-10-18',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(52,	'2023-10-18',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(53,	'2023-10-18',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(54,	'2023-10-18',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(55,	'2023-10-19',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(56,	'2023-10-19',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(57,	'2023-10-19',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(58,	'2023-10-19',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(59,	'2023-10-19',	NULL,	NULL,	NULL,	'f',	14,	NULL,	NULL),
(60,	'2023-10-19',	NULL,	NULL,	NULL,	'f',	13,	NULL,	NULL),
(61,	'2023-10-20',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(62,	'2023-10-20',	NULL,	NULL,	NULL,	't',	14,	NULL,	NULL),
(63,	'2023-10-23',	NULL,	NULL,	NULL,	'f',	14,	NULL,	NULL),
(65,	'2023-10-23',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(64,	'2023-10-23',	NULL,	NULL,	NULL,	't',	30,	NULL,	NULL),
(66,	'2023-10-23',	NULL,	NULL,	NULL,	'f',	15,	NULL,	NULL),
(67,	'2023-10-25',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(68,	'2023-10-26',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(70,	'2023-10-27',	NULL,	NULL,	NULL,	'f',	11,	NULL,	NULL),
(71,	'2023-10-27',	NULL,	NULL,	NULL,	't',	9,	NULL,	NULL),
(72,	'2023-10-27',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(69,	'2023-10-27',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(73,	'2023-10-27',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(74,	'2023-10-28',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(75,	'2023-10-28',	NULL,	NULL,	NULL,	'f',	11,	NULL,	NULL),
(76,	'2023-10-30',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(77,	'2023-10-30',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(78,	'2023-10-30',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(79,	'2023-10-31',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(80,	'2023-10-31',	NULL,	NULL,	NULL,	'f',	11,	NULL,	NULL),
(81,	'2023-10-31',	NULL,	NULL,	NULL,	'f',	6,	NULL,	NULL),
(82,	'2023-10-31',	NULL,	NULL,	NULL,	'f',	5,	NULL,	NULL),
(83,	'2023-11-01',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(84,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(85,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(86,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(87,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	18,	NULL,	NULL),
(88,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	16,	NULL,	NULL),
(89,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	17,	NULL,	NULL),
(90,	'2023-11-02',	NULL,	NULL,	NULL,	't',	8,	NULL,	NULL),
(91,	'2023-11-02',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(92,	'2023-11-03',	NULL,	NULL,	NULL,	'f',	16,	NULL,	NULL),
(93,	'2023-11-03',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(94,	'2023-11-03',	NULL,	NULL,	NULL,	'f',	18,	NULL,	NULL),
(95,	'2023-11-03',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(96,	'2023-11-03',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(97,	'2023-11-03',	NULL,	NULL,	NULL,	'f',	17,	NULL,	NULL),
(98,	'2023-11-06',	NULL,	NULL,	NULL,	'f',	18,	NULL,	NULL),
(99,	'2023-11-06',	NULL,	NULL,	NULL,	'f',	16,	NULL,	NULL),
(100,	'2023-11-06',	NULL,	NULL,	NULL,	'f',	17,	NULL,	NULL),
(101,	'2023-11-06',	NULL,	NULL,	NULL,	'f',	35,	NULL,	NULL),
(102,	'2023-11-07',	NULL,	NULL,	NULL,	'f',	18,	NULL,	NULL),
(103,	'2023-11-07',	NULL,	NULL,	NULL,	'f',	16,	NULL,	NULL),
(104,	'2023-11-07',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL),
(105,	'2023-11-07',	NULL,	NULL,	NULL,	'f',	17,	NULL,	NULL),
(106,	'2023-11-08',	NULL,	NULL,	NULL,	'f',	18,	NULL,	NULL),
(107,	'2023-11-08',	NULL,	NULL,	NULL,	'f',	17,	NULL,	NULL),
(108,	'2023-11-08',	NULL,	NULL,	NULL,	'f',	12,	NULL,	NULL),
(109,	'2023-11-08',	NULL,	NULL,	NULL,	'f',	4,	NULL,	NULL);

CREATE TABLE "public"."AuditInfoEdEmFeedbacks" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "EdEmFeedbackId" integer NOT NULL,
    "AuditInfoId" integer NOT NULL,
    CONSTRAINT "AuditInfoEdEmFeedbacks_pkey" PRIMARY KEY ("EdEmFeedbackId", "AuditInfoId")
) WITH (oids = false);


CREATE TABLE "public"."AuditInfoModifierFeedbacks" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ModifierFeedbackId" integer NOT NULL,
    "AuditInfoId" integer NOT NULL,
    CONSTRAINT "AuditInfoModifierFeedbacks_pkey" PRIMARY KEY ("ModifierFeedbackId", "AuditInfoId")
) WITH (oids = false);


CREATE TABLE "public"."AuditInfoPrimDiagFeedbacks" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "PrimDiagFeedbackId" integer NOT NULL,
    "AuditInfoId" integer NOT NULL,
    CONSTRAINT "AuditInfoPrimDiagFeedbacks_pkey" PRIMARY KEY ("PrimDiagFeedbackId", "AuditInfoId")
) WITH (oids = false);


CREATE TABLE "public"."AuditInfoProceduresFeedbacks" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ProceduresFeedbackId" integer NOT NULL,
    "AuditInfoId" integer NOT NULL,
    CONSTRAINT "AuditInfoProceduresFeedbacks_pkey" PRIMARY KEY ("ProceduresFeedbackId", "AuditInfoId")
) WITH (oids = false);


CREATE TABLE "public"."AuditInfoSecDiagFeedbacks" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "SecDiagFeedbackId" integer NOT NULL,
    "AuditInfoId" integer NOT NULL,
    CONSTRAINT "AuditInfoSecDiagFeedbacks_pkey" PRIMARY KEY ("SecDiagFeedbackId", "AuditInfoId")
) WITH (oids = false);


CREATE SEQUENCE "AuditInfos_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."AuditInfos" (
    "id" integer DEFAULT nextval('"AuditInfos_id_seq"') NOT NULL,
    "ed_em_total" integer,
    "ed_em_correct" integer,
    "proc_total" integer,
    "proc_correct" integer,
    "prim_diag_total" integer,
    "prim_diag_correct" integer,
    "sec_diag_total" integer,
    "sec_diag_correct" integer,
    "modifier_total" integer,
    "modifier_correct" integer,
    "total_total" integer,
    "total_correct" integer,
    "chart_id" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "FeedbackTypeId" integer,
    "QCStatusId" integer,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "AuditInfos_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "AuditOptions_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."AuditOptions" (
    "id" integer DEFAULT nextval('"AuditOptions_id_seq"') NOT NULL,
    "audit_opt" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "ClientId" integer,
    CONSTRAINT "AuditOptions_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE TABLE "public"."ChartAuditOptions" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ChartId" integer NOT NULL,
    "AuditOptionId" integer NOT NULL,
    CONSTRAINT "ChartAuditOptions_pkey" PRIMARY KEY ("ChartId", "AuditOptionId")
) WITH (oids = false);


CREATE SEQUENCE "ChartAudits_ChartAudits_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."ChartAudits" (
    "ChartAudits_id" integer DEFAULT nextval('"ChartAudits_ChartAudits_id_seq"') NOT NULL,
    "id" integer,
    "s_no" integer,
    "start_date" date,
    "end_date" date,
    "unique_task_no" character varying(255),
    "name" character varying(255),
    "description" text,
    "assignee_id" integer,
    "allocator_id" integer,
    "created_by" integer,
    "updated_by" integer,
    "ProcessId" integer,
    "MilestoneId" integer,
    "SpecialtyId" integer,
    "PriorityId" integer,
    "WorklistId" integer,
    "UserId" integer,
    "TaskTypeId" integer,
    "type" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "ChartAudits_pkey" PRIMARY KEY ("ChartAudits_id"),
    CONSTRAINT "ChartAudits_unique_task_no_key" UNIQUE ("unique_task_no")
) WITH (oids = false);


CREATE TABLE "public"."ChartAuditsAuditOptions" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ChartAuditChartAuditsId" integer NOT NULL,
    "AuditOptionId" integer NOT NULL,
    CONSTRAINT "ChartAuditsAuditOptions_pkey" PRIMARY KEY ("ChartAuditChartAuditsId", "AuditOptionId")
) WITH (oids = false);


CREATE TABLE "public"."ChartAuditsHoldReasons" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ChartAuditChartAuditsId" integer NOT NULL,
    "HoldReasonId" integer NOT NULL,
    CONSTRAINT "ChartAuditsHoldReasons_pkey" PRIMARY KEY ("ChartAuditChartAuditsId", "HoldReasonId")
) WITH (oids = false);


CREATE TABLE "public"."ChartAuditsResponsibleParties" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ChartAuditChartAuditsId" integer NOT NULL,
    "ResponsiblePartyId" integer NOT NULL,
    CONSTRAINT "ChartAuditsResponsibleParties_pkey" PRIMARY KEY ("ChartAuditChartAuditsId", "ResponsiblePartyId")
) WITH (oids = false);


CREATE SEQUENCE "ChartHoldReasons_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."ChartHoldReasons" (
    "id" integer DEFAULT nextval('"ChartHoldReasons_id_seq"') NOT NULL,
    "ChartId" integer,
    "HoldReasonId" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "ChartHoldReasons_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE TABLE "public"."ChartResponsibleParties" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "ChartId" integer NOT NULL,
    "ResponsiblePartyId" integer NOT NULL,
    CONSTRAINT "ChartResponsibleParties_pkey" PRIMARY KEY ("ChartId", "ResponsiblePartyId")
) WITH (oids = false);


CREATE SEQUENCE "Charts_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Charts" (
    "id" integer DEFAULT nextval('"Charts_id_seq"') NOT NULL,
    "s_no" integer NOT NULL,
    "start_date" date,
    "end_date" date,
    "created_by" integer,
    "updated_by" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "assignee_id" integer,
    "allocator_id" integer,
    "unique_task_no" character varying(255),
    "name" character varying(255),
    "description" text,
    "ProcessId" integer,
    "MilestoneId" integer,
    "PriorityId" integer,
    "TaskTypeId" integer,
    "SpecialtyId" integer,
    "WorklistId" integer,
    "ClientId" integer,
    "UserId" integer,
    "deletedAt" timestamptz,
    "estimation" character varying(5),
    "task_type" integer,
    "SprintId" integer,
    "EpicId" integer,
    CONSTRAINT "Charts_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Charts" ("id", "s_no", "start_date", "end_date", "created_by", "updated_by", "createdAt", "updatedAt", "assignee_id", "allocator_id", "unique_task_no", "name", "description", "ProcessId", "MilestoneId", "PriorityId", "TaskTypeId", "SpecialtyId", "WorklistId", "ClientId", "UserId", "deletedAt", "estimation", "task_type", "SprintId", "EpicId") VALUES
(17,	2,	'2023-09-28',	'2023-10-13',	6,	6,	'2023-10-11 11:49:51.942+00',	'2023-10-11 11:50:41.486+00',	6,	6,	'T-0002',	'Candidate Whole Form API',	'',	2,	3,	3,	2,	5,	2,	3,	6,	NULL,	NULL,	NULL,	NULL,	2),
(18,	3,	'2023-09-26',	'2023-09-28',	6,	6,	'2023-10-11 11:52:09.92+00',	'2023-10-11 11:52:09.92+00',	6,	6,	'T-0003',	'Candidate Initial Form',	'',	2,	2,	3,	2,	5,	2,	3,	6,	NULL,	NULL,	NULL,	NULL,	2),
(20,	6,	'2023-10-11',	'2023-10-31',	4,	4,	'2023-10-11 13:01:33.362+00',	'2023-10-11 13:01:33.362+00',	4,	4,	'T-0006',	'Forti client issue',	'',	2,	2,	1,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	NULL,	NULL),
(21,	4,	'2023-10-12',	'2023-10-31',	9,	9,	'2023-10-12 05:04:12.504+00',	'2023-10-27 06:14:20.494+00',	12,	9,	'T-0004',	'Database Entity Design',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(11,	3,	'2023-10-10',	'2023-10-31',	9,	9,	'2023-10-10 08:41:57.776+00',	'2023-10-28 12:09:44.025+00',	11,	9,	'T-0003',	'Create User Basic Details UI',	'',	1,	4,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(2,	1,	'2023-09-19',	'2023-12-31',	1,	1,	'2023-10-06 09:11:51.79+00',	'2023-10-06 09:33:34.999+00',	6,	1,	'T-0001',	'Calls / Meetings / Discussions',	NULL,	2,	3,	4,	NULL,	5,	2,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	2),
(19,	4,	'2023-10-01',	'2027-10-12',	5,	5,	'2023-10-11 12:57:05.364+00',	'2023-10-31 07:05:07.583+00',	5,	5,	'T-0004',	'Forti Client Issue',	'',	2,	2,	3,	1,	5,	3,	3,	5,	NULL,	NULL,	NULL,	NULL,	NULL),
(1,	1,	'2023-09-15',	'2023-12-31',	1,	4,	'2023-10-06 09:07:49.605+00',	'2023-10-13 07:18:04.602+00',	4,	4,	'T-0001',	'Leave Balance Uploader',	NULL,	2,	7,	1,	1,	5,	1,	3,	NULL,	NULL,	'',	NULL,	1,	1),
(6,	2,	'2023-10-09',	'2023-10-10',	4,	4,	'2023-10-09 10:31:16.082+00',	'2023-10-13 07:18:15.214+00',	4,	4,	'T-0002',	'Leave And Employee Mapping Uploader',	'Leave And Employee Mapping Uploader',	2,	7,	2,	NULL,	5,	1,	3,	4,	NULL,	NULL,	NULL,	2,	NULL),
(4,	1,	'2023-06-01',	'2023-12-31',	1,	1,	'2023-10-06 09:44:06.615+00',	'2023-10-06 09:44:06.615+00',	8,	1,	'T-0001',	'Calls / Meetings / Discussions',	NULL,	2,	2,	4,	NULL,	6,	4,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	4),
(23,	7,	'2023-10-13',	'2023-10-31',	4,	4,	'2023-10-13 07:19:40.73+00',	'2023-10-13 07:19:40.73+00',	4,	4,	'T-0007',	'Waiting for work',	'',	2,	2,	1,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(10,	2,	'2023-10-10',	'2023-11-08',	9,	12,	'2023-10-10 08:36:34.858+00',	'2023-10-27 12:50:02.674+00',	12,	9,	'T-0002',	'Create User basic details API',	'Create Add Member Api Basic Info',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(30,	14,	'2023-10-17',	'2023-10-18',	4,	4,	'2023-10-17 07:03:19.212+00',	'2023-10-18 12:48:58.496+00',	4,	4,	'T-0014',	'Work Location Latitude and Longitude Uploader',	'',	2,	7,	2,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(35,	16,	'2023-10-18',	'2023-10-18',	4,	4,	'2023-10-19 09:47:36.325+00',	'2023-10-19 09:50:24.92+00',	4,	4,	'T-0016',	'Download sample issue',	'',	2,	7,	1,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(15,	2,	'2023-10-01',	'2023-10-18',	34,	34,	'2023-10-11 10:58:55.213+00',	'2023-10-23 09:53:48.243+00',	28,	34,	'T-0002',	'Req. Gathering',	'Desc',	1,	4,	1,	1,	3,	6,	1,	34,	NULL,	NULL,	NULL,	3,	6),
(7,	3,	'2023-10-03',	'2023-10-03',	4,	4,	'2023-10-09 10:33:09.847+00',	'2023-10-09 10:41:19.026+00',	4,	4,	'T-0003',	'Contact Detail issue fixing',	'',	2,	7,	2,	NULL,	5,	1,	3,	4,	NULL,	NULL,	NULL,	2,	NULL),
(8,	4,	'2023-10-03',	'2023-10-03',	4,	4,	'2023-10-09 10:33:45.978+00',	'2023-10-09 10:46:24.43+00',	4,	4,	'T-0004',	'Education uploader',	'',	2,	7,	2,	NULL,	5,	1,	3,	4,	NULL,	NULL,	NULL,	2,	NULL),
(25,	9,	'2023-10-16',	'2023-11-10',	4,	4,	'2023-10-16 12:35:10.461+00',	'2023-10-16 12:35:10.461+00',	4,	4,	'T-0009',	'Merge request',	'',	2,	2,	2,	NULL,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(26,	10,	'2023-10-16',	'2023-11-11',	4,	4,	'2023-10-16 12:35:36.88+00',	'2023-10-16 12:35:36.88+00',	4,	4,	'T-0010',	'Angular UAT publish',	'',	2,	2,	4,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(3,	1,	'2023-10-02',	'2023-10-02',	1,	5,	'2023-10-06 09:31:04.584+00',	'2023-10-11 05:04:32.847+00',	5,	1,	'T-0001',	'Calls / Meetings / Discussions',	'Morning Meeting with client',	2,	2,	4,	1,	5,	3,	3,	NULL,	NULL,	'00:30',	NULL,	NULL,	3),
(12,	3,	'2023-10-01',	'2023-11-30',	5,	5,	'2023-10-11 06:18:10.052+00',	'2023-10-11 06:18:10.052+00',	5,	5,	'T-0003',	'Bug Fixes ',	'',	2,	2,	3,	1,	5,	3,	3,	5,	NULL,	NULL,	NULL,	NULL,	NULL),
(9,	2,	'2023-10-01',	'2023-12-31',	5,	5,	'2023-10-09 10:46:34.31+00',	'2023-10-11 06:26:53.172+00',	5,	5,	'T-0002',	'Meeting',	'For Meeting Time ',	2,	2,	4,	NULL,	5,	3,	3,	5,	NULL,	NULL,	NULL,	NULL,	NULL),
(28,	12,	'2023-10-16',	'2023-11-11',	4,	4,	'2023-10-16 12:53:59.242+00',	'2023-10-16 12:53:59.242+00',	4,	4,	'T-0012',	'Call and Meetings',	'',	2,	2,	4,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(36,	17,	'2023-10-19',	'2023-10-31',	4,	4,	'2023-10-19 09:54:26.63+00',	'2023-10-19 09:54:26.63+00',	4,	4,	'T-0017',	'Update detail using uploader',	'',	2,	2,	4,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(5,	1,	'2023-10-09',	'2024-02-29',	1,	1,	'2023-10-09 06:41:39.407+00',	'2023-10-27 06:14:14.758+00',	9,	1,	'T-0001',	'Design to Component - Creation',	NULL,	1,	3,	4,	NULL,	5,	5,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	5),
(16,	3,	'2023-10-03',	'2023-10-05',	34,	15,	'2023-10-11 11:01:50.779+00',	'2023-10-23 10:05:37.429+00',	28,	34,	'T-0003',	'Design',	'Desc',	1,	3,	1,	1,	3,	6,	1,	34,	NULL,	NULL,	NULL,	3,	7),
(24,	8,	'2023-10-13',	'2023-10-16',	4,	4,	'2023-10-16 07:00:39.233+00',	'2023-10-16 13:00:57.066+00',	4,	4,	'T-0008',	'Previous Employment Uploader',	'',	2,	7,	2,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(27,	11,	'2023-10-16',	'2023-10-16',	4,	4,	'2023-10-16 12:39:31.867+00',	'2023-10-16 13:01:17.563+00',	4,	4,	'T-0011',	'Work Location Issue fixing',	'',	2,	7,	2,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(13,	5,	'2023-10-10',	'2023-10-12',	4,	4,	'2023-10-11 06:30:08.241+00',	'2023-10-16 13:01:27.315+00',	4,	4,	'T-0005',	'Applied Leave Transaction Upload',	'Applied Leave Transaction Upload',	2,	7,	2,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	NULL,	NULL),
(29,	13,	'2023-10-16',	'2023-11-11',	4,	4,	'2023-10-16 12:56:31.081+00',	'2023-10-16 12:56:31.081+00',	4,	4,	'T-0013',	'Angular Application Build',	'',	2,	2,	4,	1,	5,	1,	3,	4,	'2023-10-19 09:57:58.61+00',	NULL,	NULL,	1,	1),
(37,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:49.886+00',	'2023-10-19 10:19:49.886+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	8,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	12),
(38,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:54.571+00',	'2023-10-19 10:19:54.571+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	9,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	13),
(39,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:55.176+00',	'2023-10-19 10:19:55.176+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	10,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	14),
(40,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:55.52+00',	'2023-10-19 10:19:55.52+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	11,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	15),
(41,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:55.746+00',	'2023-10-19 10:19:55.746+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	12,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	16),
(43,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:56.194+00',	'2023-10-19 10:19:56.194+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	14,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	18),
(44,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:56.413+00',	'2023-10-19 10:19:56.413+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	15,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	19),
(45,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:56.62+00',	'2023-10-19 10:19:56.62+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	16,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	20),
(46,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:59.48+00',	'2023-10-19 10:19:59.48+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	17,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	21),
(47,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:59.825+00',	'2023-10-19 10:19:59.825+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	18,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	22),
(48,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:20:00.083+00',	'2023-10-19 10:20:00.083+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	19,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	23),
(49,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:22:04.914+00',	'2023-10-19 10:22:04.914+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	20,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	24),
(50,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:22:05.815+00',	'2023-10-19 10:22:05.815+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	21,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	25),
(51,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:22:06.197+00',	'2023-10-19 10:22:06.197+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	22,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	26),
(33,	15,	'2023-10-17',	'2023-10-30',	4,	4,	'2023-10-17 11:54:49.459+00',	'2023-10-26 07:21:21.513+00',	4,	4,	'T-0015',	'Download Saved Data',	'',	2,	2,	3,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(42,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:19:55.937+00',	'2023-10-23 08:43:12.421+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	2,	4,	NULL,	1,	13,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	17),
(22,	4,	'2023-10-01',	'2023-10-31',	1,	1,	'2023-10-12 12:05:35.937+00',	'2023-10-23 09:53:47.083+00',	13,	1,	'T-0004',	'Layout creation',	'Create layout using the HTML provided by Design team',	1,	2,	1,	1,	3,	6,	1,	1,	NULL,	NULL,	NULL,	NULL,	NULL),
(14,	1,	'2023-10-01',	'2023-10-27',	34,	15,	'2023-10-11 10:53:59.024+00',	'2023-10-27 05:55:01.778+00',	33,	34,	'T-0001',	'Calls & Discussions',	NULL,	1,	2,	4,	2,	3,	6,	1,	NULL,	NULL,	NULL,	NULL,	3,	6),
(52,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:22:06.369+00',	'2023-10-19 10:22:06.369+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	23,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	27),
(53,	1,	'2023-10-03',	'2023-10-19',	14,	14,	'2023-10-19 10:22:06.507+00',	'2023-10-19 10:22:06.507+00',	NULL,	14,	'T-0001',	'',	NULL,	1,	1,	4,	NULL,	1,	24,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	28),
(54,	1,	'2023-10-03',	'2023-10-31',	14,	14,	'2023-10-19 11:15:03.926+00',	'2023-10-19 11:15:03.926+00',	NULL,	14,	'T-0001',	'',	NULL,	2,	1,	4,	NULL,	1,	26,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	30),
(55,	1,	'2023-10-03',	'2023-10-31',	14,	14,	'2023-10-19 11:15:09.772+00',	'2023-10-19 11:15:09.772+00',	NULL,	14,	'T-0001',	'',	NULL,	2,	1,	4,	NULL,	1,	27,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	31),
(56,	1,	'2023-10-03',	'2023-10-31',	14,	14,	'2023-10-19 11:15:23.025+00',	'2023-10-19 11:15:23.025+00',	NULL,	14,	'T-0001',	'',	NULL,	2,	1,	4,	NULL,	1,	28,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	32),
(57,	1,	'2023-10-03',	'2023-10-31',	14,	14,	'2023-10-19 11:16:31.607+00',	'2023-10-19 11:16:31.607+00',	NULL,	14,	'T-0001',	'',	NULL,	2,	1,	4,	NULL,	1,	29,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	33),
(58,	5,	'2023-10-19',	'2023-10-20',	14,	14,	'2023-10-19 11:21:53.905+00',	'2023-10-19 11:21:53.905+00',	32,	14,	'T-0005',	'testing task',	'',	2,	2,	1,	3,	5,	3,	3,	14,	NULL,	NULL,	NULL,	NULL,	3),
(59,	1,	'2023-10-25',	'2023-10-26',	14,	14,	'2023-10-20 10:04:04.198+00',	'2023-10-20 10:04:04.198+00',	32,	14,	'T-0001',	'dcenene',	NULL,	1,	2,	4,	NULL,	3,	31,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	35),
(60,	2,	'2023-10-25',	'2023-10-26',	14,	14,	'2023-10-20 10:04:04.595+00',	'2023-10-20 10:04:04.595+00',	13,	14,	'T-0002',	'dcnv',	NULL,	1,	2,	4,	NULL,	3,	31,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	35),
(61,	1,	'2023-10-29',	'2023-11-11',	14,	14,	'2023-10-23 07:25:11.185+00',	'2023-10-23 07:25:11.185+00',	33,	14,	'T-0001',	'Hitherto',	NULL,	2,	2,	4,	NULL,	13,	32,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	36),
(62,	1,	'2023-10-31',	'2023-11-07',	14,	14,	'2023-10-23 08:30:41.248+00',	'2023-10-23 08:32:42.557+00',	NULL,	14,	'T-0001',	'Hitherto',	NULL,	1,	1,	4,	NULL,	14,	33,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	37),
(79,	9,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:41:12.214+00',	'2023-10-30 12:55:49.853+00',	12,	9,	'T-0009',	'Create User Experience Detail API',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(64,	1,	'2023-10-12',	'2023-10-31',	14,	14,	'2023-10-23 09:00:19.218+00',	'2023-10-23 09:00:19.218+00',	NULL,	14,	'T-0001',	'',	NULL,	3,	1,	4,	NULL,	3,	35,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	39),
(65,	1,	'2023-10-12',	'2023-10-31',	14,	14,	'2023-10-23 09:00:27.356+00',	'2023-10-23 09:00:27.356+00',	NULL,	14,	'T-0001',	'',	NULL,	3,	1,	4,	NULL,	3,	36,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	40),
(66,	1,	'2023-10-12',	'2023-10-31',	14,	14,	'2023-10-23 09:00:34.953+00',	'2023-10-23 09:00:34.953+00',	NULL,	14,	'T-0001',	'',	NULL,	3,	1,	4,	NULL,	3,	37,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	41),
(67,	1,	'2023-10-12',	'2023-10-31',	14,	14,	'2023-10-23 09:00:35.298+00',	'2023-10-23 09:00:35.298+00',	NULL,	14,	'T-0001',	'',	NULL,	3,	1,	4,	NULL,	3,	38,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	42),
(68,	1,	'2023-10-12',	'2023-10-31',	14,	14,	'2023-10-23 09:00:35.459+00',	'2023-10-23 09:00:35.459+00',	NULL,	14,	'T-0001',	'',	NULL,	3,	1,	4,	NULL,	3,	39,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	43),
(69,	1,	'2023-10-12',	'2023-10-31',	14,	14,	'2023-10-23 09:00:53.237+00',	'2023-10-23 09:00:53.237+00',	33,	14,	'T-0001',	'roll-on',	NULL,	3,	2,	4,	NULL,	3,	40,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	44),
(70,	1,	'2023-10-25',	'2023-10-31',	14,	14,	'2023-10-23 09:03:31.598+00',	'2023-10-23 09:03:31.598+00',	NULL,	14,	'T-0001',	'',	NULL,	2,	1,	4,	NULL,	8,	41,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	45),
(71,	1,	'2023-10-25',	'2023-10-31',	14,	14,	'2023-10-23 09:04:38.554+00',	'2023-10-23 09:04:38.554+00',	NULL,	14,	'T-0001',	'',	NULL,	2,	1,	4,	NULL,	8,	42,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	46),
(72,	1,	'2023-10-25',	'2023-10-31',	14,	14,	'2023-10-23 09:04:50.082+00',	'2023-10-23 09:04:50.082+00',	11,	14,	'T-0001',	'room no.1',	NULL,	2,	2,	4,	NULL,	8,	43,	3,	NULL,	NULL,	NULL,	NULL,	NULL,	47),
(73,	18,	'2023-10-23',	'2023-10-23',	4,	4,	'2023-10-23 09:29:29.535+00',	'2023-10-23 09:29:56.556+00',	4,	4,	'T-0018',	'Add Account type and purpose master in bank details',	'',	2,	7,	4,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(74,	19,	'2023-10-23',	'2023-10-23',	4,	4,	'2023-10-23 10:52:06.599+00',	'2023-10-23 10:52:06.599+00',	4,	4,	'T-0019',	'Previous Employement date format issue ',	'',	2,	2,	1,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(86,	16,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:46:59.075+00',	'2023-10-31 06:23:46.354+00',	11,	9,	'T-0016',	'Create User Education Detail UI',	'',	1,	4,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(84,	14,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:45:32.961+00',	'2023-10-28 12:12:18.637+00',	11,	9,	'T-0014',	'Create User Identity Detail UI',	'',	1,	4,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(87,	17,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:47:36.162+00',	'2023-10-31 06:23:53.195+00',	11,	9,	'T-0017',	'Create User Experience Detail UI',	'',	1,	4,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(85,	15,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:46:25.756+00',	'2023-10-28 12:12:22.285+00',	11,	9,	'T-0015',	'Create User Official Detail UI',	'',	1,	4,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(83,	13,	'2023-10-15',	'2023-10-31',	9,	12,	'2023-10-27 05:45:01.442+00',	'2023-10-28 12:39:49.916+00',	12,	12,	'T-0013',	'Create User Contact Detail API',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(94,	3,	'2023-10-30',	'2023-11-07',	4,	4,	'2023-11-02 08:52:59.4+00',	'2023-11-02 08:52:59.4+00',	4,	4,	'T-0003',	'Miscellaneous',	'',	1,	2,	2,	1,	5,	44,	2,	4,	NULL,	NULL,	NULL,	8,	48),
(88,	18,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:48:18.414+00',	'2023-10-31 06:24:00.798+00',	11,	9,	'T-0018',	'Create User Document Detail UI',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(78,	8,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:40:28.617+00',	'2023-10-27 06:11:19.941+00',	12,	9,	'T-0008',	'Create User Education Detail API',	'',	1,	3,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(95,	4,	'2023-11-01',	'2023-11-01',	17,	17,	'2023-11-02 11:53:33.385+00',	'2023-11-02 11:53:33.385+00',	17,	17,	'T-0004',	'Sujata docs',	'For System Design, Deployment Steps and Project Setup',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(81,	11,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:42:21.522+00',	'2023-10-28 12:40:02.406+00',	12,	9,	'T-0011',	'Create User Declaration Detail API',	'',	1,	3,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(96,	5,	'2023-11-02',	'2023-11-02',	17,	17,	'2023-11-02 11:55:59.362+00',	'2023-11-02 11:55:59.362+00',	17,	17,	'T-0005',	'1. Upload Excel and Read its Contents in .NET CORE 6 ',	'',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(91,	20,	'2023-10-30',	'2023-11-03',	4,	4,	'2023-10-30 12:28:43.691+00',	'2023-10-30 12:28:43.691+00',	4,	4,	'T-0020',	'Delete Uploader record',	'',	2,	2,	3,	1,	5,	1,	3,	4,	NULL,	NULL,	NULL,	1,	1),
(89,	19,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:48:50.715+00',	'2023-10-31 06:24:03.722+00',	11,	9,	'T-0019',	'Create User Declaration Detail UI',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(77,	7,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:39:57.804+00',	'2023-10-30 12:48:02.808+00',	12,	9,	'T-0007',	'Create User Official Detail API',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(82,	12,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:43:35.138+00',	'2023-10-28 12:09:35.376+00',	11,	9,	'T-0012',	'Create User Login UI',	'',	1,	4,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(75,	5,	'2023-10-15',	'2023-10-31',	9,	12,	'2023-10-27 05:38:12.624+00',	'2023-10-28 12:09:52.559+00',	11,	12,	'T-0005',	'Create User Contact Detail UI',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(90,	20,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:49:22.519+00',	'2023-10-31 06:24:16.662+00',	11,	9,	'T-0020',	'Create Member List UI',	'',	1,	3,	3,	NULL,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(97,	6,	'2023-11-02',	'2023-11-03',	17,	17,	'2023-11-02 12:35:08.654+00',	'2023-11-02 12:35:08.654+00',	17,	17,	'T-0006',	'LINQ Method Syntax',	'',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(63,	1,	'2023-10-26',	'2023-11-02',	14,	33,	'2023-10-23 08:34:27.624+00',	'2023-10-31 07:05:22.305+00',	33,	14,	'T-0001',	'Hetherto',	NULL,	5,	2,	4,	1,	7,	34,	2,	NULL,	NULL,	NULL,	NULL,	7,	38),
(92,	1,	'2023-10-30',	'2023-12-31',	33,	33,	'2023-11-02 07:27:03.72+00',	'2023-11-02 08:46:12.432+00',	4,	33,	'T-0001',	'Calls and Meetings',	NULL,	1,	2,	4,	NULL,	5,	44,	2,	NULL,	NULL,	NULL,	NULL,	8,	48),
(93,	2,	'2023-10-30',	'2023-10-31',	17,	17,	'2023-11-02 08:46:47.216+00',	'2023-11-02 08:46:47.216+00',	17,	17,	'T-0002',	'Entity Framework Implementation(Code First Approach)',	'',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	NULL,	48),
(98,	21,	'2023-10-15',	'2023-11-01',	12,	12,	'2023-11-02 12:55:01.52+00',	'2023-11-02 12:55:57.244+00',	12,	12,	'T-0021',	'Create Login API',	'',	1,	3,	3,	1,	5,	5,	1,	12,	NULL,	NULL,	NULL,	NULL,	NULL),
(80,	10,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:41:44.631+00',	'2023-11-02 12:56:01.724+00',	12,	9,	'T-0010',	'Create User Document Detail API',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(76,	6,	'2023-10-15',	'2023-10-31',	9,	9,	'2023-10-27 05:39:06.445+00',	'2023-11-02 12:56:06.554+00',	12,	9,	'T-0006',	'Create User Identity Detail API',	'',	1,	4,	3,	1,	5,	5,	1,	9,	NULL,	NULL,	NULL,	NULL,	NULL),
(99,	7,	'2023-11-01',	'2023-11-01',	16,	16,	'2023-11-02 13:11:35.755+00',	'2023-11-02 13:11:35.755+00',	16,	16,	'T-0007',	'Sujata Project',	'Worked on image upload and charts',	1,	2,	3,	1,	5,	44,	2,	16,	NULL,	NULL,	NULL,	8,	48),
(102,	10,	'2023-11-02',	'2023-11-02',	16,	16,	'2023-11-02 13:14:21.14+00',	'2023-11-02 13:14:21.14+00',	16,	16,	'T-0010',	'Sujata Project',	'Worked on image delete, display image name and size of image',	1,	2,	3,	1,	5,	44,	2,	16,	NULL,	NULL,	NULL,	8,	48),
(104,	12,	'2023-10-30',	'2023-10-30',	16,	16,	'2023-11-02 13:17:02.854+00',	'2023-11-02 13:17:02.854+00',	16,	16,	'T-0012',	'Angular',	'Revision of angular topics like ngif, ngfor, ng switch etc.',	1,	2,	3,	1,	5,	44,	2,	16,	NULL,	NULL,	NULL,	8,	48),
(101,	9,	'2023-10-31',	'2023-10-31',	18,	18,	'2023-11-02 13:14:15.146+00',	'2023-11-02 13:24:07.288+00',	18,	18,	'T-0009',	'Makes forms according to the provided html file of Sujata Project.',	'Makes forms according to the provided html file of Sujata Project.',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(106,	14,	'2023-10-31',	'2023-10-31',	16,	16,	'2023-11-02 13:18:04.143+00',	'2023-11-02 13:18:04.143+00',	16,	16,	'T-0014',	'Sujata Project',	'Angular and sujata project overview',	1,	2,	3,	1,	5,	44,	2,	16,	NULL,	NULL,	NULL,	8,	48),
(105,	13,	'2023-11-02',	'2023-11-02',	18,	18,	'2023-11-02 13:17:20.807+00',	'2023-11-02 13:23:48.68+00',	18,	18,	'T-0013',	'Completed Delete functionality on each image , adding file name and file size on the card body,adding functionality of click on anywhere on card body to pop-up adding image file',	'Completed Delete functionality on each image , adding file name and file size on the card body,adding functionality of click on anywhere on card body to pop-up adding image file',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(103,	11,	'2023-11-01',	'2023-11-01',	18,	18,	'2023-11-02 13:14:46.382+00',	'2023-11-02 13:23:58.062+00',	18,	18,	'T-0011',	'Completed Upload File Button Functionality And Charts As On Sujata Project.',	'Completed Upload File Button Functionality And Charts As On Sujata Project.',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(100,	8,	'2023-10-30',	'2023-10-30',	18,	18,	'2023-11-02 13:13:35.977+00',	'2023-11-02 13:24:16.422+00',	18,	18,	'T-0008',	'Studied About the Sujata project & makes forms according to the provided html file',	'Studied About the Sujata project & makes forms according to the provided html file',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(107,	15,	'2023-11-03',	'2023-11-03',	17,	17,	'2023-11-03 12:40:02.996+00',	'2023-11-03 12:40:02.996+00',	17,	17,	'T-0015',	'Entity Framework Implementation(Code First Approach)',	' CRUD operations API',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(108,	16,	'2023-11-03',	'2023-11-03',	16,	16,	'2023-11-03 13:00:00.598+00',	'2023-11-03 13:00:00.598+00',	16,	16,	'T-0016',	'Sujata Project',	'Drag and drop, Studied angular Interceptor, Observable and lazy loading.',	1,	2,	3,	1,	5,	44,	2,	16,	NULL,	NULL,	NULL,	8,	48),
(109,	17,	'2023-11-03',	'2023-11-03',	18,	18,	'2023-11-03 13:39:21.372+00',	'2023-11-03 13:39:21.372+00',	18,	18,	'T-0017',	'Angular Topic Study',	'Studied about interceptors , lazy loading , observable , pipes.',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(110,	18,	'2023-11-06',	'2023-11-06',	17,	17,	'2023-11-06 10:22:27.965+00',	'2023-11-06 10:22:27.965+00',	17,	17,	'T-0018',	'Entity Relation Diagram of Sujata Tables',	'',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(111,	19,	'2023-11-06',	'2023-11-06',	17,	17,	'2023-11-06 10:23:20.786+00',	'2023-11-06 10:23:20.786+00',	17,	17,	'T-0019',	'Upload and Save File API',	'',	1,	2,	3,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(112,	20,	'2023-11-06',	'2023-11-06',	17,	17,	'2023-11-06 13:08:37.251+00',	'2023-11-06 13:08:37.251+00',	17,	17,	'T-0020',	'Meeting and Study Code Review',	'',	1,	2,	4,	2,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(113,	21,	'2023-11-06',	'2023-11-06',	18,	18,	'2023-11-06 13:28:05.278+00',	'2023-11-06 13:28:05.278+00',	18,	18,	'T-0021',	'Coding Guidelines , Meeting , Angular Topic Practical Implementation',	'Coding Guidelines , Meeting , Angular Topic Practical Implementation(Event Emitter , Input, Output , Observable)',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(114,	22,	'2023-11-06',	'2023-11-07',	4,	4,	'2023-11-07 09:31:00.468+00',	'2023-11-07 09:31:00.468+00',	4,	4,	'T-0022',	'ProjectSetup',	'',	1,	2,	2,	1,	5,	44,	2,	4,	NULL,	NULL,	NULL,	8,	48),
(115,	23,	'2023-11-07',	'2023-11-07',	17,	17,	'2023-11-07 09:31:22.297+00',	'2023-11-07 09:31:22.297+00',	17,	17,	'T-0023',	'EntitySetup',	'',	1,	2,	2,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(116,	24,	'2023-11-07',	'2023-11-08',	16,	16,	'2023-11-07 10:35:41.763+00',	'2023-11-07 10:35:41.763+00',	16,	16,	'T-0024',	'Components Master',	'',	1,	2,	3,	1,	5,	44,	2,	16,	NULL,	NULL,	NULL,	NULL,	NULL),
(117,	25,	'2023-11-07',	'2023-11-08',	18,	18,	'2023-11-07 11:49:05.452+00',	'2023-11-07 11:49:05.452+00',	18,	18,	'T-0025',	'To Make Lookups Master Page ',	'To make different components of lookups master page',	1,	2,	3,	1,	5,	44,	2,	18,	NULL,	NULL,	NULL,	8,	48),
(119,	27,	'2023-11-07',	'2023-11-07',	17,	17,	'2023-11-07 12:13:07.298+00',	'2023-11-07 12:13:07.298+00',	17,	17,	'T-0027',	'State Master',	'',	1,	2,	2,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(121,	29,	'2023-11-08',	'2023-11-09',	4,	4,	'2023-11-07 13:03:32.191+00',	'2023-11-07 13:03:32.191+00',	4,	4,	'T-0029',	'Wages & Salaries',	'',	1,	2,	2,	1,	5,	44,	2,	4,	NULL,	NULL,	NULL,	8,	48),
(122,	30,	'2023-11-06',	'2023-11-06',	16,	16,	'2023-11-07 16:05:50.825+00',	'2023-11-07 16:05:50.825+00',	16,	16,	'T-0030',	'Sujata Project',	'Coding Guidelines ,Angular Topic Implementation Observable, Error Interceptor, Lazy loading and pipes',	1,	2,	3,	NULL,	5,	44,	2,	16,	NULL,	NULL,	NULL,	NULL,	48),
(123,	31,	'2023-11-08',	'2023-11-08',	17,	17,	'2023-11-08 08:34:54.68+00',	'2023-11-08 08:34:54.68+00',	17,	17,	'T-0031',	'Configuration-CreditorDays API',	'Get,Post,Put API',	1,	2,	2,	1,	5,	44,	2,	17,	NULL,	NULL,	NULL,	8,	48),
(124,	32,	'2023-11-07',	'2023-11-08',	4,	4,	'2023-11-08 10:41:14.434+00',	'2023-11-08 10:41:48.29+00',	4,	4,	'T-0032',	'Manufacturing process',	'',	1,	7,	2,	1,	5,	44,	2,	4,	NULL,	NULL,	NULL,	8,	48),
(120,	28,	'2023-11-08',	'2023-11-09',	4,	4,	'2023-11-07 12:34:09.704+00',	'2023-11-08 10:42:31.192+00',	4,	4,	'T-0028',	'Employment Category',	'',	1,	7,	2,	1,	5,	44,	2,	4,	NULL,	NULL,	NULL,	8,	48),
(118,	26,	'2023-11-07',	'2023-11-09',	4,	4,	'2023-11-07 11:52:09.559+00',	'2023-11-08 10:43:07.197+00',	4,	4,	'T-0026',	'Expense Heads',	'',	1,	7,	2,	NULL,	5,	44,	2,	4,	NULL,	NULL,	NULL,	NULL,	48);

CREATE SEQUENCE "Clients_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Clients" (
    "id" integer DEFAULT nextval('"Clients_id_seq"') NOT NULL,
    "client_name" character varying(255) NOT NULL,
    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Clients" ("id", "client_name") VALUES
(1,	'Mind IT(self)'),
(2,	'Sujata'),
(3,	'MyndSol'),
(4,	'Xtracked');

CREATE SEQUENCE "Colors_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Colors" (
    "id" integer DEFAULT nextval('"Colors_id_seq"') NOT NULL,
    "name" character varying(255),
    "created_at" timestamptz NOT NULL,
    "updated_at" timestamptz NOT NULL,
    "deleted_at" timestamptz,
    CONSTRAINT "Colors_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Colors" ("id", "name", "created_at", "updated_at", "deleted_at") VALUES
(1,	'badge-light',	'2023-09-26 09:30:48.454213+00',	'2023-09-26 09:30:48.454213+00',	NULL),
(2,	'badge-primary',	'2023-09-26 09:31:13.831756+00',	'2023-09-26 09:31:13.831756+00',	NULL),
(3,	'badge-secondary',	'2023-09-26 09:31:55.98952+00',	'2023-09-26 09:31:55.98952+00',	NULL),
(4,	'badge-success',	'2023-09-26 09:32:12.513043+00',	'2023-09-26 09:32:12.513043+00',	NULL),
(5,	'badge-warning',	'2023-09-26 09:33:13.952443+00',	'2023-09-26 09:33:13.952443+00',	NULL),
(6,	'badge-danger',	'2023-09-26 09:33:32.388188+00',	'2023-09-26 09:33:32.388188+00',	NULL),
(7,	'badge-dark',	'2023-09-26 09:33:51.949818+00',	'2023-09-26 09:33:51.949818+00',	NULL),
(8,	'badge-info',	'2023-09-26 09:34:50.926581+00',	'2023-09-26 09:34:50.926581+00',	NULL);

CREATE SEQUENCE "CommentFlags_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."CommentFlags" (
    "id" integer DEFAULT nextval('"CommentFlags_id_seq"') NOT NULL,
    "flag" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "CommentFlags_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "CommentFlags" ("id", "flag", "LocationId", "ClientId") VALUES
(1,	'Accepted',	1,	1),
(2,	'Rejected',	1,	1),
(3,	'Reply',	1,	1);

CREATE SEQUENCE "Comments_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Comments" (
    "id" integer DEFAULT nextval('"Comments_id_seq"') NOT NULL,
    "parent_id" integer,
    "comment_msg" character varying(255) NOT NULL,
    "comment_timestamp" timestamptz NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    "ChartId" integer,
    "UserId" integer,
    "CommentFlagId" integer,
    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Designations_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Designations" (
    "id" integer DEFAULT nextval('"Designations_id_seq"') NOT NULL,
    "name" character varying(255) NOT NULL,
    "ClientId" integer,
    "LocationId" integer,
    "RoleId" integer,
    CONSTRAINT "Designations_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Designations" ("id", "name", "ClientId", "LocationId", "RoleId") VALUES
(1,	'Software Developer',	1,	1,	4),
(2,	'Assoc. Quality Analyst',	1,	1,	4),
(3,	'Technical Lead',	1,	1,	2),
(4,	'Sr. Manager',	1,	1,	1),
(5,	'Project Manager',	1,	1,	1),
(6,	'Software Engineer',	1,	1,	4),
(7,	'Sr. Software Engineer',	1,	1,	4),
(8,	'Sr. Software Developer',	1,	1,	4),
(9,	'Assoc. Software Developer',	1,	1,	4),
(10,	'Senior Quality Analyst',	1,	1,	4),
(11,	'Assoc. Project Manager',	1,	1,	1),
(12,	'Admin',	1,	1,	5),
(13,	'Design Lead',	1,	1,	2),
(14,	'QA Lead',	1,	1,	2);

CREATE SEQUENCE "Dispositions_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Dispositions" (
    "id" integer DEFAULT nextval('"Dispositions_id_seq"') NOT NULL,
    "disposition_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Dispositions_disposition_name_key" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "EdEmFeedbacks_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."EdEmFeedbacks" (
    "id" integer DEFAULT nextval('"EdEmFeedbacks_id_seq"') NOT NULL,
    "feedback_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "EdEmFeedbacks_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "EdEmLevelCodes_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."EdEmLevelCodes" (
    "id" integer DEFAULT nextval('"EdEmLevelCodes_id_seq"') NOT NULL,
    "level" integer NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "EdEmLevelCodes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Epics_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Epics" (
    "id" integer DEFAULT nextval('"Epics_id_seq"') NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "WorklistId" integer,
    "description" character varying(255),
    "UserId" integer,
    CONSTRAINT "Epics_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Epics" ("id", "name", "createdAt", "updatedAt", "deletedAt", "WorklistId", "description", "UserId") VALUES
(1,	'Default Epic',	'2023-10-06 09:07:49.575+00',	'2023-10-06 09:07:49.575+00',	NULL,	1,	NULL,	NULL),
(2,	'Default Epic',	'2023-10-06 09:11:51.764+00',	'2023-10-06 09:11:51.764+00',	NULL,	2,	NULL,	NULL),
(3,	'Default Epic',	'2023-10-06 09:31:04.558+00',	'2023-10-06 09:31:04.558+00',	NULL,	3,	NULL,	NULL),
(4,	'Default Epic',	'2023-10-06 09:44:06.584+00',	'2023-10-06 09:44:06.584+00',	NULL,	4,	NULL,	NULL),
(5,	'Default Epic',	'2023-10-09 06:41:39.381+00',	'2023-10-09 06:41:39.381+00',	NULL,	5,	NULL,	NULL),
(6,	'Default Epic',	'2023-10-11 10:53:58.998+00',	'2023-10-11 10:53:58.998+00',	NULL,	6,	NULL,	NULL),
(7,	'Epic1',	'2023-10-11 11:02:45.98+00',	'2023-10-11 11:02:45.98+00',	NULL,	6,	'Desc1',	NULL),
(8,	'Default Epic',	'2023-10-17 08:32:45.842+00',	'2023-10-17 08:32:45.842+00',	NULL,	NULL,	NULL,	NULL),
(9,	'Default Epic',	'2023-10-17 08:33:10.276+00',	'2023-10-17 08:33:10.276+00',	NULL,	NULL,	NULL,	NULL),
(10,	'Default Epic',	'2023-10-18 04:58:27.5+00',	'2023-10-18 04:58:27.5+00',	NULL,	NULL,	NULL,	NULL),
(11,	'Default Epic',	'2023-10-18 04:58:35.36+00',	'2023-10-18 04:58:35.36+00',	NULL,	NULL,	NULL,	NULL),
(12,	'Default Epic',	'2023-10-19 10:19:49.862+00',	'2023-10-19 10:19:49.862+00',	NULL,	8,	NULL,	NULL),
(13,	'Default Epic',	'2023-10-19 10:19:54.548+00',	'2023-10-19 10:19:54.548+00',	NULL,	9,	NULL,	NULL),
(14,	'Default Epic',	'2023-10-19 10:19:55.153+00',	'2023-10-19 10:19:55.153+00',	NULL,	10,	NULL,	NULL),
(15,	'Default Epic',	'2023-10-19 10:19:55.497+00',	'2023-10-19 10:19:55.497+00',	NULL,	11,	NULL,	NULL),
(16,	'Default Epic',	'2023-10-19 10:19:55.722+00',	'2023-10-19 10:19:55.722+00',	NULL,	12,	NULL,	NULL),
(17,	'Default Epic',	'2023-10-19 10:19:55.915+00',	'2023-10-19 10:19:55.915+00',	NULL,	13,	NULL,	NULL),
(18,	'Default Epic',	'2023-10-19 10:19:56.17+00',	'2023-10-19 10:19:56.17+00',	NULL,	14,	NULL,	NULL),
(19,	'Default Epic',	'2023-10-19 10:19:56.39+00',	'2023-10-19 10:19:56.39+00',	NULL,	15,	NULL,	NULL),
(20,	'Default Epic',	'2023-10-19 10:19:56.595+00',	'2023-10-19 10:19:56.595+00',	NULL,	16,	NULL,	NULL),
(21,	'Default Epic',	'2023-10-19 10:19:59.456+00',	'2023-10-19 10:19:59.456+00',	NULL,	17,	NULL,	NULL),
(22,	'Default Epic',	'2023-10-19 10:19:59.802+00',	'2023-10-19 10:19:59.802+00',	NULL,	18,	NULL,	NULL),
(23,	'Default Epic',	'2023-10-19 10:20:00.002+00',	'2023-10-19 10:20:00.002+00',	NULL,	19,	NULL,	NULL),
(24,	'Default Epic',	'2023-10-19 10:22:04.884+00',	'2023-10-19 10:22:04.884+00',	NULL,	20,	NULL,	NULL),
(25,	'Default Epic',	'2023-10-19 10:22:05.786+00',	'2023-10-19 10:22:05.786+00',	NULL,	21,	NULL,	NULL),
(26,	'Default Epic',	'2023-10-19 10:22:06.14+00',	'2023-10-19 10:22:06.14+00',	NULL,	22,	NULL,	NULL),
(27,	'Default Epic',	'2023-10-19 10:22:06.341+00',	'2023-10-19 10:22:06.341+00',	NULL,	23,	NULL,	NULL),
(28,	'Default Epic',	'2023-10-19 10:22:06.477+00',	'2023-10-19 10:22:06.477+00',	NULL,	24,	NULL,	NULL),
(29,	'Default Epic',	'2023-10-19 10:22:09.007+00',	'2023-10-19 10:22:09.007+00',	NULL,	25,	NULL,	NULL),
(30,	'Default Epic',	'2023-10-19 11:15:03.899+00',	'2023-10-19 11:15:03.899+00',	NULL,	26,	NULL,	NULL),
(31,	'Default Epic',	'2023-10-19 11:15:09.745+00',	'2023-10-19 11:15:09.745+00',	NULL,	27,	NULL,	NULL),
(32,	'Default Epic',	'2023-10-19 11:15:23+00',	'2023-10-19 11:15:23+00',	NULL,	28,	NULL,	NULL),
(33,	'Default Epic',	'2023-10-19 11:16:31.582+00',	'2023-10-19 11:16:31.582+00',	NULL,	29,	NULL,	NULL),
(34,	'Default Epic',	'2023-10-19 11:16:36.308+00',	'2023-10-19 11:16:36.308+00',	NULL,	30,	NULL,	NULL),
(35,	'Default Epic',	'2023-10-20 10:04:04.17+00',	'2023-10-20 10:04:04.17+00',	NULL,	31,	NULL,	NULL),
(36,	'Default Epic',	'2023-10-23 07:25:11.15+00',	'2023-10-23 07:25:11.15+00',	NULL,	32,	NULL,	NULL),
(37,	'Default Epic',	'2023-10-23 08:30:41.22+00',	'2023-10-23 08:30:41.22+00',	NULL,	33,	NULL,	NULL),
(38,	'Default Epic',	'2023-10-23 08:34:27.593+00',	'2023-10-23 08:34:27.593+00',	NULL,	34,	NULL,	NULL),
(39,	'Default Epic',	'2023-10-23 09:00:19.19+00',	'2023-10-23 09:00:19.19+00',	NULL,	35,	NULL,	NULL),
(40,	'Default Epic',	'2023-10-23 09:00:27.327+00',	'2023-10-23 09:00:27.327+00',	NULL,	36,	NULL,	NULL),
(41,	'Default Epic',	'2023-10-23 09:00:34.926+00',	'2023-10-23 09:00:34.926+00',	NULL,	37,	NULL,	NULL),
(42,	'Default Epic',	'2023-10-23 09:00:35.271+00',	'2023-10-23 09:00:35.271+00',	NULL,	38,	NULL,	NULL),
(43,	'Default Epic',	'2023-10-23 09:00:35.432+00',	'2023-10-23 09:00:35.432+00',	NULL,	39,	NULL,	NULL),
(44,	'Default Epic',	'2023-10-23 09:00:53.207+00',	'2023-10-23 09:00:53.207+00',	NULL,	40,	NULL,	NULL),
(45,	'Default Epic',	'2023-10-23 09:03:31.568+00',	'2023-10-23 09:03:31.568+00',	NULL,	41,	NULL,	NULL),
(46,	'Default Epic',	'2023-10-23 09:04:38.523+00',	'2023-10-23 09:04:38.523+00',	NULL,	42,	NULL,	NULL),
(47,	'Default Epic',	'2023-10-23 09:04:50.056+00',	'2023-10-23 09:04:50.056+00',	NULL,	43,	NULL,	NULL),
(48,	'Default Epic',	'2023-11-02 07:27:03.69+00',	'2023-11-02 07:27:03.69+00',	NULL,	44,	NULL,	NULL);

CREATE SEQUENCE "FeedbackTypes_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."FeedbackTypes" (
    "id" integer DEFAULT nextval('"FeedbackTypes_id_seq"') NOT NULL,
    "feed_type_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "FeedbackTypes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "FeedbackTypes" ("id", "feed_type_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'Critical',	'2023-08-16 08:47:10.104+00',	'2023-08-16 08:47:10.104+00',	NULL,	1,	1),
(2,	'Non-Critical',	'2023-08-16 08:47:10.104+00',	'2023-08-16 08:47:10.104+00',	NULL,	1,	1);

CREATE SEQUENCE "HoldReasons_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."HoldReasons" (
    "id" integer DEFAULT nextval('"HoldReasons_id_seq"') NOT NULL,
    "hold_reason" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "ClientId" integer,
    CONSTRAINT "HoldReasons_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "HoldReasons" ("id", "hold_reason", "createdAt", "updatedAt", "deletedAt", "ClientId") VALUES
(21,	'Queries',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1),
(22,	'Other',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1),
(1,	'Requirements pending from Client',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1),
(3,	'Requirements - Internal Approval',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1),
(4,	'Requirements - Client Approval',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1),
(5,	'Resources not available',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1),
(2,	'Requirements - Internal Review',	'2023-08-16 08:47:10.605+00',	'2023-08-16 08:47:10.605+00',	NULL,	1);

CREATE SEQUENCE "Leaves_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Leaves" (
    "id" integer DEFAULT nextval('"Leaves_id_seq"') NOT NULL,
    "user_id" integer NOT NULL,
    "reason" character varying(255) NOT NULL,
    "from_date" date NOT NULL,
    "to_date" date NOT NULL,
    "all_day" boolean DEFAULT true NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "Leaves_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Locations_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Locations" (
    "id" integer DEFAULT nextval('"Locations_id_seq"') NOT NULL,
    "loc_name" character varying(255) NOT NULL,
    "ClientId" integer,
    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Locations" ("id", "loc_name", "ClientId") VALUES
(1,	'Mind IT, Delhi',	1),
(2,	'Delhi',	1);

CREATE SEQUENCE "LogHours_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."LogHours" (
    "id" integer DEFAULT nextval('"LogHours_id_seq"') NOT NULL,
    "hours" character varying(5) NOT NULL,
    "date" date NOT NULL,
    "description" character varying(500),
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "assignee_id" integer,
    "task_id" integer,
    CONSTRAINT "LogHours_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "LogHours" ("id", "hours", "date", "description", "createdAt", "updatedAt", "deletedAt", "assignee_id", "task_id") VALUES
(2,	'06:00',	'2023-10-03',	'Issue fixing and applied validation for contact details
1. Modified json,
2. Changed required parameter,

3. Applied logic for validation and duplicate row check.',	'2023-10-09 10:34:30.997+00',	'2023-10-09 10:35:08.575+00',	NULL,	4,	7),
(3,	'02:00',	'2023-10-03',	'Found tables as per new requirement.',	'2023-10-09 10:45:15.552+00',	'2023-10-09 10:45:15.552+00',	NULL,	4,	8),
(4,	'08:00',	'2023-10-04',	'Saved education details',	'2023-10-09 10:45:41.335+00',	'2023-10-09 10:45:48.756+00',	NULL,	4,	8),
(5,	'01:00',	'2023-10-05',	'Education Uploader testing and merge request',	'2023-10-09 10:46:19.856+00',	'2023-10-09 10:46:19.856+00',	NULL,	4,	8),
(58,	'00:30',	'2023-10-12',	'Morning Meeting with client.',	'2023-10-12 12:13:59.454+00',	'2023-10-12 12:13:59.454+00',	NULL,	5,	3),
(6,	'02:30',	'2023-10-05',	'UI design for Upload leave balance uploader',	'2023-10-09 10:48:18.797+00',	'2023-10-09 10:48:18.797+00',	NULL,	4,	1),
(7,	'00:30',	'2023-10-05',	'call with Sumit and Amit',	'2023-10-09 10:48:35.484+00',	'2023-10-09 10:48:35.484+00',	NULL,	4,	1),
(8,	'02:00',	'2023-10-05',	'Collecting all the required field and used in Update Leave Balance section of HR Operation',	'2023-10-09 10:48:54.639+00',	'2023-10-09 10:48:54.639+00',	NULL,	4,	1),
(59,	'00:30',	'2023-10-12',	'Status Meeting with client.',	'2023-10-12 12:14:11.858+00',	'2023-10-12 12:14:11.858+00',	NULL,	5,	3),
(1,	'02:00',	'2023-10-05',	'Collecting Table information for upload leave balance(reference screen HR Operation -> Upload leave transaction -> Current Leave balance)',	'2023-10-06 09:28:56.366+00',	'2023-10-09 10:52:42.822+00',	NULL,	4,	1),
(9,	'06:00',	'2023-10-06',	'Sample download',	'2023-10-09 12:58:01.095+00',	'2023-10-09 12:59:41.195+00',	NULL,	4,	1),
(10,	'02:00',	'2023-10-06',	'Validation for Leave balance uploader - In Progress',	'2023-10-09 12:59:51.683+00',	'2023-10-09 12:59:51.683+00',	NULL,	4,	1),
(11,	'02:00',	'2023-10-09',	'Validation for Leave balance uploader',	'2023-10-09 12:59:59.954+00',	'2023-10-09 12:59:59.954+00',	NULL,	4,	1),
(12,	'01:00',	'2023-10-09',	'Testing',	'2023-10-09 13:00:07.826+00',	'2023-10-09 13:00:07.826+00',	NULL,	4,	1),
(13,	'00:30',	'2023-10-02',	'Morning Meeting with Client',	'2023-10-11 05:03:45.678+00',	'2023-10-11 05:03:45.678+00',	NULL,	5,	3),
(14,	'00:30',	'2023-10-02',	'Status meeting with Client',	'2023-10-11 05:03:57.966+00',	'2023-10-11 05:03:57.966+00',	NULL,	5,	3),
(15,	'07:00',	'2023-10-02',	'Api Bug Fixes',	'2023-10-11 06:18:49.11+00',	'2023-10-11 06:18:49.11+00',	NULL,	5,	12),
(16,	'07:00',	'2023-10-03',	'API Bug Fixes and Angular Bug Fixes',	'2023-10-11 06:19:12.768+00',	'2023-10-11 06:19:12.768+00',	NULL,	5,	12),
(17,	'07:00',	'2023-10-04',	'Modify Store Procedures, APIs and Bug Fixes of API',	'2023-10-11 06:19:50.434+00',	'2023-10-11 06:19:50.434+00',	NULL,	5,	12),
(18,	'07:00',	'2023-10-05',	'APi Bug Fixes',	'2023-10-11 06:20:17.164+00',	'2023-10-11 06:20:17.164+00',	NULL,	5,	12),
(19,	'07:00',	'2023-10-06',	'Modify Apis and Store Procedures',	'2023-10-11 06:20:44.731+00',	'2023-10-11 06:20:44.731+00',	NULL,	5,	12),
(20,	'07:00',	'2023-10-09',	'APi Bug Fixes and Modify Store Procedures.',	'2023-10-11 06:21:14.167+00',	'2023-10-11 06:21:14.167+00',	NULL,	5,	12),
(21,	'07:00',	'2023-10-10',	'APi Bug Fixes',	'2023-10-11 06:21:25.698+00',	'2023-10-11 06:21:25.698+00',	NULL,	5,	12),
(22,	'00:30',	'2023-10-03',	'Morning Meeting with Client.',	'2023-10-11 06:21:57.694+00',	'2023-10-11 06:21:57.694+00',	NULL,	5,	3),
(23,	'00:30',	'2023-10-03',	'Status Meeting with client',	'2023-10-11 06:23:21.028+00',	'2023-10-11 06:23:21.028+00',	NULL,	5,	3),
(24,	'00:30',	'2023-10-04',	'Morning Meeting with Client.',	'2023-10-11 06:23:51.031+00',	'2023-10-11 06:23:51.031+00',	NULL,	5,	3),
(25,	'00:30',	'2023-10-04',	'Status Meeting with Client.',	'2023-10-11 06:24:08.038+00',	'2023-10-11 06:24:08.038+00',	NULL,	5,	3),
(26,	'00:30',	'2023-10-05',	'Morning Meeting with Client.',	'2023-10-11 06:24:17.865+00',	'2023-10-11 06:24:17.865+00',	NULL,	5,	3),
(27,	'00:30',	'2023-10-05',	'Status Meeting with Client.',	'2023-10-11 06:24:25.783+00',	'2023-10-11 06:24:25.783+00',	NULL,	5,	3),
(28,	'00:30',	'2023-10-06',	'Morning Meeting with Client.',	'2023-10-11 06:24:36.238+00',	'2023-10-11 06:24:36.238+00',	NULL,	5,	3),
(29,	'00:30',	'2023-10-06',	'Status Meeting with Client.',	'2023-10-11 06:24:46.018+00',	'2023-10-11 06:24:46.018+00',	NULL,	5,	3),
(30,	'00:30',	'2023-10-09',	'Morning Meeting with Client.',	'2023-10-11 06:25:16.655+00',	'2023-10-11 06:25:16.655+00',	NULL,	5,	3),
(31,	'00:30',	'2023-10-09',	'Status Meeting with Client.',	'2023-10-11 06:25:28.613+00',	'2023-10-11 06:25:28.613+00',	NULL,	5,	3),
(32,	'00:30',	'2023-10-10',	'Morning Meeting with Client.',	'2023-10-11 06:25:43.872+00',	'2023-10-11 06:25:43.872+00',	NULL,	5,	3),
(33,	'00:30',	'2023-10-10',	'Status Meeting with Client.',	'2023-10-11 06:25:51.347+00',	'2023-10-11 06:25:51.347+00',	NULL,	5,	3),
(34,	'02:30',	'2023-10-09',	'UI Design',	'2023-10-11 06:27:58.048+00',	'2023-10-11 06:27:58.048+00',	NULL,	4,	6),
(35,	'01:00',	'2023-10-09',	'Table, Stored procedure and Master understanding',	'2023-10-11 06:28:14.664+00',	'2023-10-11 06:28:14.664+00',	NULL,	4,	6),
(36,	'01:30',	'2023-10-09',	'Download Sample',	'2023-10-11 06:28:36.083+00',	'2023-10-11 06:28:36.083+00',	NULL,	4,	6),
(37,	'02:30',	'2023-10-10',	'Download Sample',	'2023-10-11 06:29:01.207+00',	'2023-10-11 06:29:01.207+00',	NULL,	4,	6),
(38,	'02:30',	'2023-10-10',	'UI Creation',	'2023-10-11 06:31:18.894+00',	'2023-10-11 06:31:18.894+00',	NULL,	4,	13),
(39,	'01:00',	'2023-10-10',	'Tables, Stored procedures and master understanding',	'2023-10-11 06:31:38.58+00',	'2023-10-11 06:31:38.58+00',	NULL,	4,	13),
(41,	'02:30',	'2023-10-02',	'meeting with team',	'2023-10-11 11:55:22.813+00',	'2023-10-11 11:55:22.813+00',	NULL,	6,	2),
(42,	'03:00',	'2023-10-03',	'meeting with Mynd Team',	'2023-10-11 12:30:21.892+00',	'2023-10-11 12:30:21.892+00',	NULL,	6,	2),
(43,	'02:00',	'2023-10-04',	'',	'2023-10-11 12:52:53.117+00',	'2023-10-11 12:52:53.117+00',	NULL,	6,	2),
(44,	'01:30',	'2023-10-05',	'TEam meeting',	'2023-10-11 12:53:16.752+00',	'2023-10-11 12:53:16.752+00',	NULL,	6,	2),
(45,	'01:00',	'2023-10-06',	'Team meeting',	'2023-10-11 12:53:36.055+00',	'2023-10-11 12:53:36.055+00',	NULL,	6,	2),
(46,	'00:30',	'2023-10-11',	'Morning Meeting with Client.',	'2023-10-11 12:55:06.618+00',	'2023-10-11 12:55:06.618+00',	NULL,	5,	3),
(47,	'00:30',	'2023-10-11',	'Status Meeting with client',	'2023-10-11 12:55:19.617+00',	'2023-10-11 12:55:19.617+00',	NULL,	5,	3),
(48,	'02:45',	'2023-10-09',	'Meeting with Mynd Team.',	'2023-10-11 12:55:54.54+00',	'2023-10-11 12:55:54.54+00',	NULL,	6,	2),
(49,	'06:30',	'2023-10-11',	'API Bug Fixes and Modify Store Procedures.',	'2023-10-11 12:56:07.106+00',	'2023-10-11 12:56:07.106+00',	NULL,	5,	12),
(50,	'05:45',	'2023-10-03',	'Completed Post APIs',	'2023-10-11 12:57:05.294+00',	'2023-10-11 12:57:05.294+00',	NULL,	6,	18),
(51,	'00:30',	'2023-10-11',	'Forti Client Issue',	'2023-10-11 12:57:29.133+00',	'2023-10-11 12:57:29.133+00',	NULL,	5,	19),
(52,	'03:30',	'2023-10-04',	'Worked on GET API',	'2023-10-11 12:57:34.811+00',	'2023-10-11 12:57:34.811+00',	NULL,	6,	18),
(65,	'01:30',	'2023-10-12',	'Validate from database',	'2023-10-13 07:16:37.522+00',	'2023-10-13 07:16:37.522+00',	NULL,	4,	13),
(53,	'02:30',	'2023-10-04',	'Worked on Contact Details',	'2023-10-11 12:58:20.522+00',	'2023-10-11 12:59:00.904+00',	NULL,	6,	17),
(54,	'07:00',	'2023-10-05',	'Worked on Contact details and Address Details API',	'2023-10-11 12:59:45.814+00',	'2023-10-11 12:59:45.814+00',	NULL,	6,	17),
(55,	'00:30',	'2023-10-11',	'Forti client issue',	'2023-10-11 13:02:05.878+00',	'2023-10-11 13:02:05.878+00',	NULL,	4,	20),
(56,	'07:00',	'2023-10-06',	'Worked on Family and Education Details',	'2023-10-11 13:02:09.724+00',	'2023-10-11 13:02:09.724+00',	NULL,	6,	17),
(57,	'07:00',	'2023-10-12',	'API Bug Fixes and Modify Store Procedures.',	'2023-10-12 12:13:30.635+00',	'2023-10-12 12:13:30.635+00',	NULL,	5,	12),
(61,	'03:00',	'2023-10-11',	'Validation on database',	'2023-10-13 06:32:57.546+00',	'2023-10-13 06:32:57.546+00',	NULL,	4,	6),
(60,	'02:30',	'2023-10-11',	'Validations for Excel',	'2023-10-13 06:29:14.753+00',	'2023-10-14 10:20:22.862+00',	NULL,	4,	6),
(40,	'02:00',	'2023-10-10',	'Download sample',	'2023-10-11 06:31:59.088+00',	'2023-10-13 06:33:22.327+00',	NULL,	4,	13),
(62,	'02:30',	'2023-10-11',	'Save',	'2023-10-13 06:35:04.596+00',	'2023-10-13 06:35:04.596+00',	NULL,	4,	6),
(63,	'00:30',	'2023-10-12',	'Download sample changes',	'2023-10-13 07:14:37.108+00',	'2023-10-13 07:14:37.108+00',	NULL,	4,	13),
(64,	'02:00',	'2023-10-12',	'Validate excel',	'2023-10-13 07:15:16.189+00',	'2023-10-13 07:15:16.189+00',	NULL,	4,	13),
(66,	'04:00',	'2023-10-12',	'Save method and entity setup changes',	'2023-10-13 07:17:24.528+00',	'2023-10-13 07:17:24.528+00',	NULL,	4,	13),
(67,	'00:30',	'2023-10-12',	'Testing',	'2023-10-16 06:59:37.731+00',	'2023-10-16 06:59:37.731+00',	NULL,	4,	13),
(68,	'00:30',	'2023-10-12',	'Testing',	'2023-10-16 07:00:03.864+00',	'2023-10-16 07:00:03.864+00',	NULL,	4,	6),
(71,	'03:00',	'2023-10-13',	'Download excel and classes setup',	'2023-10-16 07:13:52.477+00',	'2023-10-16 07:13:52.477+00',	NULL,	4,	24),
(73,	'01:00',	'2023-10-13',	'Code study and table finding',	'2023-10-16 07:15:26.747+00',	'2023-10-16 07:15:26.747+00',	NULL,	4,	24),
(72,	'02:30',	'2023-10-13',	'UI setup',	'2023-10-16 07:14:10.957+00',	'2023-10-16 12:58:53.416+00',	NULL,	4,	24),
(70,	'01:30',	'2023-10-13',	'Save method excel validation',	'2023-10-16 07:13:33.964+00',	'2023-10-16 12:59:29.91+00',	NULL,	4,	24),
(146,	'02:00',	'2023-10-30',	'EmployeeContactDetails',	'2023-10-30 12:23:35.171+00',	'2023-10-30 12:23:35.171+00',	NULL,	4,	33),
(147,	'01:30',	'2023-10-30',	'ConfigPolicyMaster',	'2023-10-30 12:24:24.77+00',	'2023-10-30 12:24:24.77+00',	NULL,	4,	33),
(74,	'00:40',	'2023-10-16',	'Entity Setup for 
tbl_Previous_Employment table',	'2023-10-16 07:22:22.475+00',	'2023-10-16 07:22:22.475+00',	NULL,	4,	24),
(76,	'01:00',	'2023-10-16',	'Merge request of 4 uploader and 1 issue fixing
1. Leave Balance uploader,
2. Leave and Employee Mapping uploader,

3. Leave Transaction uploader,
4. Previous employment uploader,
5. Work Location issue fixing',	'2023-10-16 12:36:54.589+00',	'2023-10-16 12:36:54.589+00',	NULL,	4,	25),
(78,	'00:20',	'2023-10-16',	'Status meeting',	'2023-10-16 12:54:18.292+00',	'2023-10-16 12:54:18.292+00',	NULL,	4,	28),
(79,	'00:30',	'2023-10-16',	'Angular Application Build',	'2023-10-16 12:56:47.744+00',	'2023-10-16 12:56:47.744+00',	NULL,	4,	26),
(77,	'02:30',	'2023-10-16',	'Issue fixing, we found issue in state id',	'2023-10-16 12:39:52.534+00',	'2023-10-16 12:57:40.469+00',	NULL,	4,	27),
(133,	'03:00',	'2023-10-27',	'Add Fluent Validation Document Detail API',	'2023-10-28 12:25:49.977+00',	'2023-10-28 12:25:49.977+00',	NULL,	12,	80),
(69,	'01:00',	'2023-10-16',	'Database side validation',	'2023-10-16 07:13:19.151+00',	'2023-10-16 12:59:58.243+00',	NULL,	4,	24),
(75,	'02:00',	'2023-10-16',	'Save & Testing',	'2023-10-16 07:22:48.996+00',	'2023-10-16 13:00:36.565+00',	NULL,	4,	24),
(80,	'00:30',	'2023-10-17',	'Call for excel sheet work understanding',	'2023-10-17 06:23:12.261+00',	'2023-10-17 06:23:12.261+00',	NULL,	4,	28),
(81,	'02:00',	'2023-10-17',	'UI design',	'2023-10-18 12:41:09.175+00',	'2023-10-18 12:41:09.175+00',	NULL,	4,	30),
(82,	'03:00',	'2023-10-17',	'Download Excel',	'2023-10-18 12:44:10.829+00',	'2023-10-18 12:44:10.829+00',	NULL,	4,	30),
(83,	'01:30',	'2023-10-17',	'Save method creation and data save in database',	'2023-10-18 12:45:32.332+00',	'2023-10-18 12:45:32.332+00',	NULL,	4,	30),
(84,	'01:30',	'2023-10-17',	'Excel validation and database validation',	'2023-10-18 12:46:07.4+00',	'2023-10-18 12:46:07.4+00',	NULL,	4,	30),
(85,	'00:30',	'2023-10-18',	'Testing',	'2023-10-18 12:47:41.26+00',	'2023-10-18 12:47:41.26+00',	NULL,	4,	30),
(86,	'00:30',	'2023-10-18',	'Call with Shubham',	'2023-10-19 09:48:05.423+00',	'2023-10-19 09:48:05.423+00',	NULL,	4,	35),
(87,	'01:30',	'2023-10-18',	'Code to convert object to datatable',	'2023-10-19 09:49:28.827+00',	'2023-10-19 09:49:28.827+00',	NULL,	4,	35),
(88,	'05:30',	'2023-10-18',	'Modified all download excel code',	'2023-10-19 09:50:09.669+00',	'2023-10-19 09:50:09.669+00',	NULL,	4,	35),
(89,	'00:40',	'2023-10-19',	'call and discussion on uploader and its edit functionality',	'2023-10-19 09:52:16.18+00',	'2023-10-19 09:52:16.18+00',	NULL,	4,	28),
(90,	'01:30',	'2023-10-19',	'Update for bank using Employee Id',	'2023-10-19 09:55:55.745+00',	'2023-10-19 09:55:55.745+00',	NULL,	4,	36),
(91,	'00:20',	'2023-10-19',	'Publish application and sent to amit ji via google drive upload link',	'2023-10-19 09:57:37.419+00',	'2023-10-19 09:57:37.419+00',	NULL,	4,	26),
(92,	'02:30',	'2023-10-19',	'Angular end method and UI creation',	'2023-10-20 06:59:52.079+00',	'2023-10-20 06:59:52.079+00',	NULL,	4,	33),
(93,	'02:30',	'2023-10-19',	'Download Excel for Bank Saved detail',	'2023-10-20 07:00:46.988+00',	'2023-10-20 07:00:46.988+00',	NULL,	4,	33),
(94,	'01:30',	'2023-10-19',	'Role download excel',	'2023-10-20 07:07:49.73+00',	'2023-10-20 07:07:49.73+00',	NULL,	4,	33),
(95,	'00:10',	'2023-10-20',	'Standup',	'2023-10-20 07:08:18.974+00',	'2023-10-20 07:08:18.974+00',	NULL,	4,	28),
(96,	'02:30',	'2023-10-20',	'Grade saved data excel',	'2023-10-23 09:20:57.782+00',	'2023-10-23 09:20:57.782+00',	NULL,	4,	33),
(97,	'03:00',	'2023-10-20',	'Locations saved data',	'2023-10-23 09:22:38.754+00',	'2023-10-23 09:22:38.754+00',	NULL,	4,	33),
(98,	'02:50',	'2023-10-20',	'Family Member Details saved data excel',	'2023-10-23 09:25:27.392+00',	'2023-10-23 09:25:27.392+00',	NULL,	4,	33),
(99,	'02:30',	'2023-10-23',	'Education detail saved data excel',	'2023-10-23 09:27:08.918+00',	'2023-10-23 09:27:08.918+00',	NULL,	4,	33),
(100,	'01:30',	'2023-10-23',	'Longitude Latitude Details',	'2023-10-23 09:27:48.898+00',	'2023-10-23 09:27:48.898+00',	NULL,	4,	33),
(101,	'00:30',	'2023-10-23',	'Standup call',	'2023-10-23 09:28:25.13+00',	'2023-10-23 09:28:25.13+00',	NULL,	4,	28),
(102,	'02:00',	'2023-10-23',	'added',	'2023-10-23 09:29:52.892+00',	'2023-10-23 09:29:52.892+00',	NULL,	4,	73),
(103,	'00:30',	'2023-10-23',	'Issue check',	'2023-10-23 10:52:35.776+00',	'2023-10-23 10:52:35.776+00',	NULL,	4,	74),
(104,	'02:30',	'2023-10-23',	'Organization data read excel',	'2023-10-23 12:56:13.331+00',	'2023-10-23 12:56:13.331+00',	NULL,	4,	33),
(105,	'02:30',	'2023-10-25',	'PreviousEmploymentDetails',	'2023-10-25 07:28:59.431+00',	'2023-10-25 07:28:59.431+00',	NULL,	4,	33),
(106,	'00:10',	'2023-10-25',	'standup',	'2023-10-25 07:29:42.862+00',	'2023-10-25 07:29:42.862+00',	NULL,	4,	28),
(107,	'01:30',	'2023-10-25',	'checked code for save method of employee uploader and found mapping of field for it.
Found Issue in field mapping.',	'2023-10-26 06:31:56.194+00',	'2023-10-26 06:31:56.194+00',	NULL,	4,	33),
(108,	'03:00',	'2023-10-25',	'Employee Reporting',	'2023-10-26 07:04:37.079+00',	'2023-10-26 07:04:37.079+00',	NULL,	4,	33),
(109,	'00:20',	'2023-10-25',	'Call with Amit for employee and Grade uploader',	'2023-10-26 07:05:34.175+00',	'2023-10-26 07:05:34.175+00',	NULL,	4,	28),
(110,	'00:30',	'2023-10-25',	'Checked new code for Employee Uploader as I got that I have to check EmployeeWithPosition for employee uploader ',	'2023-10-26 07:07:47.466+00',	'2023-10-26 07:07:47.466+00',	NULL,	4,	28),
(111,	'04:00',	'2023-10-27',	'',	'2023-10-27 06:04:15.928+00',	'2023-10-27 06:04:15.928+00',	NULL,	12,	81),
(112,	'04:00',	'2023-10-27',	'',	'2023-10-27 06:04:22.288+00',	'2023-10-27 06:04:22.288+00',	NULL,	12,	81),
(114,	'04:00',	'2023-10-12',	'Create Login Page UI',	'2023-10-27 12:55:27.816+00',	'2023-10-27 12:55:27.816+00',	NULL,	11,	82),
(132,	'04:00',	'2023-10-28',	'DOcument Detail APi',	'2023-10-28 12:24:57.154+00',	'2023-10-28 12:26:02.797+00',	NULL,	12,	80),
(134,	'01:00',	'2023-10-30',	'Standup call and call with Amit',	'2023-10-30 11:01:19.962+00',	'2023-10-30 11:01:19.962+00',	NULL,	4,	28),
(115,	'08:00',	'2023-10-13',	'Create Basic Detail Page UI',	'2023-10-27 12:57:38.593+00',	'2023-10-27 12:57:38.593+00',	NULL,	11,	11),
(116,	'08:00',	'2023-10-14',	'Complete UI of Basic Page',	'2023-10-27 12:58:44.065+00',	'2023-10-27 12:58:44.065+00',	NULL,	11,	11),
(117,	'08:00',	'2023-10-16',	'Create User Contact Page UI',	'2023-10-27 13:01:38.889+00',	'2023-10-27 13:01:38.889+00',	NULL,	11,	75),
(118,	'08:00',	'2023-10-17',	'Complete User Contact Page UI',	'2023-10-27 13:01:57.593+00',	'2023-10-27 13:01:57.593+00',	NULL,	11,	75),
(113,	'04:00',	'2023-10-13',	'Create API Basic Info ',	'2023-10-27 12:49:53.32+00',	'2023-10-27 13:02:55.276+00',	NULL,	12,	10),
(119,	'08:00',	'2023-10-14',	'Create api User Basic info',	'2023-10-27 13:03:21.299+00',	'2023-10-27 13:03:21.299+00',	NULL,	12,	10),
(120,	'08:00',	'2023-10-19',	'Create API Of Contact Detail  of Member',	'2023-10-28 12:06:48.754+00',	'2023-10-28 12:06:48.754+00',	NULL,	12,	83),
(121,	'08:00',	'2023-10-20',	'Add Fluent Validation  User Contact Detail API ',	'2023-10-28 12:07:35.682+00',	'2023-10-28 12:07:35.682+00',	NULL,	12,	83),
(122,	'08:00',	'2023-10-18',	'',	'2023-10-28 12:11:33.924+00',	'2023-10-28 12:11:33.924+00',	NULL,	11,	84),
(123,	'08:00',	'2023-10-20',	'',	'2023-10-28 12:11:50.097+00',	'2023-10-28 12:11:50.097+00',	NULL,	11,	84),
(124,	'08:00',	'2023-10-27',	'',	'2023-10-28 12:13:03.724+00',	'2023-10-28 12:13:03.724+00',	NULL,	11,	85),
(125,	'05:00',	'2023-10-23',	'Create APi User Identtity Detail and Add Fluent Validation',	'2023-10-28 12:15:01.792+00',	'2023-10-28 12:15:01.792+00',	NULL,	12,	76),
(126,	'03:00',	'2023-10-23',	'User Official Detail API',	'2023-10-28 12:16:05.503+00',	'2023-10-28 12:16:05.503+00',	NULL,	12,	77),
(127,	'05:00',	'2023-10-25',	'Official Detail API And Add Fluent Validation',	'2023-10-28 12:16:50.728+00',	'2023-10-28 12:16:50.728+00',	NULL,	12,	77),
(128,	'03:00',	'2023-10-25',	'Create User Education Detail API',	'2023-10-28 12:17:43.742+00',	'2023-10-28 12:17:43.742+00',	NULL,	12,	78),
(129,	'04:00',	'2023-10-26',	'User Education Detail API and Add Fluent Validation',	'2023-10-28 12:18:27.322+00',	'2023-10-28 12:18:27.322+00',	NULL,	12,	78),
(130,	'04:00',	'2023-10-26',	'Create api User Experience Detail',	'2023-10-28 12:22:47.06+00',	'2023-10-28 12:22:47.06+00',	NULL,	12,	79),
(131,	'04:00',	'2023-10-27',	'User Experience Detail API and Add Fluent Validation',	'2023-10-28 12:23:56.576+00',	'2023-10-28 12:23:56.576+00',	NULL,	12,	79),
(135,	'00:30',	'2023-10-27',	'Standup call and call with Amit',	'2023-10-30 11:02:03.87+00',	'2023-10-30 11:02:03.87+00',	NULL,	4,	28),
(136,	'00:30',	'2023-10-26',	'Standup call and call with Amit',	'2023-10-30 11:02:15.669+00',	'2023-10-30 11:02:15.669+00',	NULL,	4,	28),
(137,	'00:30',	'2023-10-30',	'Angular UAT build',	'2023-10-30 11:03:02.797+00',	'2023-10-30 11:03:02.797+00',	NULL,	4,	26),
(138,	'02:30',	'2023-10-26',	'Designation data and Issue finding',	'2023-10-30 11:05:06.743+00',	'2023-10-30 11:05:06.743+00',	NULL,	4,	33),
(139,	'02:00',	'2023-10-26',	'Grade Level',	'2023-10-30 11:07:58.213+00',	'2023-10-30 11:07:58.213+00',	NULL,	4,	33),
(140,	'02:00',	'2023-10-26',	'EmployeeGrade',	'2023-10-30 11:11:28.124+00',	'2023-10-30 11:11:28.124+00',	NULL,	4,	33),
(141,	'01:00',	'2023-10-26',	'Employee Types',	'2023-10-30 11:12:09.484+00',	'2023-10-30 11:12:09.484+00',	NULL,	4,	33),
(142,	'02:30',	'2023-10-27',	'Config Work Location',	'2023-10-30 11:13:21.701+00',	'2023-10-30 11:13:21.701+00',	NULL,	4,	33),
(143,	'02:30',	'2023-10-27',	'EmployeeJobStatus',	'2023-10-30 12:11:41.465+00',	'2023-10-30 12:11:41.465+00',	NULL,	4,	33),
(144,	'02:00',	'2023-10-27',	'EmployeeContact',	'2023-10-30 12:21:09.077+00',	'2023-10-30 12:21:09.077+00',	NULL,	4,	33),
(145,	'01:30',	'2023-10-27',	'ConfigUserRoles',	'2023-10-30 12:22:23.3+00',	'2023-10-30 12:22:23.3+00',	NULL,	4,	33),
(148,	'02:00',	'2023-10-30',	'LeaveEmployeeMapping',	'2023-10-30 12:25:50.529+00',	'2023-10-30 12:25:50.529+00',	NULL,	4,	33),
(149,	'02:00',	'2023-10-30',	'LeaveBalanceDetails',	'2023-10-30 12:26:06.412+00',	'2023-10-30 12:26:06.412+00',	NULL,	4,	33),
(150,	'02:00',	'2023-10-31',	'Issue fixing in few uploader and its download',	'2023-10-30 12:27:16.837+00',	'2023-10-30 12:27:16.837+00',	NULL,	4,	33),
(151,	'03:30',	'2023-10-31',	'Process creation for delete method',	'2023-10-30 12:29:11.918+00',	'2023-10-30 12:29:11.918+00',	NULL,	4,	91),
(152,	'00:30',	'2023-10-31',	'Call and meeting',	'2023-10-30 12:29:40.254+00',	'2023-10-30 12:29:40.254+00',	NULL,	4,	28),
(153,	'02:00',	'2023-10-31',	'Delete method for role',	'2023-10-30 12:30:35.506+00',	'2023-10-30 12:30:35.506+00',	NULL,	4,	91),
(154,	'04:00',	'2023-10-28',	'',	'2023-10-31 06:21:14.953+00',	'2023-10-31 06:21:14.953+00',	NULL,	11,	86),
(155,	'04:00',	'2023-10-28',	'',	'2023-10-31 06:21:57.915+00',	'2023-10-31 06:21:57.915+00',	NULL,	11,	87),
(156,	'04:00',	'2023-10-30',	'',	'2023-10-31 06:22:37.943+00',	'2023-10-31 06:22:37.943+00',	NULL,	11,	88),
(157,	'04:00',	'2023-10-30',	'',	'2023-10-31 06:23:00.615+00',	'2023-10-31 06:23:00.615+00',	NULL,	11,	89),
(158,	'01:00',	'2023-10-13',	'Call with Pushpender for their Issues.',	'2023-10-31 07:17:45.116+00',	'2023-10-31 07:17:45.116+00',	NULL,	5,	3),
(159,	'00:30',	'2023-10-13',	'Morning Meeting with client',	'2023-10-31 07:18:40.415+00',	'2023-10-31 07:18:40.415+00',	NULL,	5,	3),
(160,	'00:30',	'2023-10-13',	'Status Meeting with client',	'2023-10-31 07:19:04.856+00',	'2023-10-31 07:19:04.856+00',	NULL,	5,	3),
(161,	'00:30',	'2023-10-16',	'Meeting with Pushpender regarding their help.',	'2023-10-31 07:19:16.957+00',	'2023-10-31 07:19:16.957+00',	NULL,	5,	3),
(162,	'00:30',	'2023-10-16',	'Morning Meeting with client',	'2023-10-31 07:20:27.888+00',	'2023-10-31 07:20:27.888+00',	NULL,	5,	3),
(163,	'00:30',	'2023-10-16',	'Status Meeting with client',	'2023-10-31 07:20:55.382+00',	'2023-10-31 07:20:55.382+00',	NULL,	5,	3),
(164,	'01:00',	'2023-10-17',	'Meeting with Akhil and Pushpender regarding their issues and Bugs. ',	'2023-10-31 07:21:38.369+00',	'2023-10-31 07:21:38.369+00',	NULL,	5,	3),
(165,	'01:00',	'2023-10-17',	'Morning Meeting with client',	'2023-10-31 07:22:02.123+00',	'2023-10-31 07:22:02.123+00',	NULL,	5,	3),
(166,	'00:30',	'2023-10-17',	'Status Meeting with client',	'2023-10-31 07:22:38.932+00',	'2023-10-31 07:22:38.932+00',	NULL,	5,	3),
(167,	'00:40',	'2023-10-18',	'Meeting with Akhil regarding configuration.',	'2023-10-31 07:23:21.172+00',	'2023-10-31 07:23:21.172+00',	NULL,	5,	3),
(168,	'00:30',	'2023-10-18',	'Morning Meeting with client',	'2023-10-31 07:23:33.197+00',	'2023-10-31 07:23:33.197+00',	NULL,	5,	3),
(169,	'00:30',	'2023-10-18',	'Status Meeting with client',	'2023-10-31 07:23:50.706+00',	'2023-10-31 07:23:59.87+00',	NULL,	5,	3),
(170,	'00:30',	'2023-10-19',	'Meeting with Pushpender and Akhil regrading their issues ',	'2023-10-31 07:25:13.523+00',	'2023-10-31 07:25:13.523+00',	NULL,	5,	3),
(171,	'00:30',	'2023-10-19',	'Morning Meeting with client',	'2023-10-31 07:25:33.089+00',	'2023-10-31 07:25:33.089+00',	NULL,	5,	3),
(172,	'00:30',	'2023-10-19',	'Status Meeting with client',	'2023-10-31 07:25:55.976+00',	'2023-10-31 07:25:55.976+00',	NULL,	5,	3),
(173,	'00:30',	'2023-10-20',	'Morning Meeting with client',	'2023-10-31 07:26:35.277+00',	'2023-10-31 07:26:35.277+00',	NULL,	5,	3),
(174,	'00:30',	'2023-10-20',	'Status Meeting with client',	'2023-10-31 07:26:50.781+00',	'2023-10-31 07:26:50.781+00',	NULL,	5,	3),
(175,	'05:00',	'2023-10-09',	'Worked on POST, PUT and GET API of Education details',	'2023-10-31 07:26:57.876+00',	'2023-10-31 07:26:57.876+00',	NULL,	6,	17),
(176,	'00:30',	'2023-10-23',	'Morning Meeting with client',	'2023-10-31 07:27:16.065+00',	'2023-10-31 07:27:16.065+00',	NULL,	5,	3),
(177,	'00:30',	'2023-10-23',	'Status Meeting with client',	'2023-10-31 07:27:31.27+00',	'2023-10-31 07:27:31.27+00',	NULL,	5,	3),
(178,	'02:00',	'2023-10-25',	'Meeting with Akhil for Configuration Screen.',	'2023-10-31 07:28:49.254+00',	'2023-10-31 07:29:43.661+00',	NULL,	5,	3),
(179,	'00:30',	'2023-10-25',	'Morning Meeting with client',	'2023-10-31 07:29:58.756+00',	'2023-10-31 07:29:58.756+00',	NULL,	5,	3),
(180,	'00:30',	'2023-10-25',	'Status Meeting with client',	'2023-10-31 07:30:10.567+00',	'2023-10-31 07:30:10.567+00',	NULL,	5,	3),
(181,	'00:30',	'2023-10-26',	'Morning Meeting with client',	'2023-10-31 07:30:54.519+00',	'2023-10-31 07:30:54.519+00',	NULL,	5,	3),
(182,	'00:30',	'2023-10-26',	'Status Meeting with client',	'2023-10-31 07:31:06.476+00',	'2023-10-31 07:31:06.476+00',	NULL,	5,	3),
(183,	'06:00',	'2023-10-13',	'APi Bug fixes',	'2023-10-31 07:32:32.399+00',	'2023-10-31 07:32:32.399+00',	NULL,	5,	12),
(184,	'07:00',	'2023-10-16',	'APi Bug fixes',	'2023-10-31 07:33:03.3+00',	'2023-10-31 07:33:03.3+00',	NULL,	5,	12),
(185,	'06:00',	'2023-10-17',	'Bug fixes',	'2023-10-31 07:33:42.747+00',	'2023-10-31 07:34:03.888+00',	NULL,	5,	12),
(186,	'06:20',	'2023-10-18',	'Bug Fixes',	'2023-10-31 07:34:34.63+00',	'2023-10-31 07:34:34.63+00',	NULL,	5,	12),
(187,	'06:00',	'2023-10-19',	'API Bug fixes and Frontend Bug Fixes',	'2023-10-31 07:35:10.961+00',	'2023-10-31 07:35:10.961+00',	NULL,	5,	12),
(188,	'01:00',	'2023-10-19',	'Create API and Store Procedure for Delete Attachments',	'2023-10-31 07:36:16.59+00',	'2023-10-31 07:36:16.59+00',	NULL,	5,	12),
(189,	'07:00',	'2023-10-20',	'API and Angular Bug Fixes',	'2023-10-31 07:37:05.53+00',	'2023-10-31 07:37:05.53+00',	NULL,	5,	12),
(190,	'07:00',	'2023-10-23',	'API and Angular Bug Fixes',	'2023-10-31 07:37:37.036+00',	'2023-10-31 07:37:37.036+00',	NULL,	5,	12),
(191,	'05:00',	'2023-10-25',	'API and Angular Fixes ',	'2023-10-31 07:38:07.005+00',	'2023-10-31 07:38:07.005+00',	NULL,	5,	12),
(192,	'07:00',	'2023-10-26',	'API Bug Fixes and Modify Store Procedures.',	'2023-10-31 07:38:35.127+00',	'2023-10-31 07:38:35.127+00',	NULL,	5,	12),
(193,	'00:30',	'2023-10-27',	'Morning Meeting with client',	'2023-10-31 07:40:09.453+00',	'2023-10-31 07:40:09.453+00',	NULL,	5,	3),
(194,	'00:30',	'2023-10-27',	'Status Meeting with client',	'2023-10-31 07:40:28.247+00',	'2023-10-31 07:40:28.247+00',	NULL,	5,	3),
(195,	'01:30',	'2023-10-31',	'Morning Meeting and Issue discussion with Anjali and Akhil',	'2023-10-31 07:41:06.162+00',	'2023-10-31 07:41:06.162+00',	NULL,	5,	3),
(196,	'00:30',	'2023-10-31',	'Status Meeting with client',	'2023-10-31 07:42:05.323+00',	'2023-10-31 07:42:05.323+00',	NULL,	5,	3),
(197,	'07:00',	'2023-10-27',	'API Bug Fixes ',	'2023-10-31 07:46:49.746+00',	'2023-10-31 07:46:49.746+00',	NULL,	5,	12),
(198,	'06:00',	'2023-10-31',	'API and Frontend Issue fixes',	'2023-10-31 07:47:08.308+00',	'2023-10-31 07:47:08.308+00',	NULL,	5,	12),
(199,	'06:30',	'2023-10-10',	'Worked on Education PUT AND GET API',	'2023-10-31 08:33:23.757+00',	'2023-10-31 08:33:23.757+00',	NULL,	6,	17),
(200,	'04:30',	'2023-10-11',	'Worked on Employment Details POSt and PUT API',	'2023-10-31 08:33:50.6+00',	'2023-10-31 08:37:51.74+00',	NULL,	6,	17),
(201,	'06:30',	'2023-10-12',	'Worked on GET API of Employment and changes in PUT API of Employment',	'2023-10-31 08:38:06.854+00',	'2023-10-31 08:38:22.275+00',	NULL,	6,	17),
(202,	'06:30',	'2023-10-13',	'Started working on GET API for Preview whole form',	'2023-10-31 08:39:03.387+00',	'2023-10-31 08:39:03.387+00',	NULL,	6,	17),
(203,	'07:00',	'2023-10-17',	'Updated GET, PUT and POST APIs of Basic details according to the changed Figma screen',	'2023-10-31 08:39:31.935+00',	'2023-10-31 08:39:31.935+00',	NULL,	6,	17),
(204,	'07:15',	'2023-10-18',	'worked on Preview details form',	'2023-10-31 08:39:56.832+00',	'2023-10-31 08:39:56.832+00',	NULL,	6,	17),
(205,	'03:30',	'2023-10-19',	'Completed the Preview details of Candidate Whole form',	'2023-10-31 08:40:32.243+00',	'2023-10-31 08:40:32.243+00',	NULL,	6,	17),
(207,	'08:00',	'2023-10-31',	'Changes in Request body as per the BRD. Adding Reason for non mandatory fields',	'2023-10-31 08:41:31.932+00',	'2023-10-31 08:41:49.033+00',	NULL,	6,	17),
(206,	'06:00',	'2023-10-30',	'Worked on FILE Upload of Whole Form',	'2023-10-31 08:40:59.993+00',	'2023-10-31 08:41:57.359+00',	NULL,	6,	17),
(208,	'04:30',	'2023-10-25',	'Worked on the Initial form issues told by Shivam',	'2023-10-31 09:07:45.904+00',	'2023-10-31 09:07:45.904+00',	NULL,	6,	18),
(209,	'03:30',	'2023-10-26',	'Worked on Image upload of Aadhar card',	'2023-10-31 09:08:32.955+00',	'2023-10-31 09:08:32.955+00',	NULL,	6,	18),
(210,	'03:30',	'2023-10-27',	'Worked on issues faced by Shivam while calling POST API',	'2023-10-31 09:08:49.704+00',	'2023-10-31 09:08:49.704+00',	NULL,	6,	18),
(211,	'08:00',	'2023-10-30',	'',	'2023-11-02 08:54:37.952+00',	'2023-11-02 08:54:37.952+00',	NULL,	17,	93),
(212,	'01:00',	'2023-10-30',	'DSM and Team meeting',	'2023-11-02 08:58:18.326+00',	'2023-11-02 08:58:18.326+00',	NULL,	4,	92),
(213,	'01:00',	'2023-10-30',	'UI design review by self',	'2023-11-02 08:59:22.149+00',	'2023-11-02 08:59:22.149+00',	NULL,	4,	94),
(214,	'03:00',	'2023-10-31',	'Project discussion with Abhimanyu Sir',	'2023-11-02 09:00:03.143+00',	'2023-11-02 09:00:03.143+00',	NULL,	4,	94),
(215,	'02:30',	'2023-11-01',	'Back end task breakage and Estimation',	'2023-11-02 09:01:28.131+00',	'2023-11-02 09:01:28.131+00',	NULL,	4,	94),
(216,	'01:00',	'2023-11-01',	'Front End Task Breakage and Estimation',	'2023-11-02 09:01:51.072+00',	'2023-11-02 09:01:51.072+00',	NULL,	4,	94),
(217,	'00:45',	'2023-11-02',	'Estimation, Query, Assumption etc consolidation',	'2023-11-02 09:02:44.875+00',	'2023-11-02 09:02:44.875+00',	NULL,	4,	94),
(218,	'00:30',	'2023-11-02',	'Git Setup and provided access to team member',	'2023-11-02 09:03:09.88+00',	'2023-11-02 09:03:09.88+00',	NULL,	4,	94),
(219,	'00:30',	'2023-11-02',	'WMT project creation and team assignment',	'2023-11-02 09:03:35.203+00',	'2023-11-02 09:03:35.203+00',	NULL,	4,	94),
(220,	'00:30',	'2023-11-02',	'DSM',	'2023-11-02 09:04:05.653+00',	'2023-11-02 09:04:05.653+00',	NULL,	4,	92),
(221,	'01:15',	'2023-11-01',	'DSM and Project Overview to client',	'2023-11-02 09:04:31.184+00',	'2023-11-02 09:04:31.184+00',	NULL,	4,	92),
(222,	'08:00',	'2023-11-02',	'',	'2023-11-02 11:54:07.775+00',	'2023-11-02 11:54:07.775+00',	NULL,	17,	95),
(223,	'06:00',	'2023-11-02',	'',	'2023-11-02 12:32:04.537+00',	'2023-11-02 12:32:04.537+00',	NULL,	17,	96),
(224,	'02:00',	'2023-11-02',	'',	'2023-11-02 12:35:42.949+00',	'2023-11-02 12:35:42.949+00',	NULL,	17,	97),
(225,	'08:00',	'2023-10-31',	'',	'2023-11-02 12:55:35.356+00',	'2023-11-02 12:55:35.356+00',	NULL,	12,	98),
(226,	'08:00',	'2023-11-01',	'',	'2023-11-02 12:55:50.583+00',	'2023-11-02 12:55:50.583+00',	NULL,	12,	98),
(227,	'08:00',	'2023-11-02',	'',	'2023-11-02 13:22:18.164+00',	'2023-11-02 13:22:18.164+00',	NULL,	18,	105),
(228,	'08:00',	'2023-11-02',	'',	'2023-11-02 13:22:41.748+00',	'2023-11-02 13:22:41.748+00',	NULL,	18,	103),
(229,	'08:00',	'2023-11-02',	'',	'2023-11-02 13:22:55.914+00',	'2023-11-02 13:22:55.914+00',	NULL,	18,	101),
(230,	'08:00',	'2023-11-02',	'',	'2023-11-02 13:23:12.483+00',	'2023-11-02 13:23:12.483+00',	NULL,	18,	100),
(231,	'00:15',	'2023-11-01',	'Status call',	'2023-11-03 08:56:55.734+00',	'2023-11-03 08:56:55.734+00',	NULL,	4,	28),
(232,	'00:15',	'2023-11-03',	'Status call',	'2023-11-03 08:57:55.331+00',	'2023-11-03 08:57:55.331+00',	NULL,	4,	28),
(233,	'00:15',	'2023-11-02',	'Status call',	'2023-11-03 08:58:05.14+00',	'2023-11-03 08:58:05.14+00',	NULL,	4,	28),
(234,	'01:00',	'2023-11-01',	'Grade',	'2023-11-03 10:56:56.496+00',	'2023-11-03 10:56:56.496+00',	NULL,	4,	91),
(235,	'01:15',	'2023-11-01',	'Locations',	'2023-11-03 10:57:14.476+00',	'2023-11-03 10:57:14.476+00',	NULL,	4,	91),
(236,	'01:00',	'2023-11-01',	'Organization',	'2023-11-03 10:58:29.886+00',	'2023-11-03 10:58:29.886+00',	NULL,	4,	91),
(237,	'01:00',	'2023-11-01',	'Designation',	'2023-11-03 10:58:56.758+00',	'2023-11-03 10:58:56.758+00',	NULL,	4,	91),
(238,	'01:00',	'2023-11-01',	'Grade Level',	'2023-11-03 10:59:29.524+00',	'2023-11-03 10:59:29.524+00',	NULL,	4,	91),
(239,	'01:00',	'2023-11-01',	'Employee Grades',	'2023-11-03 10:59:42.586+00',	'2023-11-03 10:59:42.586+00',	NULL,	4,	91),
(240,	'01:00',	'2023-11-01',	'Employee Types',	'2023-11-03 11:00:15.507+00',	'2023-11-03 11:00:15.507+00',	NULL,	4,	91),
(242,	'00:30',	'2023-11-02',	'Angular build creation and send for publish',	'2023-11-03 11:02:23.991+00',	'2023-11-03 11:02:23.991+00',	NULL,	4,	26),
(243,	'00:30',	'2023-11-01',	'Angular build creation and send for publish',	'2023-11-03 11:02:33.578+00',	'2023-11-03 11:02:33.578+00',	NULL,	4,	26),
(241,	'01:00',	'2023-11-01',	'Config Work Location',	'2023-11-03 11:01:00.712+00',	'2023-11-03 11:02:59.028+00',	NULL,	4,	91),
(244,	'01:00',	'2023-11-02',	'EmployeeReporting',	'2023-11-03 11:06:27.04+00',	'2023-11-03 11:06:27.04+00',	NULL,	4,	91),
(245,	'01:15',	'2023-11-02',	'Job Status',	'2023-11-03 11:07:19.509+00',	'2023-11-03 11:07:19.509+00',	NULL,	4,	91),
(246,	'01:00',	'2023-11-02',	'BankDetails',	'2023-11-03 11:07:37.482+00',	'2023-11-03 11:07:37.482+00',	NULL,	4,	91),
(247,	'01:00',	'2023-11-02',	'FamilyMemberDetails',	'2023-11-03 11:08:11.126+00',	'2023-11-03 11:08:11.126+00',	NULL,	4,	91),
(248,	'01:00',	'2023-11-02',	'EducationDetails',	'2023-11-03 11:08:23.967+00',	'2023-11-03 11:08:23.967+00',	NULL,	4,	91),
(249,	'01:00',	'2023-11-02',	'LeaveBalanceDetails',	'2023-11-03 11:09:01.732+00',	'2023-11-03 11:09:01.732+00',	NULL,	4,	91),
(250,	'01:00',	'2023-11-02',	'LeaveEmployeeMapping',	'2023-11-03 11:09:18.547+00',	'2023-11-03 11:09:18.547+00',	NULL,	4,	91),
(251,	'01:00',	'2023-11-02',	'PreviousEmploymentDetails',	'2023-11-03 11:09:56.293+00',	'2023-11-03 11:09:56.293+00',	NULL,	4,	91),
(252,	'01:00',	'2023-11-03',	'LongitudeLatitude',	'2023-11-03 11:10:43.135+00',	'2023-11-03 11:10:43.135+00',	NULL,	4,	91),
(253,	'01:00',	'2023-11-03',	'ConfigUserRoles',	'2023-11-03 11:11:09.086+00',	'2023-11-03 11:11:09.086+00',	NULL,	4,	91),
(254,	'01:00',	'2023-11-03',	'EmployeeContact',	'2023-11-03 11:11:21.773+00',	'2023-11-03 11:11:21.773+00',	NULL,	4,	91),
(255,	'01:00',	'2023-11-03',	'EmployeeContactDetails',	'2023-11-03 11:11:47.994+00',	'2023-11-03 11:11:47.994+00',	NULL,	4,	91),
(256,	'01:00',	'2023-11-03',	'ConfigPolicyMaster',	'2023-11-03 11:11:59.398+00',	'2023-11-03 11:11:59.398+00',	NULL,	4,	91),
(257,	'01:45',	'2023-11-03',	'AppliedLeaveTransaction',	'2023-11-03 11:13:23.97+00',	'2023-11-03 11:13:23.97+00',	NULL,	4,	91),
(258,	'02:00',	'2023-11-03',	'Employee',	'2023-11-03 11:13:35.188+00',	'2023-11-03 11:13:35.188+00',	NULL,	4,	91),
(290,	'04:00',	'2023-11-08',	'Crud api creation',	'2023-11-08 10:42:21.944+00',	'2023-11-08 10:42:21.944+00',	NULL,	4,	120),
(259,	'01:00',	'2023-11-06',	'dd',	'2023-11-03 11:38:09.228+00',	'2023-11-03 11:38:19.492+00',	'2023-11-03 11:43:49.137696+00',	4,	20),
(260,	'01:00',	'2023-11-03',	'Client Call',	'2023-11-03 11:46:01.223+00',	'2023-11-03 11:46:01.223+00',	NULL,	33,	14),
(261,	'08:00',	'2023-11-03',	'',	'2023-11-03 12:42:03.871+00',	'2023-11-03 12:42:03.871+00',	NULL,	17,	107),
(262,	'08:00',	'2023-11-03',	'',	'2023-11-03 13:40:10.428+00',	'2023-11-03 13:40:10.428+00',	NULL,	18,	109),
(263,	'04:00',	'2023-11-06',	'',	'2023-11-06 13:09:16.717+00',	'2023-11-06 13:09:16.717+00',	NULL,	17,	111),
(264,	'03:00',	'2023-11-06',	'',	'2023-11-06 13:09:38.194+00',	'2023-11-06 13:09:38.194+00',	NULL,	17,	110),
(265,	'03:00',	'2023-11-06',	'',	'2023-11-06 13:10:01.262+00',	'2023-11-06 13:10:01.262+00',	NULL,	17,	112),
(266,	'08:00',	'2023-11-06',	'',	'2023-11-06 13:28:42.811+00',	'2023-11-06 13:28:42.811+00',	NULL,	18,	113),
(267,	'08:00',	'2023-11-07',	'',	'2023-11-07 13:22:35.717+00',	'2023-11-07 13:22:35.717+00',	NULL,	18,	117),
(268,	'08:00',	'2023-11-07',	'Set folder structure and components master page ',	'2023-11-07 16:02:29.148+00',	'2023-11-07 16:02:29.148+00',	NULL,	16,	116),
(269,	'08:00',	'2023-11-06',	'Coding Guidelines ,Angular Topic Implementation Observable, Error Interceptor, Lazy loading and pipes',	'2023-11-07 16:06:24.674+00',	'2023-11-07 16:06:24.674+00',	NULL,	16,	122),
(291,	'04:00',	'2023-11-07',	'Crud operation',	'2023-11-08 10:43:00.949+00',	'2023-11-08 10:43:00.949+00',	NULL,	4,	118),
(292,	'01:30',	'2023-11-08',	'Deployment of api project on development server',	'2023-11-08 10:43:33.78+00',	'2023-11-08 10:43:33.78+00',	NULL,	4,	94),
(271,	'00:10',	'2023-11-08',	'Status call',	'2023-11-08 10:09:50.231+00',	'2023-11-08 10:09:50.231+00',	NULL,	4,	28),
(272,	'00:10',	'2023-11-07',	'Waiting for Status call',	'2023-11-08 10:10:08.721+00',	'2023-11-08 10:10:08.721+00',	NULL,	4,	28),
(270,	'02:00',	'2023-11-06',	'Process creation',	'2023-11-08 10:09:04.69+00',	'2023-11-08 10:10:28.117+00',	NULL,	4,	36),
(273,	'01:30',	'2023-11-06',	'Role update feature',	'2023-11-08 10:12:46.182+00',	'2023-11-08 10:12:46.182+00',	NULL,	4,	36),
(274,	'01:30',	'2023-11-06',	'Grade update ',	'2023-11-08 10:13:19.803+00',	'2023-11-08 10:13:19.803+00',	NULL,	4,	36),
(275,	'01:30',	'2023-11-06',	'Location update',	'2023-11-08 10:14:04.107+00',	'2023-11-08 10:14:04.107+00',	NULL,	4,	36),
(276,	'01:30',	'2023-11-06',	'Designation update',	'2023-11-08 10:25:29.744+00',	'2023-11-08 10:25:29.744+00',	NULL,	4,	36),
(277,	'02:00',	'2023-11-07',	'Organization update',	'2023-11-08 10:25:52.547+00',	'2023-11-08 10:25:52.547+00',	NULL,	4,	36),
(278,	'01:30',	'2023-11-07',	'ConfigUserRoles update


',	'2023-11-08 10:27:44.561+00',	'2023-11-08 10:27:44.561+00',	NULL,	4,	36),
(279,	'01:30',	'2023-11-07',	'EmployeeContact update',	'2023-11-08 10:28:29.822+00',	'2023-11-08 10:28:29.822+00',	NULL,	4,	36),
(280,	'01:30',	'2023-11-07',	'EmployeeContactDetails update',	'2023-11-08 10:28:53.26+00',	'2023-11-08 10:28:53.26+00',	NULL,	4,	36),
(281,	'01:30',	'2023-11-07',	'ConfigPolicyMaster update


',	'2023-11-08 10:29:51.573+00',	'2023-11-08 10:29:51.573+00',	NULL,	4,	36),
(282,	'01:30',	'2023-11-08',	'PreviousEmploymentDetails update',	'2023-11-08 10:30:13.745+00',	'2023-11-08 10:30:13.745+00',	NULL,	4,	36),
(283,	'02:30',	'2023-11-03',	'Project planning',	'2023-11-08 10:37:03.724+00',	'2023-11-08 10:37:03.724+00',	NULL,	4,	94),
(284,	'01:00',	'2023-11-06',	'Database table structure creation',	'2023-11-08 10:38:17.701+00',	'2023-11-08 10:38:17.701+00',	NULL,	4,	114),
(285,	'01:00',	'2023-11-06',	'Git setup',	'2023-11-08 10:38:39.112+00',	'2023-11-08 10:38:39.112+00',	NULL,	4,	114),
(286,	'04:00',	'2023-11-06',	'Project setup API - In Progress',	'2023-11-08 10:39:21.058+00',	'2023-11-08 10:39:21.058+00',	NULL,	4,	114),
(287,	'05:00',	'2023-11-07',	'Project setup',	'2023-11-08 10:39:34.906+00',	'2023-11-08 10:39:34.906+00',	NULL,	4,	114),
(288,	'04:00',	'2023-11-07',	'Manufacturing process crud api creation',	'2023-11-08 10:41:36.212+00',	'2023-11-08 10:41:36.212+00',	NULL,	4,	124),
(289,	'02:00',	'2023-11-07',	'Manufacturing process crud api creation',	'2023-11-08 10:41:43.69+00',	'2023-11-08 10:41:43.69+00',	NULL,	4,	124);

CREATE SEQUENCE "Milestones_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Milestones" (
    "id" integer DEFAULT nextval('"Milestones_id_seq"') NOT NULL,
    "milestone_name" character varying(255) NOT NULL,
    "ClientId" integer,
    "ColorId" integer,
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now(),
    "deletedAt" timestamptz,
    CONSTRAINT "Milestones_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Milestones" ("id", "milestone_name", "ClientId", "ColorId", "createdAt", "updatedAt", "deletedAt") VALUES
(1,	'Backlog',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(2,	'Dev Assigned',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(4,	'Dev Complete',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(5,	'QA',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(6,	'Client Review',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(7,	'Done',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(3,	'Dev in Progress',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL);

CREATE SEQUENCE "ModifierFeedbacks_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."ModifierFeedbacks" (
    "id" integer DEFAULT nextval('"ModifierFeedbacks_id_seq"') NOT NULL,
    "feedback_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "ModifierFeedbacks_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Notifications_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Notifications" (
    "id" integer DEFAULT nextval('"Notifications_id_seq"') NOT NULL,
    "notification" character varying(255) NOT NULL,
    "is_read" boolean,
    "task_id" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "user_id" integer,
    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Notifications" ("id", "notification", "is_read", "task_id", "createdAt", "updatedAt", "deletedAt", "user_id") VALUES
(1,	'You have been assigned Task T-0001 for Project P-0001',	'f',	1,	'2023-10-06 09:07:49.907+00',	'2023-10-06 09:07:49.907+00',	NULL,	4),
(2,	'You have been assigned Task T-0001 for Project P-0002',	'f',	2,	'2023-10-06 09:11:52.007+00',	'2023-10-06 09:11:52.007+00',	NULL,	6),
(3,	'You have been assigned Task T-0001 for Project P-0003',	'f',	3,	'2023-10-06 09:31:04.811+00',	'2023-10-06 09:31:04.811+00',	NULL,	5),
(5,	'You have been assigned Task T-0001 for Project P-0004',	'f',	4,	'2023-10-06 09:44:06.871+00',	'2023-10-06 09:44:06.871+00',	NULL,	8),
(6,	'You have been assigned Task T-0001 for Project P-0005',	'f',	5,	'2023-10-09 06:41:39.642+00',	'2023-10-09 06:41:39.642+00',	NULL,	9),
(7,	'You have been assigned Task T-0002 for Project P-0001',	'f',	6,	'2023-10-09 10:31:16.114+00',	'2023-10-09 10:31:16.114+00',	NULL,	4),
(8,	'You have been assigned Task T-0003 for Project P-0001',	'f',	7,	'2023-10-09 10:33:09.879+00',	'2023-10-09 10:33:09.879+00',	NULL,	4),
(9,	'You have been assigned Task T-0004 for Project P-0001',	'f',	8,	'2023-10-09 10:33:46.011+00',	'2023-10-09 10:33:46.011+00',	NULL,	4),
(10,	'You have been assigned Task T-0002 for Project P-0003',	'f',	9,	'2023-10-09 10:46:34.339+00',	'2023-10-09 10:46:34.339+00',	NULL,	5),
(11,	'You have been assigned Task T-0002 for Project P-0005',	't',	10,	'2023-10-10 08:36:34.924+00',	'2023-10-10 08:39:18.637+00',	NULL,	12),
(12,	'You have been assigned Task T-0003 for Project P-0005',	'f',	11,	'2023-10-10 08:41:57.85+00',	'2023-10-10 08:41:57.85+00',	NULL,	11),
(13,	'You have been assigned Task T-0003 for Project P-0003',	'f',	12,	'2023-10-11 06:18:10.081+00',	'2023-10-11 06:18:10.081+00',	NULL,	5),
(14,	'You have been assigned Task T-0005 for Project P-0001',	'f',	13,	'2023-10-11 06:30:08.27+00',	'2023-10-11 06:30:08.27+00',	NULL,	4),
(15,	'You have been assigned Task T-0001 for Project P-0006',	'f',	14,	'2023-10-11 10:53:59.249+00',	'2023-10-11 10:53:59.249+00',	NULL,	33),
(16,	'You have been assigned Task T-0002 for Project P-0006',	'f',	15,	'2023-10-11 10:58:55.246+00',	'2023-10-11 10:58:55.246+00',	NULL,	28),
(17,	'You have been assigned Task T-0003 for Project P-0006',	'f',	16,	'2023-10-11 11:01:50.811+00',	'2023-10-11 11:01:50.811+00',	NULL,	28),
(18,	'You have been assigned Task T-0002 for Project P-0002',	'f',	17,	'2023-10-11 11:49:51.975+00',	'2023-10-11 11:49:51.975+00',	NULL,	6),
(19,	'You have been assigned Task T-0003 for Project P-0002',	'f',	18,	'2023-10-11 11:52:09.952+00',	'2023-10-11 11:52:09.952+00',	NULL,	6),
(20,	'You have been assigned Task T-0004 for Project P-0003',	'f',	19,	'2023-10-11 12:57:05.394+00',	'2023-10-11 12:57:05.394+00',	NULL,	5),
(21,	'You have been assigned Task T-0006 for Project P-0001',	'f',	20,	'2023-10-11 13:01:33.394+00',	'2023-10-11 13:01:33.394+00',	NULL,	4),
(22,	'You have been assigned Task T-0004 for Project P-0005',	'f',	21,	'2023-10-12 05:04:12.532+00',	'2023-10-12 05:04:12.532+00',	NULL,	12),
(24,	'You have been assigned Task T-0007 for Project P-0001',	'f',	23,	'2023-10-13 07:19:40.759+00',	'2023-10-13 07:19:40.759+00',	NULL,	4),
(25,	'You have been assigned Task T-0008 for Project P-0001',	'f',	24,	'2023-10-16 07:00:39.265+00',	'2023-10-16 07:00:39.265+00',	NULL,	4),
(26,	'You have been assigned Task T-0009 for Project P-0001',	'f',	25,	'2023-10-16 12:35:10.498+00',	'2023-10-16 12:35:10.498+00',	NULL,	4),
(27,	'You have been assigned Task T-0010 for Project P-0001',	'f',	26,	'2023-10-16 12:35:36.908+00',	'2023-10-16 12:35:36.908+00',	NULL,	4),
(28,	'You have been assigned Task T-0011 for Project P-0001',	'f',	27,	'2023-10-16 12:39:31.9+00',	'2023-10-16 12:39:31.9+00',	NULL,	4),
(29,	'You have been assigned Task T-0012 for Project P-0001',	'f',	28,	'2023-10-16 12:53:59.273+00',	'2023-10-16 12:53:59.273+00',	NULL,	4),
(30,	'You have been assigned Task T-0013 for Project P-0001',	't',	29,	'2023-10-16 12:56:31.117+00',	'2023-10-17 06:24:53.707+00',	NULL,	4),
(4,	'You have been assigned Task T-0001 for Project P-0001',	't',	1,	'2023-10-06 09:42:50.533+00',	'2023-10-17 06:24:55.88+00',	NULL,	4),
(31,	'You have been assigned Task T-0014 for Project P-0001',	'f',	30,	'2023-10-17 07:03:19.246+00',	'2023-10-17 07:03:19.246+00',	NULL,	4),
(32,	'You have been assigned Task T-0001 for Project P-0007',	'f',	31,	'2023-10-17 08:32:46.197+00',	'2023-10-17 08:32:46.197+00',	NULL,	NULL),
(33,	'You have been assigned Task T-0001 for Project P-0008',	'f',	32,	'2023-10-17 08:33:10.651+00',	'2023-10-17 08:33:10.651+00',	NULL,	NULL),
(34,	'You have been assigned Task T-0015 for Project P-0001',	'f',	33,	'2023-10-17 11:54:49.487+00',	'2023-10-17 11:54:49.487+00',	NULL,	4),
(35,	'You have been assigned Task T-0001 for Project P-0009',	'f',	34,	'2023-10-18 04:58:27.777+00',	'2023-10-18 04:58:27.777+00',	NULL,	NULL),
(36,	'You have been assigned Task T-0001 for Project P-0010',	'f',	35,	'2023-10-18 04:58:35.635+00',	'2023-10-18 04:58:35.635+00',	NULL,	NULL),
(37,	'You have been assigned Task T-0016 for Project P-0001',	'f',	35,	'2023-10-19 09:47:36.357+00',	'2023-10-19 09:47:36.357+00',	NULL,	4),
(38,	'You have been assigned Task T-0017 for Project P-0001',	'f',	36,	'2023-10-19 09:54:26.663+00',	'2023-10-19 09:54:26.663+00',	NULL,	4),
(39,	'You have been assigned Task T-0001 for Project P-0007',	'f',	37,	'2023-10-19 10:19:50.122+00',	'2023-10-19 10:19:50.122+00',	NULL,	NULL),
(40,	'You have been assigned Task T-0001 for Project P-0008',	'f',	38,	'2023-10-19 10:19:54.791+00',	'2023-10-19 10:19:54.791+00',	NULL,	NULL),
(41,	'You have been assigned Task T-0001 for Project P-0009',	'f',	39,	'2023-10-19 10:19:55.397+00',	'2023-10-19 10:19:55.397+00',	NULL,	NULL),
(42,	'You have been assigned Task T-0001 for Project P-0010',	'f',	40,	'2023-10-19 10:19:55.743+00',	'2023-10-19 10:19:55.743+00',	NULL,	NULL),
(43,	'You have been assigned Task T-0001 for Project P-0011',	'f',	41,	'2023-10-19 10:19:55.983+00',	'2023-10-19 10:19:55.983+00',	NULL,	NULL),
(44,	'You have been assigned Task T-0001 for Project P-0012',	'f',	42,	'2023-10-19 10:19:56.158+00',	'2023-10-19 10:19:56.158+00',	NULL,	NULL),
(45,	'You have been assigned Task T-0001 for Project P-0013',	'f',	43,	'2023-10-19 10:19:56.429+00',	'2023-10-19 10:19:56.429+00',	NULL,	NULL),
(46,	'You have been assigned Task T-0001 for Project P-0014',	'f',	44,	'2023-10-19 10:19:56.636+00',	'2023-10-19 10:19:56.636+00',	NULL,	NULL),
(47,	'You have been assigned Task T-0001 for Project P-0015',	'f',	45,	'2023-10-19 10:19:56.862+00',	'2023-10-19 10:19:56.862+00',	NULL,	NULL),
(48,	'You have been assigned Task T-0001 for Project P-0016',	'f',	46,	'2023-10-19 10:19:59.712+00',	'2023-10-19 10:19:59.712+00',	NULL,	NULL),
(49,	'You have been assigned Task T-0001 for Project P-0017',	'f',	47,	'2023-10-19 10:20:00.274+00',	'2023-10-19 10:20:00.274+00',	NULL,	NULL),
(50,	'You have been assigned Task T-0001 for Project P-0018',	'f',	48,	'2023-10-19 10:20:00.405+00',	'2023-10-19 10:20:00.405+00',	NULL,	NULL),
(51,	'You have been assigned Task T-0001 for Project P-0019',	'f',	49,	'2023-10-19 10:22:05.192+00',	'2023-10-19 10:22:05.192+00',	NULL,	NULL),
(52,	'You have been assigned Task T-0001 for Project P-0020',	'f',	50,	'2023-10-19 10:22:06.166+00',	'2023-10-19 10:22:06.166+00',	NULL,	NULL),
(53,	'You have been assigned Task T-0001 for Project P-0021',	'f',	51,	'2023-10-19 10:22:06.464+00',	'2023-10-19 10:22:06.464+00',	NULL,	NULL),
(54,	'You have been assigned Task T-0001 for Project P-0022',	'f',	52,	'2023-10-19 10:22:06.644+00',	'2023-10-19 10:22:06.644+00',	NULL,	NULL),
(55,	'You have been assigned Task T-0001 for Project P-0023',	'f',	53,	'2023-10-19 10:22:06.774+00',	'2023-10-19 10:22:06.774+00',	NULL,	NULL),
(56,	'You have been assigned Task T-0001 for Project P-0025',	'f',	54,	'2023-10-19 11:15:04.187+00',	'2023-10-19 11:15:04.187+00',	NULL,	NULL),
(57,	'You have been assigned Task T-0001 for Project P-0026',	'f',	55,	'2023-10-19 11:15:10.031+00',	'2023-10-19 11:15:10.031+00',	NULL,	NULL),
(58,	'You have been assigned Task T-0001 for Project P-0027',	'f',	56,	'2023-10-19 11:15:23.27+00',	'2023-10-19 11:15:23.27+00',	NULL,	NULL),
(59,	'You have been assigned Task T-0001 for Project P-0028',	'f',	57,	'2023-10-19 11:16:31.849+00',	'2023-10-19 11:16:31.849+00',	NULL,	NULL),
(60,	'You have been assigned Task T-0005 for Project P-0003',	'f',	58,	'2023-10-19 11:21:53.938+00',	'2023-10-19 11:21:53.938+00',	NULL,	32),
(61,	'You have been assigned Task T-0001 for Project P-0030',	'f',	59,	'2023-10-20 10:04:04.563+00',	'2023-10-20 10:04:04.563+00',	NULL,	32),
(62,	'You have been assigned Task T-0002 for Project P-0030',	'f',	60,	'2023-10-20 10:04:04.826+00',	'2023-10-20 10:04:04.826+00',	NULL,	13),
(23,	'You have been assigned Task T-0004 for Project P-0006',	't',	22,	'2023-10-12 12:05:35.965+00',	'2023-10-19 11:34:40.573+00',	NULL,	13),
(63,	'You have been assigned Task T-0001 for Project P-0031',	'f',	61,	'2023-10-23 07:25:11.573+00',	'2023-10-23 07:25:11.573+00',	NULL,	33),
(64,	'You have been assigned Task T-0001 for Project P-0032',	'f',	62,	'2023-10-23 08:30:41.61+00',	'2023-10-23 08:30:41.61+00',	NULL,	33),
(65,	'You have been assigned Task T-0001 for Project P-0033',	'f',	63,	'2023-10-23 08:34:27.95+00',	'2023-10-23 08:34:27.95+00',	NULL,	33),
(66,	'You have been assigned Task T-0001 for Project P-0034',	'f',	64,	'2023-10-23 09:00:19.483+00',	'2023-10-23 09:00:19.483+00',	NULL,	NULL),
(67,	'You have been assigned Task T-0001 for Project P-0035',	'f',	65,	'2023-10-23 09:00:27.618+00',	'2023-10-23 09:00:27.618+00',	NULL,	NULL),
(68,	'You have been assigned Task T-0001 for Project P-0036',	'f',	66,	'2023-10-23 09:00:35.291+00',	'2023-10-23 09:00:35.291+00',	NULL,	NULL),
(69,	'You have been assigned Task T-0001 for Project P-0037',	'f',	67,	'2023-10-23 09:00:35.56+00',	'2023-10-23 09:00:35.56+00',	NULL,	NULL),
(70,	'You have been assigned Task T-0001 for Project P-0038',	'f',	68,	'2023-10-23 09:00:35.718+00',	'2023-10-23 09:00:35.718+00',	NULL,	NULL),
(72,	'You have been assigned Task T-0001 for Project P-0040',	'f',	70,	'2023-10-23 09:03:31.895+00',	'2023-10-23 09:03:31.895+00',	NULL,	NULL),
(73,	'You have been assigned Task T-0001 for Project P-0041',	'f',	71,	'2023-10-23 09:04:38.851+00',	'2023-10-23 09:04:38.851+00',	NULL,	NULL),
(74,	'You have been assigned Task T-0001 for Project P-0042',	'f',	72,	'2023-10-23 09:04:50.403+00',	'2023-10-23 09:04:50.403+00',	NULL,	11),
(75,	'You have been assigned Task T-0018 for Project P-0001',	'f',	73,	'2023-10-23 09:29:29.57+00',	'2023-10-23 09:29:29.57+00',	NULL,	4),
(76,	'You have been assigned Task T-0019 for Project P-0001',	'f',	74,	'2023-10-23 10:52:06.631+00',	'2023-10-23 10:52:06.631+00',	NULL,	4),
(77,	'You have been assigned Task T-0005 for Project P-0005',	'f',	75,	'2023-10-27 05:38:12.662+00',	'2023-10-27 05:38:12.662+00',	NULL,	12),
(78,	'You have been assigned Task T-0006 for Project P-0005',	'f',	76,	'2023-10-27 05:39:06.477+00',	'2023-10-27 05:39:06.477+00',	NULL,	12),
(79,	'You have been assigned Task T-0007 for Project P-0005',	'f',	77,	'2023-10-27 05:39:57.84+00',	'2023-10-27 05:39:57.84+00',	NULL,	12),
(80,	'You have been assigned Task T-0008 for Project P-0005',	'f',	78,	'2023-10-27 05:40:28.654+00',	'2023-10-27 05:40:28.654+00',	NULL,	12),
(81,	'You have been assigned Task T-0009 for Project P-0005',	'f',	79,	'2023-10-27 05:41:12.243+00',	'2023-10-27 05:41:12.243+00',	NULL,	12),
(82,	'You have been assigned Task T-0010 for Project P-0005',	'f',	80,	'2023-10-27 05:41:44.667+00',	'2023-10-27 05:41:44.667+00',	NULL,	12),
(83,	'You have been assigned Task T-0011 for Project P-0005',	'f',	81,	'2023-10-27 05:42:21.553+00',	'2023-10-27 05:42:21.553+00',	NULL,	12),
(84,	'You have been assigned Task T-0012 for Project P-0005',	'f',	82,	'2023-10-27 05:43:35.176+00',	'2023-10-27 05:43:35.176+00',	NULL,	11),
(85,	'You have been assigned Task T-0013 for Project P-0005',	'f',	83,	'2023-10-27 05:45:01.49+00',	'2023-10-27 05:45:01.49+00',	NULL,	11),
(86,	'You have been assigned Task T-0014 for Project P-0005',	'f',	84,	'2023-10-27 05:45:32.997+00',	'2023-10-27 05:45:32.997+00',	NULL,	11),
(87,	'You have been assigned Task T-0015 for Project P-0005',	'f',	85,	'2023-10-27 05:46:25.786+00',	'2023-10-27 05:46:25.786+00',	NULL,	11),
(88,	'You have been assigned Task T-0016 for Project P-0005',	'f',	86,	'2023-10-27 05:46:59.111+00',	'2023-10-27 05:46:59.111+00',	NULL,	11),
(89,	'You have been assigned Task T-0017 for Project P-0005',	'f',	87,	'2023-10-27 05:47:36.199+00',	'2023-10-27 05:47:36.199+00',	NULL,	11),
(90,	'You have been assigned Task T-0018 for Project P-0005',	'f',	88,	'2023-10-27 05:48:18.448+00',	'2023-10-27 05:48:18.448+00',	NULL,	11),
(91,	'You have been assigned Task T-0019 for Project P-0005',	'f',	89,	'2023-10-27 05:48:50.75+00',	'2023-10-27 05:48:50.75+00',	NULL,	11),
(92,	'You have been assigned Task T-0020 for Project P-0005',	'f',	90,	'2023-10-27 05:49:22.552+00',	'2023-10-27 05:49:22.552+00',	NULL,	11),
(93,	'You have been assigned Task T-0013 for Project P-0005',	'f',	83,	'2023-10-28 12:03:02.96+00',	'2023-10-28 12:03:02.96+00',	NULL,	12),
(94,	'You have been assigned Task T-0005 for Project P-0005',	'f',	75,	'2023-10-28 12:03:26.437+00',	'2023-10-28 12:03:26.437+00',	NULL,	11),
(71,	'You have been assigned Task T-0001 for Project P-0039',	't',	69,	'2023-10-23 09:00:53.601+00',	'2023-10-30 05:42:01.095+00',	NULL,	33),
(95,	'You have been assigned Task T-0020 for Project P-0001',	'f',	91,	'2023-10-30 12:28:43.73+00',	'2023-10-30 12:28:43.73+00',	NULL,	4),
(96,	'You have been assigned Task T-0001 for Project P-0043',	'f',	92,	'2023-11-02 07:27:04.088+00',	'2023-11-02 07:27:04.088+00',	NULL,	4),
(98,	'You have been assigned Task T-0003 for Project P-0043',	'f',	94,	'2023-11-02 08:52:59.436+00',	'2023-11-02 08:52:59.436+00',	NULL,	4),
(97,	'You have been assigned Task T-0002 for Project P-0043',	't',	93,	'2023-11-02 08:46:47.249+00',	'2023-11-02 11:49:32.839+00',	NULL,	17),
(100,	'You have been assigned Task T-0005 for Project P-0043',	'f',	96,	'2023-11-02 11:55:59.398+00',	'2023-11-02 11:55:59.398+00',	NULL,	17),
(101,	'You have been assigned Task T-0006 for Project P-0043',	'f',	97,	'2023-11-02 12:35:08.69+00',	'2023-11-02 12:35:08.69+00',	NULL,	17),
(102,	'You have been assigned Task T-0021 for Project P-0005',	'f',	98,	'2023-11-02 12:55:01.563+00',	'2023-11-02 12:55:01.563+00',	NULL,	12),
(103,	'You have been assigned Task T-0007 for Project P-0043',	'f',	99,	'2023-11-02 13:11:35.784+00',	'2023-11-02 13:11:35.784+00',	NULL,	16),
(104,	'You have been assigned Task T-0008 for Project P-0043',	'f',	100,	'2023-11-02 13:13:36.011+00',	'2023-11-02 13:13:36.011+00',	NULL,	18),
(105,	'You have been assigned Task T-0009 for Project P-0043',	'f',	101,	'2023-11-02 13:14:15.178+00',	'2023-11-02 13:14:15.178+00',	NULL,	18),
(106,	'You have been assigned Task T-0010 for Project P-0043',	'f',	102,	'2023-11-02 13:14:21.17+00',	'2023-11-02 13:14:21.17+00',	NULL,	16),
(107,	'You have been assigned Task T-0011 for Project P-0043',	'f',	103,	'2023-11-02 13:14:46.408+00',	'2023-11-02 13:14:46.408+00',	NULL,	18),
(108,	'You have been assigned Task T-0012 for Project P-0043',	'f',	104,	'2023-11-02 13:17:02.885+00',	'2023-11-02 13:17:02.885+00',	NULL,	16),
(109,	'You have been assigned Task T-0013 for Project P-0043',	'f',	105,	'2023-11-02 13:17:20.836+00',	'2023-11-02 13:17:20.836+00',	NULL,	18),
(110,	'You have been assigned Task T-0014 for Project P-0043',	'f',	106,	'2023-11-02 13:18:04.171+00',	'2023-11-02 13:18:04.171+00',	NULL,	16),
(111,	'You have been assigned Task T-0015 for Project P-0043',	'f',	107,	'2023-11-03 12:40:03.027+00',	'2023-11-03 12:40:03.027+00',	NULL,	17),
(99,	'You have been assigned Task T-0004 for Project P-0043',	't',	95,	'2023-11-02 11:53:33.416+00',	'2023-11-03 12:41:22.866+00',	NULL,	17),
(112,	'You have been assigned Task T-0016 for Project P-0043',	'f',	108,	'2023-11-03 13:00:00.633+00',	'2023-11-03 13:00:00.633+00',	NULL,	16),
(113,	'You have been assigned Task T-0017 for Project P-0043',	'f',	109,	'2023-11-03 13:39:21.403+00',	'2023-11-03 13:39:21.403+00',	NULL,	18),
(114,	'You have been assigned Task T-0018 for Project P-0043',	'f',	110,	'2023-11-06 10:22:27.998+00',	'2023-11-06 10:22:27.998+00',	NULL,	17),
(115,	'You have been assigned Task T-0019 for Project P-0043',	'f',	111,	'2023-11-06 10:23:20.819+00',	'2023-11-06 10:23:20.819+00',	NULL,	17),
(116,	'You have been assigned Task T-0020 for Project P-0043',	'f',	112,	'2023-11-06 13:08:37.279+00',	'2023-11-06 13:08:37.279+00',	NULL,	17),
(117,	'You have been assigned Task T-0021 for Project P-0043',	'f',	113,	'2023-11-06 13:28:05.316+00',	'2023-11-06 13:28:05.316+00',	NULL,	18),
(118,	'You have been assigned Task T-0022 for Project P-0043',	'f',	114,	'2023-11-07 09:31:00.503+00',	'2023-11-07 09:31:00.503+00',	NULL,	4),
(119,	'You have been assigned Task T-0023 for Project P-0043',	'f',	115,	'2023-11-07 09:31:22.332+00',	'2023-11-07 09:31:22.332+00',	NULL,	17),
(120,	'You have been assigned Task T-0024 for Project P-0043',	'f',	116,	'2023-11-07 10:35:41.795+00',	'2023-11-07 10:35:41.795+00',	NULL,	16),
(121,	'You have been assigned Task T-0025 for Project P-0043',	'f',	117,	'2023-11-07 11:49:05.484+00',	'2023-11-07 11:49:05.484+00',	NULL,	18),
(122,	'You have been assigned Task T-0026 for Project P-0043',	'f',	118,	'2023-11-07 11:52:09.59+00',	'2023-11-07 11:52:09.59+00',	NULL,	4),
(123,	'You have been assigned Task T-0027 for Project P-0043',	'f',	119,	'2023-11-07 12:13:07.333+00',	'2023-11-07 12:13:07.333+00',	NULL,	17),
(124,	'You have been assigned Task T-0028 for Project P-0043',	'f',	120,	'2023-11-07 12:34:09.736+00',	'2023-11-07 12:34:09.736+00',	NULL,	4),
(125,	'You have been assigned Task T-0029 for Project P-0043',	'f',	121,	'2023-11-07 13:03:32.223+00',	'2023-11-07 13:03:32.223+00',	NULL,	4),
(126,	'You have been assigned Task T-0030 for Project P-0043',	'f',	122,	'2023-11-07 16:05:50.861+00',	'2023-11-07 16:05:50.861+00',	NULL,	16),
(127,	'You have been assigned Task T-0031 for Project P-0043',	'f',	123,	'2023-11-08 08:34:54.713+00',	'2023-11-08 08:34:54.713+00',	NULL,	17),
(128,	'You have been assigned Task T-0032 for Project P-0043',	'f',	124,	'2023-11-08 10:41:14.477+00',	'2023-11-08 10:41:14.477+00',	NULL,	4);

CREATE SEQUENCE "PrimDiagFeedbacks_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."PrimDiagFeedbacks" (
    "id" integer DEFAULT nextval('"PrimDiagFeedbacks_id_seq"') NOT NULL,
    "feedback_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "PrimDiagFeedbacks_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Priorities_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Priorities" (
    "id" integer DEFAULT nextval('"Priorities_id_seq"') NOT NULL,
    "priority_name" character varying(255) NOT NULL,
    "ClientId" integer,
    CONSTRAINT "Priorities_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Priorities_priority_name_key" UNIQUE ("priority_name")
) WITH (oids = false);

INSERT INTO "Priorities" ("id", "priority_name", "ClientId") VALUES
(1,	'Critical',	1),
(2,	'High',	1),
(3,	'Medium',	1),
(4,	'Low',	1);

CREATE SEQUENCE "ProceduresFeedbacks_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."ProceduresFeedbacks" (
    "id" integer DEFAULT nextval('"ProceduresFeedbacks_id_seq"') NOT NULL,
    "feedback_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "ProceduresFeedbacks_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Processes_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Processes" (
    "id" integer DEFAULT nextval('"Processes_id_seq"') NOT NULL,
    "proc_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Processes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Processes" ("id", "proc_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(3,	'On-site (Client)',	'2023-08-16 09:11:10.397836+00',	'2023-08-16 09:11:10.397836+00',	NULL,	1,	1),
(4,	'Training',	'2023-08-16 09:11:32.951592+00',	'2023-08-16 09:11:32.951592+00',	NULL,	1,	1),
(5,	'Operations',	'2023-08-16 09:12:09.47865+00',	'2023-08-16 09:12:09.47865+00',	NULL,	1,	1),
(1,	'In-house',	'2023-08-16 08:47:10.229+00',	'2023-08-16 08:47:10.229+00',	NULL,	1,	1),
(2,	'Staff Augmentation',	'2023-08-16 08:47:10.229+00',	'2023-08-16 08:47:10.229+00',	NULL,	1,	1);

CREATE SEQUENCE "ProjectMembers_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."ProjectMembers" (
    "w_id" integer NOT NULL,
    "u_id" integer NOT NULL,
    "id" integer DEFAULT nextval('"ProjectMembers_id_seq"') NOT NULL
) WITH (oids = false);

INSERT INTO "ProjectMembers" ("w_id", "u_id", "id") VALUES
(1,	32,	1),
(1,	31,	2),
(2,	32,	4),
(2,	31,	5),
(2,	6,	6),
(1,	8,	9),
(1,	4,	11),
(3,	32,	12),
(3,	31,	13),
(3,	5,	14),
(4,	32,	15),
(4,	31,	16),
(4,	8,	17),
(5,	32,	18),
(5,	31,	19),
(5,	9,	20),
(5,	12,	21),
(5,	11,	22),
(5,	10,	23),
(6,	32,	24),
(6,	31,	25),
(6,	33,	26),
(6,	28,	27),
(6,	14,	28),
(6,	30,	29),
(6,	13,	30),
(6,	15,	31),
(6,	1,	32),
(8,	32,	49),
(8,	31,	50),
(8,	1,	51),
(8,	14,	52),
(9,	32,	53),
(9,	31,	54),
(9,	1,	55),
(9,	14,	56),
(10,	32,	57),
(10,	31,	58),
(10,	1,	59),
(10,	14,	60),
(11,	32,	61),
(11,	31,	62),
(11,	1,	63),
(11,	14,	64),
(12,	32,	65),
(12,	31,	66),
(12,	1,	67),
(12,	14,	68),
(13,	32,	69),
(13,	31,	70),
(13,	1,	71),
(13,	14,	72),
(14,	32,	73),
(14,	31,	74),
(14,	1,	75),
(14,	14,	76),
(15,	32,	77),
(15,	31,	78),
(15,	1,	79),
(15,	14,	80),
(16,	32,	81),
(16,	31,	82),
(16,	1,	83),
(16,	14,	84),
(17,	32,	85),
(17,	31,	86),
(17,	1,	87),
(17,	14,	88),
(18,	32,	89),
(18,	31,	90),
(18,	1,	91),
(19,	32,	92),
(18,	14,	93),
(19,	31,	94),
(19,	1,	95),
(19,	14,	96),
(20,	32,	97),
(20,	31,	98),
(20,	1,	99),
(20,	14,	100),
(21,	32,	101),
(21,	31,	102),
(21,	1,	103),
(21,	14,	104),
(22,	32,	105),
(22,	31,	106),
(22,	1,	107),
(22,	14,	108),
(23,	32,	109),
(23,	31,	110),
(23,	1,	111),
(24,	32,	112),
(23,	14,	113),
(24,	31,	114),
(24,	1,	115),
(24,	14,	116),
(26,	32,	117),
(26,	31,	118),
(26,	1,	119),
(26,	14,	120),
(27,	32,	121),
(27,	31,	122),
(27,	1,	123),
(27,	14,	124),
(28,	32,	125),
(28,	31,	126),
(28,	1,	127),
(28,	14,	128),
(29,	32,	129),
(29,	31,	130),
(29,	1,	131),
(29,	14,	132),
(31,	32,	133),
(31,	31,	134),
(31,	1,	135),
(31,	14,	136),
(31,	13,	137),
(32,	32,	138),
(32,	31,	139),
(32,	1,	140),
(32,	14,	141),
(32,	33,	142),
(33,	32,	143),
(33,	31,	144),
(33,	1,	145),
(33,	14,	146),
(33,	33,	148),
(34,	32,	149),
(34,	31,	150),
(34,	1,	151),
(34,	14,	152),
(34,	33,	153),
(34,	11,	154),
(35,	32,	155),
(35,	31,	156),
(35,	1,	157),
(35,	14,	158),
(36,	32,	159),
(36,	31,	160),
(36,	1,	161),
(36,	14,	162),
(37,	32,	163),
(37,	31,	164),
(37,	1,	165),
(37,	14,	166),
(38,	32,	167),
(38,	31,	168),
(38,	1,	169),
(38,	14,	170),
(39,	32,	171),
(39,	31,	172),
(39,	1,	173),
(39,	14,	174),
(40,	32,	175),
(40,	31,	176),
(40,	1,	177),
(40,	14,	178),
(40,	33,	179),
(41,	32,	180),
(41,	31,	181),
(41,	1,	182),
(41,	14,	183),
(42,	32,	184),
(42,	31,	185),
(42,	1,	186),
(42,	14,	187),
(43,	32,	188),
(43,	31,	189),
(43,	1,	190),
(43,	14,	191),
(43,	11,	192),
(44,	32,	193),
(44,	31,	194),
(44,	1,	195),
(44,	14,	196),
(44,	4,	197),
(44,	8,	198),
(44,	7,	199),
(44,	17,	200),
(44,	18,	201),
(44,	16,	202);

CREATE TABLE "public"."ProjectMilestones" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "MilestoneId" integer NOT NULL,
    "WorklistId" integer NOT NULL,
    CONSTRAINT "ProjectMilestones_pkey" PRIMARY KEY ("MilestoneId", "WorklistId")
) WITH (oids = false);


CREATE SEQUENCE "QCStatuses_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."QCStatuses" (
    "id" integer DEFAULT nextval('"QCStatuses_id_seq"') NOT NULL,
    "qc_status_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "QCStatuses_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "QCStatuses_qc_status_name_key" UNIQUE ("qc_status_name")
) WITH (oids = false);

INSERT INTO "QCStatuses" ("id", "qc_status_name", "LocationId", "ClientId") VALUES
(1,	'Agree',	1,	1),
(2,	'Feedback',	1,	1);

CREATE SEQUENCE "ResponsibleParties_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."ResponsibleParties" (
    "id" integer DEFAULT nextval('"ResponsibleParties_id_seq"') NOT NULL,
    "resp_party_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "ClientId" integer,
    CONSTRAINT "ResponsibleParties_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Roles_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Roles" (
    "id" integer DEFAULT nextval('"Roles_id_seq"') NOT NULL,
    "role_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Roles" ("id", "role_name", "LocationId", "ClientId") VALUES
(1,	'Manager',	1,	1),
(2,	'Team Lead',	1,	1),
(5,	'Admin',	1,	1),
(4,	'Member',	1,	1),
(3,	'Coder (Not in use)',	1,	1);

CREATE SEQUENCE "SecDiagFeedbacks_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."SecDiagFeedbacks" (
    "id" integer DEFAULT nextval('"SecDiagFeedbacks_id_seq"') NOT NULL,
    "feedback_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "SecDiagFeedbacks_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "Specialties_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Specialties" (
    "id" integer DEFAULT nextval('"Specialties_id_seq"') NOT NULL,
    "spec_name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Specialties_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Specialties" ("id", "spec_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'LAMP Stack',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(2,	'LEMP Stack',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(3,	'MERN Stack',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(4,	'MEAN Stack',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(5,	'.NET + Angular',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(6,	'.NET MVC',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(7,	'Laravel + LAMP',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	1,	1),
(8,	'Wordpress',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(9,	'UI & UX',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(10,	'HR',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(11,	'Operations',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(12,	'Laravel + LAMP + React',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(13,	'Android Kotlin',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(14,	'Flutter',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(15,	'React Native',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(16,	'QA',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(17,	'Administration',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(18,	'JAVA + Spring Boot',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	2,	1),
(19,	'Others',	'2023-08-16 09:07:23.646047+00',	'2023-08-16 09:07:23.646047+00',	NULL,	1,	1);

CREATE TABLE "public"."SprintEpics" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "SprintId" integer,
    "EpicId" integer
) WITH (oids = false);


CREATE SEQUENCE "Sprints_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Sprints" (
    "id" integer DEFAULT nextval('"Sprints_id_seq"') NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "deletedAt" timestamptz,
    "WorklistId" integer,
    "UserId" integer,
    "description" character varying(255),
    "duration" character varying(255),
    "start_date" date,
    "end_date" date,
    CONSTRAINT "Sprints_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Sprints" ("id", "name", "createdAt", "updatedAt", "deletedAt", "WorklistId", "UserId", "description", "duration", "start_date", "end_date") VALUES
(1,	'October 2023',	'2023-10-06 09:14:36.244+00',	'2023-10-06 09:14:36.244+00',	NULL,	1,	31,	'This sprint will be from 1st - 31st October 2023',	'30 days',	'2023-10-01',	'2023-10-31'),
(2,	'Sprint 1',	'2023-10-09 10:41:18.998+00',	'2023-10-09 10:41:18.998+00',	NULL,	1,	32,	'Sprint 1',	'22 days',	'2023-10-09',	'2023-10-31'),
(3,	'Sprint1',	'2023-10-11 11:07:18.68+00',	'2023-10-11 11:07:18.68+00',	NULL,	6,	31,	'Desc1',	'7 days',	'2023-10-03',	'2023-10-10'),
(4,	'test KG',	'2023-10-19 11:25:24.413+00',	'2023-10-19 11:25:24.413+00',	NULL,	30,	NULL,	'test KG',	'0 days',	'2023-10-19',	'2023-10-19'),
(5,	'sprint 1',	'2023-10-20 11:49:31.981+00',	'2023-10-20 11:49:31.981+00',	NULL,	31,	NULL,	NULL,	'10 days',	'2023-10-20',	'2023-10-30'),
(6,	'Sprint 2',	'2023-10-20 12:08:56.862+00',	'2023-10-20 12:08:56.862+00',	NULL,	31,	NULL,	NULL,	'0 days',	'2023-10-20',	'2023-10-20'),
(7,	'Sprint 1',	'2023-10-23 08:39:22.217+00',	'2023-10-23 08:39:22.217+00',	NULL,	34,	33,	'Yo',	'8 days',	'2023-10-23',	'2023-10-31'),
(8,	'Sprint 1',	'2023-11-02 08:46:12.403+00',	'2023-11-02 08:46:12.403+00',	NULL,	44,	8,	NULL,	'18 days',	'2023-10-30',	'2023-11-17');

CREATE SEQUENCE "Statuses_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Statuses" (
    "id" integer DEFAULT nextval('"Statuses_id_seq"') NOT NULL,
    "status_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Statuses_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Statuses_status_name_key" UNIQUE ("status_name")
) WITH (oids = false);

INSERT INTO "Statuses" ("id", "status_name", "LocationId", "ClientId") VALUES
(1,	'Open',	1,	1),
(2,	'Complete',	1,	1),
(3,	'Incomplete',	1,	1);

CREATE SEQUENCE "TaskTypes_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."TaskTypes" (
    "id" integer DEFAULT nextval('"TaskTypes_id_seq"') NOT NULL,
    "name" character varying(255) NOT NULL,
    "ClientId" integer,
    CONSTRAINT "TaskTypes_name_key" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "TaskTypes" ("id", "name", "ClientId") VALUES
(1,	'Task',	NULL),
(2,	'Story',	NULL),
(3,	'Bug',	NULL);

CREATE SEQUENCE "TemplateConfigurations_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."TemplateConfigurations" (
    "id" integer DEFAULT nextval('"TemplateConfigurations_id_seq"') NOT NULL,
    "field_name" character varying(255) NOT NULL,
    "report" boolean NOT NULL,
    "filter" boolean NOT NULL,
    "TemplateId" integer,
    CONSTRAINT "TemplateConfigurations_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "TemplateConfigurations" ("id", "field_name", "report", "filter", "TemplateId") VALUES
(2,	'unique_task_no',	't',	't',	1),
(3,	'name',	't',	't',	1),
(5,	'hours',	't',	'f',	1),
(1,	'date',	't',	't',	1),
(4,	'description',	't',	'f',	1),
(8,	'assignee_name',	't',	't',	1),
(9,	'milestone_name',	't',	't',	1),
(6,	'start_date',	't',	't',	1),
(7,	'end_date',	't',	't',	1),
(12,	'worklist_no',	't',	'f',	1),
(10,	'hold_reason',	'f',	'f',	1),
(11,	'spec_name',	'f',	'f',	1),
(13,	'unique_task_no',	't',	't',	2),
(14,	'name',	't',	't',	2),
(15,	'hours',	't',	't',	2),
(16,	'date',	't',	't',	2),
(17,	'description',	't',	't',	2),
(18,	'assignee_name',	't',	't',	2),
(19,	'milestone_name',	't',	't',	2),
(20,	'start_date',	't',	't',	2),
(21,	'end_date',	't',	't',	2),
(22,	'worklist_no',	't',	't',	2),
(23,	'hold_reason',	't',	't',	2),
(24,	'spec_name',	't',	't',	2);

CREATE SEQUENCE "Templates_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Templates" (
    "id" integer DEFAULT nextval('"Templates_id_seq"') NOT NULL,
    "name" character varying(255) NOT NULL,
    CONSTRAINT "Templates_name_key" UNIQUE ("name"),
    CONSTRAINT "Templates_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Templates" ("id", "name") VALUES
(1,	'Default'),
(2,	'All fields and filters');

CREATE SEQUENCE "Timers_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Timers" (
    "id" integer DEFAULT nextval('"Timers_id_seq"') NOT NULL,
    "start_time" timestamptz,
    "stop_time" timestamptz,
    "UserId" integer,
    "duration_time" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "RoleId" integer,
    "ChartId" integer,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Timers_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


CREATE SEQUENCE "UserAccessRequests_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."UserAccessRequests" (
    "id" integer DEFAULT nextval('"UserAccessRequests_id_seq"') NOT NULL,
    "first_name" character varying(255),
    "last_name" character varying(255),
    "azure_id" character varying(50),
    "email" character varying(255) NOT NULL,
    "action" character varying(255),
    "request" timestamptz,
    "access_granted" boolean,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "UserAccessRequests_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "UserAccessRequests" ("id", "first_name", "last_name", "azure_id", "email", "action", "request", "access_granted", "createdAt", "updatedAt") VALUES
(3,	'V',	'Sriram',	'93a1d190-ce7b-49ea-9c4f-24ad8786d197',	'v.sriram@minditsystems.com',	'grant',	'2023-09-21 08:51:17.873+00',	't',	'2023-09-21 08:51:17.873+00',	'2023-09-21 08:59:11.868+00'),
(4,	'Sanjay',	'Barman',	'722b2837-00b2-4b4d-a5fa-7a5ae4c8a051',	'sanjay.barman@minditsystems.com',	'grant',	'2023-09-26 05:14:56.124+00',	't',	'2023-09-26 05:14:56.124+00',	'2023-09-26 05:15:49.463+00'),
(5,	'Harsh',	'Gupta',	'86b89d16-1321-4e0e-ae9c-a60c70fa4806',	'harsh.gupta@minditsystems.com',	'grant',	'2023-09-26 05:46:42.587+00',	't',	'2023-09-26 05:46:42.589+00',	'2023-09-26 05:47:28.28+00'),
(8,	'Hunny',	'Jain',	'c10acbe8-428b-4e18-bf51-e108f974472e',	'hunny.jain@minditsystems.com',	'grant',	'2023-10-05 12:59:19.426+00',	't',	'2023-10-05 12:59:19.427+00',	'2023-10-05 13:01:41.834+00'),
(10,	'Kushal',	'Verma',	'ae89c829-d529-4f16-ab67-978f963bb292',	'kushal.verma@minditsystems.com',	NULL,	'2023-10-06 04:48:04.36+00',	'f',	'2023-10-06 04:48:04.36+00',	'2023-10-06 04:48:04.36+00'),
(11,	'Apoorva',	'Saxena',	'06314ea3-ae88-41e1-8598-6a411377e55d',	'apoorva.saxena@minditsystems.com',	'grant',	'2023-10-06 04:48:31.074+00',	't',	'2023-10-06 04:48:31.074+00',	'2023-10-06 04:52:58.745+00'),
(9,	'Anshu',	'Kumar',	'216ddfad-d50c-417a-84d6-08fb001d255e',	'anshu.kumar@minditsystems.com',	'grant',	'2023-10-05 13:10:50.539+00',	't',	'2023-10-05 13:10:50.539+00',	'2023-10-06 08:42:15.652+00'),
(13,	'Pradeep',	'Sharma',	'ccc1ba4b-0133-4604-950d-bacb482d57d5',	'pradeep.sharma@minditsystems.com',	'grant',	'2023-10-06 04:55:07.023+00',	't',	'2023-10-06 04:55:07.023+00',	'2023-10-06 08:50:39.442+00'),
(12,	'Aditya',	'Parashar',	'6e81ba41-c66f-4b71-892b-0500b1253a17',	'aditya.parashar@minditsystems.com',	'grant',	'2023-10-06 04:54:37.635+00',	't',	'2023-10-06 04:54:37.635+00',	'2023-10-06 08:52:28.276+00'),
(14,	'Rahul',	'Sharma',	'fc575203-8ac4-49f1-b6fd-343af51f1cbd',	'rahul.sharma@minditsystems.com',	'grant',	'2023-10-06 08:46:39.694+00',	't',	'2023-10-06 08:46:39.695+00',	'2023-10-06 08:54:22.879+00'),
(15,	'Abhimanyu',	'Kheria',	'8025fdb8-851b-47c2-9c68-a572056c5c20',	'abhimanyu.kheria@minditsystems.com',	'grant',	'2023-10-06 08:59:05.688+00',	't',	'2023-10-06 08:59:05.688+00',	'2023-10-06 09:05:06.176+00'),
(16,	'Abhishek',	'Rawat',	'9be7d3fb-506b-4ce6-9f75-639542ed5a4b',	'abhishek.rawat@minditsystems.com',	'grant',	'2023-10-09 06:22:24.71+00',	't',	'2023-10-09 06:22:24.71+00',	'2023-10-09 06:34:37.88+00'),
(19,	'Mohammad',	'Taha Qanoon',	'abbe85ea-b5d4-42c1-9d21-bfa80ce6c029',	'mohammad.taha@minditsystems.com',	'grant',	'2023-10-10 06:45:54.772+00',	't',	'2023-10-10 06:45:54.772+00',	'2023-10-10 08:33:20.092+00'),
(18,	'Surya',	'Pratap Singh',	'1f8a7f95-2d8e-4c68-ae76-9e3551a295df',	'surya.singh@minditsystems.com',	'grant',	'2023-10-10 06:43:57.488+00',	't',	'2023-10-10 06:43:57.488+00',	'2023-10-10 08:33:54.248+00'),
(17,	'Nitin',	'Bisht',	'5b5e0a8c-17cd-4810-a23f-d12bf79a74fe',	'nitin.bisht@minditsystems.com',	'grant',	'2023-10-10 06:43:17.548+00',	't',	'2023-10-10 06:43:17.549+00',	'2023-10-10 08:35:03.171+00'),
(22,	'Dev',	'C',	'3eef2108-bea3-4bf6-874d-c046b8d92f6d',	'dev.c@minditsystems1.onmicrosoft.com',	'grant',	'2023-10-12 10:15:33.596+00',	't',	'2023-10-12 10:15:33.596+00',	'2023-10-12 10:26:19.006+00'),
(21,	'Dev',	'A',	'a6bf082c-ccdc-41a8-a195-06bdd0678882',	'dev.a@minditsystems1.onmicrosoft.com',	'grant',	'2023-10-12 10:03:44.976+00',	't',	'2023-10-12 10:03:44.976+00',	'2023-10-12 10:27:21.522+00'),
(20,	'Dev',	'TL',	'014e0765-11b1-455c-ba44-b0ab802cf4f0',	'dev.tl@minditsystems1.onmicrosoft.com',	'grant',	'2023-10-12 09:57:43.062+00',	't',	'2023-10-12 09:57:43.063+00',	'2023-10-12 10:29:21.49+00'),
(2,	'Rashaad',	'Anwar Hussain',	'3002c35a-2040-4932-a42f-223b40dc1b39',	'rashaad.hussain@minditsystems.com',	'decline',	'2023-10-05 12:54:19.561+00',	'f',	'2023-09-19 12:23:29.444+00',	'2023-10-12 10:29:50.002+00'),
(1,	'Misha',	'Kumari',	'2b52b9f3-8359-4ca1-a562-ee5657c83b4f',	'misha.kumari@minditsystems.com',	NULL,	'2023-10-19 05:20:46.843+00',	'f',	'2023-08-29 05:22:03.076+00',	'2023-10-19 05:20:46.843+00'),
(23,	'Kanicka',	'Gupta',	'5c61f1e4-164e-4f03-9c5d-9327f34f0f9a',	'kanicka@minditsystems.com',	NULL,	'2023-10-19 09:56:53.414+00',	'f',	'2023-10-19 09:56:53.414+00',	'2023-10-19 09:56:53.414+00'),
(26,	'Shashank',	'Mishra',	'aaec851c-2579-4afd-bae7-a23b47425645',	'shashank.mishra@minditsystems.com',	'grant',	'2023-11-02 08:35:11.439+00',	't',	'2023-11-02 08:35:11.439+00',	'2023-11-02 08:38:19.469+00'),
(25,	'Abhishek',	'Kumar',	'8846cecb-80dc-4ca9-a597-380413ff13d7',	'abhishek.kumar@minditsystems.com',	'grant',	'2023-11-02 08:35:09.609+00',	't',	'2023-11-02 08:35:09.61+00',	'2023-11-02 08:39:18.922+00'),
(24,	'Sukesh',	'Vashistha',	'321d50c5-8dde-4824-b471-062f543dd6ee',	'sukesh.vashistha@minditsystems.com',	'grant',	'2023-11-02 08:35:08.829+00',	't',	'2023-11-02 08:35:08.83+00',	'2023-11-02 08:39:54.065+00');

CREATE TABLE "public"."UserClients" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" integer NOT NULL,
    "ClientId" integer NOT NULL,
    CONSTRAINT "UserClients_pkey" PRIMARY KEY ("UserId", "ClientId")
) WITH (oids = false);

INSERT INTO "UserClients" ("createdAt", "updatedAt", "UserId", "ClientId") VALUES
('2023-08-18 09:02:42.028+00',	'2023-08-18 09:02:42.028+00',	1,	1),
('2023-09-19 12:24:39.272+00',	'2023-09-19 12:24:39.272+00',	33,	1),
('2023-09-21 08:59:12.14+00',	'2023-09-21 08:59:12.14+00',	34,	1),
('2023-09-23 06:52:35.507+00',	'2023-09-23 06:52:35.507+00',	29,	1),
('2023-09-26 05:15:49.706+00',	'2023-09-26 05:15:49.706+00',	35,	1),
('2023-09-26 05:47:28.532+00',	'2023-09-26 05:47:28.532+00',	36,	1),
('2023-10-05 13:01:56.25+00',	'2023-10-05 13:01:56.25+00',	2,	4),
('2023-10-05 13:04:30.515+00',	'2023-10-05 13:04:30.515+00',	2,	1),
('2023-10-06 04:52:58.986+00',	'2023-10-06 04:52:58.986+00',	3,	1),
('2023-10-06 08:42:15.903+00',	'2023-10-06 08:42:15.903+00',	4,	1),
('2023-10-06 08:47:49.705+00',	'2023-10-06 08:47:49.705+00',	4,	3),
('2023-10-06 08:50:39.647+00',	'2023-10-06 08:50:39.647+00',	5,	1),
('2023-10-06 08:50:39.647+00',	'2023-10-06 08:50:39.647+00',	5,	3),
('2023-10-06 08:52:28.507+00',	'2023-10-06 08:52:28.507+00',	6,	1),
('2023-10-06 08:52:28.507+00',	'2023-10-06 08:52:28.507+00',	6,	3),
('2023-10-06 08:54:23.093+00',	'2023-10-06 08:54:23.093+00',	7,	1),
('2023-10-06 09:05:06.399+00',	'2023-10-06 09:05:06.399+00',	8,	3),
('2023-10-06 09:05:06.399+00',	'2023-10-06 09:05:06.399+00',	8,	1),
('2023-10-06 09:05:06.399+00',	'2023-10-06 09:05:06.399+00',	8,	2),
('2023-10-09 06:34:38.117+00',	'2023-10-09 06:34:38.117+00',	9,	1),
('2023-10-10 08:33:20.568+00',	'2023-10-10 08:33:20.568+00',	10,	1),
('2023-10-10 08:33:54.788+00',	'2023-10-10 08:33:54.788+00',	11,	1),
('2023-10-10 08:35:03.616+00',	'2023-10-10 08:35:03.616+00',	12,	1),
('2023-10-12 10:26:19.257+00',	'2023-10-12 10:26:19.257+00',	13,	1),
('2023-10-12 10:27:21.739+00',	'2023-10-12 10:27:21.739+00',	14,	1),
('2023-10-12 10:29:21.723+00',	'2023-10-12 10:29:21.723+00',	15,	1),
('2023-11-02 08:38:19.709+00',	'2023-11-02 08:38:19.709+00',	16,	1),
('2023-11-02 08:39:19.144+00',	'2023-11-02 08:39:19.144+00',	17,	1),
('2023-11-02 08:39:54.285+00',	'2023-11-02 08:39:54.285+00',	18,	1);

CREATE TABLE "public"."UserLocations" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" integer NOT NULL,
    "LocationId" integer NOT NULL,
    CONSTRAINT "UserLocations_pkey" PRIMARY KEY ("UserId", "LocationId")
) WITH (oids = false);

INSERT INTO "UserLocations" ("createdAt", "updatedAt", "UserId", "LocationId") VALUES
('2023-08-18 09:02:09.344+00',	'2023-08-18 09:02:09.344+00',	1,	1),
('2023-09-19 12:24:39.21+00',	'2023-09-19 12:24:39.21+00',	33,	1),
('2023-09-21 08:59:12.079+00',	'2023-09-21 08:59:12.079+00',	34,	1),
('2023-09-23 06:52:35.597+00',	'2023-09-23 06:52:35.597+00',	29,	2),
('2023-09-26 05:15:49.655+00',	'2023-09-26 05:15:49.655+00',	35,	1),
('2023-09-26 05:47:28.474+00',	'2023-09-26 05:47:28.474+00',	36,	1),
('2023-10-05 13:01:56.19+00',	'2023-10-05 13:01:56.19+00',	2,	1),
('2023-10-06 04:52:58.928+00',	'2023-10-06 04:52:58.928+00',	3,	1),
('2023-10-06 08:42:15.851+00',	'2023-10-06 08:42:15.851+00',	4,	1),
('2023-10-06 08:50:39.602+00',	'2023-10-06 08:50:39.602+00',	5,	1),
('2023-10-06 08:52:28.452+00',	'2023-10-06 08:52:28.452+00',	6,	1),
('2023-10-06 08:54:23.045+00',	'2023-10-06 08:54:23.045+00',	7,	1),
('2023-10-06 09:05:06.351+00',	'2023-10-06 09:05:06.351+00',	8,	1),
('2023-10-09 06:34:38.063+00',	'2023-10-09 06:34:38.063+00',	9,	1),
('2023-10-10 08:33:20.457+00',	'2023-10-10 08:33:20.457+00',	10,	1),
('2023-10-10 08:33:54.625+00',	'2023-10-10 08:33:54.625+00',	11,	2),
('2023-10-10 08:35:03.508+00',	'2023-10-10 08:35:03.508+00',	12,	1),
('2023-10-12 10:26:19.198+00',	'2023-10-12 10:26:19.198+00',	13,	1),
('2023-10-12 10:27:21.69+00',	'2023-10-12 10:27:21.69+00',	14,	1),
('2023-10-12 10:29:21.671+00',	'2023-10-12 10:29:21.671+00',	15,	1),
('2023-11-02 08:38:19.655+00',	'2023-11-02 08:38:19.655+00',	16,	1),
('2023-11-02 08:39:19.094+00',	'2023-11-02 08:39:19.094+00',	17,	1),
('2023-11-02 08:39:54.236+00',	'2023-11-02 08:39:54.236+00',	18,	1);

CREATE TABLE "public"."UserSpecialties" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" integer NOT NULL,
    "SpecialtyId" integer NOT NULL,
    CONSTRAINT "UserSpecialties_pkey" PRIMARY KEY ("UserId", "SpecialtyId")
) WITH (oids = false);

INSERT INTO "UserSpecialties" ("createdAt", "updatedAt", "UserId", "SpecialtyId") VALUES
('2023-08-18 05:33:55.902775+00',	'2023-08-18 05:33:55.902775+00',	1,	1),
('2023-09-19 12:24:39.331+00',	'2023-09-19 12:24:39.331+00',	33,	1),
('2023-09-21 08:59:12.199+00',	'2023-09-21 08:59:12.199+00',	34,	2),
('2023-09-21 08:59:12.199+00',	'2023-09-21 08:59:12.199+00',	34,	3),
('2023-09-23 06:52:35.679+00',	'2023-09-23 06:52:35.679+00',	29,	4),
('2023-09-26 05:15:49.757+00',	'2023-09-26 05:15:49.757+00',	35,	3),
('2023-09-26 05:15:49.757+00',	'2023-09-26 05:15:49.757+00',	35,	18),
('2023-09-26 05:47:28.587+00',	'2023-09-26 05:47:28.587+00',	36,	3),
('2023-10-05 13:01:56.308+00',	'2023-10-05 13:01:56.308+00',	2,	14),
('2023-10-05 13:01:56.308+00',	'2023-10-05 13:01:56.308+00',	2,	13),
('2023-10-05 13:01:56.308+00',	'2023-10-05 13:01:56.308+00',	2,	15),
('2023-10-06 04:52:59.048+00',	'2023-10-06 04:52:59.048+00',	3,	14),
('2023-10-06 08:42:15.953+00',	'2023-10-06 08:42:15.953+00',	4,	5),
('2023-10-06 08:42:15.953+00',	'2023-10-06 08:42:15.953+00',	4,	6),
('2023-10-06 08:50:39.691+00',	'2023-10-06 08:50:39.691+00',	5,	5),
('2023-10-06 08:50:39.691+00',	'2023-10-06 08:50:39.691+00',	5,	6),
('2023-10-06 08:52:28.559+00',	'2023-10-06 08:52:28.559+00',	6,	5),
('2023-10-06 08:52:28.559+00',	'2023-10-06 08:52:28.559+00',	6,	6),
('2023-10-06 08:54:23.141+00',	'2023-10-06 08:54:23.141+00',	7,	6),
('2023-10-06 09:05:06.449+00',	'2023-10-06 09:05:06.449+00',	8,	6),
('2023-10-06 09:05:06.449+00',	'2023-10-06 09:05:06.449+00',	8,	5),
('2023-10-09 06:34:38.169+00',	'2023-10-09 06:34:38.169+00',	9,	3),
('2023-10-09 06:34:38.169+00',	'2023-10-09 06:34:38.169+00',	9,	5),
('2023-10-09 06:34:38.169+00',	'2023-10-09 06:34:38.169+00',	9,	18),
('2023-10-09 06:34:38.169+00',	'2023-10-09 06:34:38.169+00',	9,	13),
('2023-10-09 06:34:38.169+00',	'2023-10-09 06:34:38.169+00',	9,	6),
('2023-10-10 08:33:20.68+00',	'2023-10-10 08:33:20.68+00',	10,	6),
('2023-10-10 08:33:54.927+00',	'2023-10-10 08:33:54.927+00',	11,	5),
('2023-10-10 08:35:03.716+00',	'2023-10-10 08:35:03.716+00',	12,	5),
('2023-10-12 10:26:19.313+00',	'2023-10-12 10:26:19.313+00',	13,	5),
('2023-10-12 10:27:21.793+00',	'2023-10-12 10:27:21.793+00',	14,	17),
('2023-10-12 10:29:21.776+00',	'2023-10-12 10:29:21.776+00',	15,	6),
('2023-10-12 12:42:08.162+00',	'2023-10-12 12:42:08.162+00',	30,	19),
('2023-11-02 08:38:19.76+00',	'2023-11-02 08:38:19.76+00',	16,	5),
('2023-11-02 08:39:19.194+00',	'2023-11-02 08:39:19.194+00',	17,	5),
('2023-11-02 08:39:54.333+00',	'2023-11-02 08:39:54.333+00',	18,	5);

CREATE SEQUENCE "Users_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Users" (
    "id" integer DEFAULT nextval('"Users_id_seq"') NOT NULL,
    "first_name" character varying(255),
    "last_name" character varying(255),
    "date_of_birth" date,
    "joining_date" date,
    "specialty" character varying(255),
    "email" character varying(255) NOT NULL,
    "password" character varying(255) NOT NULL,
    "employee_id" character varying(255),
    "azure_id" character varying(50),
    "is_active" boolean DEFAULT true,
    "image_url" character varying(1024),
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now(),
    "RoleId" integer,
    "DesignationId" integer,
    CONSTRAINT "Users_email_key" UNIQUE ("email"),
    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Users" ("id", "first_name", "last_name", "date_of_birth", "joining_date", "specialty", "email", "password", "employee_id", "azure_id", "is_active", "image_url", "createdAt", "updatedAt", "RoleId", "DesignationId") VALUES
(30,	'Mind',	'IT Dev',	'2000-11-08',	'2016-12-12',	'',	'dev.m@minditsystems1.onmicrosoft.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'9000',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-10-13 07:05:33.025171+00',	1,	5),
(36,	'Harsh',	'Gupta',	'2023-09-04',	'2023-09-26',	'',	'harsh.gupta@minditsystems.com',	'$2b$10$.MfF3z/4R3nvhfr3my7xD.lxRbHqhi1EI95Yg/goiRhSYgL52Se6e',	'4988',	'86b89d16-1321-4e0e-ae9c-a60c70fa4806',	'f',	NULL,	'2023-09-26 05:47:28.432043+00',	'2023-10-18 12:29:10.567657+00',	1,	5),
(29,	'Misha',	'Kumari',	'2000-11-08',	'2016-12-12',	'',	'misha.kumari@minditsystems.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6830',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	'f',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Misha-Kumari-29-1697531495.jpg',	'2023-06-24 08:30:29.167144+00',	'2023-10-18 12:30:30.183787+00',	1,	3),
(28,	'Vishesh',	'Jakhar',	'2000-11-08',	'2016-12-12',	'',	'vishesh.jakhar@minditsystems.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6800',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	'f',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-10-18 12:30:45.340346+00',	1,	1),
(32,	'Mind IT',	'Admin 2',	'2000-11-08',	'2016-12-12',	'',	'dev.admin.clone2@minditsystems1.onmicrosoft.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'9002',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-06-24 08:30:29.205841+00',	5,	12),
(31,	'Mind IT',	'Admin 1',	'2000-11-08',	'2016-12-12',	'',	'dev.admin.clone1@minditsystems1.onmicrosoft.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'9001',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-06-24 08:30:29.205841+00',	5,	12),
(33,	'Rashaad',	'Anwar Hussain',	'2002-09-10',	'2023-09-19',	'',	'rashaad.hussain@minditsystems.com',	'$2b$10$NzudOg/AkEEQms7bK5/W8OMQmv7TYC3DPvo3CDL240q59GqbrIvSe',	'9005',	'3002c35a-2040-4932-a42f-223b40dc1b39',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Rashaad-Anwar%20Hussain-33-1697708876.jpg',	'2023-09-19 12:24:39.162655+00',	'2023-11-02 07:24:30.485115+00',	1,	6),
(35,	'Sanjay',	'Barman',	'2004-02-18',	'2023-09-26',	'',	'sanjay.barman@minditsystems.com',	'$2b$10$P1tGiJN0F9HpiG.jOsbvmOoAQpae2W4y98arUjT3q2jFslCw6OukS',	'2998',	'722b2837-00b2-4b4d-a5fa-7a5ae4c8a051',	't',	NULL,	'2023-09-26 05:15:49.626327+00',	'2023-09-26 05:15:50.837678+00',	1,	5),
(34,	'V',	'Sriram',	'2023-09-01',	'2023-09-21',	'',	'v.sriram@minditsystems.com',	'$2b$10$i4C0sa.9uCZMcpnxyJ6Y3ea/.E0yzK7SnVKcn23x7fhQAjahX20I.',	'2555',	'93a1d190-ce7b-49ea-9c4f-24ad8786d197',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-V-Sriram-34-1696836434.png',	'2023-09-21 08:59:12.040985+00',	'2023-10-11 10:49:07.104426+00',	1,	4),
(1,	'Dheeraj',	'Verma',	'1998-11-11',	'2011-09-18',	'',	'dheeraj.verma@minditsystems.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6186',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Dheeraj-Verma-1-1697019833.jpg',	'2023-06-24 08:30:29.167144+00',	'2023-10-12 12:02:29.969024+00',	5,	4),
(2,	'Hunny',	'Jain',	'2021-07-08',	'2020-08-27',	'',	'hunny.jain@minditsystems.com',	'$2b$10$HNVuRzXyz.PuvWTzyA/Ys.IEAh.O9eAaUQzpoYIKfxR1FMkEEWBbO',	'160',	'c10acbe8-428b-4e18-bf51-e108f974472e',	't',	NULL,	'2023-10-05 13:01:56.143255+00',	'2023-10-05 13:04:05.518861+00',	2,	3),
(3,	'Apoorva',	'Saxena',	'1995-07-13',	'2022-08-08',	'',	'apoorva.saxena@minditsystems.com',	'$2b$10$KqI47GGYAXPqxqLfPqiioOqRy9jvQQHln/zuOikUfxtiK95B7uPb6',	'146',	'06314ea3-ae88-41e1-8598-6a411377e55d',	't',	NULL,	'2023-10-06 04:52:58.891157+00',	'2023-10-06 04:53:02.93366+00',	4,	9),
(7,	'Rahul',	'Sharma',	'1994-10-01',	'2022-04-28',	'',	'rahul.sharma@minditsystems.com',	'$2b$10$JKuw9f9lI.t0ceX5z4odLeMD9BlnJcELCBcz39RKWn0VpqfKklWBO',	'129',	'fc575203-8ac4-49f1-b6fd-343af51f1cbd',	't',	NULL,	'2023-10-06 08:54:22.997281+00',	'2023-10-06 08:54:39.195534+00',	4,	9),
(5,	'Pradeep',	'Sharma',	'1998-11-16',	'2022-06-07',	'',	'pradeep.sharma@minditsystems.com',	'$2b$10$lwjsWTkVIXUiqovjX0.HOutGv4GJz4EV0abos2zC6tAidWAnnRh2u',	'139',	'ccc1ba4b-0133-4604-950d-bacb482d57d5',	't',	NULL,	'2023-10-06 08:50:39.558642+00',	'2023-10-06 08:55:42.610772+00',	4,	9),
(15,	'Dev',	'TL',	'2000-08-01',	'2023-10-03',	NULL,	'dev.tl@minditsystems1.onmicrosoft.com',	'$2b$10$ZyRo7q9llYGIbJ5iCWzLful.rdQ.guEy/3lObxrya3sxpJjsnKI3e',	'902',	'014e0765-11b1-455c-ba44-b0ab802cf4f0',	't',	NULL,	'2023-10-12 10:29:21.627441+00',	'2023-10-13 05:20:22.820213+00',	2,	3),
(14,	'Dev',	'Admin',	'2000-10-03',	'2023-10-01',	NULL,	'dev.a@minditsystems1.onmicrosoft.com',	'$2b$10$8YSXHIQKv67b5c1DbRjsie4CWXiA3aViljkGVLmpauX1GWuq0oHxi',	'901',	'a6bf082c-ccdc-41a8-a195-06bdd0678882',	't',	NULL,	'2023-10-12 10:27:21.652629+00',	'2023-10-13 06:33:55.506799+00',	5,	4),
(11,	'Surya',	'Pratap Singh',	'2023-10-10',	'2023-10-10',	NULL,	'surya.singh@minditsystems.com',	'$2b$10$/PQX9mnX2u3yvJ3u7U6eauHN/JRJcVPjv06lhwUKYel7uavh9gQ8G',	'67',	'1f8a7f95-2d8e-4c68-ae76-9e3551a295df',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Surya-Pratap%20Singh-11-1698382445.jpg',	'2023-10-10 08:33:54.496591+00',	'2023-10-27 04:54:06.077258+00',	4,	9),
(8,	'Abhimanyu',	'Kheria',	'2023-10-06',	'2022-06-01',	NULL,	'abhimanyu.kheria@minditsystems.com',	'$2b$10$z4337oqBHcF.LxaN2OzWiOGNCg2Mc2ZWUS.T.mCNLrvtJ6QN.UKQa',	'53',	'8025fdb8-851b-47c2-9c68-a572056c5c20',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Abhimanyu-Kheria-8-1696583778.jpg',	'2023-10-06 09:05:06.306614+00',	'2023-10-06 09:16:17.552564+00',	2,	3),
(18,	'Sukesh',	'Vashistha',	'2023-11-02',	'2023-11-02',	NULL,	'sukesh.vashistha@minditsystems.com',	'$2b$10$MLdzpbbyQDa2Za7abbniLuI8PSSGPe7nRFTmbyTeo43ZI5j.JTM2.',	'A003',	'321d50c5-8dde-4824-b471-062f543dd6ee',	't',	NULL,	'2023-11-02 08:39:54.198771+00',	'2023-11-02 08:42:19.663906+00',	4,	1),
(4,	'Anshu',	'Kumar',	'2023-10-05',	'2023-10-05',	'',	'anshu.kumar@minditsystems.com',	'$2b$10$WRiTVcy6aHbgNSgLYaxjAePWqocch5UPEBh8pzLTSwqSd058M2bju',	'49',	'216ddfad-d50c-417a-84d6-08fb001d255e',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Anshu-Kumar-4-1696581915.png',	'2023-10-06 08:42:15.801541+00',	'2023-10-06 09:44:22.87769+00',	2,	7),
(10,	'Mohammad',	'Taha Qanoon',	'2023-10-10',	'2023-10-10',	NULL,	'mohammad.taha@minditsystems.com',	'$2b$10$T.nO1SZfS9RbVWg4qcpfrepTjISnKnvzoXrzSva90fDgAlZKI8rj2',	'12',	NULL,	't',	NULL,	'2023-10-10 08:33:20.368076+00',	'2023-10-10 08:33:20.368076+00',	4,	7),
(9,	'Abhishek',	'Rawat',	'1994-10-01',	'2015-01-01',	NULL,	'abhishek.rawat@minditsystems.com',	'$2b$10$6oXUdh8RLkLRH56t8YtUsOudH7bY5X84J65K6hGIRR09MyzJ7WOuy',	'030',	'9be7d3fb-506b-4ce6-9f75-639542ed5a4b',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Abhishek-Rawat-9-1698384965.jpg',	'2023-10-09 06:34:38.017181+00',	'2023-10-27 05:36:07.104102+00',	2,	3),
(6,	'Aditya',	'Parashar',	'1999-03-18',	'2021-09-20',	'',	'aditya.parashar@minditsystems.com',	'$2b$10$h63ZrcWZSvsj5zaOAeBtmeMswjY1TPZ7Khr4iSvXnkC.NEAMimr6O',	'97',	'6e81ba41-c66f-4b71-892b-0500b1253a17',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Aditya-Parashar-6-1698736089.jpg',	'2023-10-06 08:52:28.401189+00',	'2023-10-31 07:08:10.34904+00',	4,	9),
(12,	'Nitin',	'Bisht',	'1998-10-13',	'2023-01-16',	NULL,	'nitin.bisht@minditsystems.com',	'$2b$10$QmgRXYZmJnXrvASOI3xv4OM7jLa03QvRmBm4t3.HZEaBO4l5O59Nm',	'167',	'5b5e0a8c-17cd-4810-a23f-d12bf79a74fe',	't',	NULL,	'2023-10-10 08:35:03.414464+00',	'2023-10-10 08:35:33.685296+00',	4,	9),
(16,	'Shashank',	'Mishra',	'2023-10-25',	'2023-10-01',	NULL,	'shashank.mishra@minditsystems.com',	'$2b$10$ddcRJsuk/Czo0ihL7Vyp0.YJF4RbCGUr2xJL04mBF4bmW8miyE9p2',	'A001',	'aaec851c-2579-4afd-bae7-a23b47425645',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Shashank-Mishra-16-1698914630.jpg',	'2023-11-02 08:38:19.614772+00',	'2023-11-02 08:43:49.28756+00',	4,	9),
(17,	'Abhishek',	'Kumar',	'2023-11-02',	'2023-11-01',	NULL,	'abhishek.kumar@minditsystems.com',	'$2b$10$V4wRrgy8M64x.7KGtPiVr.C42i/S2jngnf35OEAkKNZeI6GJR/AuW',	'A002',	'8846cecb-80dc-4ca9-a597-380413ff13d7',	't',	'https://friendz.s3.ap-southeast-1.amazonaws.com/user-images/PP-Abhishek-Kumar-17-1698914657.jpg',	'2023-11-02 08:39:19.054571+00',	'2023-11-02 08:44:16.0759+00',	4,	9),
(13,	'Dev',	'Member',	'2000-10-01',	'2023-10-01',	NULL,	'dev.c@minditsystems1.onmicrosoft.com',	'$2b$10$bdlQePWD1shczXhOAhJGjuxYrUN7gsPFXoWf/ThbrzRSsGU3R5WB6',	'900',	'3eef2108-bea3-4bf6-874d-c046b8d92f6d',	't',	NULL,	'2023-10-12 10:26:19.149389+00',	'2023-10-12 12:08:10.019838+00',	4,	1);

CREATE SEQUENCE "WorklistActivityLogs_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."WorklistActivityLogs" (
    "id" integer DEFAULT nextval('"WorklistActivityLogs_id_seq"') NOT NULL,
    "worklist_id" integer NOT NULL,
    "from" integer,
    "to" integer,
    "type" character varying(255) NOT NULL,
    "activity_by" integer NOT NULL,
    "assignee_id" integer,
    "activity_time" timestamptz NOT NULL,
    CONSTRAINT "WorklistActivityLogs_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "WorklistActivityLogs" ("id", "worklist_id", "from", "to", "type", "activity_by", "assignee_id", "activity_time") VALUES
(1,	1,	NULL,	NULL,	'create',	1,	NULL,	'2023-10-06 09:07:49.543+00'),
(2,	2,	NULL,	NULL,	'create',	1,	NULL,	'2023-10-06 09:11:51.737+00'),
(3,	3,	NULL,	NULL,	'create',	1,	NULL,	'2023-10-06 09:31:04.53+00'),
(4,	4,	NULL,	NULL,	'create',	1,	NULL,	'2023-10-06 09:44:06.555+00'),
(5,	5,	NULL,	NULL,	'create',	1,	NULL,	'2023-10-09 06:41:39.353+00'),
(6,	6,	NULL,	NULL,	'create',	34,	NULL,	'2023-10-11 10:53:58.968+00'),
(7,	25,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-19 10:22:08.979+00'),
(8,	30,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-19 11:16:36.282+00'),
(9,	31,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-20 10:04:04.142+00'),
(10,	32,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-23 07:25:11.115+00'),
(11,	33,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-23 08:30:41.191+00'),
(12,	34,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-23 08:34:27.565+00'),
(13,	40,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-23 09:00:53.177+00'),
(14,	43,	NULL,	NULL,	'create',	14,	NULL,	'2023-10-23 09:04:50.019+00'),
(15,	44,	NULL,	NULL,	'create',	33,	NULL,	'2023-11-02 07:27:03.659+00');

CREATE SEQUENCE "WorklistStatuses_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."WorklistStatuses" (
    "id" integer DEFAULT nextval('"WorklistStatuses_id_seq"') NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    CONSTRAINT "WorklistStatuses_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "WorklistStatuses" ("id", "name", "createdAt", "updatedAt") VALUES
(1,	'Open',	'2023-08-16 08:47:11.055+00',	'2023-08-16 08:47:11.055+00'),
(2,	'In Progress',	'2023-08-16 08:47:11.055+00',	'2023-08-16 08:47:11.055+00'),
(3,	'Closed',	'2023-08-16 08:47:11.055+00',	'2023-08-16 08:47:11.055+00');

CREATE SEQUENCE "Worklists_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Worklists" (
    "id" integer DEFAULT nextval('"Worklists_id_seq"') NOT NULL,
    "worklist_no" character varying(255) NOT NULL,
    "start_date" date,
    "end_date" date,
    "created_by" integer,
    "status" integer,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    "SpecialtyId" integer,
    "ProcessId" integer,
    "WorklistStatusId" integer,
    "changed_by" integer,
    "name" character varying(255),
    "deletedAt" timestamptz,
    CONSTRAINT "Worklists_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Worklists_worklist_no_key" UNIQUE ("worklist_no")
) WITH (oids = false);

INSERT INTO "Worklists" ("id", "worklist_no", "start_date", "end_date", "created_by", "status", "createdAt", "updatedAt", "LocationId", "ClientId", "SpecialtyId", "ProcessId", "WorklistStatusId", "changed_by", "name", "deletedAt") VALUES
(1,	'P-0001',	'2023-09-15',	'2023-12-31',	1,	1,	'2023-10-06 09:07:49.543+00',	'2023-10-06 09:07:49.543+00',	NULL,	3,	5,	2,	1,	1,	'Mynd HRX-(Admin)',	NULL),
(2,	'P-0002',	'2023-09-19',	'2023-12-31',	1,	1,	'2023-10-06 09:11:51.737+00',	'2023-10-06 09:11:51.737+00',	NULL,	3,	5,	2,	1,	1,	'Onboarding',	NULL),
(3,	'P-0003',	'2023-01-16',	'2023-12-31',	1,	1,	'2023-10-06 09:31:04.53+00',	'2023-10-06 09:31:04.53+00',	NULL,	3,	5,	2,	1,	1,	'MyndSol - Travel & Expense',	NULL),
(4,	'P-0004',	'2023-06-01',	'2023-12-31',	1,	1,	'2023-10-06 09:44:06.555+00',	'2023-10-06 09:44:06.555+00',	NULL,	3,	6,	2,	1,	1,	'Mynd - ACT',	NULL),
(5,	'P-0005',	'2023-10-09',	'2024-02-29',	1,	1,	'2023-10-09 06:41:39.353+00',	'2023-10-09 06:41:39.353+00',	NULL,	1,	5,	1,	1,	1,	'Interne 2.0',	NULL),
(6,	'P-0006',	'2023-10-01',	'2023-10-27',	34,	1,	'2023-10-11 10:53:58.968+00',	'2023-10-11 10:53:58.968+00',	NULL,	1,	3,	1,	1,	34,	'WMT',	NULL),
(8,	'P-0007',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:49.837+00',	'2023-10-19 10:19:49.837+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(9,	'P-0008',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:54.524+00',	'2023-10-19 10:19:54.524+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(10,	'P-0009',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:55.128+00',	'2023-10-19 10:19:55.128+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(11,	'P-0010',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:55.47+00',	'2023-10-19 10:19:55.47+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(12,	'P-0011',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:55.696+00',	'2023-10-19 10:19:55.696+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(13,	'P-0012',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:55.892+00',	'2023-10-19 10:19:55.892+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(14,	'P-0013',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:56.146+00',	'2023-10-19 10:19:56.146+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(15,	'P-0014',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:56.366+00',	'2023-10-19 10:19:56.366+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(16,	'P-0015',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:56.572+00',	'2023-10-19 10:19:56.572+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(17,	'P-0016',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:59.432+00',	'2023-10-19 10:19:59.432+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(18,	'P-0017',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:59.779+00',	'2023-10-19 10:19:59.779+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(19,	'P-0018',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:19:59.977+00',	'2023-10-19 10:19:59.977+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(20,	'P-0019',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:22:04.854+00',	'2023-10-19 10:22:04.854+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(21,	'P-0020',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:22:05.758+00',	'2023-10-19 10:22:05.758+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(22,	'P-0021',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:22:06.087+00',	'2023-10-19 10:22:06.087+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(23,	'P-0022',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:22:06.306+00',	'2023-10-19 10:22:06.306+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(24,	'P-0023',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:22:06.449+00',	'2023-10-19 10:22:06.449+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	NULL),
(26,	'P-0025',	'2023-10-03',	'2023-10-31',	14,	1,	'2023-10-19 11:15:03.867+00',	'2023-10-19 11:15:03.867+00',	NULL,	2,	1,	2,	1,	14,	'Kanicka test',	NULL),
(27,	'P-0026',	'2023-10-03',	'2023-10-31',	14,	1,	'2023-10-19 11:15:09.717+00',	'2023-10-19 11:15:09.717+00',	NULL,	2,	1,	2,	1,	14,	'Kanicka test',	NULL),
(28,	'P-0027',	'2023-10-03',	'2023-10-31',	14,	1,	'2023-10-19 11:15:22.972+00',	'2023-10-19 11:15:22.972+00',	NULL,	2,	1,	2,	1,	14,	'Kanicka test',	NULL),
(29,	'P-0028',	'2023-10-03',	'2023-10-31',	14,	1,	'2023-10-19 11:16:31.556+00',	'2023-10-19 11:16:31.556+00',	NULL,	2,	1,	2,	1,	14,	'Kanicka test',	NULL),
(30,	'P-0029',	'2023-10-03',	'2023-10-31',	14,	1,	'2023-10-19 11:16:36.282+00',	'2023-10-19 11:16:36.282+00',	NULL,	2,	1,	2,	1,	14,	'Kanicka test',	NULL),
(33,	'P-0032',	'2023-10-31',	'2023-11-07',	14,	1,	'2023-10-23 08:30:41.191+00',	'2023-10-23 08:30:41.191+00',	NULL,	1,	14,	1,	1,	14,	'New Project ',	'2023-10-23 08:33:35.555+00'),
(34,	'P-0033',	'2023-10-26',	'2023-11-02',	14,	1,	'2023-10-23 08:34:27.565+00',	'2023-10-23 08:34:27.565+00',	NULL,	2,	7,	5,	1,	14,	'New project',	NULL),
(31,	'P-0030',	'2023-10-25',	'2023-10-26',	14,	1,	'2023-10-20 10:04:04.142+00',	'2023-10-20 10:04:04.142+00',	NULL,	3,	3,	1,	1,	14,	'New project',	'2023-10-23 08:35:42.684+00'),
(32,	'P-0031',	'2023-10-29',	'2023-11-11',	14,	1,	'2023-10-23 07:25:11.115+00',	'2023-10-23 07:25:11.115+00',	NULL,	1,	13,	2,	1,	14,	'New project 2',	'2023-10-23 08:35:52.229+00'),
(40,	'P-0039',	'2023-10-12',	'2023-10-31',	14,	1,	'2023-10-23 09:00:53.177+00',	'2023-10-23 09:00:53.177+00',	NULL,	1,	3,	3,	1,	14,	'History repeats itself',	'2023-10-23 09:01:19.596+00'),
(35,	'P-0034',	'2023-10-12',	'2023-10-31',	14,	1,	'2023-10-23 09:00:19.16+00',	'2023-10-23 09:00:19.16+00',	NULL,	1,	3,	3,	1,	14,	'History repeats itself',	'2023-10-23 09:01:33.266+00'),
(37,	'P-0036',	'2023-10-12',	'2023-10-31',	14,	1,	'2023-10-23 09:00:34.898+00',	'2023-10-23 09:00:34.898+00',	NULL,	1,	3,	3,	1,	14,	'History repeats itself',	'2023-10-23 09:01:43.669+00'),
(38,	'P-0037',	'2023-10-12',	'2023-10-31',	14,	1,	'2023-10-23 09:00:35.215+00',	'2023-10-23 09:00:35.215+00',	NULL,	1,	3,	3,	1,	14,	'History repeats itself',	'2023-10-23 09:01:50.435+00'),
(36,	'P-0035',	'2023-10-12',	'2023-10-31',	14,	1,	'2023-10-23 09:00:27.299+00',	'2023-10-23 09:00:27.299+00',	NULL,	1,	3,	3,	1,	14,	'History repeats itself',	'2023-10-23 09:01:56.171+00'),
(39,	'P-0038',	'2023-10-12',	'2023-10-31',	14,	1,	'2023-10-23 09:00:35.404+00',	'2023-10-23 09:00:35.404+00',	NULL,	1,	3,	3,	1,	14,	'History repeats itself',	'2023-10-23 09:02:08.795+00'),
(41,	'P-0040',	'2023-10-25',	'2023-10-31',	14,	1,	'2023-10-23 09:03:31.537+00',	'2023-10-23 09:03:31.537+00',	NULL,	3,	8,	2,	1,	14,	'Room',	'2023-10-23 09:50:55.954+00'),
(42,	'P-0041',	'2023-10-25',	'2023-10-31',	14,	1,	'2023-10-23 09:04:38.491+00',	'2023-10-23 09:04:38.491+00',	NULL,	3,	8,	2,	1,	14,	'Room',	'2023-10-23 09:51:01.382+00'),
(43,	'P-0042',	'2023-10-25',	'2023-10-31',	14,	1,	'2023-10-23 09:04:50.019+00',	'2023-10-23 09:04:50.019+00',	NULL,	3,	8,	2,	1,	14,	'Room',	'2023-10-23 09:51:08.339+00'),
(25,	'P-0024',	'2023-10-03',	'2023-10-19',	14,	1,	'2023-10-19 10:22:08.979+00',	'2023-10-19 10:22:08.979+00',	NULL,	1,	1,	1,	1,	14,	'Shaad Online',	'2023-10-23 09:58:57.252+00'),
(44,	'P-0043',	'2023-10-30',	'2023-12-31',	33,	1,	'2023-11-02 07:27:03.659+00',	'2023-11-02 07:27:03.659+00',	NULL,	2,	5,	1,	1,	33,	'Sujata - Product Strategy',	NULL);

ALTER TABLE ONLY "public"."Attendances" ADD CONSTRAINT "Attendances_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Attendances" ADD CONSTRAINT "Attendances_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Attendances" ADD CONSTRAINT "Attendances_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditInfoEdEmFeedbacks" ADD CONSTRAINT "AuditInfoEdEmFeedbacks_AuditInfoId_fkey" FOREIGN KEY ("AuditInfoId") REFERENCES "AuditInfos"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfoEdEmFeedbacks" ADD CONSTRAINT "AuditInfoEdEmFeedbacks_EdEmFeedbackId_fkey" FOREIGN KEY ("EdEmFeedbackId") REFERENCES "EdEmFeedbacks"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditInfoModifierFeedbacks" ADD CONSTRAINT "AuditInfoModifierFeedbacks_AuditInfoId_fkey" FOREIGN KEY ("AuditInfoId") REFERENCES "AuditInfos"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfoModifierFeedbacks" ADD CONSTRAINT "AuditInfoModifierFeedbacks_ModifierFeedbackId_fkey" FOREIGN KEY ("ModifierFeedbackId") REFERENCES "ModifierFeedbacks"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditInfoPrimDiagFeedbacks" ADD CONSTRAINT "AuditInfoPrimDiagFeedbacks_AuditInfoId_fkey" FOREIGN KEY ("AuditInfoId") REFERENCES "AuditInfos"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfoPrimDiagFeedbacks" ADD CONSTRAINT "AuditInfoPrimDiagFeedbacks_PrimDiagFeedbackId_fkey" FOREIGN KEY ("PrimDiagFeedbackId") REFERENCES "PrimDiagFeedbacks"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditInfoProceduresFeedbacks" ADD CONSTRAINT "AuditInfoProceduresFeedbacks_AuditInfoId_fkey" FOREIGN KEY ("AuditInfoId") REFERENCES "AuditInfos"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfoProceduresFeedbacks" ADD CONSTRAINT "AuditInfoProceduresFeedbacks_ProceduresFeedbackId_fkey" FOREIGN KEY ("ProceduresFeedbackId") REFERENCES "ProceduresFeedbacks"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditInfoSecDiagFeedbacks" ADD CONSTRAINT "AuditInfoSecDiagFeedbacks_AuditInfoId_fkey" FOREIGN KEY ("AuditInfoId") REFERENCES "AuditInfos"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfoSecDiagFeedbacks" ADD CONSTRAINT "AuditInfoSecDiagFeedbacks_SecDiagFeedbackId_fkey" FOREIGN KEY ("SecDiagFeedbackId") REFERENCES "SecDiagFeedbacks"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditInfos" ADD CONSTRAINT "AuditInfos_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfos" ADD CONSTRAINT "AuditInfos_FeedbackTypeId_fkey" FOREIGN KEY ("FeedbackTypeId") REFERENCES "FeedbackTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfos" ADD CONSTRAINT "AuditInfos_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."AuditInfos" ADD CONSTRAINT "AuditInfos_QCStatusId_fkey" FOREIGN KEY ("QCStatusId") REFERENCES "QCStatuses"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."AuditOptions" ADD CONSTRAINT "AuditOptions_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartAuditOptions" ADD CONSTRAINT "ChartAuditOptions_AuditOptionId_fkey" FOREIGN KEY ("AuditOptionId") REFERENCES "AuditOptions"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ChartAuditOptions" ADD CONSTRAINT "ChartAuditOptions_ChartId_fkey" FOREIGN KEY ("ChartId") REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartAudits" ADD CONSTRAINT "ChartAudits_MilestoneId_fkey" FOREIGN KEY ("MilestoneId") REFERENCES "Milestones"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ChartAudits" ADD CONSTRAINT "ChartAudits_SpecialtyId_fkey" FOREIGN KEY ("SpecialtyId") REFERENCES "Specialties"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ChartAudits" ADD CONSTRAINT "ChartAudits_id_fkey" FOREIGN KEY (id) REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartAuditsAuditOptions" ADD CONSTRAINT "ChartAuditsAuditOptions_AuditOptionId_fkey" FOREIGN KEY ("AuditOptionId") REFERENCES "AuditOptions"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartAuditsHoldReasons" ADD CONSTRAINT "ChartAuditsHoldReasons_HoldReasonId_fkey" FOREIGN KEY ("HoldReasonId") REFERENCES "HoldReasons"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartAuditsResponsibleParties" ADD CONSTRAINT "ChartAuditsResponsibleParties_ResponsiblePartyId_fkey" FOREIGN KEY ("ResponsiblePartyId") REFERENCES "ResponsibleParties"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartHoldReasons" ADD CONSTRAINT "ChartHoldReasons_ChartId_fkey" FOREIGN KEY ("ChartId") REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ChartResponsibleParties" ADD CONSTRAINT "ChartResponsibleParties_ChartId_fkey" FOREIGN KEY ("ChartId") REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ChartResponsibleParties" ADD CONSTRAINT "ChartResponsibleParties_ResponsiblePartyId_fkey" FOREIGN KEY ("ResponsiblePartyId") REFERENCES "ResponsibleParties"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_EpicId_fkey" FOREIGN KEY ("EpicId") REFERENCES "Epics"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_MilestoneId_fkey" FOREIGN KEY ("MilestoneId") REFERENCES "Milestones"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_PriorityId_fkey" FOREIGN KEY ("PriorityId") REFERENCES "Priorities"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_ProcessId_fkey" FOREIGN KEY ("ProcessId") REFERENCES "Processes"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_SpecialtyId_fkey" FOREIGN KEY ("SpecialtyId") REFERENCES "Specialties"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_SprintId_fkey" FOREIGN KEY ("SprintId") REFERENCES "Sprints"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_TaskTypeId_fkey" FOREIGN KEY ("TaskTypeId") REFERENCES "TaskTypes"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_WorklistId_fkey" FOREIGN KEY ("WorklistId") REFERENCES "Worklists"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_allocator_id_fkey" FOREIGN KEY (allocator_id) REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Charts" ADD CONSTRAINT "Charts_assignee_id_fkey" FOREIGN KEY (assignee_id) REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."CommentFlags" ADD CONSTRAINT "CommentFlags_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."CommentFlags" ADD CONSTRAINT "CommentFlags_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Comments" ADD CONSTRAINT "Comments_ChartId_fkey" FOREIGN KEY ("ChartId") REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Comments" ADD CONSTRAINT "Comments_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Comments" ADD CONSTRAINT "Comments_CommentFlagId_fkey" FOREIGN KEY ("CommentFlagId") REFERENCES "CommentFlags"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Comments" ADD CONSTRAINT "Comments_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Comments" ADD CONSTRAINT "Comments_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Designations" ADD CONSTRAINT "Designations_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Designations" ADD CONSTRAINT "Designations_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Designations" ADD CONSTRAINT "Designations_RoleId_fkey" FOREIGN KEY ("RoleId") REFERENCES "Roles"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Dispositions" ADD CONSTRAINT "Dispositions_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Dispositions" ADD CONSTRAINT "Dispositions_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."EdEmFeedbacks" ADD CONSTRAINT "EdEmFeedbacks_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."EdEmFeedbacks" ADD CONSTRAINT "EdEmFeedbacks_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."EdEmLevelCodes" ADD CONSTRAINT "EdEmLevelCodes_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."EdEmLevelCodes" ADD CONSTRAINT "EdEmLevelCodes_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Epics" ADD CONSTRAINT "Epics_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Epics" ADD CONSTRAINT "Epics_WorklistId_fkey" FOREIGN KEY ("WorklistId") REFERENCES "Worklists"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."FeedbackTypes" ADD CONSTRAINT "FeedbackTypes_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."FeedbackTypes" ADD CONSTRAINT "FeedbackTypes_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."HoldReasons" ADD CONSTRAINT "HoldReasons_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Leaves" ADD CONSTRAINT "Leaves_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "Users"(id) ON UPDATE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Locations" ADD CONSTRAINT "Locations_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."LogHours" ADD CONSTRAINT "LogHours_assignee_id_fkey" FOREIGN KEY (assignee_id) REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."LogHours" ADD CONSTRAINT "LogHours_task_id_fkey" FOREIGN KEY (task_id) REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Milestones" ADD CONSTRAINT "Milestones_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Milestones" ADD CONSTRAINT "Milestones_ColorId_fkey" FOREIGN KEY ("ColorId") REFERENCES "Colors"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ModifierFeedbacks" ADD CONSTRAINT "ModifierFeedbacks_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ModifierFeedbacks" ADD CONSTRAINT "ModifierFeedbacks_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Notifications" ADD CONSTRAINT "Notifications_user_id_fkey" FOREIGN KEY (user_id) REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."PrimDiagFeedbacks" ADD CONSTRAINT "PrimDiagFeedbacks_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."PrimDiagFeedbacks" ADD CONSTRAINT "PrimDiagFeedbacks_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Priorities" ADD CONSTRAINT "Priorities_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ProceduresFeedbacks" ADD CONSTRAINT "ProceduresFeedbacks_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ProceduresFeedbacks" ADD CONSTRAINT "ProceduresFeedbacks_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Processes" ADD CONSTRAINT "Processes_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Processes" ADD CONSTRAINT "Processes_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ProjectMembers" ADD CONSTRAINT "ProjectMembers_u_id_fkey" FOREIGN KEY (u_id) REFERENCES "Users"(id) ON UPDATE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."ProjectMembers" ADD CONSTRAINT "ProjectMembers_w_id_fkey" FOREIGN KEY (w_id) REFERENCES "Worklists"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."QCStatuses" ADD CONSTRAINT "QCStatuses_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."QCStatuses" ADD CONSTRAINT "QCStatuses_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."ResponsibleParties" ADD CONSTRAINT "ResponsibleParties_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Roles" ADD CONSTRAINT "Roles_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Roles" ADD CONSTRAINT "Roles_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."SecDiagFeedbacks" ADD CONSTRAINT "SecDiagFeedbacks_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."SecDiagFeedbacks" ADD CONSTRAINT "SecDiagFeedbacks_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Specialties" ADD CONSTRAINT "Specialties_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Specialties" ADD CONSTRAINT "Specialties_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."SprintEpics" ADD CONSTRAINT "SprintEpics_EpicId_fkey" FOREIGN KEY ("EpicId") REFERENCES "Epics"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."SprintEpics" ADD CONSTRAINT "SprintEpics_SprintId_fkey" FOREIGN KEY ("SprintId") REFERENCES "Sprints"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Sprints" ADD CONSTRAINT "Sprints_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Sprints" ADD CONSTRAINT "Sprints_WorklistId_fkey" FOREIGN KEY ("WorklistId") REFERENCES "Worklists"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Statuses" ADD CONSTRAINT "Statuses_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Statuses" ADD CONSTRAINT "Statuses_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."TaskTypes" ADD CONSTRAINT "TaskTypes_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."TemplateConfigurations" ADD CONSTRAINT "TemplateConfigurations_TemplateId_fkey" FOREIGN KEY ("TemplateId") REFERENCES "Templates"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Timers" ADD CONSTRAINT "Timers_ChartId_fkey" FOREIGN KEY ("ChartId") REFERENCES "Charts"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Timers" ADD CONSTRAINT "Timers_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Timers" ADD CONSTRAINT "Timers_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Timers" ADD CONSTRAINT "Timers_RoleId_fkey" FOREIGN KEY ("RoleId") REFERENCES "Roles"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Timers" ADD CONSTRAINT "Timers_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."UserClients" ADD CONSTRAINT "UserClients_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."UserClients" ADD CONSTRAINT "UserClients_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."UserLocations" ADD CONSTRAINT "UserLocations_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."UserLocations" ADD CONSTRAINT "UserLocations_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."UserSpecialties" ADD CONSTRAINT "UserSpecialties_SpecialtyId_fkey" FOREIGN KEY ("SpecialtyId") REFERENCES "Specialties"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."UserSpecialties" ADD CONSTRAINT "UserSpecialties_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Users" ADD CONSTRAINT "Users_DesignationId_fkey" FOREIGN KEY ("DesignationId") REFERENCES "Designations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Users" ADD CONSTRAINT "Users_RoleId_fkey" FOREIGN KEY ("RoleId") REFERENCES "Roles"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

ALTER TABLE ONLY "public"."Worklists" ADD CONSTRAINT "Worklists_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES "Clients"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Worklists" ADD CONSTRAINT "Worklists_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES "Locations"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Worklists" ADD CONSTRAINT "Worklists_ProcessId_fkey" FOREIGN KEY ("ProcessId") REFERENCES "Processes"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Worklists" ADD CONSTRAINT "Worklists_SpecialtyId_fkey" FOREIGN KEY ("SpecialtyId") REFERENCES "Specialties"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Worklists" ADD CONSTRAINT "Worklists_WorklistStatusId_fkey" FOREIGN KEY ("WorklistStatusId") REFERENCES "WorklistStatuses"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;
ALTER TABLE ONLY "public"."Worklists" ADD CONSTRAINT "Worklists_changed_by_fkey" FOREIGN KEY (changed_by) REFERENCES "Users"(id) ON UPDATE CASCADE ON DELETE SET NULL NOT DEFERRABLE;

-- 2023-11-08 11:49:03.963665+00
