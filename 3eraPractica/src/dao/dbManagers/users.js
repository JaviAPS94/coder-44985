import { usersModel } from "../models/users.js"

export default class UsersManager {
    getByEmail = async (email) => {
        const user = await usersModel.findOne({ email });
        return user;
    }

    saveUser = async (user) => {
        let result = await usersModel.create(user);
        return result;
    }
}