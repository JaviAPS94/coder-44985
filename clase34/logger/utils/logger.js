import winston from "winston";
import * as dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = process.env.NODE_ENV;

const customLevelOptions = {
    levels: {
        fatal: 0,
        error: 1,
        warning: 2,
        info: 3,
        debug: 4
    },
    colors: {
        'fatal': 'red',
        'error': 'red',
        'warning': 'yellow',
        'info': 'green',
        'debug': 'blue'
    }
}

// const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             level: 'info'
//         }),
//         new winston.transports.File({
//             filename: 'logs/dev.log',
//             level: 'warn'
//         })
//     ]
// });

//Ejercicio multientorno
// let logger;

// if (ENVIRONMENT === 'production') {
//     logger = winston.createLogger({
//         transports: [
//             new winston.transports.Console({
//                 level: 'http'
//             }),
//             new winston.transports.File({
//                 filename: 'logs/prod.log',
//                 level: 'warn'
//             })
//         ]
//     })
// } else {
//     logger = winston.createLogger({
//         transports: [
//             new winston.transports.Console({
//                 level: 'verbose'
//             })
//         ]
//     })
// }

//Custom logger
const logger = winston.createLogger({
    levels: customLevelOptions.levels,
    transports: [
        new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
                winston.format.colorize({
                    all: true,
                    colors: customLevelOptions.colors
                }),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            filename: 'logs/dev_custom.log',
            level: 'fatal'
        })
    ]
});

export const addLogger = (req, res, next) => {
    req.logger = logger;
    // req.logger.http(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
    next();
}