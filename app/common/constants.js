const milestoneConstants = {
    TODO_MILESTONE_ID: 1,
    IN_PROGRESS_MILESTONE_ID: 2,
    READY_FOR_QA_MILESTONE_ID: 3,
    QA_IN_PROGRESS_MILESTONE_ID: 4,
    READY_FOR_CLIENT_REVIEW_MILESTONE_ID: 5,
    APPROVED_MILESTONE_ID: 6
};

const chartStatusConstants = {
    OPEN_STATUS_ID: 1,
    COMPLETE_STATUS_ID: 2,
    INCOMPLETE_STATUS_ID: 3
};

const userRoleConstants = {
    MANAGER_ID: 1,
    TEAM_LEAD_ID: 2,
    CODER_ID: 3,
    MEMBER_ID: 4,
    ADMIN_ID: 5
};

const priorityConstants = {
    CRITICAL_PRIORITY_ID: 1,
    HIGH_PRIORITY_ID: 2,
    MED_PRIORITY_ID: 3,
    LOW_PRIORITY_ID: 4
};

const commentFlagConstants = {
    ACCEPTED_COMMENT_FLAG_ID: 1,
    REJECTED_COMMENT_FLAG_ID: 2,
    NEUTRAL_COMMENT_FLAG_ID: 3
};

const qcStatusConstants = {
    QC_PASS_ID: 1,
    QC_FAIL_ID: 2
};

const notificationTypeContants = {
    TASK_ASSIGNMENT : 1,
    LOG_HOUR: 2
}

const worklistStatusIdConstants = {
    OPEN_STATUS_ID: 1,
    IN_PROGRESS_STATUS_ID: 2,
    ON_HOLD_STATUS_ID: 3,
    CLOSED_STATUS_ID: 4,
};

const userChangeConstants = {
    TASK_NO_CHANGE: "Task #",
    START_DATE_CHANGE: "Start Date",
    END_DATE_CHANGE: "End Date",
    HOLD_REASON_CHANGE: "Hold Reasons",
    DESCRIPTION_CHANGE: "Description",
}

const taskAuditLogTypeConstants = {
    CREATE: 1,
    ALLOCATE: 2,
    REALLOCATE: 3,
    DEV_IN_PROGRESS: 4,
    DEV_COMPLETE: 5,
    QA: 6,
    CLIENT_REVIEW: 7,
    DONE: 8
}

const regexPatterns = {
    DURATION_GLOBAL: /^[0-9]{1,2}:[0-5]{0,1}[0-9]{1}$|^[0-9]{1,2}h[0-5]{0,1}[0-9]{1}m$|^[0-9]{1,2}h$|^[0-5]{0,1}[0-9]{1}m$|^[0-9]{0,2}\.[0-9]{1,2}$/,
    DURATION_MINUTES_ONLY: /^[0-5]{0,1}[0-9]{1}m$/,
    USER_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
}

const sprintStatusIdConstants = {
    NOT_STARTED_STATUS_ID: 1,
    IN_PROGRESS_STATUS_ID: 2,
    COMPLETED_STATUS_ID: 3,
};

const tagConstants = {
    "UI DESIGN": 1,
    "CODING UNIT TESTING": 2,
    "TESTING": 3,
    "PROJECT MANAGEMENT": 4,
    "USER DOCUMENTATION": 5,
    "DEPLOYMENT": 6
}

module.exports = {
    milestoneConstants, chartStatusConstants, userRoleConstants, worklistStatusIdConstants,priorityConstants, 
    commentFlagConstants, qcStatusConstants, userChangeConstants, taskAuditLogTypeConstants, regexPatterns, sprintStatusIdConstants, notificationTypeContants,
    tagConstants
};
