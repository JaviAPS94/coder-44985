import {fileURLToPath} from 'url';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import winston from 'winston';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __mainDirname = path.join(__dirname, '..');

//Cifrado del token
const PRIVATE_KEY = 'coderSecret';

const hashData = async (password) => {
    return bcrypt.hash(password, 10);
};

//  bcryp
const compareHashedData = async (password, passwordBD) => {
    return bcrypt.compare(password, passwordBD); // compare: metodo de bcrypt - arroja true/false
};

const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
};

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
            filename: 'logs/errors.log',
            level: 'fatal'
        })
    ]
});

const addLogger = (req, res, next) => {
    req.logger = logger;
    // req.logger.http(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
    req.logger.info(`${req.method} en ${req.url} - ${new Date().toISOString()}`);
    next();
}

export {
    __dirname,
    hashData,
    compareHashedData,
    generateToken,
    addLogger,
    __mainDirname
}