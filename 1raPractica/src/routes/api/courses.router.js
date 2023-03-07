import { Router } from 'express';
import Courses from '../../dao/dbManagers/courses.js';

const coursesManager = new Courses();
const router = Router();

router.get('/', async(req, res) => {
    try {
        const courses = await coursesManager.getAll();
        res.send({ status: 'success', payload: courses });   
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.post('/', async(req, res) => {
    const { title, description } = req.body;

    if(!title || !description) return res.status(400).send({ status: 'error', error: 'Incomplete values' });

    try {
        const result = await coursesManager.save({
            title,
            description,
            users: [],
            teacher: 'sin asignar'
        });

        res.send({ result: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ error });
    }
});

export default router;