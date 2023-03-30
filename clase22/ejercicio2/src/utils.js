import jwt from 'jsonwebtoken';
import passport from 'passport';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PRIVATE_KEY = 'CoderSecret'

export const generateToken = (user) => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
};

//CUSTOM CALL
export const passportCall = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, function (err, user, info) {
            if (err) return next(error);
            
            if (!user) {
                return res.status(401).send({ error: info.messages ? info.messages : info.toString() })
            }

            req.user = user;
            next();
        })(req, res, next);
    }
}

export const authorization = (rol) => {
    return async(req, res, next) => {
        console.log(req.user);
        if(req.user.rol!=rol) return res.status(403).send({ error: 'Not permissions' });
        next();
    }
}


export default __dirname;