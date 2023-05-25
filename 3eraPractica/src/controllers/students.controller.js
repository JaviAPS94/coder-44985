import * as studentsService from '../services/students.service.js';

export const getAllPaginated = async (req, res) => {
    try {
        const { limit = 10, page = 1 } = req.query;
        const users = await studentsService.getAllPaginated(limit, page);
        res.sendSuccess(users);
    } catch (error) {
        req.logger.fatal(error.message);
        res.sendServerError(error);
    }
}