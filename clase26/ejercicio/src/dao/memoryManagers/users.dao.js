export default class UsersDao {
    constructor() {
        this.data = [];
    }

    async getAll() {
        return this.data;
    }

    async save(user) {
        this.data.push(user);
        return user;
    }
}