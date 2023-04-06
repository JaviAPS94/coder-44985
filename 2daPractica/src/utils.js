import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

export {
    __dirname,
    hashData,
    compareHashedData,
    generateToken
}