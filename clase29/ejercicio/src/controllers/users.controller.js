import * as usersService from '../services/users.service.js'

export const getUsers = async (req, res) => {
    try {
        const result = await usersService.getUsers();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await usersService.getUserById(id);
        if (!result)
            return res.status(404).send({ status: 'error', message: 'user not found' });
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const saveUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await usersService.saveUser(user);
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}