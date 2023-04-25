import usersModel from '../models/users.model.js'

export default class UsersDao {
    getUsers = async () => {
        const result = await usersModel.find();
        return result;
    }

    getUserById = async (userId) => {
        const result = await usersModel.findById(userId);
        return result;
    }

    saveUser = async (user) => {
        const result = await usersModel.create(user);
        return result;
    }

    updateUser = async(id, user) => {
        const result = await usersModel.findByIdAndUpdate(id, user);
        return result;
    }
}