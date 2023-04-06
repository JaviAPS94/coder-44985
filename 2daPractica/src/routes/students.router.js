import Router from './router.js';
import Users from '../dao/dbManagers/students.js';
import { passportStrategiesEnum } from '../config/enums.js';

const usersManager = new Users();

export default class StudentsRouter extends Router {
    init() {
        this.get('/', ["ADMIN"], passportStrategiesEnum.JWT, this.getAll);
        this.get('/paginated', ["ADMIN"], passportStrategiesEnum.JWT, this.getAllPaginated);
        this.post('/', ["ADMIN"], passportStrategiesEnum.JWT, this.save)
    }

    async getAll(req, res) {
        try {
            const users = await usersManager.getAll();
            res.sendSuccess(users);
        } catch (error) {
            res.sendServerError(error);
        }
    }

    async getAllPaginated(req, res) {
        try {
            const { limit = 10, page = 1 } = req.query;
            const users = await usersManager.getAllPaginated(limit, page);
            res.sendSuccess(users);
        } catch (error) {
            res.sendServerError(error);
        }
    }

    async save(req, res) {
        try {
            let { first_name, last_name, dni, email, birthDate, gender } = req.body;
            if (!first_name || !last_name || !dni || !email || !birthDate) return res.sendClientError('incomplete values');

            let result = await usersManager.save({
                first_name,
                last_name,
                email,
                dni,
                birthDate,
                gender
            })

            res.sendSuccess(result);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error })
        }
    }
}