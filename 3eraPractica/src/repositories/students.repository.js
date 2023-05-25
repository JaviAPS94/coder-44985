export default class StudentsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getAllPaginated = async (limit, page) => {
        const result = await this.dao.getAllPaginated(limit, page);
        return result;
    }
}