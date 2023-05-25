import * as usersService from '../services/users.service.js';
import { IncorrectLoginCredentials, UserNotFound } from '../utils/customExceptions.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await usersService.getByEmailLogin(email);

        const accessToken = await usersService.login(password, user);

        res.sendSuccess({ accessToken });
    } catch (error) {
        req.logger.fatal(error.message);

        if (error instanceof UserNotFound) {
            return res.sendClientError(error.message);
        }

        if (error instanceof IncorrectLoginCredentials) {
            return res.sendClientError(error.message);
        }

        res.sendServerError(error);
    }
}

export const register = async (req, res) => {
    try {
        const { first_name, last_name, rol, email, password } = req.body;

        if (!first_name || !last_name || !email || !password || !rol) {
            return res.sendClientError('incomplete values');
        }

        const user = await usersService.getByEmailRegister(email);

        if (user) {
            return res.sendClientError('User already exists');
        } else {
            const register = await usersService.register({ ...req.body });
            res.sendSuccess(register);
        }
    } catch (error) {
        req.logger.fatal(error.message);
        res.sendServerError(error);
    }
}