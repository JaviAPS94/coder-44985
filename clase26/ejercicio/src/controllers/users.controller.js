import {
    saveUser as saveUserService,
    getUsers as getUsersService
} from '../services/users.service.js';

const getUsers = async (req, res) => {
    try {
        const users = await getUsersService();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
};

const saveUser = async (req, res) => {
    try {
        const user = req.body;
        await saveUserService(user);
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getUsers,
    saveUser
}