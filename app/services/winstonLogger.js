const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, json, errors, printf } = format;

const customFormat = printf(({ timestamp, level = 'info', message = '', Path = '', User = '' }) => {
    return `{ timestamp: ${timestamp}, level: ${level}, message: ${message}, path: ${Path}, user: ${User} }`;
});

const transport = new transports.DailyRotateFile({
    filename: 'hnext-log-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    dirname: 'log/'
});

const logger = createLogger({
    level: process.env.WINSTON_LOG_LEVEL || 'info',
    format: combine(
        timestamp(),
        json(),
        errors({ stack: true }),
        customFormat
    ),
    transports: transport,
    exceptionHandlers: [
        new transports.File({
            filename: 'hnext-log-critical-exceptions.log',
            dirname: 'log/'
        }),
    ],
    rejectionHandlers: [
        new transports.File({
            filename: 'hnext-log-critical-exceptions.log',
            dirname: 'log/'
        }),
    ],
});

console.log('logger complete')
module.exports = logger;
