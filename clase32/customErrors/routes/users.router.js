import { Router } from 'express';
import CustomError from '../services/errors/CustomError.js';
import EErrors from '../services/errors/enums.js';
import { generateUserErrorInfo } from '../services/errors/info.js';

const users = [];

const router = Router();

router.post('/', (req, res) => {
    const { first_name, last_name, email } = req.body;
    console.log(first_name, last_name, email)

    if(!first_name || !last_name || !email) {
        throw CustomError.createError({
            name: 'UserError',
            cause: generateUserErrorInfo({
                first_name,
                last_name,
                email
            }),
            message: 'Error tratando de crear un usuario',
            code: EErrors.INVALID_TYPES_ERROR
        });
    }

    const user = {
        first_name,
        last_name,
        email
    };

    users.push(user);
    res.send({ status: "success", payload: user });
});

export default router;