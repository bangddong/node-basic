const winston = require('winston');
const appRoot = require('app-root-path');	//프로젝트의 root경로
require('winston-daily-rotate-file');
require('date-utils');

//format을 사용자가 구성
const myformat = winston.format.printf(
    info => `${new Date().toFormat('YYYY-MM-DD HH24:MI:SS')} [${info.level.toUpperCase()}] - ${info.message}`
)

const logger = winston.createLogger({
    level: 'debug',	//winston 로그 레벨
    transports: [
        new winston.transports.DailyRotateFile({
            filename: `${appRoot}/logs/test.log`,
            zippedArchive: false,	//압축 여부
            format: myformat,
            handleExceptions: true
        }),
        new winston.transports.Console({
            format: myformat,
            handleExceptions: true,
            colorize: true,
        })
    ]
});
