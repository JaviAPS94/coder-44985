import usersModel from "./models/users.js";

export default class UsersDao {
    constructor() {}

    async getAll() {
        return await usersModel.find();
    }

    async save(user) {
        return await usersModel.create(user);
    }
}