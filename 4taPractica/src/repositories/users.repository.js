export default class UsersRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getByEmail = async (email) => {
        const result = await this.dao.getByEmail(email);
        return result;
    }

    saveUser = async (user) => {
        const result = await this.dao.saveUser(user);
        return result;
    }
}