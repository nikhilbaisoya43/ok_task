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
(1,	'2023-08-16',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(2,	'2023-08-17',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(3,	'2023-08-17',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(4,	'2023-08-18',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(5,	'2023-08-18',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(6,	'2023-08-18',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(7,	'2023-08-19',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(8,	'2023-08-20',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(9,	'2023-08-21',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(10,	'2023-08-21',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(11,	'2023-08-23',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(12,	'2023-08-23',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(13,	'2023-08-24',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(14,	'2023-08-24',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(15,	'2023-08-25',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(16,	'2023-08-29',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(17,	'2023-08-31',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(18,	'2023-09-01',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(19,	'2023-09-04',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(20,	'2023-09-04',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(21,	'2023-09-04',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(22,	'2023-09-05',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(23,	'2023-09-05',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(24,	'2023-09-05',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(25,	'2023-09-06',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(26,	'2023-09-06',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(27,	'2023-09-06',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(28,	'2023-09-06',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(29,	'2023-09-06',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(30,	'2023-09-06',	NULL,	NULL,	NULL,	'f',	30,	NULL,	NULL),
(31,	'2023-09-07',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(32,	'2023-09-07',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(33,	'2023-09-08',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(34,	'2023-09-08',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(35,	'2023-09-10',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(36,	'2023-09-11',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(37,	'2023-09-11',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(38,	'2023-09-11',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(39,	'2023-09-11',	NULL,	NULL,	NULL,	'f',	30,	NULL,	NULL),
(40,	'2023-09-12',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(41,	'2023-09-12',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(42,	'2023-09-12',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(43,	'2023-09-13',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(44,	'2023-09-13',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(45,	'2023-09-13',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(46,	'2023-09-13',	NULL,	NULL,	NULL,	'f',	30,	NULL,	NULL),
(47,	'2023-09-14',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(48,	'2023-09-14',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(49,	'2023-09-14',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(50,	'2023-09-15',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(51,	'2023-09-15',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(52,	'2023-09-16',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(53,	'2023-09-16',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(54,	'2023-09-18',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(55,	'2023-09-18',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(56,	'2023-09-18',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(57,	'2023-09-19',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(58,	'2023-09-19',	NULL,	NULL,	NULL,	'f',	27,	NULL,	NULL),
(59,	'2023-09-19',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(63,	'2023-09-20',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(69,	'2023-09-20',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(66,	'2023-09-20',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(70,	'2023-09-21',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(72,	'2023-09-21',	NULL,	NULL,	NULL,	'f',	34,	NULL,	NULL),
(65,	'2023-09-21',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(71,	'2023-09-21',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(74,	'2023-09-22',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(75,	'2023-09-22',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(73,	'2023-09-22',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(78,	'2023-09-23',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(79,	'2023-09-23',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(76,	'2023-09-23',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(77,	'2023-09-23',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(80,	'2023-09-24',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(82,	'2023-09-25',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(83,	'2023-09-25',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(84,	'2023-09-25',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(81,	'2023-09-25',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(85,	'2023-09-26',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(86,	'2023-09-26',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(87,	'2023-09-26',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(88,	'2023-09-26',	NULL,	NULL,	NULL,	'f',	35,	NULL,	NULL),
(89,	'2023-09-26',	NULL,	NULL,	NULL,	'f',	36,	NULL,	NULL),
(90,	'2023-09-26',	NULL,	NULL,	NULL,	'f',	1,	NULL,	NULL),
(91,	'2023-09-27',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(93,	'2023-09-27',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(94,	'2023-09-27',	NULL,	NULL,	NULL,	'f',	35,	NULL,	NULL),
(92,	'2023-09-27',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(95,	'2023-09-28',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(97,	'2023-09-28',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL),
(98,	'2023-09-28',	NULL,	NULL,	NULL,	'f',	35,	NULL,	NULL),
(96,	'2023-09-28',	NULL,	NULL,	NULL,	'f',	36,	NULL,	NULL),
(99,	'2023-09-29',	NULL,	NULL,	NULL,	'f',	36,	NULL,	NULL),
(100,	'2023-09-29',	NULL,	NULL,	NULL,	'f',	28,	NULL,	NULL),
(101,	'2023-09-29',	NULL,	NULL,	NULL,	'f',	35,	NULL,	NULL),
(102,	'2023-09-29',	NULL,	NULL,	NULL,	'f',	29,	NULL,	NULL),
(103,	'2023-09-29',	NULL,	NULL,	NULL,	'f',	33,	NULL,	NULL);

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

INSERT INTO "AuditOptions" ("id", "audit_opt", "createdAt", "updatedAt", "deletedAt", "ClientId") VALUES
(1,	'PET Scan',	'2023-08-16 08:47:10.555+00',	'2023-08-16 08:47:10.555+00',	NULL,	1),
(2,	'Mammo Chart',	'2023-08-16 08:47:10.555+00',	'2023-08-16 08:47:10.555+00',	NULL,	1),
(3,	'I&I',	'2023-08-16 08:47:10.555+00',	'2023-08-16 08:47:10.555+00',	NULL,	1),
(4,	'None',	'2023-08-16 08:47:10.555+00',	'2023-08-16 08:47:10.555+00',	NULL,	1);

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
    CONSTRAINT "ChartAudits_unique_task_no_key" UNIQUE ("unique_task_no"),
    CONSTRAINT "ChartAudits_unique_task_no_key1" UNIQUE ("unique_task_no"),
    CONSTRAINT "ChartAudits_unique_task_no_key2" UNIQUE ("unique_task_no"),
    CONSTRAINT "ChartAudits_unique_task_no_key3" UNIQUE ("unique_task_no"),
    CONSTRAINT "ChartAudits_unique_task_no_key4" UNIQUE ("unique_task_no"),
    CONSTRAINT "ChartAudits_unique_task_no_key5" UNIQUE ("unique_task_no"),
    CONSTRAINT "ChartAudits_unique_task_no_key6" UNIQUE ("unique_task_no")
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

INSERT INTO "ChartHoldReasons" ("id", "ChartId", "HoldReasonId", "createdAt", "updatedAt") VALUES
(22,	384,	1,	'2023-09-23 10:31:51.344+00',	'2023-09-23 10:31:51.344+00');

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
(380,	2,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 07:14:44.402+00',	'2023-09-24 18:41:33.836+00',	27,	28,	'T-0002',	'2',	'yy',	1,	2,	4,	NULL,	3,	292,	2,	29,	'2023-09-23 09:28:44.319+00',	NULL,	NULL,	NULL,	NULL),
(388,	8,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 10:21:11.38+00',	'2023-09-23 10:21:11.38+00',	28,	28,	'T-0008',	'21',	'Test',	1,	2,	1,	NULL,	3,	292,	2,	28,	'2023-09-25 04:52:48.465+00',	NULL,	NULL,	NULL,	NULL),
(384,	4,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 10:03:35.564+00',	'2023-09-23 11:51:08.719+00',	28,	28,	'T-0004',	'21',	'Testing',	1,	2,	1,	NULL,	3,	292,	2,	28,	'2023-09-25 05:35:15.815+00',	NULL,	NULL,	NULL,	NULL),
(377,	2,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 07:13:16.777+00',	'2023-09-25 06:04:07.748+00',	29,	28,	'T-0002',	'Backend',	NULL,	1,	3,	4,	NULL,	3,	291,	2,	29,	NULL,	NULL,	NULL,	NULL,	NULL),
(385,	5,	'2023-09-01',	'2023-09-30',	28,	33,	'2023-09-23 10:04:57.016+00',	'2023-09-26 06:02:11.042+00',	28,	28,	'T-0005',	'34',	'Test',	1,	2,	2,	NULL,	3,	292,	2,	28,	NULL,	NULL,	NULL,	NULL,	NULL),
(403,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 16:47:50.85+00',	'2023-09-25 06:04:08.812+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	5,	4,	NULL,	2,	306,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(381,	3,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 07:14:44.726+00',	'2023-09-23 09:14:07.32+00',	28,	28,	'T-0003',	'3',	NULL,	1,	2,	4,	NULL,	3,	292,	2,	28,	'2023-09-23 09:41:45.509+00',	NULL,	NULL,	NULL,	NULL),
(378,	3,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 07:13:17.057+00',	'2023-09-23 09:13:11.653+00',	29,	28,	'T-0003',	'Deployment',	'Hello',	1,	2,	4,	NULL,	3,	291,	2,	29,	'2023-09-23 09:42:29.733+00',	NULL,	NULL,	NULL,	NULL),
(383,	3,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 09:58:35.2+00',	'2023-09-23 09:58:35.2+00',	28,	28,	'T-0003',	'34',	'Test',	1,	2,	1,	NULL,	3,	292,	2,	28,	'2023-09-23 10:59:36.192+00',	NULL,	NULL,	NULL,	NULL),
(418,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:25:33.633+00',	'2023-09-24 17:25:33.633+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	322,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(419,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:26:29.726+00',	'2023-09-24 17:26:29.726+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	323,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(420,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:28:08.667+00',	'2023-09-24 17:28:08.667+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	324,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(421,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:29:43.146+00',	'2023-09-24 17:29:43.146+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	325,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(422,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:29:46.911+00',	'2023-09-24 17:29:46.911+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	326,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(423,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:29:48.194+00',	'2023-09-24 17:29:48.194+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	327,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(424,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:29:55.918+00',	'2023-09-25 06:04:18.578+00',	34,	28,	'T-0001',	'q',	NULL,	2,	7,	4,	NULL,	2,	328,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(426,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:29:58.728+00',	'2023-09-25 06:04:22.34+00',	34,	28,	'T-0001',	'q',	NULL,	2,	5,	4,	NULL,	2,	330,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(409,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:13:33.793+00',	'2023-09-25 06:04:29.695+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	3,	4,	NULL,	2,	312,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(407,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 16:59:21.618+00',	'2023-09-25 06:04:31.045+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	4,	4,	NULL,	2,	310,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(404,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 16:50:26.631+00',	'2023-09-25 11:52:18.785+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	5,	4,	NULL,	2,	307,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(387,	7,	'2023-09-01',	'2023-09-30',	28,	33,	'2023-09-23 10:08:28.819+00',	'2023-09-25 13:00:35.079+00',	33,	33,	'T-0007',	'4',	'Test',	1,	2,	1,	NULL,	3,	292,	2,	28,	'2023-09-23 13:09:28.587+00',	NULL,	NULL,	NULL,	NULL),
(410,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:14:45.802+00',	'2023-09-25 13:06:30.459+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	4,	4,	NULL,	2,	314,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(412,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:18:00.867+00',	'2023-09-26 06:39:52.08+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	1,	4,	NULL,	2,	316,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(411,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:15:09.383+00',	'2023-09-25 13:06:34.34+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	7,	4,	NULL,	2,	315,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(382,	2,	'2001-09-20',	'2030-09-20',	28,	33,	'2023-09-23 09:47:04.212+00',	'2023-09-26 06:42:00.64+00',	28,	29,	'T-0002',	'Q12',	'Test',	1,	3,	2,	NULL,	3,	292,	2,	28,	NULL,	NULL,	NULL,	NULL,	NULL),
(425,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:29:56.813+00',	'2023-09-26 05:56:50.18+00',	34,	28,	'T-0001',	'q',	NULL,	2,	3,	4,	NULL,	2,	329,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(406,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 16:56:34.868+00',	'2023-09-26 05:56:57.511+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	5,	4,	NULL,	2,	309,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(408,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:04:16.144+00',	'2023-09-26 06:42:12.492+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	5,	4,	NULL,	2,	311,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(413,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:19:14.709+00',	'2023-09-26 06:55:25.451+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	6,	4,	NULL,	2,	317,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(414,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:20:59.889+00',	'2023-09-26 12:38:23.975+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	5,	4,	NULL,	2,	318,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(415,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:21:08.106+00',	'2023-09-26 18:19:00.968+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	4,	4,	NULL,	2,	319,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(416,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:23:05.1+00',	'2023-09-26 18:23:22.557+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	5,	4,	NULL,	2,	320,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(417,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:24:36.52+00',	'2023-09-26 18:38:57.203+00',	NULL,	28,	'T-0001',	'q',	NULL,	2,	6,	4,	NULL,	2,	321,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(405,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 16:51:06.431+00',	'2023-09-26 18:38:59.151+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	1,	4,	NULL,	2,	308,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(386,	6,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 10:07:23.962+00',	'2023-09-26 18:55:32.207+00',	28,	28,	'T-0006',	'21',	'Test',	1,	6,	1,	NULL,	3,	292,	2,	28,	NULL,	NULL,	NULL,	NULL,	NULL),
(389,	9,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-23 10:23:07.943+00',	'2023-09-26 19:30:36.62+00',	28,	28,	'T-0009',	'Alogo',	'This is alogo and its task_type is 1',	1,	6,	1,	NULL,	3,	292,	2,	28,	NULL,	NULL,	NULL,	NULL,	NULL),
(427,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:33:08.251+00',	'2023-09-24 17:33:08.251+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	331,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(428,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:37:46.758+00',	'2023-09-24 17:37:46.758+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	332,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(429,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:38:58.775+00',	'2023-09-24 17:38:58.775+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	333,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(430,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:39:23.119+00',	'2023-09-24 17:39:23.119+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	334,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(431,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:39:53.427+00',	'2023-09-24 17:39:53.427+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	335,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(432,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:40:56.087+00',	'2023-09-24 17:40:56.087+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	336,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(433,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:41:43.059+00',	'2023-09-24 17:41:43.059+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	337,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(434,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:43:11.85+00',	'2023-09-24 17:43:11.85+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	338,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(435,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:44:15.138+00',	'2023-09-24 17:44:15.138+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	339,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(436,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-24 17:52:28.551+00',	'2023-09-24 17:52:28.551+00',	34,	28,	'T-0001',	'q',	NULL,	2,	2,	4,	NULL,	2,	340,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(437,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-25 04:29:14.13+00',	'2023-09-25 04:29:14.13+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	1,	4,	NULL,	4,	341,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(438,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-25 04:30:14.838+00',	'2023-09-25 04:30:14.838+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	1,	4,	NULL,	4,	342,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(439,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-25 04:32:12.999+00',	'2023-09-25 04:32:12.999+00',	NULL,	28,	'T-0001',	'1',	NULL,	2,	1,	4,	NULL,	4,	343,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(440,	2,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-25 04:32:13.258+00',	'2023-09-25 04:32:13.258+00',	NULL,	28,	'T-0002',	'2',	NULL,	2,	1,	4,	NULL,	4,	343,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(441,	3,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-25 04:32:13.425+00',	'2023-09-25 04:32:13.425+00',	NULL,	28,	'T-0003',	'3',	NULL,	2,	1,	4,	NULL,	4,	343,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(442,	1,	'2023-09-25',	'2023-10-12',	33,	33,	'2023-09-25 12:33:38.491+00',	'2023-09-25 12:33:38.491+00',	28,	33,	'T-0001',	'Initial Evaluation',	NULL,	1,	2,	4,	NULL,	3,	344,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(443,	1,	'2023-09-25',	'2023-10-12',	33,	33,	'2023-09-25 12:33:54.443+00',	'2023-09-25 12:33:54.443+00',	28,	33,	'T-0001',	'Initial Evaluation',	NULL,	1,	2,	4,	NULL,	3,	345,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(444,	1,	'2023-09-25',	'2023-10-12',	33,	33,	'2023-09-25 12:35:14.897+00',	'2023-09-25 12:35:14.897+00',	28,	33,	'T-0001',	'Initial Evaluation',	NULL,	1,	2,	4,	NULL,	3,	346,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(451,	3,	'2023-09-03',	'2023-09-06',	33,	33,	'2023-09-27 07:03:43.057+00',	'2023-09-27 09:11:47.216+00',	33,	33,	'T-0003',	'Create CRUD APIs for Epics',	'',	1,	3,	3,	1,	3,	347,	1,	33,	NULL,	'16:00',	NULL,	1,	8),
(449,	1,	'2023-09-01',	'2023-09-02',	33,	33,	'2023-09-27 07:02:45.815+00',	'2023-09-27 09:12:19.467+00',	33,	33,	'T-0001',	'Setup Socket for notification',	'',	1,	2,	2,	NULL,	3,	347,	1,	33,	NULL,	'04:00',	NULL,	1,	5),
(456,	8,	'2023-09-21',	'2023-09-22',	33,	33,	'2023-09-27 07:06:38.829+00',	'2023-09-27 09:12:27.976+00',	33,	33,	'T-0008',	'Email Notification',	'',	1,	2,	2,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	5),
(447,	4,	'2023-09-25',	'2023-09-26',	33,	33,	'2023-09-25 12:40:53.279+00',	'2023-09-25 12:50:36.063+00',	34,	33,	'T-0004',	'Project setup',	'',	1,	2,	2,	NULL,	3,	346,	2,	34,	NULL,	NULL,	NULL,	NULL,	NULL),
(455,	7,	'2023-09-19',	'2023-09-20',	33,	33,	'2023-09-27 07:06:19.393+00',	'2023-09-27 09:12:40.328+00',	33,	33,	'T-0007',	'Task assignment notification',	'',	1,	2,	2,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	5),
(446,	3,	'2023-09-25',	'2023-10-12',	33,	33,	'2023-09-25 12:35:24.358+00',	'2023-09-25 13:01:46.602+00',	33,	33,	'T-0003',	'Tertiary Evaluation',	NULL,	1,	2,	4,	NULL,	3,	346,	2,	33,	NULL,	NULL,	1,	NULL,	NULL),
(454,	6,	'2023-09-18',	'2023-09-21',	33,	33,	'2023-09-27 07:05:32.205+00',	'2023-09-27 09:12:50.05+00',	29,	33,	'T-0006',	'Add filter to tasks in Kanban board',	'',	1,	2,	2,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	7),
(453,	5,	'2023-09-19',	'2023-09-21',	33,	33,	'2023-09-27 07:05:04.437+00',	'2023-09-27 09:13:00.789+00',	28,	33,	'T-0005',	'Project restrictions for Manager Role',	'',	1,	2,	2,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	6),
(463,	12,	'2023-10-04',	'2023-10-06',	33,	33,	'2023-09-27 09:33:50.775+00',	'2023-09-27 09:36:57.485+00',	33,	33,	'T-0012',	'User Login - Sign in form / other SSO',	'',	1,	1,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	3,	4),
(464,	13,	'2023-10-07',	'2023-10-08',	33,	33,	'2023-09-27 09:34:17.906+00',	'2023-09-27 09:37:20.739+00',	29,	33,	'T-0013',	'User Creation in Application',	'',	1,	2,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	4),
(452,	4,	'2023-09-11',	'2023-09-13',	33,	33,	'2023-09-27 07:04:05.295+00',	'2023-09-27 09:13:52.321+00',	33,	33,	'T-0004',	'Create CRUD APIs for Sprints',	'',	1,	2,	3,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	8),
(448,	5,	'2023-09-26',	'2023-09-28',	33,	33,	'2023-09-25 12:48:37.705+00',	'2023-09-26 05:50:01.041+00',	33,	33,	'T-0005',	'Database setup',	'',	1,	2,	3,	NULL,	3,	346,	2,	33,	NULL,	NULL,	NULL,	NULL,	NULL),
(450,	2,	'2023-09-03',	'2023-09-04',	33,	33,	'2023-09-27 07:03:04.107+00',	'2023-09-27 09:29:48.43+00',	33,	33,	'T-0002',	'Setup nodemailer for notification',	'',	1,	2,	2,	NULL,	3,	347,	1,	33,	NULL,	'06:30',	NULL,	1,	5),
(445,	2,	'2023-09-25',	'2023-10-12',	33,	33,	'2023-09-25 12:35:20.159+00',	'2023-09-27 05:10:55.614+00',	33,	33,	'T-0002',	'Secondary Evaluations',	NULL,	1,	2,	4,	1,	3,	346,	2,	33,	NULL,	NULL,	1,	NULL,	NULL),
(458,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-27 07:07:45.733+00',	'2023-09-27 07:07:45.733+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	1,	4,	NULL,	4,	348,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(459,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-27 07:07:47.804+00',	'2023-09-27 07:07:47.804+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	1,	4,	NULL,	4,	349,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(460,	1,	'2023-09-01',	'2023-09-30',	28,	28,	'2023-09-27 07:10:24.107+00',	'2023-09-27 07:10:24.107+00',	NULL,	28,	'T-0001',	'1',	NULL,	1,	1,	4,	NULL,	3,	350,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
(461,	10,	'2023-09-30',	'2023-10-02',	33,	33,	'2023-09-27 09:32:45.537+00',	'2023-09-27 09:37:49.106+00',	33,	33,	'T-0010',	'Task Activity Log',	'',	1,	2,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	1),
(462,	11,	'2023-09-30',	'2023-10-03',	33,	33,	'2023-09-27 09:33:11.927+00',	'2023-09-27 09:38:02.375+00',	29,	33,	'T-0011',	'Send Notification on missing out time logging',	'',	1,	2,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	5),
(457,	9,	'2023-09-23',	'2023-09-26',	33,	33,	'2023-09-27 07:07:13.888+00',	'2023-09-27 09:43:44.467+00',	33,	33,	'T-0009',	'UI design for EPICs and Sprints',	'',	1,	3,	1,	NULL,	3,	347,	1,	33,	NULL,	'24:00',	NULL,	1,	8),
(466,	15,	'2023-10-17',	'2023-10-27',	33,	33,	'2023-09-27 12:30:15.032+00',	'2023-09-27 12:30:15.032+00',	33,	33,	'T-0015',	'Client based Application features and data',	'',	1,	2,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	3,	6),
(467,	16,	'2023-09-11',	'2023-09-15',	33,	33,	'2023-09-27 12:35:50.6+00',	'2023-09-27 12:35:50.6+00',	28,	33,	'T-0016',	'Implement Task types ',	'',	1,	2,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	1,	1),
(468,	1,	'2023-09-20',	'2023-09-22',	36,	36,	'2023-09-29 04:51:33.997+00',	'2023-09-29 04:51:33.997+00',	36,	36,	'T-0001',	'Initial Evals',	'',	1,	2,	2,	NULL,	3,	352,	1,	36,	NULL,	NULL,	NULL,	NULL,	NULL),
(465,	14,	'2023-10-09',	'2023-10-13',	33,	33,	'2023-09-27 09:34:54.951+00',	'2023-09-29 04:55:02.09+00',	33,	33,	'T-0014',	'Admin Role - Implement SaaS model',	'',	1,	4,	4,	NULL,	3,	347,	1,	33,	NULL,	NULL,	NULL,	3,	6);

CREATE SEQUENCE "Clients_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Clients" (
    "id" integer DEFAULT nextval('"Clients_id_seq"') NOT NULL,
    "client_name" character varying(255) NOT NULL,
    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Clients" ("id", "client_name") VALUES
(1,	'Link'),
(2,	'Sujata');

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

INSERT INTO "Comments" ("id", "parent_id", "comment_msg", "comment_timestamp", "LocationId", "ClientId", "ChartId", "UserId", "CommentFlagId") VALUES
(1,	NULL,	'Task 01 saved',	'2023-08-18 05:23:42+00',	NULL,	1,	NULL,	27,	3),
(2,	NULL,	'test',	'2023-08-18 08:36:43+00',	NULL,	1,	NULL,	1,	3),
(3,	NULL,	'test',	'2023-08-18 10:00:28+00',	NULL,	2,	NULL,	1,	3),
(4,	NULL,	'Dev completed',	'2023-08-21 06:06:07+00',	NULL,	2,	NULL,	27,	3),
(6,	NULL,	'Added task name and description',	'2023-08-25 06:35:20+00',	NULL,	2,	NULL,	27,	3),
(7,	NULL,	'Added Task #',	'2023-08-25 06:42:38+00',	NULL,	2,	NULL,	27,	3),
(8,	NULL,	'Needs Description @Admin',	'2023-08-25 06:44:12+00',	NULL,	2,	NULL,	27,	3),
(9,	NULL,	'Milestone changed',	'2023-08-25 06:48:10+00',	NULL,	2,	NULL,	27,	3),
(10,	NULL,	'Adding comment for logs',	'2023-08-25 06:50:05+00',	NULL,	2,	NULL,	27,	3),
(11,	NULL,	'Log formats changed',	'2023-08-25 06:54:28+00',	NULL,	2,	NULL,	27,	3),
(12,	NULL,	'Comments added for json formatting of logs',	'2023-08-25 06:55:40+00',	NULL,	2,	NULL,	27,	3),
(5,	NULL,	'Ops Evaluated. Forwarded to QA.',	'2023-08-25 05:22:14+00',	NULL,	1,	NULL,	27,	3),
(19,	NULL,	'Hi',	'2023-09-05 09:39:01+00',	NULL,	2,	NULL,	27,	1),
(20,	19,	'Okay',	'2023-09-05 09:39:08+00',	NULL,	2,	NULL,	27,	3),
(14,	NULL,	'COmment 2',	'2023-09-04 07:11:00+00',	NULL,	1,	NULL,	27,	3),
(15,	NULL,	'Comment 3',	'2023-09-04 07:11:04+00',	NULL,	1,	NULL,	27,	3),
(16,	NULL,	'Comment 4',	'2023-09-04 07:11:07+00',	NULL,	1,	NULL,	27,	3),
(17,	NULL,	'Comment 5',	'2023-09-04 07:11:10+00',	NULL,	1,	NULL,	27,	3),
(13,	NULL,	'Comment 1',	'2023-09-04 07:10:58+00',	NULL,	1,	NULL,	27,	1),
(18,	13,	'Accept',	'2023-09-04 07:19:41+00',	NULL,	1,	NULL,	27,	3),
(21,	NULL,	'Task viewed',	'2023-09-26 05:53:26+00',	NULL,	2,	448,	33,	3),
(22,	NULL,	'Task created and assigned to Vishesh',	'2023-09-27 12:39:26+00',	NULL,	1,	467,	33,	3);

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
(1,	'Medical Coder',	1,	1,	3),
(2,	'QA',	1,	1,	4),
(3,	'Team Lead',	1,	1,	2),
(4,	'Sr. Manager',	1,	1,	1),
(5,	'Manager',	1,	1,	1),
(6,	'VP',	1,	1,	NULL),
(7,	'CEO',	1,	1,	NULL),
(8,	'Senior coder',	1,	1,	3),
(9,	'Medical Coder',	1,	1,	3),
(10,	'Senior Quality Analyst',	1,	1,	4),
(11,	'Assistant Manager',	1,	1,	1),
(12,	'Admin',	1,	1,	5);

CREATE SEQUENCE "Dispositions_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Dispositions" (
    "id" integer DEFAULT nextval('"Dispositions_id_seq"') NOT NULL,
    "disposition_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Dispositions_disposition_name_key" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key1" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key2" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key3" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key4" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key5" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key6" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key7" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_disposition_name_key8" UNIQUE ("disposition_name"),
    CONSTRAINT "Dispositions_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Dispositions" ("id", "disposition_name", "LocationId", "ClientId") VALUES
(1,	'Home',	1,	1),
(2,	'Transfer',	1,	1),
(3,	'AMA',	1,	1),
(4,	'Facility',	1,	1),
(5,	'Nursing Home',	1,	1);

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

INSERT INTO "EdEmFeedbacks" ("id", "feedback_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'Overcoded',	'2023-08-16 08:47:10.901+00',	'2023-08-16 08:47:10.901+00',	NULL,	1,	1),
(2,	'Undercoded',	'2023-08-16 08:47:10.901+00',	'2023-08-16 08:47:10.901+00',	NULL,	1,	1),
(3,	'Missed EM',	'2023-08-16 08:47:10.901+00',	'2023-08-16 08:47:10.901+00',	NULL,	1,	1),
(4,	'EM Category',	'2023-08-16 08:47:10.901+00',	'2023-08-16 08:47:10.901+00',	NULL,	1,	1),
(5,	'Client Guideline not followed',	'2023-08-16 08:47:10.901+00',	'2023-08-16 08:47:10.901+00',	NULL,	1,	1),
(6,	'Other',	'2023-08-16 08:47:10.901+00',	'2023-08-16 08:47:10.901+00',	NULL,	1,	1);

CREATE SEQUENCE "EdEmLevelCodes_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."EdEmLevelCodes" (
    "id" integer DEFAULT nextval('"EdEmLevelCodes_id_seq"') NOT NULL,
    "level" integer NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "EdEmLevelCodes_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "EdEmLevelCodes" ("id", "level", "LocationId", "ClientId") VALUES
(1,	0,	1,	1),
(2,	1,	1,	1);

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
(3,	'Default Epic',	'2023-09-27 06:48:16.075+00',	'2023-09-27 06:48:16.075+00',	NULL,	347,	NULL,	NULL),
(1,	'Task Management',	'2023-09-26 11:06:10.266+00',	'2023-09-26 11:06:10.266+00',	NULL,	347,	NULL,	NULL),
(4,	'User Management',	'2023-09-26 11:06:10.266+00',	'2023-09-26 11:06:10.266+00',	NULL,	347,	NULL,	NULL),
(6,	'Permissions and Roles',	'2023-09-26 11:06:10.266+00',	'2023-09-26 11:06:10.266+00',	NULL,	347,	NULL,	NULL),
(7,	'Kanban Board',	'2023-09-26 11:06:10.266+00',	'2023-09-26 11:06:10.266+00',	NULL,	347,	NULL,	NULL),
(8,	'EPIC and Sprint Management',	'2023-09-26 11:06:10.266+00',	'2023-09-26 11:06:10.266+00',	NULL,	347,	NULL,	NULL),
(5,	'Notification Management',	'2023-09-26 11:06:10.266+00',	'2023-09-26 11:06:10.266+00',	NULL,	347,	NULL,	NULL),
(24,	'harsh2 updated',	'2023-09-28 05:05:13.209+00',	'2023-09-28 05:48:02.241+00',	'2023-09-28 06:54:07.735+00',	292,	NULL,	NULL),
(22,	'harsh dubara',	'2023-09-28 05:02:03.055+00',	'2023-09-28 07:09:03.189+00',	'2023-09-28 07:09:20.316+00',	292,	NULL,	NULL),
(25,	'sample name',	'2023-09-28 07:10:57.592+00',	'2023-09-28 07:10:57.592+00',	NULL,	292,	NULL,	NULL),
(20,	'harsh2 updated',	'2023-09-28 05:01:47.685+00',	'2023-09-28 05:48:02.241+00',	'2023-09-28 07:16:44.731+00',	292,	NULL,	NULL),
(26,	'Default Epic',	'2023-09-28 08:27:47.892+00',	'2023-09-28 08:27:47.892+00',	NULL,	352,	NULL,	NULL),
(28,	'sample name',	'2023-09-28 10:12:24.225+00',	'2023-09-28 10:12:24.225+00',	NULL,	352,	'this is some description of the current epic, which needs to passed along with the request',	NULL),
(27,	'harsh 2.0',	'2023-09-28 09:19:09.079+00',	'2023-09-28 10:13:24.524+00',	NULL,	352,	'random desc2',	NULL),
(29,	'harsh 2.022',	'2023-09-28 10:39:12.921+00',	'2023-09-28 12:34:24.245+00',	'2023-09-28 12:37:30.463+00',	352,	'random desc2',	36),
(30,	'sample 1',	'2023-09-28 12:43:39.165+00',	'2023-09-28 12:43:39.165+00',	NULL,	352,	'this is some description of the current epic, which needs to passed along with the request',	36),
(31,	'harsh 2.022',	'2023-09-28 12:43:42.735+00',	'2023-09-28 12:45:00.47+00',	NULL,	352,	'random desc2',	36),
(33,	'sample 4',	'2023-09-29 04:23:34.336+00',	'2023-09-29 04:23:34.336+00',	NULL,	352,	'this is some description of the current epic, which needs to passed along with the request',	36),
(32,	'name changed',	'2023-09-28 12:43:47.09+00',	'2023-09-29 05:28:10.863+00',	NULL,	352,	'this is some description of the current epic, which needs to passed along with the request',	36);

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

INSERT INTO "Leaves" ("id", "user_id", "reason", "from_date", "to_date", "all_day", "createdAt", "updatedAt") VALUES
(1,	33,	'Leave',	'2023-10-11',	'2023-10-19',	't',	'2023-09-26 06:01:17.307+00',	'2023-09-26 06:01:17.307+00');

CREATE SEQUENCE "Locations_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Locations" (
    "id" integer DEFAULT nextval('"Locations_id_seq"') NOT NULL,
    "loc_name" character varying(255) NOT NULL,
    "ClientId" integer,
    CONSTRAINT "Locations_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Locations" ("id", "loc_name", "ClientId") VALUES
(2,	'Eastern Ohio Regional Hospital',	1),
(3,	'Astria',	1),
(1,	'Mind IT, Delhi',	1),
(4,	'nn',	1),
(5,	'Delhi',	1),
(6,	'Delhi',	2);

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
(9,	'02:45',	'2023-09-12',	'Added initial code for index page',	'2023-09-13 09:46:50.788+00',	'2023-09-13 09:47:41.071+00',	NULL,	27,	NULL),
(1,	'03:30',	'2023-09-13',	'Initial eval completed 40%',	'2023-09-13 06:27:48.555+00',	'2023-09-13 06:27:48.555+00',	NULL,	27,	NULL),
(3,	'01:50',	'2023-09-12',	'Eval documents consolidated and updated. Sent for further processing.',	'2023-09-13 06:51:57.144+00',	'2023-09-13 06:51:57.144+00',	NULL,	30,	NULL),
(8,	'03:00',	'2023-09-12',	'',	'2023-09-13 08:29:00.607+00',	'2023-09-13 08:29:00.607+00',	NULL,	27,	NULL),
(2,	'02:30',	'2023-09-14',	'Initial evaluation documents received and sorted.',	'2023-09-13 06:44:00.4+00',	'2023-09-13 08:36:49.32+00',	NULL,	27,	NULL),
(7,	'01:00',	'2023-09-12',	'Assigned and filled Task details.',	'2023-09-13 07:22:44.765+00',	'2023-09-13 07:22:44.765+00',	NULL,	30,	NULL),
(10,	'04:00',	'2023-09-15',	'Tasks coded as required.',	'2023-09-15 07:28:19.497+00',	'2023-09-15 07:28:19.497+00',	NULL,	27,	NULL),
(4,	'00:45',	'2023-09-11',	'Task requirements documented.',	'2023-09-13 06:54:42.02+00',	'2023-09-13 06:54:42.02+00',	NULL,	30,	NULL),
(5,	'22:34',	'2023-09-13',	'',	'2023-09-13 07:12:38.097+00',	'2023-09-13 07:12:38.097+00',	NULL,	30,	NULL),
(6,	'07:30',	'2023-09-05',	'',	'2023-09-13 07:16:59.476+00',	'2023-09-13 07:16:59.476+00',	NULL,	30,	NULL),
(11,	'01:00',	'2023-09-15',	'Task evaluation completed',	'2023-09-15 09:09:48.471+00',	'2023-09-15 09:09:48.471+00',	NULL,	27,	NULL),
(12,	'01:00',	'2023-09-15',	'',	'2023-09-15 09:23:47.006+00',	'2023-09-15 09:23:47.006+00',	NULL,	27,	NULL),
(13,	'03:25',	'2023-09-15',	'Task completed.',	'2023-09-15 09:26:14.603+00',	'2023-09-15 09:26:14.603+00',	NULL,	27,	NULL),
(19,	'08:00',	'2023-09-20',	'Merge issues resolved',	'2023-09-20 12:53:02.533+00',	'2023-09-20 12:53:02.533+00',	NULL,	28,	NULL),
(17,	'08:00',	'2023-09-20',	'Bug fixes',	'2023-09-20 12:29:33.075+00',	'2023-09-20 12:29:33.075+00',	NULL,	28,	NULL),
(18,	'08:00',	'2023-09-19',	'UI features added.',	'2023-09-20 12:30:20.9+00',	'2023-09-20 12:30:27.931+00',	NULL,	28,	NULL),
(14,	'08:00',	'2023-09-19',	'',	'2023-09-19 09:39:25.517+00',	'2023-09-19 09:39:40.455+00',	NULL,	28,	NULL),
(16,	'02:40',	'2023-09-20',	'Added requirement and eval information',	'2023-09-20 06:27:35.174+00',	'2023-09-20 06:27:35.174+00',	NULL,	33,	NULL),
(15,	'04:00',	'2023-09-19',	'First phase of setup complete',	'2023-09-19 09:45:00.998+00',	'2023-09-19 09:45:00.998+00',	NULL,	27,	NULL),
(22,	'06:00',	'2023-09-22',	'',	'2023-09-22 13:10:51.897+00',	'2023-09-22 13:10:51.897+00',	NULL,	33,	NULL),
(20,	'03:45',	'2023-09-22',	'Created and shared algorithms and api design plan.',	'2023-09-22 12:37:15.322+00',	'2023-09-22 12:40:50.831+00',	NULL,	33,	NULL),
(21,	'00:45',	'2023-09-22',	'Evaluation meeting',	'2023-09-22 12:41:16.57+00',	'2023-09-22 12:41:16.57+00',	NULL,	33,	NULL),
(23,	'02:00',	'2023-09-26',	'',	'2023-09-26 05:54:27.593+00',	'2023-09-26 05:54:47.857+00',	NULL,	33,	447);

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
(3,	'Dev in Progress',	1,	NULL,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(8,	'Task Assigned',	NULL,	1,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(9,	'Task Deleted',	NULL,	1,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(10,	'Task Reassigned',	NULL,	1,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(16,	'1',	NULL,	2,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(17,	'2',	NULL,	1,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(18,	'3',	NULL,	6,	'2023-09-27 11:08:51.072698+00',	'2023-09-27 11:08:51.121256+00',	NULL),
(22,	'Backlog',	NULL,	5,	'2023-09-27 11:16:10.906395+00',	'2023-09-27 11:16:10.906395+00',	NULL),
(23,	'1',	NULL,	4,	'2023-09-27 18:03:46.032121+00',	'2023-09-27 18:03:46.032121+00',	NULL),
(24,	'1',	NULL,	1,	'2023-09-27 18:22:55.083829+00',	'2023-09-27 18:22:55.083829+00',	NULL),
(25,	'',	NULL,	NULL,	'2023-09-27 18:22:55.083829+00',	'2023-09-27 18:22:55.083829+00',	NULL),
(26,	'',	NULL,	NULL,	'2023-09-27 18:22:55.083829+00',	'2023-09-27 18:22:55.083829+00',	NULL),
(27,	'1',	NULL,	2,	'2023-09-28 04:27:42.363074+00',	'2023-09-28 04:27:42.363074+00',	NULL),
(28,	'2',	NULL,	6,	'2023-09-28 04:27:42.363074+00',	'2023-09-28 04:27:42.363074+00',	NULL),
(29,	'Backlog',	NULL,	3,	'2023-09-28 10:32:54.825879+00',	'2023-09-28 10:32:54.825879+00',	NULL),
(30,	'Done',	NULL,	5,	'2023-09-28 10:32:54.825879+00',	'2023-09-28 10:32:54.825879+00',	NULL),
(31,	'Backlog',	NULL,	5,	'2023-09-28 10:47:57.448877+00',	'2023-09-28 10:47:57.448877+00',	NULL),
(32,	'Backlog',	NULL,	5,	'2023-09-28 10:49:28.659608+00',	'2023-09-28 10:49:28.659608+00',	NULL),
(33,	'Dev Done',	NULL,	1,	'2023-09-28 10:49:28.659608+00',	'2023-09-28 10:49:28.659608+00',	NULL),
(34,	'Dev Success',	NULL,	4,	'2023-09-28 10:49:28.659608+00',	'2023-09-28 10:49:28.659608+00',	NULL),
(35,	'Backlog',	NULL,	5,	'2023-09-28 10:49:36.783281+00',	'2023-09-28 10:49:36.783281+00',	NULL),
(36,	'Dev Done',	NULL,	1,	'2023-09-28 10:49:36.783281+00',	'2023-09-28 10:49:36.783281+00',	NULL),
(37,	'Dev Success',	NULL,	4,	'2023-09-28 10:49:36.783281+00',	'2023-09-28 10:49:36.783281+00',	NULL),
(38,	'',	NULL,	NULL,	'2023-09-28 12:56:39.05327+00',	'2023-09-28 12:56:39.05327+00',	NULL);

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

INSERT INTO "ModifierFeedbacks" ("id", "feedback_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'Revenue Modifier',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1),
(2,	'Laterality Modifier',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1),
(3,	'Invalid Modifier',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1),
(4,	'CCI edit',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1),
(5,	'HCPCS Modifier',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1),
(6,	'Information Modifier',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1),
(7,	'Other',	'2023-08-16 08:47:10.94+00',	'2023-08-16 08:47:10.94+00',	NULL,	1,	1);

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
(169,	'You have been assigned Task T-0001 for Project 1',	'f',	289,	'2023-09-19 05:18:21.61+00',	'2023-09-19 05:18:21.61+00',	NULL,	NULL),
(170,	'You have been assigned Task T-0002 for Project 1',	'f',	290,	'2023-09-19 05:18:21.746+00',	'2023-09-19 05:18:21.746+00',	NULL,	NULL),
(171,	'You have been assigned Task T-0003 for Project 1',	'f',	291,	'2023-09-19 05:18:21.867+00',	'2023-09-19 05:18:21.867+00',	NULL,	NULL),
(175,	'You have been assigned Task T-0001 for Project 14',	'f',	311,	'2023-09-19 06:23:19.158+00',	'2023-09-19 06:23:19.158+00',	NULL,	32),
(176,	'You have been assigned Task T-0002 for Project 14',	'f',	312,	'2023-09-19 06:23:19.366+00',	'2023-09-19 06:23:19.366+00',	NULL,	31),
(178,	'You have been assigned Task T-0001 for Project 16',	'f',	314,	'2023-09-19 06:44:40.021+00',	'2023-09-19 06:44:40.021+00',	NULL,	32),
(179,	'You have been assigned Task T-0002 for Project 16',	'f',	315,	'2023-09-19 06:44:40.202+00',	'2023-09-19 06:44:40.202+00',	NULL,	NULL),
(180,	'You have been assigned Task T-0003 for Project 16',	'f',	316,	'2023-09-19 06:44:40.379+00',	'2023-09-19 06:44:40.379+00',	NULL,	NULL),
(181,	'You have been assigned Task T-0004 for Project 16',	'f',	317,	'2023-09-19 06:44:40.549+00',	'2023-09-19 06:44:40.549+00',	NULL,	NULL),
(43,	'You have been assigned Task T-1-03 for Project 1',	'f',	211,	'2023-09-12 11:53:25.496+00',	'2023-09-12 11:53:25.496+00',	NULL,	29),
(26,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-12 10:18:12.958+00',	'2023-09-12 12:15:43.273+00',	NULL,	27),
(44,	'You have been assigned Task T-1-04 for Project 1',	't',	212,	'2023-09-12 11:54:01.573+00',	'2023-09-13 06:18:00.505+00',	NULL,	29),
(20,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-12 10:07:45.911+00',	'2023-09-13 07:20:37.254+00',	NULL,	30),
(2,	'You have been assigned Task T-90004-01 for Project 90004',	't',	195,	'2023-09-06 12:15:56.333+00',	'2023-09-07 06:55:42.87+00',	NULL,	27),
(185,	'You have been assigned Task T-0001 for Project 8',	'f',	306,	'2023-09-19 06:54:54+00',	'2023-09-19 06:54:54+00',	NULL,	27),
(189,	'You have been assigned Task T-0001 for Project 19',	'f',	324,	'2023-09-19 06:56:13.016+00',	'2023-09-19 06:56:13.016+00',	NULL,	30),
(1,	'You have been assigned Task T-90003-01 for Project 90003',	't',	194,	'2023-09-06 11:45:47.43+00',	'2023-09-08 04:59:53.429+00',	NULL,	27),
(190,	'You have been assigned Task T-0002 for Project 19',	'f',	325,	'2023-09-19 06:56:13.264+00',	'2023-09-19 06:56:13.264+00',	NULL,	31),
(5,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-08 08:40:46.668+00',	'2023-09-08 08:43:11.084+00',	NULL,	27),
(3,	'You have been assigned Task T-90005-01 for Project 90005',	't',	196,	'2023-09-06 12:23:04.094+00',	'2023-09-08 08:43:15.521+00',	NULL,	27),
(4,	'You have been assigned Task T-90006-01 for Project 90006',	't',	197,	'2023-09-08 08:34:38.678+00',	'2023-09-08 08:43:20.442+00',	NULL,	27),
(6,	'You have been assigned Task T-90008-01 for Project 90008',	'f',	199,	'2023-09-08 08:43:36.238+00',	'2023-09-08 08:43:36.238+00',	NULL,	27),
(7,	'You have been assigned Task T-90009-01 for Project 90009',	't',	200,	'2023-09-08 08:43:39.06+00',	'2023-09-08 09:32:59.82+00',	NULL,	27),
(9,	'You have been assigned Task T-90011-01 for Project 90011',	'f',	202,	'2023-09-08 10:39:00.377+00',	'2023-09-08 10:39:00.377+00',	NULL,	27),
(8,	'You have been assigned Task T-90010-01 for Project 90010',	't',	201,	'2023-09-08 08:43:42.974+00',	'2023-09-08 11:08:24.859+00',	NULL,	27),
(10,	'You have been assigned Task T-90012-01 for Project 90012',	't',	203,	'2023-09-08 11:36:13.498+00',	'2023-09-08 11:44:11.24+00',	NULL,	27),
(191,	'You have been assigned Task T-0003 for Project 19',	'f',	326,	'2023-09-19 06:56:13.524+00',	'2023-09-19 06:56:13.524+00',	NULL,	29),
(192,	'You have been assigned Task T-0004 for Project 19',	'f',	327,	'2023-09-19 06:56:13.785+00',	'2023-09-19 06:56:13.785+00',	NULL,	NULL),
(193,	'You have been assigned Task T-0005 for Project 19',	'f',	328,	'2023-09-19 06:56:14.046+00',	'2023-09-19 06:56:14.046+00',	NULL,	NULL),
(199,	'New Tasks assigned',	'f',	NULL,	'2023-09-19 07:14:41.172+00',	'2023-09-19 07:14:41.172+00',	NULL,	28),
(201,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 07:16:43.496+00',	'2023-09-19 07:16:43.496+00',	NULL,	28),
(203,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 07:17:27.948+00',	'2023-09-19 07:17:27.948+00',	NULL,	28),
(205,	'You have been assigned Task T-0004 for Project 1',	'f',	332,	'2023-09-19 07:18:07.204+00',	'2023-09-19 07:18:07.204+00',	NULL,	28),
(207,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:24:13.804+00',	'2023-09-19 07:24:13.804+00',	NULL,	31),
(208,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:24:18.34+00',	'2023-09-19 07:24:18.34+00',	NULL,	27),
(22,	'You have been assigned Task T-90007-01 for Project 90007',	'f',	198,	'2023-09-12 10:09:20.666+00',	'2023-09-12 10:09:20.666+00',	NULL,	27),
(25,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-12 10:17:49.021+00',	'2023-09-12 10:20:32.787+00',	NULL,	28),
(23,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-12 10:10:05.026+00',	'2023-09-12 10:20:36.878+00',	NULL,	28),
(21,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-12 10:08:36.607+00',	'2023-09-12 10:20:38.562+00',	NULL,	28),
(24,	'You have been assigned Task T-90007-01 for Project 90007',	't',	198,	'2023-09-12 10:10:13.431+00',	'2023-09-12 10:21:15.702+00',	NULL,	27),
(210,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:33:07.622+00',	'2023-09-19 07:33:07.622+00',	NULL,	27),
(211,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:33:16.069+00',	'2023-09-19 07:33:16.069+00',	NULL,	32),
(213,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 08:28:56.894+00',	'2023-09-19 08:28:56.894+00',	NULL,	27),
(215,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:33:21.551+00',	'2023-09-19 08:33:21.551+00',	NULL,	32),
(217,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:34:44.193+00',	'2023-09-19 08:34:44.193+00',	NULL,	32),
(219,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:36:02.747+00',	'2023-09-19 08:36:02.747+00',	NULL,	32),
(50,	'You have been assigned Task T-1-01 for Project 1',	'f',	209,	'2023-09-13 09:50:44.998+00',	'2023-09-13 09:50:44.998+00',	NULL,	28),
(46,	'You have been assigned Task T-1-04 for Project 1',	't',	212,	'2023-09-13 09:43:53.72+00',	'2023-09-13 09:55:44.483+00',	NULL,	27),
(51,	'You have been assigned Task T-Project2-05 for Project Project2',	'f',	219,	'2023-09-13 09:55:57.157+00',	'2023-09-13 09:55:57.157+00',	NULL,	27),
(220,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:36:07.897+00',	'2023-09-19 08:36:07.897+00',	NULL,	27),
(223,	'You have been assigned Task T-0001 for Project 90003',	'f',	336,	'2023-09-19 09:03:20.108+00',	'2023-09-19 09:03:20.108+00',	NULL,	27),
(226,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:19:31.628+00',	'2023-09-19 09:19:31.628+00',	NULL,	32),
(228,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:19:50.471+00',	'2023-09-19 09:19:50.471+00',	NULL,	32),
(229,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:19:53.545+00',	'2023-09-19 09:19:53.545+00',	NULL,	27),
(232,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:20:26.425+00',	'2023-09-19 09:20:26.425+00',	NULL,	32),
(233,	'You have been assigned Task T-0001 for Project 90002',	't',	335,	'2023-09-19 09:20:30.46+00',	'2023-09-19 09:20:41.718+00',	NULL,	27),
(235,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:21:50.714+00',	'2023-09-19 09:21:50.714+00',	NULL,	27),
(72,	'You have been assigned Task T-2-01 for Project 2',	'f',	221,	'2023-09-14 06:07:51.852+00',	'2023-09-14 06:07:51.852+00',	NULL,	28),
(73,	'You have been assigned Task T-Project2-01 for Project Project2',	'f',	215,	'2023-09-14 08:47:04.916+00',	'2023-09-14 08:47:04.916+00',	NULL,	28),
(237,	'New Tasks assigned',	'f',	NULL,	'2023-09-19 09:29:33.047+00',	'2023-09-19 09:29:33.047+00',	NULL,	28),
(80,	'You have been assigned Task T-reactjs-01 for Project reactjs',	'f',	226,	'2023-09-14 11:14:18.509+00',	'2023-09-14 11:14:18.509+00',	NULL,	28),
(82,	'You have been assigned Task T-nodejs-01 for Project nodejs',	'f',	227,	'2023-09-15 05:34:17.286+00',	'2023-09-15 05:34:17.286+00',	NULL,	28),
(45,	'You have been assigned Task T-Project2-02 for Project Project2',	't',	216,	'2023-09-13 07:22:23.017+00',	'2023-09-15 06:00:09.657+00',	NULL,	27),
(83,	'You have been assigned Task T-laravel-01 for Project laravel',	'f',	228,	'2023-09-15 07:03:25.415+00',	'2023-09-15 07:03:25.415+00',	NULL,	28),
(85,	'You have been assigned Task T-Project2-02 for Project Project2',	'f',	216,	'2023-09-15 07:27:23.801+00',	'2023-09-15 07:27:23.801+00',	NULL,	27),
(86,	'You have been assigned Task T-001 for Project 90005',	'f',	229,	'2023-09-15 09:08:15.762+00',	'2023-09-15 09:08:15.762+00',	NULL,	27),
(87,	'You have been assigned Task T-002 for Project 90005',	'f',	230,	'2023-09-15 09:08:16.098+00',	'2023-09-15 09:08:16.098+00',	NULL,	29),
(88,	'You have been assigned Task T-003 for Project 90005',	'f',	231,	'2023-09-15 09:08:16.2+00',	'2023-09-15 09:08:16.2+00',	NULL,	28),
(153,	'You have been assigned Task T-0004 for Project Test 3',	't',	278,	'2023-09-18 12:49:44.933+00',	'2023-09-19 04:59:47.335+00',	NULL,	27),
(172,	'You have been assigned Task T-0001 for Project 6',	'f',	296,	'2023-09-19 05:44:44.202+00',	'2023-09-19 05:44:44.202+00',	NULL,	NULL),
(173,	'You have been assigned Task T-0002 for Project 6',	'f',	297,	'2023-09-19 05:44:44.358+00',	'2023-09-19 05:44:44.358+00',	NULL,	NULL),
(174,	'You have been assigned Task T-0003 for Project 6',	'f',	298,	'2023-09-19 05:44:44.51+00',	'2023-09-19 05:44:44.51+00',	NULL,	NULL),
(177,	'You have been assigned Task T-0001 for Project 15',	'f',	313,	'2023-09-19 06:43:40.915+00',	'2023-09-19 06:43:40.915+00',	NULL,	32),
(182,	'You have been assigned Task T-0001 for Project 17',	'f',	318,	'2023-09-19 06:51:57.916+00',	'2023-09-19 06:51:57.916+00',	NULL,	32),
(183,	'You have been assigned Task T-0002 for Project 17',	'f',	319,	'2023-09-19 06:51:58.092+00',	'2023-09-19 06:51:58.092+00',	NULL,	NULL),
(184,	'You have been assigned Task T-0003 for Project 17',	'f',	320,	'2023-09-19 06:51:58.275+00',	'2023-09-19 06:51:58.275+00',	NULL,	NULL),
(186,	'You have been assigned Task T-0001 for Project 18',	'f',	321,	'2023-09-19 06:55:28.561+00',	'2023-09-19 06:55:28.561+00',	NULL,	32),
(187,	'You have been assigned Task T-0002 for Project 18',	'f',	322,	'2023-09-19 06:55:28.801+00',	'2023-09-19 06:55:28.801+00',	NULL,	NULL),
(188,	'You have been assigned Task T-0003 for Project 18',	'f',	323,	'2023-09-19 06:55:29.045+00',	'2023-09-19 06:55:29.045+00',	NULL,	NULL),
(195,	'You have been assigned Task T-0002 for Project 1',	'f',	330,	'2023-09-19 07:09:52.811+00',	'2023-09-19 07:09:52.811+00',	NULL,	NULL),
(196,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:09:53.116+00',	'2023-09-19 07:09:53.116+00',	NULL,	NULL),
(108,	'You have been assigned Task T-0001 for Project 90006',	'f',	241,	'2023-09-15 12:13:13.986+00',	'2023-09-15 12:13:13.986+00',	NULL,	27),
(109,	'You have been assigned Task T-0002 for Project 90006',	'f',	242,	'2023-09-15 12:13:14.075+00',	'2023-09-15 12:13:14.075+00',	NULL,	29),
(110,	'You have been assigned Task T-0003 for Project 90006',	'f',	243,	'2023-09-15 12:13:14.236+00',	'2023-09-15 12:13:14.236+00',	NULL,	28),
(197,	'You have been assigned Task T-0004 for Project 1',	'f',	332,	'2023-09-19 07:09:53.415+00',	'2023-09-19 07:09:53.415+00',	NULL,	28),
(198,	'You have been assigned Task T-0005 for Project 1',	'f',	333,	'2023-09-19 07:09:53.781+00',	'2023-09-19 07:09:53.781+00',	NULL,	1),
(194,	'You have been assigned Task T-0001 for Project 1',	't',	329,	'2023-09-19 07:09:52.506+00',	'2023-09-19 07:14:54.146+00',	NULL,	27),
(200,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 07:16:00.563+00',	'2023-09-19 07:16:00.563+00',	NULL,	27),
(202,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 07:16:50.932+00',	'2023-09-19 07:16:50.932+00',	NULL,	27),
(204,	'You have been assigned Task T-0004 for Project 1',	'f',	332,	'2023-09-19 07:17:56.263+00',	'2023-09-19 07:17:56.263+00',	NULL,	31),
(206,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:19:43.681+00',	'2023-09-19 07:19:43.681+00',	NULL,	27),
(209,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:33:04.444+00',	'2023-09-19 07:33:04.444+00',	NULL,	31),
(212,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 07:33:19.602+00',	'2023-09-19 07:33:19.602+00',	NULL,	27),
(214,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:32:23.326+00',	'2023-09-19 08:32:23.326+00',	NULL,	27),
(216,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:33:27.789+00',	'2023-09-19 08:33:27.789+00',	NULL,	27),
(218,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 08:34:50.684+00',	'2023-09-19 08:34:50.684+00',	NULL,	27),
(221,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 08:45:53.076+00',	'2023-09-19 08:45:53.076+00',	NULL,	32),
(222,	'You have been assigned Task T-0003 for Project 1',	'f',	331,	'2023-09-19 08:45:57.792+00',	'2023-09-19 08:45:57.792+00',	NULL,	27),
(224,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 09:14:44.753+00',	'2023-09-19 09:14:44.753+00',	NULL,	32),
(225,	'You have been assigned Task T-0001 for Project 90001',	'f',	334,	'2023-09-19 09:14:50.622+00',	'2023-09-19 09:14:50.622+00',	NULL,	27),
(227,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:19:36.066+00',	'2023-09-19 09:19:36.066+00',	NULL,	27),
(230,	'You have been assigned Task T-0001 for Project 100',	'f',	337,	'2023-09-19 09:20:05.817+00',	'2023-09-19 09:20:05.817+00',	NULL,	NULL),
(129,	'You have been assigned Task T-0001 for Project Test1',	'f',	258,	'2023-09-16 09:49:41.308+00',	'2023-09-16 09:49:41.308+00',	NULL,	NULL),
(130,	'You have been assigned Task T-0002 for Project Test1',	'f',	259,	'2023-09-16 09:49:41.384+00',	'2023-09-16 09:49:41.384+00',	NULL,	NULL),
(131,	'You have been assigned Task T-0003 for Project Test1',	'f',	260,	'2023-09-16 09:49:41.46+00',	'2023-09-16 09:49:41.46+00',	NULL,	NULL),
(132,	'You have been assigned Task T-0001 for Project Test102',	'f',	268,	'2023-09-16 10:01:50.761+00',	'2023-09-16 10:01:50.761+00',	NULL,	NULL),
(133,	'You have been assigned Task T-0002 for Project Test102',	'f',	269,	'2023-09-16 10:01:50.841+00',	'2023-09-16 10:01:50.841+00',	NULL,	NULL),
(134,	'You have been assigned Task T-0001 for Project Test 1',	'f',	270,	'2023-09-16 10:04:00.837+00',	'2023-09-16 10:04:00.837+00',	NULL,	NULL),
(135,	'You have been assigned Task T-0002 for Project Test 1',	'f',	271,	'2023-09-16 10:04:00.916+00',	'2023-09-16 10:04:00.916+00',	NULL,	NULL),
(136,	'You have been assigned Task T-0001 for Project Test 2',	'f',	272,	'2023-09-16 10:04:18.028+00',	'2023-09-16 10:04:18.028+00',	NULL,	NULL),
(137,	'You have been assigned Task T-0002 for Project Test 2',	'f',	273,	'2023-09-16 10:04:18.108+00',	'2023-09-16 10:04:18.108+00',	NULL,	NULL),
(138,	'You have been assigned Task T-0003 for Project Test 2',	'f',	274,	'2023-09-16 10:04:18.179+00',	'2023-09-16 10:04:18.179+00',	NULL,	NULL),
(139,	'You have been assigned Task T-0001 for Project Test 3',	'f',	275,	'2023-09-16 10:04:56.789+00',	'2023-09-16 10:04:56.789+00',	NULL,	NULL),
(140,	'You have been assigned Task T-0002 for Project Test 3',	'f',	276,	'2023-09-16 10:04:56.865+00',	'2023-09-16 10:04:56.865+00',	NULL,	NULL),
(141,	'You have been assigned Task T-0003 for Project Test 3',	'f',	277,	'2023-09-16 10:04:56.942+00',	'2023-09-16 10:04:56.942+00',	NULL,	NULL),
(142,	'You have been assigned Task T-0004 for Project Test 3',	'f',	278,	'2023-09-16 10:04:57.02+00',	'2023-09-16 10:04:57.02+00',	NULL,	NULL),
(231,	'You have been assigned Task T-0002 for Project 100',	'f',	338,	'2023-09-19 09:20:05.873+00',	'2023-09-19 09:20:05.873+00',	NULL,	NULL),
(152,	'You have been assigned Task T-0004 for Project Test 3',	'f',	278,	'2023-09-18 12:49:36.922+00',	'2023-09-18 12:49:36.922+00',	NULL,	28),
(154,	'You have been assigned Task T-0001 for Project 1000',	'f',	279,	'2023-09-19 04:24:07.888+00',	'2023-09-19 04:24:07.888+00',	NULL,	NULL),
(155,	'You have been assigned Task T-0002 for Project 1000',	'f',	280,	'2023-09-19 04:24:07.979+00',	'2023-09-19 04:24:07.979+00',	NULL,	NULL),
(156,	'You have been assigned Task T-0003 for Project 1000',	'f',	281,	'2023-09-19 04:24:08.073+00',	'2023-09-19 04:24:08.073+00',	NULL,	NULL),
(157,	'You have been assigned Task T-0004 for Project 1000',	'f',	282,	'2023-09-19 04:24:08.163+00',	'2023-09-19 04:24:08.163+00',	NULL,	NULL),
(159,	'You have been assigned Task T-0001 for Project 11',	'f',	283,	'2023-09-19 04:38:23.039+00',	'2023-09-19 04:38:23.039+00',	NULL,	1),
(160,	'You have been assigned Task T-0002 for Project 11',	'f',	284,	'2023-09-19 04:38:23.111+00',	'2023-09-19 04:38:23.111+00',	NULL,	28),
(161,	'You have been assigned Task T-0003 for Project 11',	'f',	285,	'2023-09-19 04:38:23.179+00',	'2023-09-19 04:38:23.179+00',	NULL,	29),
(165,	'You have been assigned Task T-0004 for Project Test 3',	'f',	278,	'2023-09-19 04:46:44.739+00',	'2023-09-19 04:46:44.739+00',	NULL,	28),
(166,	'You have been assigned Task T-0001 for Project 1000',	'f',	286,	'2023-09-19 04:56:38.026+00',	'2023-09-19 04:56:38.026+00',	NULL,	28),
(167,	'You have been assigned Task T-0002 for Project 1000',	'f',	287,	'2023-09-19 04:56:38.1+00',	'2023-09-19 04:56:38.1+00',	NULL,	NULL),
(168,	'You have been assigned Task T-0003 for Project 1000',	'f',	288,	'2023-09-19 04:56:38.157+00',	'2023-09-19 04:56:38.157+00',	NULL,	NULL),
(234,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:21:42.592+00',	'2023-09-19 09:21:42.592+00',	NULL,	32),
(236,	'New Tasks assigned',	'f',	NULL,	'2023-09-19 09:29:28.995+00',	'2023-09-19 09:29:28.995+00',	NULL,	28),
(238,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:44:03.618+00',	'2023-09-19 09:44:03.618+00',	NULL,	31),
(239,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:44:11.13+00',	'2023-09-19 09:44:11.13+00',	NULL,	27),
(240,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:46:37.468+00',	'2023-09-19 09:46:37.468+00',	NULL,	31),
(241,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:46:52.767+00',	'2023-09-19 09:46:52.767+00',	NULL,	27),
(242,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:47:40.387+00',	'2023-09-19 09:47:40.387+00',	NULL,	32),
(243,	'You have been assigned Task T-0001 for Project 90002',	'f',	335,	'2023-09-19 09:47:46.794+00',	'2023-09-19 09:47:46.794+00',	NULL,	27),
(244,	'New Tasks assigned',	'f',	NULL,	'2023-09-19 10:21:25.589+00',	'2023-09-19 10:21:25.589+00',	NULL,	28),
(245,	'You have been assigned Task T-0009 for Project 240',	'f',	345,	'2023-09-19 12:52:10.51+00',	'2023-09-19 12:52:10.51+00',	NULL,	27),
(246,	'You have been assigned Task T-0010 for Project 240',	'f',	346,	'2023-09-19 12:52:37.995+00',	'2023-09-19 12:52:37.995+00',	NULL,	28),
(247,	'You have been assigned Task T-0011 for Project 123',	'f',	347,	'2023-09-19 12:53:38.315+00',	'2023-09-19 12:53:38.315+00',	NULL,	27),
(248,	'You have been assigned Task T-0012 for Project 2',	'f',	348,	'2023-09-19 12:53:54.715+00',	'2023-09-19 12:53:54.715+00',	NULL,	28),
(250,	'You have been assigned Task T-0001 for Project 90003',	'f',	336,	'2023-09-19 12:55:32.852+00',	'2023-09-19 12:55:32.852+00',	NULL,	27),
(251,	'You have been assigned Task T-0013 for Project 100',	'f',	349,	'2023-09-19 12:57:33.744+00',	'2023-09-19 12:57:33.744+00',	NULL,	28),
(253,	'You have been assigned Task T-0001 for Project 90003',	'f',	336,	'2023-09-20 04:25:36.549+00',	'2023-09-20 04:25:36.549+00',	NULL,	29),
(252,	'You have been assigned Task T-0001 for Project 90001',	't',	334,	'2023-09-20 04:19:39.691+00',	'2023-09-20 04:25:51.545+00',	NULL,	33),
(249,	'You have been assigned Task T-0001 for Project 90003',	't',	336,	'2023-09-19 12:55:20.037+00',	'2023-09-20 05:03:03.873+00',	NULL,	33),
(254,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 05:12:22.022+00',	'2023-09-20 05:12:22.022+00',	NULL,	28),
(255,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:17:44.836+00',	'2023-09-20 05:17:44.836+00',	NULL,	NULL),
(256,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:17:44.948+00',	'2023-09-20 05:17:44.948+00',	NULL,	NULL),
(257,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:20:41.514+00',	'2023-09-20 05:20:41.514+00',	NULL,	NULL),
(258,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:20:41.629+00',	'2023-09-20 05:20:41.629+00',	NULL,	NULL),
(259,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:20:48.493+00',	'2023-09-20 05:20:48.493+00',	NULL,	NULL),
(260,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:20:48.602+00',	'2023-09-20 05:20:48.602+00',	NULL,	NULL),
(261,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:20:54.329+00',	'2023-09-20 05:20:54.329+00',	NULL,	NULL),
(262,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:20:54.641+00',	'2023-09-20 05:20:54.641+00',	NULL,	NULL),
(263,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:21:53.214+00',	'2023-09-20 05:21:53.214+00',	NULL,	NULL),
(264,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:21:53.327+00',	'2023-09-20 05:21:53.327+00',	NULL,	NULL),
(265,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:25:07.244+00',	'2023-09-20 05:25:07.244+00',	NULL,	NULL),
(266,	'You have been assigned Task T-0002 for Project 90001',	't',	353,	'2023-09-20 05:26:25.067+00',	'2023-09-20 05:26:35.78+00',	NULL,	29),
(267,	'You have been assigned Task T-0001 for Project 90004',	'f',	354,	'2023-09-20 05:27:39.621+00',	'2023-09-20 05:27:39.621+00',	NULL,	29),
(268,	'You have been assigned Task T-0002 for Project 90004',	'f',	355,	'2023-09-20 05:27:39.844+00',	'2023-09-20 05:27:39.844+00',	NULL,	27),
(269,	'You have been assigned Task T-0001 for Project 90006',	'f',	356,	'2023-09-20 05:28:28.838+00',	'2023-09-20 05:28:28.838+00',	NULL,	27),
(270,	'You have been assigned Task T-0001 for Project 90008',	'f',	357,	'2023-09-20 05:31:07.939+00',	'2023-09-20 05:31:07.939+00',	NULL,	27),
(271,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:33:03.579+00',	'2023-09-20 05:33:03.579+00',	NULL,	NULL),
(272,	'You have been assigned Task T-0001 for Project 90009',	'f',	358,	'2023-09-20 05:33:57.253+00',	'2023-09-20 05:33:57.253+00',	NULL,	27),
(273,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:34:38.445+00',	'2023-09-20 05:34:38.445+00',	NULL,	NULL),
(274,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:35:18.7+00',	'2023-09-20 05:35:18.7+00',	NULL,	NULL),
(275,	'You have been assigned Task undefined for Project undefined',	'f',	NULL,	'2023-09-20 05:43:29.585+00',	'2023-09-20 05:43:29.585+00',	NULL,	NULL),
(277,	'You have been assigned Task T-0002 for Project 239',	'f',	351,	'2023-09-20 05:50:46.453+00',	'2023-09-20 05:50:46.453+00',	NULL,	29),
(278,	'You have been assigned Task T-0001 for Project 239',	'f',	336,	'2023-09-20 05:51:58.64+00',	'2023-09-20 05:51:58.64+00',	NULL,	28),
(279,	'You have been assigned Task T-0002 for Project 239',	'f',	351,	'2023-09-20 05:53:55.635+00',	'2023-09-20 05:53:55.635+00',	NULL,	28),
(276,	'You have been assigned Task T-0001 for Project 1006',	't',	359,	'2023-09-20 05:48:13.521+00',	'2023-09-20 05:58:20.841+00',	NULL,	33),
(280,	'You have been assigned Task T-0001 for Project 100',	'f',	337,	'2023-09-20 05:58:40.84+00',	'2023-09-20 05:58:40.84+00',	NULL,	33),
(281,	'You have been assigned Task T-0001 for Project 100',	'f',	337,	'2023-09-20 05:59:26.333+00',	'2023-09-20 05:59:26.333+00',	NULL,	29),
(284,	'You have been assigned Task T-0001 for Project 239',	'f',	336,	'2023-09-20 06:14:11.474+00',	'2023-09-20 06:14:11.474+00',	NULL,	27),
(285,	'You have been assigned Task T-0002 for Project 239',	'f',	351,	'2023-09-20 06:15:56.406+00',	'2023-09-20 06:15:56.406+00',	NULL,	29),
(286,	'You have been assigned Task T-0001 for Project 90003',	'f',	336,	'2023-09-20 06:18:10.839+00',	'2023-09-20 06:18:10.839+00',	NULL,	28),
(283,	'You have been assigned Task T-0002 for Project 100',	't',	338,	'2023-09-20 05:59:52.975+00',	'2023-09-20 06:24:22.952+00',	NULL,	33),
(287,	'You have been assigned Task T-0002 for Project undefined',	'f',	351,	'2023-09-20 06:29:17.7+00',	'2023-09-20 06:29:17.7+00',	NULL,	28),
(288,	'You have been assigned Task T-0001 for Project undefined',	'f',	336,	'2023-09-20 06:39:41.578+00',	'2023-09-20 06:39:41.578+00',	NULL,	29),
(289,	'You have been assigned Task T-0002 for Project undefined',	'f',	351,	'2023-09-20 06:39:46.123+00',	'2023-09-20 06:39:46.123+00',	NULL,	30),
(290,	'You have been assigned Task T-0001 for Project undefined',	'f',	336,	'2023-09-20 06:39:52.094+00',	'2023-09-20 06:39:52.094+00',	NULL,	28),
(291,	'You have been assigned Task T-0002 for Project undefined',	'f',	351,	'2023-09-20 06:44:14.445+00',	'2023-09-20 06:44:14.445+00',	NULL,	29),
(292,	'You have been assigned Task T-0001 for Project undefined',	'f',	336,	'2023-09-20 06:46:05.105+00',	'2023-09-20 06:46:05.105+00',	NULL,	29),
(293,	'You have been assigned Task T-0002 for Project 90003',	'f',	351,	'2023-09-20 06:47:59.245+00',	'2023-09-20 06:47:59.245+00',	NULL,	28),
(294,	'You have been assigned Task T-0001 for Project 90003',	'f',	336,	'2023-09-20 06:48:51.21+00',	'2023-09-20 06:48:51.21+00',	NULL,	28),
(295,	'You have been assigned Task T-0001 for Project 1211',	'f',	361,	'2023-09-20 07:00:42.474+00',	'2023-09-20 07:00:42.474+00',	NULL,	28),
(296,	'You have been assigned Task T-0002 for Project 1211',	'f',	362,	'2023-09-20 07:00:42.743+00',	'2023-09-20 07:00:42.743+00',	NULL,	27),
(298,	'You have been assigned Task T-0001 for Project P-0011',	't',	365,	'2023-09-20 07:34:30.479+00',	'2023-09-20 08:21:50.727+00',	NULL,	33),
(299,	'You have been assigned Task T-0002 for Project 1211',	'f',	362,	'2023-09-20 09:54:45.325+00',	'2023-09-20 09:54:45.325+00',	NULL,	28),
(300,	'You have been assigned Task T-0004 for Project 1211',	't',	364,	'2023-09-20 09:55:10.621+00',	'2023-09-20 09:55:19.815+00',	NULL,	28),
(301,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 09:59:03.676+00',	'2023-09-20 09:59:03.676+00',	NULL,	28),
(302,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 09:59:12.63+00',	'2023-09-20 09:59:12.63+00',	NULL,	28),
(303,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 09:59:19.958+00',	'2023-09-20 09:59:19.958+00',	NULL,	28),
(304,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 09:59:30.806+00',	'2023-09-20 09:59:30.806+00',	NULL,	28),
(305,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 10:01:59.274+00',	'2023-09-20 10:01:59.274+00',	NULL,	28),
(306,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 10:37:39.266+00',	'2023-09-20 10:37:39.266+00',	NULL,	28),
(307,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 10:37:53.836+00',	'2023-09-20 10:37:53.836+00',	NULL,	28),
(308,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 10:40:29.096+00',	'2023-09-20 10:40:29.096+00',	NULL,	28),
(309,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 10:40:41.19+00',	'2023-09-20 10:40:41.19+00',	NULL,	28),
(310,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 10:40:49.405+00',	'2023-09-20 10:40:49.405+00',	NULL,	28),
(311,	'You have been assigned Task T-0001 for Project P-0012',	'f',	368,	'2023-09-20 12:14:12.907+00',	'2023-09-20 12:14:12.907+00',	NULL,	28),
(312,	'You have been assigned Task T-0002 for Project P-0012',	'f',	369,	'2023-09-20 12:14:13.106+00',	'2023-09-20 12:14:13.106+00',	NULL,	NULL),
(313,	'You have been assigned Task T-0003 for Project P-0012',	'f',	370,	'2023-09-20 12:14:13.33+00',	'2023-09-20 12:14:13.33+00',	NULL,	NULL),
(314,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 12:20:16.55+00',	'2023-09-20 12:20:16.55+00',	NULL,	28),
(315,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 12:20:20.303+00',	'2023-09-20 12:20:20.303+00',	NULL,	28),
(316,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 12:21:25.243+00',	'2023-09-20 12:21:25.243+00',	NULL,	28),
(317,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 12:21:29.222+00',	'2023-09-20 12:21:29.222+00',	NULL,	28),
(318,	'New Tasks assigned',	'f',	NULL,	'2023-09-20 12:21:32.921+00',	'2023-09-20 12:21:32.921+00',	NULL,	28),
(319,	'You have been assigned Task T-0004 for Project P-0012',	'f',	371,	'2023-09-20 12:24:28.688+00',	'2023-09-20 12:24:28.688+00',	NULL,	28),
(282,	'You have been assigned Task T-0001 for Project 100',	't',	337,	'2023-09-20 05:59:29.751+00',	'2023-09-21 10:11:47.121+00',	NULL,	33),
(320,	'You have been assigned Task T-0004 for Project P-0012',	't',	371,	'2023-09-21 04:47:26.806+00',	'2023-09-21 12:38:32.869+00',	NULL,	29),
(321,	'You have been assigned Task T-0004 for Project P-0012',	'f',	371,	'2023-09-21 04:47:37.404+00',	'2023-09-21 04:47:37.404+00',	NULL,	28),
(297,	'You have been assigned Task T-0003 for Project 1211',	't',	363,	'2023-09-20 07:00:43.011+00',	'2023-09-21 09:11:06.152+00',	NULL,	1),
(322,	'New Tasks assigned',	'f',	NULL,	'2023-09-21 12:27:01.516+00',	'2023-09-21 12:27:01.516+00',	NULL,	28),
(323,	'You have been assigned Task T-0001 for Project P-0013',	'f',	372,	'2023-09-21 12:28:25.203+00',	'2023-09-21 12:28:25.203+00',	NULL,	34),
(324,	'You have been assigned Task T-0002 for Project P-0013',	'f',	373,	'2023-09-21 12:28:25.365+00',	'2023-09-21 12:28:25.365+00',	NULL,	NULL),
(325,	'You have been assigned Task T-0003 for Project P-0013',	'f',	374,	'2023-09-21 12:28:25.525+00',	'2023-09-21 12:28:25.525+00',	NULL,	NULL),
(326,	'You have been assigned Task T-0004 for Project P-0013',	'f',	375,	'2023-09-21 12:28:58.99+00',	'2023-09-21 12:28:58.99+00',	NULL,	27),
(327,	'New Tasks assigned',	'f',	NULL,	'2023-09-21 12:31:43.182+00',	'2023-09-21 12:31:43.182+00',	NULL,	28),
(42,	'You have been assigned Task T-1-01 for Project 1',	't',	209,	'2023-09-12 11:51:41.69+00',	'2023-09-21 12:50:31.484+00',	NULL,	29),
(328,	'You have been assigned Task T-0004 for Project P-0012',	'f',	371,	'2023-09-22 08:38:24.092+00',	'2023-09-22 08:38:24.092+00',	NULL,	33),
(329,	'You have been assigned Task T-0005 for Project 1211',	'f',	367,	'2023-09-23 04:50:45.076+00',	'2023-09-23 04:50:45.076+00',	NULL,	28),
(330,	'You have been assigned Task T-0005 for Project 1211',	'f',	367,	'2023-09-23 04:52:21.162+00',	'2023-09-23 04:52:21.162+00',	NULL,	28),
(331,	'You have been assigned Task T-0005 for Project 1211',	'f',	367,	'2023-09-23 06:21:17.391+00',	'2023-09-23 06:21:17.391+00',	NULL,	32),
(332,	'You have been assigned Task T-0005 for Project 1211',	'f',	367,	'2023-09-23 06:21:24.115+00',	'2023-09-23 06:21:24.115+00',	NULL,	33),
(333,	'You have been assigned Task T-0001 for Project 90003',	'f',	335,	'2023-09-23 07:02:36.253+00',	'2023-09-23 07:02:36.253+00',	NULL,	33),
(334,	'You have been assigned Task T-0001 for Project P-0001',	'f',	376,	'2023-09-23 07:13:16.738+00',	'2023-09-23 07:13:16.738+00',	NULL,	27),
(335,	'You have been assigned Task T-0002 for Project P-0001',	'f',	377,	'2023-09-23 07:13:17.019+00',	'2023-09-23 07:13:17.019+00',	NULL,	1),
(336,	'You have been assigned Task T-0003 for Project P-0001',	'f',	378,	'2023-09-23 07:13:17.302+00',	'2023-09-23 07:13:17.302+00',	NULL,	NULL),
(337,	'You have been assigned Task T-0001 for Project P-0002',	'f',	379,	'2023-09-23 07:14:44.357+00',	'2023-09-23 07:14:44.357+00',	NULL,	28),
(338,	'You have been assigned Task T-0002 for Project P-0002',	'f',	380,	'2023-09-23 07:14:44.69+00',	'2023-09-23 07:14:44.69+00',	NULL,	NULL),
(339,	'You have been assigned Task T-0003 for Project P-0002',	'f',	381,	'2023-09-23 07:14:44.942+00',	'2023-09-23 07:14:44.942+00',	NULL,	NULL),
(340,	'You have been assigned Task T-0002 for Project P-0002',	'f',	380,	'2023-09-23 07:21:01.66+00',	'2023-09-23 07:21:01.66+00',	NULL,	NULL),
(341,	'You have been assigned Task T-0002 for Project P-0002',	'f',	380,	'2023-09-23 07:22:48.806+00',	'2023-09-23 07:22:48.806+00',	NULL,	NULL),
(342,	'You have been assigned Task T-0002 for Project P-0002',	'f',	380,	'2023-09-23 07:23:35.81+00',	'2023-09-23 07:23:35.81+00',	NULL,	NULL),
(343,	'You have been assigned Task T-0002 for Project P-0002',	'f',	380,	'2023-09-23 07:24:25.217+00',	'2023-09-23 07:24:25.217+00',	NULL,	NULL),
(344,	'You have been assigned Task T-0003 for Project P-0001',	'f',	378,	'2023-09-23 08:55:41.35+00',	'2023-09-23 08:55:41.35+00',	NULL,	NULL),
(345,	'You have been assigned Task T-0003 for Project P-0001',	'f',	378,	'2023-09-23 08:55:59.08+00',	'2023-09-23 08:55:59.08+00',	NULL,	NULL),
(346,	'You have been assigned Task T-0003 for Project P-0001',	'f',	378,	'2023-09-23 09:06:53.575+00',	'2023-09-23 09:06:53.575+00',	NULL,	NULL),
(347,	'You have been assigned Task T-0003 for Project P-0001',	'f',	378,	'2023-09-23 09:10:50.951+00',	'2023-09-23 09:10:50.951+00',	NULL,	NULL),
(348,	'New Tasks assigned',	'f',	NULL,	'2023-09-23 09:12:31.554+00',	'2023-09-23 09:12:31.554+00',	NULL,	28),
(349,	'New Tasks assigned',	'f',	NULL,	'2023-09-23 09:13:11.929+00',	'2023-09-23 09:13:11.929+00',	NULL,	28),
(350,	'New Tasks assigned',	'f',	NULL,	'2023-09-23 09:13:15.268+00',	'2023-09-23 09:13:15.268+00',	NULL,	28),
(351,	'New Tasks assigned',	'f',	NULL,	'2023-09-23 09:14:07.446+00',	'2023-09-23 09:14:07.446+00',	NULL,	28),
(352,	'You have been assigned Task T-0002 for Project P-0002',	'f',	382,	'2023-09-23 09:47:04.275+00',	'2023-09-23 09:47:04.275+00',	NULL,	28),
(353,	'You have been assigned Task T-0003 for Project P-0002',	'f',	383,	'2023-09-23 09:58:35.238+00',	'2023-09-23 09:58:35.238+00',	NULL,	28),
(354,	'You have been assigned Task T-0004 for Project P-0002',	'f',	384,	'2023-09-23 10:03:35.604+00',	'2023-09-23 10:03:35.604+00',	NULL,	28),
(355,	'You have been assigned Task T-0005 for Project P-0002',	'f',	385,	'2023-09-23 10:04:57.054+00',	'2023-09-23 10:04:57.054+00',	NULL,	28),
(356,	'You have been assigned Task T-0006 for Project P-0002',	'f',	386,	'2023-09-23 10:07:23.999+00',	'2023-09-23 10:07:23.999+00',	NULL,	28),
(357,	'You have been assigned Task T-0007 for Project P-0002',	'f',	387,	'2023-09-23 10:08:28.867+00',	'2023-09-23 10:08:28.867+00',	NULL,	28),
(358,	'You have been assigned Task T-0008 for Project P-0002',	'f',	388,	'2023-09-23 10:21:11.437+00',	'2023-09-23 10:21:11.437+00',	NULL,	28),
(359,	'You have been assigned Task T-0009 for Project P-0002',	'f',	389,	'2023-09-23 10:23:07.986+00',	'2023-09-23 10:23:07.986+00',	NULL,	28),
(360,	'You have been assigned Task T-0002 for Project P-0002',	'f',	382,	'2023-09-23 10:33:39.52+00',	'2023-09-23 10:33:39.52+00',	NULL,	28),
(361,	'You have been assigned Task T-0002 for Project P-0002',	'f',	380,	'2023-09-24 18:41:33.91+00',	'2023-09-24 18:41:33.91+00',	NULL,	27),
(362,	'You have been assigned Task T-0001 for Project P-0040',	'f',	439,	'2023-09-25 04:32:13.218+00',	'2023-09-25 04:32:13.218+00',	NULL,	NULL),
(363,	'You have been assigned Task T-0002 for Project P-0040',	'f',	440,	'2023-09-25 04:32:13.39+00',	'2023-09-25 04:32:13.39+00',	NULL,	NULL),
(364,	'You have been assigned Task T-0003 for Project P-0040',	'f',	441,	'2023-09-25 04:32:13.551+00',	'2023-09-25 04:32:13.551+00',	NULL,	NULL),
(365,	'You have been assigned Task T-0001 for Project P-0043',	'f',	444,	'2023-09-25 12:35:15.354+00',	'2023-09-25 12:35:15.354+00',	NULL,	28),
(366,	'You have been assigned Task T-0002 for Project P-0043',	'f',	445,	'2023-09-25 12:35:20.432+00',	'2023-09-25 12:35:20.432+00',	NULL,	29),
(367,	'You have been assigned Task T-0003 for Project P-0043',	'f',	446,	'2023-09-25 12:35:24.639+00',	'2023-09-25 12:35:24.639+00',	NULL,	33),
(368,	'You have been assigned Task T-0002 for Project P-0043',	'f',	445,	'2023-09-25 12:37:31.962+00',	'2023-09-25 12:37:31.962+00',	NULL,	1),
(369,	'You have been assigned Task T-0004 for Project P-0043',	'f',	447,	'2023-09-25 12:40:53.341+00',	'2023-09-25 12:40:53.341+00',	NULL,	33),
(370,	'You have been assigned Task T-0002 for Project P-0043',	'f',	445,	'2023-09-25 12:45:27.611+00',	'2023-09-25 12:45:27.611+00',	NULL,	33),
(371,	'You have been assigned Task T-0004 for Project P-0043',	'f',	447,	'2023-09-25 12:47:08.393+00',	'2023-09-25 12:47:08.393+00',	NULL,	1),
(372,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-25 12:48:37.752+00',	'2023-09-25 12:48:37.752+00',	NULL,	28),
(373,	'You have been assigned Task T-0004 for Project P-0043',	'f',	447,	'2023-09-25 12:50:36.144+00',	'2023-09-25 12:50:36.144+00',	NULL,	34),
(374,	'You have been assigned Task T-0007 for Project P-0002',	'f',	387,	'2023-09-25 13:00:35.168+00',	'2023-09-25 13:00:35.168+00',	NULL,	33),
(375,	'You have been assigned Task T-0003 for Project P-0043',	'f',	446,	'2023-09-25 13:01:06.933+00',	'2023-09-25 13:01:06.933+00',	NULL,	33),
(376,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-25 13:05:50.635+00',	'2023-09-25 13:05:50.635+00',	NULL,	33),
(377,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-25 13:07:05.543+00',	'2023-09-25 13:07:05.543+00',	NULL,	30),
(379,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-25 13:07:47.316+00',	'2023-09-25 13:07:47.316+00',	NULL,	1),
(380,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-25 13:08:06.076+00',	'2023-09-25 13:08:06.076+00',	NULL,	30),
(381,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-25 13:08:09.198+00',	'2023-09-25 13:08:09.198+00',	NULL,	1),
(378,	'You have been assigned Task T-0005 for Project P-0043',	't',	448,	'2023-09-25 13:07:09.56+00',	'2023-09-26 05:49:40.317+00',	NULL,	33),
(382,	'You have been assigned Task T-0005 for Project P-0043',	'f',	448,	'2023-09-26 05:50:01.107+00',	'2023-09-26 05:50:01.107+00',	NULL,	33),
(383,	'You have been assigned Task T-0001 for Project P-0044',	'f',	449,	'2023-09-27 07:02:45.871+00',	'2023-09-27 07:02:45.871+00',	NULL,	33),
(384,	'You have been assigned Task T-0002 for Project P-0044',	'f',	450,	'2023-09-27 07:03:04.157+00',	'2023-09-27 07:03:04.157+00',	NULL,	33),
(385,	'You have been assigned Task T-0003 for Project P-0044',	'f',	451,	'2023-09-27 07:03:43.099+00',	'2023-09-27 07:03:43.099+00',	NULL,	33),
(386,	'You have been assigned Task T-0004 for Project P-0044',	'f',	452,	'2023-09-27 07:04:05.342+00',	'2023-09-27 07:04:05.342+00',	NULL,	33),
(387,	'You have been assigned Task T-0005 for Project P-0044',	'f',	453,	'2023-09-27 07:05:04.483+00',	'2023-09-27 07:05:04.483+00',	NULL,	28),
(388,	'You have been assigned Task T-0006 for Project P-0044',	'f',	454,	'2023-09-27 07:05:32.255+00',	'2023-09-27 07:05:32.255+00',	NULL,	29),
(390,	'You have been assigned Task T-0008 for Project P-0044',	'f',	456,	'2023-09-27 07:06:38.873+00',	'2023-09-27 07:06:38.873+00',	NULL,	33),
(391,	'You have been assigned Task T-0009 for Project P-0044',	'f',	457,	'2023-09-27 07:07:13.93+00',	'2023-09-27 07:07:13.93+00',	NULL,	33),
(392,	'You have been assigned Task T-0001 for Project P-0045',	'f',	458,	'2023-09-27 07:07:45.953+00',	'2023-09-27 07:07:45.953+00',	NULL,	NULL),
(393,	'You have been assigned Task T-0001 for Project P-0046',	'f',	459,	'2023-09-27 07:07:48.015+00',	'2023-09-27 07:07:48.015+00',	NULL,	NULL),
(394,	'You have been assigned Task T-0001 for Project P-0047',	'f',	460,	'2023-09-27 07:10:24.354+00',	'2023-09-27 07:10:24.354+00',	NULL,	NULL),
(389,	'You have been assigned Task T-0007 for Project P-0044',	't',	455,	'2023-09-27 07:06:19.437+00',	'2023-09-27 09:21:36.095+00',	NULL,	33),
(395,	'You have been assigned Task T-0010 for Project P-0044',	'f',	461,	'2023-09-27 09:32:45.578+00',	'2023-09-27 09:32:45.578+00',	NULL,	33),
(396,	'You have been assigned Task T-0011 for Project P-0044',	'f',	462,	'2023-09-27 09:33:11.989+00',	'2023-09-27 09:33:11.989+00',	NULL,	29),
(397,	'You have been assigned Task T-0012 for Project P-0044',	'f',	463,	'2023-09-27 09:33:50.812+00',	'2023-09-27 09:33:50.812+00',	NULL,	33),
(398,	'You have been assigned Task T-0013 for Project P-0044',	'f',	464,	'2023-09-27 09:34:17.975+00',	'2023-09-27 09:34:17.975+00',	NULL,	33),
(399,	'You have been assigned Task T-0014 for Project P-0044',	'f',	465,	'2023-09-27 09:34:54.998+00',	'2023-09-27 09:34:54.998+00',	NULL,	33),
(400,	'You have been assigned Task T-0013 for Project P-0044',	'f',	464,	'2023-09-27 09:37:20.829+00',	'2023-09-27 09:37:20.829+00',	NULL,	29),
(401,	'You have been assigned Task T-0015 for Project P-0044',	'f',	466,	'2023-09-27 12:30:15.081+00',	'2023-09-27 12:30:15.081+00',	NULL,	33),
(402,	'You have been assigned Task T-0016 for Project P-0044',	'f',	467,	'2023-09-27 12:35:50.643+00',	'2023-09-27 12:35:50.643+00',	NULL,	28),
(403,	'You have been assigned Task T-0001 for Project P-0049',	't',	468,	'2023-09-29 04:51:34.055+00',	'2023-09-29 04:51:38.276+00',	NULL,	36);

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

INSERT INTO "PrimDiagFeedbacks" ("id", "feedback_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'Specificity',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(2,	'Combination code',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(3,	'Sequencing',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(4,	'Add-on code',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(5,	'Sign&Symp Vs Definite Diagnosis',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(6,	'Documentation Vs DX appended',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(7,	'Status',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(8,	'External Cause code',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(9,	'ICD Guideline not followed',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(10,	'Condition not addressed',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(11,	'No Error',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1),
(12,	'Other',	'2023-08-16 08:47:10.714+00',	'2023-08-16 08:47:10.714+00',	NULL,	1,	1);

CREATE SEQUENCE "Priorities_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Priorities" (
    "id" integer DEFAULT nextval('"Priorities_id_seq"') NOT NULL,
    "priority_name" character varying(255) NOT NULL,
    "ClientId" integer,
    CONSTRAINT "Priorities_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Priorities_priority_name_key" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key1" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key10" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key11" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key12" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key13" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key14" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key15" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key16" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key17" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key18" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key19" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key2" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key20" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key21" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key3" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key4" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key5" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key6" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key7" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key8" UNIQUE ("priority_name"),
    CONSTRAINT "Priorities_priority_name_key9" UNIQUE ("priority_name")
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

INSERT INTO "ProceduresFeedbacks" ("id", "feedback_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'Incorrect procedure',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(2,	'Missed Procedure',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(3,	'Units',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(4,	'Administration Code',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(5,	'Drug Code',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(6,	'Code Category',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(7,	'Missing Report',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(8,	'Client Guideline not followed',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(9,	'Other',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1),
(10,	'Medical Necessity Edit',	'2023-08-16 08:47:10.863+00',	'2023-08-16 08:47:10.863+00',	NULL,	1,	1);

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
(291,	31,	1),
(291,	29,	2),
(291,	27,	3),
(292,	32,	4),
(292,	31,	5),
(291,	32,	6),
(291,	28,	7),
(292,	28,	8),
(292,	29,	9),
(343,	32,	10),
(343,	31,	11),
(344,	32,	12),
(344,	31,	13),
(344,	28,	14),
(344,	29,	15),
(344,	33,	16),
(345,	32,	17),
(345,	31,	18),
(345,	28,	19),
(345,	29,	20),
(345,	33,	21),
(346,	32,	22),
(346,	31,	23),
(346,	28,	24),
(346,	29,	25),
(346,	33,	26),
(347,	33,	27),
(347,	29,	28),
(347,	28,	29),
(348,	32,	30),
(348,	31,	31),
(349,	32,	32),
(349,	31,	33),
(350,	32,	34),
(350,	31,	35);

CREATE TABLE "public"."ProjectMilestones" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "MilestoneId" integer NOT NULL,
    "WorklistId" integer NOT NULL,
    CONSTRAINT "ProjectMilestones_pkey" PRIMARY KEY ("MilestoneId", "WorklistId")
) WITH (oids = false);

INSERT INTO "ProjectMilestones" ("createdAt", "updatedAt", "MilestoneId", "WorklistId") VALUES
('2023-09-28 10:47:57.635+00',	'2023-09-28 10:47:57.635+00',	31,	347),
('2023-09-28 12:56:39.182+00',	'2023-09-28 12:56:39.182+00',	38,	292);

CREATE SEQUENCE "QCStatuses_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."QCStatuses" (
    "id" integer DEFAULT nextval('"QCStatuses_id_seq"') NOT NULL,
    "qc_status_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "QCStatuses_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "QCStatuses_qc_status_name_key" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key1" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key10" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key11" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key12" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key13" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key14" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key15" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key16" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key17" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key18" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key19" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key2" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key20" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key21" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key22" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key23" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key24" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key25" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key26" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key3" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key4" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key5" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key6" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key7" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key8" UNIQUE ("qc_status_name"),
    CONSTRAINT "QCStatuses_qc_status_name_key9" UNIQUE ("qc_status_name")
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

INSERT INTO "ResponsibleParties" ("id", "resp_party_name", "createdAt", "updatedAt", "deletedAt", "ClientId") VALUES
(1,	'Pharmacy',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1),
(2,	'Nursing',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1),
(3,	'DP',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1),
(4,	'Missing Information',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1),
(5,	'System',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1),
(6,	'Stop Time',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1),
(7,	'Finalised',	'2023-08-16 08:47:10.66+00',	'2023-08-16 08:47:10.66+00',	NULL,	1);

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
(3,	'Coder',	1,	1),
(5,	'Admin',	1,	1),
(4,	'Member',	1,	1);

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

INSERT INTO "SecDiagFeedbacks" ("id", "feedback_name", "createdAt", "updatedAt", "deletedAt", "LocationId", "ClientId") VALUES
(1,	'Specificity',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(2,	'Combination code',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(3,	'Sequencing',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(4,	'Add-on code',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(5,	'Sign&Symp Vs Definite Diagnosis',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(6,	'Documentation Vs DX appended',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(7,	'Status',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(8,	'External Cause code',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(9,	'ICD Guideline not followed',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(10,	'Condition not addressed',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1),
(11,	'Other',	'2023-08-16 08:47:10.809+00',	'2023-08-16 08:47:10.809+00',	NULL,	1,	1);

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
(15,	'React Native',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	3,	1),
(16,	'QA',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	3,	1),
(17,	'Administration',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	3,	1),
(18,	'JAVA + Spring Boot',	'2023-08-16 08:47:11.145+00',	'2023-08-16 08:47:11.145+00',	NULL,	3,	1),
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
    CONSTRAINT "Sprints_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Sprints" ("id", "name", "createdAt", "updatedAt", "deletedAt", "WorklistId") VALUES
(2,	'h',	'2023-09-26 13:01:58.353+00',	'2023-09-26 13:01:58.353+00',	NULL,	292),
(1,	'MVP Phase 1',	'2023-09-26 12:51:44.629+00',	'2023-09-26 12:51:44.629+00',	NULL,	347),
(3,	'MVP Phase 2',	'2023-09-26 12:51:44.629+00',	'2023-09-26 12:51:44.629+00',	NULL,	347);

CREATE SEQUENCE "Statuses_id_seq" INCREMENT  MINVALUE  MAXVALUE  CACHE ;

CREATE TABLE "public"."Statuses" (
    "id" integer DEFAULT nextval('"Statuses_id_seq"') NOT NULL,
    "status_name" character varying(255) NOT NULL,
    "LocationId" integer,
    "ClientId" integer,
    CONSTRAINT "Statuses_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Statuses_status_name_key" UNIQUE ("status_name"),
    CONSTRAINT "Statuses_status_name_key1" UNIQUE ("status_name")
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
    CONSTRAINT "TaskTypes_name_key1" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key10" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key11" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key12" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key13" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key14" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key15" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key16" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key17" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key18" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key19" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key2" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key3" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key4" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key5" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key6" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key7" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key8" UNIQUE ("name"),
    CONSTRAINT "TaskTypes_name_key9" UNIQUE ("name"),
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
    CONSTRAINT "Templates_name_key1" UNIQUE ("name"),
    CONSTRAINT "Templates_name_key2" UNIQUE ("name"),
    CONSTRAINT "Templates_name_key3" UNIQUE ("name"),
    CONSTRAINT "Templates_name_key4" UNIQUE ("name"),
    CONSTRAINT "Templates_name_key5" UNIQUE ("name"),
    CONSTRAINT "Templates_name_key6" UNIQUE ("name"),
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

INSERT INTO "Timers" ("id", "start_time", "stop_time", "UserId", "duration_time", "createdAt", "updatedAt", "RoleId", "ChartId", "LocationId", "ClientId") VALUES
(1,	'2023-09-05 06:37:15+00',	NULL,	28,	NULL,	'2023-09-05 06:37:15.913+00',	'2023-09-05 06:37:15.913+00',	3,	NULL,	NULL,	2),
(2,	'2023-09-05 06:39:22+00',	NULL,	28,	NULL,	'2023-09-05 06:39:22.3+00',	'2023-09-05 06:39:22.3+00',	3,	NULL,	NULL,	2),
(3,	'2023-09-05 06:56:12+00',	NULL,	28,	NULL,	'2023-09-05 06:56:12.44+00',	'2023-09-05 06:56:12.44+00',	3,	NULL,	NULL,	2),
(4,	'2023-09-05 07:13:37+00',	NULL,	28,	NULL,	'2023-09-05 07:13:37.014+00',	'2023-09-05 07:13:37.014+00',	3,	NULL,	NULL,	2),
(5,	'2023-09-05 08:31:42+00',	NULL,	28,	NULL,	'2023-09-05 08:31:42.683+00',	'2023-09-05 08:31:42.683+00',	3,	NULL,	NULL,	2);

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
(2,	'Rashaad',	'Anwar Hussain',	'3002c35a-2040-4932-a42f-223b40dc1b39',	'rashaad.hussain@minditsystems.com',	'grant',	'2023-09-19 12:23:29.426+00',	't',	'2023-09-19 12:23:29.444+00',	'2023-09-19 12:24:38.994+00'),
(1,	'Misha',	'Kumari',	'2b52b9f3-8359-4ca1-a562-ee5657c83b4f',	'misha.kumari@minditsystems.com',	'decline',	'2023-08-29 05:22:03.075+00',	'f',	'2023-08-29 05:22:03.076+00',	'2023-09-19 12:39:29.825+00'),
(3,	'V',	'Sriram',	'93a1d190-ce7b-49ea-9c4f-24ad8786d197',	'v.sriram@minditsystems.com',	'grant',	'2023-09-21 08:51:17.873+00',	't',	'2023-09-21 08:51:17.873+00',	'2023-09-21 08:59:11.868+00'),
(4,	'Sanjay',	'Barman',	'722b2837-00b2-4b4d-a5fa-7a5ae4c8a051',	'sanjay.barman@minditsystems.com',	'grant',	'2023-09-26 05:14:56.124+00',	't',	'2023-09-26 05:14:56.124+00',	'2023-09-26 05:15:49.463+00'),
(5,	'Harsh',	'Gupta',	'86b89d16-1321-4e0e-ae9c-a60c70fa4806',	'harsh.gupta@minditsystems.com',	'grant',	'2023-09-26 05:46:42.587+00',	't',	'2023-09-26 05:46:42.589+00',	'2023-09-26 05:47:28.28+00');

CREATE TABLE "public"."UserClients" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" integer NOT NULL,
    "ClientId" integer NOT NULL,
    CONSTRAINT "UserClients_pkey" PRIMARY KEY ("UserId", "ClientId")
) WITH (oids = false);

INSERT INTO "UserClients" ("createdAt", "updatedAt", "UserId", "ClientId") VALUES
('2023-08-18 09:02:42.028+00',	'2023-08-18 09:02:42.028+00',	1,	1),
('2023-08-24 12:10:14.582+00',	'2023-08-24 12:10:14.582+00',	27,	2),
('2023-09-19 12:24:39.272+00',	'2023-09-19 12:24:39.272+00',	33,	1),
('2023-09-21 08:59:12.14+00',	'2023-09-21 08:59:12.14+00',	34,	1),
('2023-09-23 06:52:35.507+00',	'2023-09-23 06:52:35.507+00',	29,	1),
('2023-09-26 05:15:49.706+00',	'2023-09-26 05:15:49.706+00',	35,	1),
('2023-09-26 05:47:28.532+00',	'2023-09-26 05:47:28.532+00',	36,	1);

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
('2023-09-23 06:52:35.597+00',	'2023-09-23 06:52:35.597+00',	29,	4),
('2023-09-26 05:15:49.655+00',	'2023-09-26 05:15:49.655+00',	35,	1),
('2023-09-26 05:47:28.474+00',	'2023-09-26 05:47:28.474+00',	36,	1);

CREATE TABLE "public"."UserSpecialties" (
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    "UserId" integer NOT NULL,
    "SpecialtyId" integer NOT NULL,
    CONSTRAINT "UserSpecialties_pkey" PRIMARY KEY ("UserId", "SpecialtyId")
) WITH (oids = false);

INSERT INTO "UserSpecialties" ("createdAt", "updatedAt", "UserId", "SpecialtyId") VALUES
('2023-08-18 05:33:55.902775+00',	'2023-08-18 05:33:55.902775+00',	1,	1),
('2023-08-21 04:49:23.929+00',	'2023-08-21 04:49:23.929+00',	27,	3),
('2023-09-19 12:24:39.331+00',	'2023-09-19 12:24:39.331+00',	33,	1),
('2023-09-21 08:59:12.199+00',	'2023-09-21 08:59:12.199+00',	34,	2),
('2023-09-21 08:59:12.199+00',	'2023-09-21 08:59:12.199+00',	34,	3),
('2023-09-23 06:52:35.679+00',	'2023-09-23 06:52:35.679+00',	29,	4),
('2023-09-26 05:15:49.757+00',	'2023-09-26 05:15:49.757+00',	35,	3),
('2023-09-26 05:15:49.757+00',	'2023-09-26 05:15:49.757+00',	35,	18),
('2023-09-26 05:47:28.587+00',	'2023-09-26 05:47:28.587+00',	36,	3);

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
    CONSTRAINT "Users_email_key1" UNIQUE ("email"),
    CONSTRAINT "Users_email_key10" UNIQUE ("email"),
    CONSTRAINT "Users_email_key11" UNIQUE ("email"),
    CONSTRAINT "Users_email_key12" UNIQUE ("email"),
    CONSTRAINT "Users_email_key13" UNIQUE ("email"),
    CONSTRAINT "Users_email_key14" UNIQUE ("email"),
    CONSTRAINT "Users_email_key15" UNIQUE ("email"),
    CONSTRAINT "Users_email_key16" UNIQUE ("email"),
    CONSTRAINT "Users_email_key17" UNIQUE ("email"),
    CONSTRAINT "Users_email_key18" UNIQUE ("email"),
    CONSTRAINT "Users_email_key19" UNIQUE ("email"),
    CONSTRAINT "Users_email_key2" UNIQUE ("email"),
    CONSTRAINT "Users_email_key20" UNIQUE ("email"),
    CONSTRAINT "Users_email_key21" UNIQUE ("email"),
    CONSTRAINT "Users_email_key22" UNIQUE ("email"),
    CONSTRAINT "Users_email_key23" UNIQUE ("email"),
    CONSTRAINT "Users_email_key24" UNIQUE ("email"),
    CONSTRAINT "Users_email_key25" UNIQUE ("email"),
    CONSTRAINT "Users_email_key26" UNIQUE ("email"),
    CONSTRAINT "Users_email_key27" UNIQUE ("email"),
    CONSTRAINT "Users_email_key28" UNIQUE ("email"),
    CONSTRAINT "Users_email_key29" UNIQUE ("email"),
    CONSTRAINT "Users_email_key3" UNIQUE ("email"),
    CONSTRAINT "Users_email_key4" UNIQUE ("email"),
    CONSTRAINT "Users_email_key5" UNIQUE ("email"),
    CONSTRAINT "Users_email_key6" UNIQUE ("email"),
    CONSTRAINT "Users_email_key7" UNIQUE ("email"),
    CONSTRAINT "Users_email_key8" UNIQUE ("email"),
    CONSTRAINT "Users_email_key9" UNIQUE ("email"),
    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "Users" ("id", "first_name", "last_name", "date_of_birth", "joining_date", "specialty", "email", "password", "employee_id", "azure_id", "is_active", "image_url", "createdAt", "updatedAt", "RoleId", "DesignationId") VALUES
(28,	'Vishesh',	'Jakhar',	'2000-11-08',	'2016-12-12',	'Clinic EO',	'vishesh.jakhar@minditsystems.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6800',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-06-24 08:30:29.205841+00',	1,	1),
(1,	'Dheeraj',	'Verma',	'1998-11-11',	'2011-09-18',	'Clinic EO',	'dheeraj.verma@minditsystems.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6186',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	'https://valerion-health-app.s3.us-east-2.amazonaws.com/user-images/PP-Dheeraj-Verma-1-1692349288.jpg',	'2023-06-24 08:30:29.167144+00',	'2023-08-18 09:01:30.960541+00',	1,	1),
(30,	'Mind IT',	'Dev',	'2000-11-08',	'2016-12-12',	'Clinic EO',	'dev.m@minditsystems1.onmicrosoft.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'9000',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-06-24 08:30:29.205841+00',	1,	1),
(32,	'Mind IT',	'Admin 2',	'2000-11-08',	'2016-12-12',	'Clinic EO',	'dev.admin.clone2@minditsystems1.onmicrosoft.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'9002',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-06-24 08:30:29.205841+00',	5,	12),
(31,	'Mind IT',	'Admin 1',	'2000-11-08',	'2016-12-12',	'Clinic EO',	'dev.admin.clone1@minditsystems1.onmicrosoft.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'9001',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-06-24 08:30:29.205841+00',	5,	12),
(27,	'Rashaad',	'Hussain',	'2000-11-08',	'2016-12-12',	'Clinic EO',	'rashaad.hussain@minditsystems.come',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6616',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	'https://valerion-health-app.s3.us-east-2.amazonaws.com/user-images/PP-Rashaad-Hussain-27-1692593309.png',	'2023-06-24 08:30:29.167144+00',	'2023-08-21 04:48:34.352018+00',	1,	1),
(36,	'Harsh',	'Gupta',	'2023-09-04',	'2023-09-26',	NULL,	'harsh.gupta@minditsystems.com',	'$2b$10$.MfF3z/4R3nvhfr3my7xD.lxRbHqhi1EI95Yg/goiRhSYgL52Se6e',	'4988',	'86b89d16-1321-4e0e-ae9c-a60c70fa4806',	't',	'https://valerion-health-app.s3.us-east-2.amazonaws.com/user-images/PP-Harsh-Gupta-36-1695710367.PNG',	'2023-09-26 05:47:28.432043+00',	'2023-09-26 06:39:28.828446+00',	1,	5),
(33,	'Rashaad',	'Anwar Hussain',	'2002-09-10',	'2023-09-19',	NULL,	'rashaad.hussain@minditsystems.com',	'$2b$10$NzudOg/AkEEQms7bK5/W8OMQmv7TYC3DPvo3CDL240q59GqbrIvSe',	'9005',	'3002c35a-2040-4932-a42f-223b40dc1b39',	't',	NULL,	'2023-09-19 12:24:39.162655+00',	'2023-09-19 12:24:41.272404+00',	1,	5),
(34,	'V Sri',	'Ram',	'2023-09-01',	'2023-09-21',	NULL,	'v.sriram@minditsystems.com',	'$2b$10$i4C0sa.9uCZMcpnxyJ6Y3ea/.E0yzK7SnVKcn23x7fhQAjahX20I.',	'2555',	'93a1d190-ce7b-49ea-9c4f-24ad8786d197',	't',	NULL,	'2023-09-21 08:59:12.040985+00',	'2023-09-21 08:59:16.474097+00',	1,	3),
(29,	'Misha',	'Kumari',	'2000-11-08',	'2016-12-12',	'Clinic EO',	'misha.kumari@minditsystems.com',	'$2b$10$Wp3IAEPgiWdbwq2/ApGCb.LzHILPrZ1i3yq/PeHtNcY2Fz9izdmWy',	'6830',	'c7085e43-476f-465b-9a87-ceedb925b2b2',	't',	NULL,	'2023-06-24 08:30:29.167144+00',	'2023-09-23 07:27:14.358472+00',	1,	3),
(35,	'Sanjay',	'Barman',	'2004-02-18',	'2023-09-26',	NULL,	'sanjay.barman@minditsystems.com',	'$2b$10$P1tGiJN0F9HpiG.jOsbvmOoAQpae2W4y98arUjT3q2jFslCw6OukS',	'2998',	'722b2837-00b2-4b4d-a5fa-7a5ae4c8a051',	't',	NULL,	'2023-09-26 05:15:49.626327+00',	'2023-09-26 05:15:50.837678+00',	1,	5);

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
(1,	1,	NULL,	NULL,	'create',	1,	NULL,	'2023-08-16 13:13:22.974+00'),
(2,	2,	NULL,	NULL,	'create',	1,	NULL,	'2023-08-17 05:56:44.621+00'),
(3,	3,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-18 11:54:07.451+00'),
(4,	4,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-19 12:54:17.066+00'),
(5,	5,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 04:36:56.969+00'),
(6,	6,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 04:38:54.587+00'),
(7,	7,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 05:48:37.259+00'),
(8,	8,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 05:49:54.473+00'),
(9,	9,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 05:53:37.742+00'),
(10,	10,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 06:18:24.357+00'),
(11,	11,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 06:37:10.934+00'),
(12,	12,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 07:17:03.73+00'),
(13,	13,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 07:18:55.95+00'),
(14,	14,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 07:19:53.971+00'),
(15,	15,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 07:22:59.764+00'),
(16,	29,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 07:34:24.766+00'),
(17,	30,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 08:53:54.479+00'),
(18,	31,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 08:55:45.377+00'),
(19,	32,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-21 09:02:46.457+00'),
(20,	33,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 09:43:47.564+00'),
(21,	34,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-21 09:58:21.494+00'),
(22,	35,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-24 05:49:53.987+00'),
(23,	36,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-24 08:55:27.087+00'),
(24,	37,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-24 09:23:02.088+00'),
(25,	38,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-24 09:23:47.766+00'),
(26,	39,	NULL,	NULL,	'create',	27,	NULL,	'2023-08-25 07:10:49.611+00'),
(27,	40,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-29 05:38:11.754+00'),
(28,	70,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-29 07:18:55.448+00'),
(29,	71,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-29 08:26:18.09+00'),
(30,	72,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-29 08:53:03.839+00'),
(31,	73,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-29 09:05:24.48+00'),
(32,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 11:02:26.098+00'),
(33,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 11:02:46.705+00'),
(34,	73,	NULL,	NULL,	'allocate',	28,	29,	'2023-08-29 11:12:16.459+00'),
(35,	73,	NULL,	NULL,	'allocate',	28,	29,	'2023-08-29 11:16:28.879+00'),
(36,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 11:46:33.718+00'),
(37,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 12:01:53.833+00'),
(38,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 12:05:01.568+00'),
(39,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 12:05:01.611+00'),
(40,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 12:43:45.358+00'),
(41,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-29 12:58:26.71+00'),
(42,	73,	NULL,	NULL,	'allocate',	28,	29,	'2023-08-31 04:37:26.753+00'),
(43,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 04:37:34.201+00'),
(44,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 04:58:39.94+00'),
(45,	73,	NULL,	NULL,	'allocate',	28,	1,	'2023-08-31 04:59:40.703+00'),
(46,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 04:59:50.851+00'),
(47,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 05:00:30.241+00'),
(48,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 05:32:21.298+00'),
(49,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 05:32:45.522+00'),
(50,	73,	NULL,	NULL,	'allocate',	28,	27,	'2023-08-31 05:34:38.017+00'),
(51,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 05:42:07.119+00'),
(52,	73,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 05:48:12.174+00'),
(53,	74,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-31 05:57:13.634+00'),
(54,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:03:04.602+00'),
(55,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:21:44.646+00'),
(56,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:22:39.545+00'),
(57,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:23:42.742+00'),
(58,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:40:36.813+00'),
(59,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:41:37.676+00'),
(60,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:42:30.305+00'),
(61,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:43:14.98+00'),
(62,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 06:43:58.893+00'),
(63,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 07:09:01.695+00'),
(64,	74,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 07:10:02.748+00'),
(65,	74,	NULL,	NULL,	'allocate',	28,	29,	'2023-08-31 07:14:19.312+00'),
(66,	74,	NULL,	NULL,	'allocate',	28,	1,	'2023-08-31 07:14:36.74+00'),
(67,	75,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-31 07:22:02.65+00'),
(68,	75,	NULL,	NULL,	'allocate',	28,	29,	'2023-08-31 07:23:09.974+00'),
(69,	75,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 07:23:22.481+00'),
(70,	76,	NULL,	NULL,	'create',	28,	NULL,	'2023-08-31 12:55:23.205+00'),
(71,	76,	NULL,	NULL,	'allocate',	28,	28,	'2023-08-31 12:55:29.09+00'),
(72,	76,	NULL,	NULL,	'allocate',	28,	27,	'2023-08-31 12:57:04.349+00'),
(73,	77,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-01 05:02:23.583+00'),
(74,	77,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-01 06:29:35.975+00'),
(75,	77,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-01 06:29:50.133+00'),
(76,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:32:22.05+00'),
(77,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:34:03.597+00'),
(78,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:35:32.223+00'),
(79,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:36:16.408+00'),
(80,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:36:56.186+00'),
(81,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:38:50.482+00'),
(82,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:42:13.399+00'),
(83,	77,	NULL,	NULL,	'reallocate',	28,	28,	'2023-09-01 12:53:19.072+00'),
(84,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-01 12:54:46.814+00'),
(85,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:01:28.022+00'),
(86,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:09:52.954+00'),
(87,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:14:18.449+00'),
(88,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:19:29.722+00'),
(89,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:19:38.183+00'),
(90,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:19:47.09+00'),
(91,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:54:05.11+00'),
(92,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:54:11.62+00'),
(93,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 05:54:18.597+00'),
(94,	76,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-04 06:28:22.368+00'),
(95,	76,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-04 06:28:43.118+00'),
(96,	78,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-04 10:01:38.341+00'),
(97,	78,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-04 10:01:51.472+00'),
(98,	78,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-04 10:02:21.486+00'),
(99,	78,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-04 10:07:08.04+00'),
(100,	79,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-04 10:28:53.805+00'),
(101,	79,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-04 10:29:10.808+00'),
(102,	79,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-04 10:29:16.716+00'),
(103,	79,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-04 10:29:41.759+00'),
(104,	79,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-04 10:29:49.859+00'),
(105,	79,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-04 11:02:11.513+00'),
(106,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 11:08:49.248+00'),
(107,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 11:08:55.05+00'),
(108,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-04 11:09:03.296+00'),
(109,	80,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-04 13:06:16.02+00'),
(110,	81,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-04 13:09:58.671+00'),
(111,	82,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 04:42:45.481+00'),
(112,	84,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 04:46:56.361+00'),
(113,	79,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-05 05:24:11.434+00'),
(114,	79,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-05 05:24:30.301+00'),
(115,	85,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-05 05:26:50.948+00'),
(116,	85,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-05 05:27:08.216+00'),
(117,	94,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 06:39:49.599+00'),
(118,	95,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 06:43:04.382+00'),
(119,	96,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 06:47:07.26+00'),
(120,	97,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 06:52:43.338+00'),
(121,	100,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 06:54:54.326+00'),
(122,	101,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 06:58:09.513+00'),
(123,	102,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:11:35.151+00'),
(124,	103,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:14:05.015+00'),
(125,	104,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:16:01.687+00'),
(126,	105,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:18:20.625+00'),
(127,	106,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:20:57.326+00'),
(128,	107,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:23:26.54+00'),
(129,	108,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:28:14.741+00'),
(130,	109,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:31:45.848+00'),
(131,	110,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:35:35.025+00'),
(132,	111,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 07:36:08.936+00'),
(133,	112,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 08:31:46.188+00'),
(134,	113,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 08:32:55.838+00'),
(135,	114,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-05 09:41:46.681+00'),
(136,	115,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 13:12:57.851+00'),
(137,	116,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-05 13:15:32.042+00'),
(138,	117,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-05 13:16:00.79+00'),
(139,	118,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-05 13:16:40.704+00'),
(140,	119,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-06 05:09:13.775+00'),
(141,	120,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 06:06:58.99+00'),
(142,	121,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 06:08:35.383+00'),
(143,	122,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 06:12:53.178+00'),
(144,	123,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:20:23.181+00'),
(145,	124,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:24:51.541+00'),
(146,	125,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:26:55.11+00'),
(147,	126,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:34:18.916+00'),
(148,	127,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:35:49.23+00'),
(149,	128,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:36:34.92+00'),
(150,	129,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:40:37.232+00'),
(151,	130,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 07:41:09.373+00'),
(152,	131,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:21:56.236+00'),
(153,	132,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:22:34.239+00'),
(154,	133,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:22:59.749+00'),
(155,	134,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:40:02.843+00'),
(156,	135,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:41:56.562+00'),
(157,	136,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:42:24.909+00'),
(158,	137,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 08:44:46.731+00'),
(159,	138,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:07:18.157+00'),
(160,	139,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:09:01.933+00'),
(161,	140,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:09:57.798+00'),
(162,	141,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:21:28.132+00'),
(163,	142,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:21:41.726+00'),
(164,	143,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:28:17.988+00'),
(165,	144,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:28:44.962+00'),
(166,	145,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:29:03.226+00'),
(167,	146,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:30:16.901+00'),
(168,	147,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:30:38.415+00'),
(169,	148,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:31:04.683+00'),
(170,	149,	NULL,	NULL,	'create',	30,	NULL,	'2023-09-06 09:50:57.686+00'),
(171,	150,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 09:53:03.798+00'),
(172,	151,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 10:32:29.87+00'),
(173,	152,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 11:45:47.314+00'),
(174,	153,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 12:15:56.249+00'),
(175,	154,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-06 12:23:03.991+00'),
(176,	155,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 08:34:38.593+00'),
(177,	156,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 08:40:46.587+00'),
(178,	157,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 08:43:36.165+00'),
(179,	158,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 08:43:38.999+00'),
(180,	159,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 08:43:42.912+00'),
(181,	160,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 10:39:00.289+00'),
(182,	161,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-08 11:36:13.416+00'),
(183,	75,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-11 12:30:31.686+00'),
(184,	75,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-11 12:30:44.182+00'),
(185,	75,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-11 12:31:10.687+00'),
(186,	75,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-11 12:33:01.81+00'),
(187,	75,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-11 12:35:17.462+00'),
(188,	75,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-11 12:38:13.198+00'),
(189,	163,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-11 12:57:09.414+00'),
(190,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-12 05:58:00.683+00'),
(191,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-12 05:59:41.537+00'),
(192,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-12 06:06:52.201+00'),
(193,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-12 06:07:13.153+00'),
(194,	77,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-12 06:07:41.739+00'),
(195,	163,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-12 08:40:19.009+00'),
(196,	164,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-12 10:23:31.575+00'),
(197,	164,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-12 10:23:49.818+00'),
(198,	164,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-12 10:23:59.526+00'),
(199,	165,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-12 11:10:24.434+00'),
(200,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-12 11:10:42.49+00'),
(201,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 09:46:52.805+00'),
(202,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 09:47:00.652+00'),
(203,	165,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-13 09:47:05.527+00'),
(204,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 10:18:28.184+00'),
(205,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 10:29:27.156+00'),
(206,	165,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-13 10:31:27.243+00'),
(207,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 10:42:44.822+00'),
(208,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 10:56:06.641+00'),
(209,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:09:42.574+00'),
(210,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:14:59.49+00'),
(211,	165,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-13 11:15:07.539+00'),
(212,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:39:43.042+00'),
(213,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:39:53.945+00'),
(214,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:42:56.593+00'),
(215,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:46:20.681+00'),
(216,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 11:56:18.599+00'),
(217,	165,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-13 12:32:24.778+00'),
(218,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 12:35:50.363+00'),
(219,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 12:37:34.188+00'),
(220,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 12:39:02.965+00'),
(221,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 12:48:01.663+00'),
(222,	165,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-13 12:48:10.255+00'),
(223,	165,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-13 12:48:16.374+00'),
(224,	165,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-13 12:54:15.848+00'),
(225,	166,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-14 06:07:51.75+00'),
(226,	167,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-14 10:22:40.733+00'),
(227,	164,	NULL,	NULL,	'allocate',	29,	29,	'2023-09-14 10:29:01.266+00'),
(228,	167,	NULL,	NULL,	'allocate',	29,	29,	'2023-09-14 11:10:48.543+00'),
(229,	168,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-14 11:14:18.435+00'),
(230,	168,	NULL,	NULL,	'reallocate',	29,	NULL,	'2023-09-15 05:31:07.423+00'),
(231,	167,	NULL,	NULL,	'allocate',	29,	28,	'2023-09-15 05:32:19.725+00'),
(232,	169,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-15 05:34:17.177+00'),
(233,	170,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-15 05:53:58.281+00'),
(234,	164,	NULL,	NULL,	'reallocate',	29,	NULL,	'2023-09-15 06:37:57.041+00'),
(235,	173,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-15 07:03:25.343+00'),
(236,	167,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-15 07:06:01.424+00'),
(237,	174,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-15 09:08:15.635+00'),
(238,	175,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-15 10:38:01.75+00'),
(239,	175,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-15 10:50:03.704+00'),
(240,	175,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 10:52:13.565+00'),
(241,	175,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 10:52:22.166+00'),
(242,	175,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-15 11:09:41.154+00'),
(243,	175,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-15 11:09:51.169+00'),
(244,	175,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-15 11:09:54.196+00'),
(245,	175,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-15 11:48:00.466+00'),
(246,	175,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-15 11:48:03.746+00'),
(247,	175,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-15 11:48:06.623+00'),
(248,	175,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 11:48:09.852+00'),
(249,	175,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-15 11:48:13.623+00'),
(250,	175,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 12:04:29.552+00'),
(251,	175,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-15 12:04:35.59+00'),
(252,	175,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-15 12:06:53.116+00'),
(253,	176,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-15 12:13:13.891+00'),
(254,	176,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 12:21:54.513+00'),
(255,	176,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-15 12:21:59.003+00'),
(256,	175,	NULL,	NULL,	'allocate',	29,	28,	'2023-09-15 12:25:01.14+00'),
(257,	176,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 12:55:31.492+00'),
(258,	176,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-15 12:55:37.1+00'),
(259,	176,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-15 13:00:26.473+00'),
(260,	176,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-15 13:00:31.066+00'),
(261,	176,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-15 13:00:36.017+00'),
(262,	176,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-16 05:33:25.48+00'),
(263,	176,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-16 05:33:29.914+00'),
(264,	176,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-16 05:33:33.698+00'),
(265,	176,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-16 05:33:37.464+00'),
(266,	176,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-16 05:33:41.119+00'),
(267,	176,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-16 05:36:21.436+00'),
(268,	176,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-16 05:36:26.697+00'),
(269,	176,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-16 05:36:32.934+00'),
(270,	176,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-16 05:36:41.202+00'),
(271,	176,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-16 05:36:54.559+00'),
(272,	176,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-16 06:16:05.345+00'),
(273,	176,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-16 06:16:09.462+00'),
(274,	176,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-16 06:16:13.713+00'),
(275,	176,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-16 06:16:21.853+00'),
(276,	176,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-16 06:16:39.771+00'),
(277,	185,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-16 09:49:41.218+00'),
(278,	197,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-16 10:01:50.664+00'),
(279,	198,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-16 10:04:00.744+00'),
(280,	199,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-16 10:04:17.934+00'),
(281,	200,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-16 10:04:56.711+00'),
(282,	200,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-16 10:07:01.158+00'),
(283,	200,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-16 10:37:33.474+00'),
(284,	198,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-16 10:47:20.112+00'),
(285,	198,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-16 10:47:24.484+00'),
(286,	199,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-16 10:47:47.023+00'),
(287,	199,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-16 10:47:50.33+00'),
(288,	199,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-18 10:53:37.955+00'),
(289,	199,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-18 10:53:46.267+00'),
(290,	199,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-18 10:53:55.578+00'),
(291,	200,	NULL,	NULL,	'reallocate',	27,	NULL,	'2023-09-18 12:48:35.879+00'),
(292,	201,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 04:24:07.791+00'),
(293,	201,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-19 04:24:42.111+00'),
(294,	201,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-19 04:32:33.405+00'),
(295,	202,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 04:38:22.965+00'),
(296,	202,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-19 04:39:53.076+00'),
(297,	202,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-19 04:40:06.93+00'),
(298,	202,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-19 04:40:11.604+00'),
(299,	203,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 04:56:37.95+00'),
(300,	204,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 05:18:21.452+00'),
(301,	213,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 05:44:44.037+00'),
(302,	229,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:18:24.717+00'),
(303,	230,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:23:18.855+00'),
(304,	231,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:43:40.653+00'),
(305,	232,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:44:39.785+00'),
(306,	233,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:51:57.661+00'),
(307,	234,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:55:28.219+00'),
(308,	235,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 06:56:12.605+00'),
(309,	236,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 07:09:52.005+00'),
(310,	236,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-19 07:14:41.074+00'),
(311,	237,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-19 07:16:00.497+00'),
(312,	238,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-19 08:32:23.244+00'),
(313,	239,	NULL,	NULL,	'create',	27,	NULL,	'2023-09-19 09:03:20.021+00'),
(314,	240,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-19 09:20:05.754+00'),
(315,	240,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-19 09:29:28.906+00'),
(316,	240,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-19 09:29:32.995+00'),
(317,	236,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-19 10:21:25.505+00'),
(318,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 04:57:19.947+00'),
(319,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:10:23.139+00'),
(320,	239,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-20 05:12:21.887+00'),
(321,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:17:49.945+00'),
(322,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:20:47.027+00'),
(323,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:20:52.682+00'),
(324,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:20:59.435+00'),
(325,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:21:59.458+00'),
(326,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:25:07.283+00'),
(327,	241,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-20 05:27:39.361+00'),
(328,	242,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-20 05:28:28.584+00'),
(329,	243,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-20 05:31:07.71+00'),
(330,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:33:03.621+00'),
(331,	244,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-20 05:33:57.038+00'),
(332,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:34:38.489+00'),
(333,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:35:18.743+00'),
(334,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:43:29.623+00'),
(335,	245,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-20 05:48:13.194+00'),
(336,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:50:46.495+00'),
(337,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:51:58.682+00'),
(338,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 05:53:55.68+00'),
(339,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:14:11.509+00'),
(340,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:15:56.468+00'),
(341,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:18:10.879+00'),
(342,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:29:17.772+00'),
(343,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:39:26.803+00'),
(344,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:39:34.83+00'),
(345,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:39:41.623+00'),
(346,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:39:46.17+00'),
(347,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:39:52.152+00'),
(348,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:41:00.837+00'),
(349,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:44:14.493+00'),
(350,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:46:05.144+00'),
(351,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:47:59.308+00'),
(352,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:48:45.834+00'),
(353,	239,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 06:48:51.265+00'),
(354,	247,	NULL,	NULL,	'create',	1,	NULL,	'2023-09-20 07:00:42.015+00'),
(355,	248,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-20 07:34:30.104+00'),
(356,	247,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 09:54:45.4+00'),
(357,	247,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 09:55:04.117+00'),
(358,	247,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 09:55:10.663+00'),
(359,	247,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 09:57:46.064+00'),
(360,	247,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-20 09:57:56.433+00'),
(361,	247,	NULL,	NULL,	'allocate',	28,	31,	'2023-09-20 09:59:03.603+00'),
(362,	247,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-20 09:59:12.577+00'),
(363,	247,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-20 09:59:19.906+00'),
(364,	247,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-20 09:59:30.759+00'),
(365,	247,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-20 10:01:59.209+00'),
(366,	248,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-20 10:37:39.18+00'),
(367,	248,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-20 10:37:53.781+00'),
(368,	240,	NULL,	NULL,	'allocate',	28,	31,	'2023-09-20 10:40:29.028+00'),
(369,	240,	NULL,	NULL,	'allocate',	28,	30,	'2023-09-20 10:40:41.132+00'),
(370,	240,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-20 10:40:49.354+00'),
(371,	249,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-20 12:14:12.573+00'),
(372,	249,	NULL,	NULL,	'allocate',	28,	27,	'2023-09-20 12:20:16.439+00'),
(373,	249,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-20 12:20:20.225+00'),
(374,	249,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-20 12:21:25.176+00'),
(375,	249,	NULL,	NULL,	'allocate',	28,	33,	'2023-09-20 12:21:29.161+00'),
(376,	249,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-20 12:21:32.853+00'),
(377,	249,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-21 04:47:26.854+00'),
(378,	249,	NULL,	NULL,	'reallocate',	28,	NULL,	'2023-09-21 04:47:37.456+00'),
(379,	247,	NULL,	NULL,	'allocate',	28,	34,	'2023-09-21 12:27:01.458+00'),
(380,	250,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-21 12:28:24.95+00'),
(381,	250,	NULL,	NULL,	'allocate',	28,	34,	'2023-09-21 12:31:43.045+00'),
(382,	250,	NULL,	NULL,	'allocate',	28,	1,	'2023-09-21 12:31:43.1+00'),
(383,	285,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-23 06:10:23.99+00'),
(384,	286,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-23 06:14:52.619+00'),
(385,	287,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-23 06:15:08.167+00'),
(386,	288,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-23 06:15:34.163+00'),
(387,	290,	NULL,	NULL,	'create',	29,	NULL,	'2023-09-23 06:16:04.316+00'),
(388,	291,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-23 07:13:16.252+00'),
(389,	292,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-23 07:14:43.944+00'),
(390,	292,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-23 09:12:31.44+00'),
(391,	291,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-23 09:13:11.745+00'),
(392,	291,	NULL,	NULL,	'allocate',	28,	29,	'2023-09-23 09:13:15.188+00'),
(393,	292,	NULL,	NULL,	'allocate',	28,	28,	'2023-09-23 09:14:07.365+00'),
(394,	313,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-24 17:14:28.895+00'),
(395,	343,	NULL,	NULL,	'create',	28,	NULL,	'2023-09-25 04:32:12.953+00'),
(396,	346,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-25 12:35:14.856+00'),
(397,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-25 12:37:36.045+00'),
(398,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-25 12:45:27.7+00'),
(399,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-25 12:47:08.473+00'),
(400,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-25 12:50:36.217+00'),
(401,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-25 13:01:07.014+00'),
(402,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-26 05:51:27.283+00'),
(403,	346,	NULL,	NULL,	'reallocate',	33,	NULL,	'2023-09-26 05:51:42.183+00'),
(404,	347,	NULL,	NULL,	'create',	33,	NULL,	'2023-09-27 06:48:16.024+00'),
(405,	351,	NULL,	NULL,	'create',	35,	NULL,	'2023-09-28 05:03:48.21+00'),
(406,	352,	NULL,	NULL,	'create',	36,	NULL,	'2023-09-28 08:27:47.844+00');

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
    CONSTRAINT "Worklists_worklist_no_key" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key1" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key2" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key3" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key4" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key5" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key6" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key7" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key8" UNIQUE ("worklist_no"),
    CONSTRAINT "Worklists_worklist_no_key9" UNIQUE ("worklist_no")
) WITH (oids = false);

INSERT INTO "Worklists" ("id", "worklist_no", "start_date", "end_date", "created_by", "status", "createdAt", "updatedAt", "LocationId", "ClientId", "SpecialtyId", "ProcessId", "WorklistStatusId", "changed_by", "name", "deletedAt") VALUES
(292,	'P-0002',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-23 07:14:43.944+00',	'2023-09-23 09:12:31.514+00',	NULL,	2,	3,	1,	2,	28,	'Algo',	NULL),
(291,	'P-0001',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-23 07:13:16.252+00',	'2023-09-23 09:13:11.889+00',	NULL,	2,	3,	1,	2,	28,	'Helio Next',	NULL),
(306,	'P-0003',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 16:47:50.793+00',	'2023-09-24 16:47:50.793+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(307,	'P-0004',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 16:50:26.592+00',	'2023-09-24 16:50:26.592+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(308,	'P-0005',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 16:51:06.387+00',	'2023-09-24 16:51:06.387+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(309,	'P-0006',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 16:56:34.818+00',	'2023-09-24 16:56:34.818+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(310,	'P-0007',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 16:59:21.568+00',	'2023-09-24 16:59:21.568+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(311,	'P-0008',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:04:16.09+00',	'2023-09-24 17:04:16.09+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(312,	'P-0009',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:13:33.753+00',	'2023-09-24 17:13:33.753+00',	NULL,	2,	2,	1,	1,	28,	'H1',	NULL),
(313,	'P-0010',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:14:28.895+00',	'2023-09-24 17:14:28.895+00',	NULL,	1,	2,	1,	1,	28,	'q',	NULL),
(314,	'P-0011',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:14:45.761+00',	'2023-09-24 17:14:45.761+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(315,	'P-0012',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:15:09.34+00',	'2023-09-24 17:15:09.34+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(316,	'P-0013',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:18:00.824+00',	'2023-09-24 17:18:00.824+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(317,	'P-0014',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:19:14.662+00',	'2023-09-24 17:19:14.662+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(318,	'P-0015',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:20:59.836+00',	'2023-09-24 17:20:59.836+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(319,	'P-0016',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:21:08.07+00',	'2023-09-24 17:21:08.07+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(320,	'P-0017',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:23:05.061+00',	'2023-09-24 17:23:05.061+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(321,	'P-0018',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:24:36.461+00',	'2023-09-24 17:24:36.461+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(322,	'P-0019',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:25:33.583+00',	'2023-09-24 17:25:33.583+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(323,	'P-0020',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:26:29.686+00',	'2023-09-24 17:26:29.686+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(324,	'P-0021',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:28:08.621+00',	'2023-09-24 17:28:08.621+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(325,	'P-0022',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:29:43.092+00',	'2023-09-24 17:29:43.092+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(326,	'P-0023',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:29:46.874+00',	'2023-09-24 17:29:46.874+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(327,	'P-0024',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:29:48.153+00',	'2023-09-24 17:29:48.153+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(328,	'P-0025',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:29:55.88+00',	'2023-09-24 17:29:55.88+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(329,	'P-0026',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:29:56.775+00',	'2023-09-24 17:29:56.775+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(330,	'P-0027',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:29:58.691+00',	'2023-09-24 17:29:58.691+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(331,	'P-0028',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:33:08.176+00',	'2023-09-24 17:33:08.176+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(332,	'P-0029',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:37:46.716+00',	'2023-09-24 17:37:46.716+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(333,	'P-0030',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:38:58.721+00',	'2023-09-24 17:38:58.721+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(334,	'P-0031',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:39:23.084+00',	'2023-09-24 17:39:23.084+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(335,	'P-0032',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:39:53.387+00',	'2023-09-24 17:39:53.387+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(336,	'P-0033',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:40:56.048+00',	'2023-09-24 17:40:56.048+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(337,	'P-0034',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:41:43.012+00',	'2023-09-24 17:41:43.012+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(338,	'P-0035',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:43:11.807+00',	'2023-09-24 17:43:11.807+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(339,	'P-0036',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:44:15.062+00',	'2023-09-24 17:44:15.062+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(340,	'P-0037',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-24 17:52:28.51+00',	'2023-09-24 17:52:28.51+00',	NULL,	1,	2,	2,	1,	28,	'qqq',	NULL),
(341,	'P-0038',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-25 04:29:14.087+00',	'2023-09-25 04:29:14.087+00',	NULL,	2,	4,	1,	1,	28,	'Testing Bug',	NULL),
(342,	'P-0039',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-25 04:30:14.794+00',	'2023-09-25 04:30:14.794+00',	NULL,	2,	4,	1,	1,	28,	'Testing Bug',	NULL),
(343,	'P-0040',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-25 04:32:12.953+00',	'2023-09-25 04:32:12.953+00',	NULL,	1,	4,	2,	1,	28,	'testing',	NULL),
(344,	'P-0041',	'2023-09-25',	'2023-10-12',	33,	1,	'2023-09-25 12:33:38.447+00',	'2023-09-25 12:33:38.447+00',	NULL,	2,	3,	1,	1,	33,	'Mojo Fitness',	NULL),
(348,	'P-0045',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-27 07:07:45.686+00',	'2023-09-27 07:07:45.686+00',	NULL,	2,	4,	1,	1,	28,	'TestingAdmins',	NULL),
(349,	'P-0046',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-27 07:07:47.771+00',	'2023-09-27 07:07:47.771+00',	NULL,	2,	4,	1,	1,	28,	'TestingAdmins',	NULL),
(350,	'P-0047',	'2023-09-01',	'2023-09-30',	28,	1,	'2023-09-27 07:10:24.057+00',	'2023-09-27 07:10:24.057+00',	NULL,	2,	3,	1,	1,	28,	'1000',	NULL),
(347,	'P-0044',	'2023-09-01',	'2023-09-30',	33,	1,	'2023-09-27 06:48:16.024+00',	'2023-09-27 06:48:16.024+00',	NULL,	1,	3,	1,	1,	33,	'Mind IT WMT',	NULL),
(345,	'P-0042',	'2023-09-25',	'2023-10-12',	33,	1,	'2023-09-25 12:33:54.393+00',	'2023-09-25 12:33:54.393+00',	NULL,	2,	3,	1,	1,	33,	'Mojo Fitness 1',	NULL),
(346,	'P-0043',	'2023-09-25',	'2023-10-12',	33,	1,	'2023-09-25 12:35:14.856+00',	'2023-09-25 12:35:14.856+00',	NULL,	2,	3,	1,	1,	33,	'Mojo Fitness 2',	NULL),
(351,	'P-0048',	'2023-09-29',	'2023-10-26',	35,	1,	'2023-09-28 05:03:48.21+00',	'2023-09-28 05:03:48.21+00',	NULL,	1,	6,	4,	1,	35,	'Demmy Project',	NULL),
(352,	'P-0049',	'2023-09-28',	'2023-10-04',	36,	1,	'2023-09-28 08:27:47.844+00',	'2023-09-28 08:27:47.844+00',	NULL,	1,	3,	1,	1,	36,	'demo',	NULL);

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

-- 2023-09-29 05:48:53.516584+00
