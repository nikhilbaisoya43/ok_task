const nodemailer = require('nodemailer');
const getEmailTemplate = require('../common/email-templates/emailTemplate');
const logger = require('./winstonLogger');
const emailTemplateForNotifyingManager = require('../common/email-templates/emailTemplateForNotifyingManager')
const getEmailTemplateForNotLoggingHours = require('../common/email-templates/emailTemplateForNotLoggingHours');
const getEmailTemplateForRequestAccess = require('../common/email-templates/requestAccessTemplate');
const getEmailTemplateForGrantAccess = require('../common/email-templates/grantAccessTemplate');

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVICE,
    port: 587,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    }
});

// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.error("error in node mailer",error.message)
    } else {
        console.log(
            "Nodemailer server is verified and ready for emails!"
        );
    }
});

async function sendNotificationForNotLogging({assignee_name, email,date}){
    try{
        const emailText = "You are receiving this email as a notification for not logging in hours. Please login to the WMT portal for further details.";
        const emailHTML = getEmailTemplateForNotLoggingHours({assignee_name, date});

        let info = await transporter.sendMail({
            from: `"Mind IT Workflow Management" <${process.env.EMAIL_USERNAME}>`,
            to: `${email}`,
            bcc: [process.env.BCC_EMAIL ?? ""],
            subject: "Mind IT WMT | Missed Timesheet Logging",
            text: emailText,
            html: emailHTML
        });
            if (info.accepted.length !== 0) {
                return true;
            } else {
                return false;
            }
    }catch (error){
        logger.error(`Nodemailer: Could not send email to ${email}`);
    }
}

async function sendNotificationForNotLoggingForThreeDays(managerEmail, memberDetails, dates = [{ date: '' }, { date: '' }, { date: '' }]) {
    try {
        const [{ date: date1 = "" }, { date: date2 = "" }, { date: date3 = "" }] = dates;
        const emailText = "List of members who have not logged hours consecutively for the past three days";
        const emailHTML = emailTemplateForNotifyingManager(memberDetails, date1, date2, date3);

        let info = await transporter.sendMail({
            from: `"Mind IT Workflow Management" <${process.env.EMAIL_USERNAME}>`,
            to: managerEmail,
            bcc: [process.env.BCC_EMAIL ?? ""],
            subject: "Mind IT WMT | Missed Timesheet Logging - Summary",
            text: emailText,
            html: emailHTML
        });
        if (info.accepted.length !== 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        logger.error(`Nodemailer: Could not send email to ${managerEmail}`);
    }
}

async function sendNotificationMail({task_id, task_details, project_no, assignee_name, email}) {
    try {
        const emailText = "You are receiving this email as a notification for Tasks assigned to you. Please login to the WMT portal for further details.";
        const emailHTML = getEmailTemplate({task_id, task_details, project_no, assignee_name});

        let info = await transporter.sendMail({
            from: `"Mind IT Workflow Management" <${process.env.EMAIL_USERNAME}>`,
            to: `${email}`,
            subject: "Mind IT WMT | Task Notification",
            text: emailText,
            html: emailHTML
        });
        if (info.accepted.length !== 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        logger.error(`Nodemailer: Could not send email to ${email}`);
    }
}

async function sendRequestAccessNotificationMail({request_email, assignee_name, assignee_email}) {
    try {
        const emailText = "You are receiving this email as a notification for users that have requested access to the Portal. Please login to the WMT portal for further details.";
        const emailHTML = getEmailTemplateForRequestAccess({request_email, assignee_name});

        let info = await transporter.sendMail({
            from: `"Mind IT Workflow Management" <${process.env.EMAIL_USERNAME}>`,
            to: `${assignee_email}`,
            bcc: [process.env.BCC_EMAIL ?? ""],
            subject: "Mind IT WMT | User Access Request",
            text: emailText,
            html: emailHTML
        });
        if (info.accepted.length !== 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        logger.error(`Nodemailer: Could not send email to ${assignee_email}`);
    }
}

async function sendGrantAccessNotificationMail({assignee_name, assignee_email}) {
    try {
        const emailText = "You are receiving this email as a notification for granting you access to the Portal. Please login to the WMT portal for further details.";
        const emailHTML = getEmailTemplateForGrantAccess({assignee_name});

        let info = await transporter.sendMail({
            from: `"Mind IT Workflow Management" <${process.env.EMAIL_USERNAME}>`,
            to: `${assignee_email}`,
            bcc : [process.env.BCC_EMAIL ?? ""],
            subject: "Mind IT WMT | Welcome!",
            text: emailText,
            html: emailHTML
        });
        if (info.accepted.length !== 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        logger.error(`Nodemailer: Could not send email to ${assignee_email}`);
    }
}

module.exports = { sendNotificationMail, sendNotificationForNotLogging, sendRequestAccessNotificationMail, sendGrantAccessNotificationMail, sendNotificationForNotLoggingForThreeDays };
