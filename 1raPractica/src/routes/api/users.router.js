import { Router } from 'express';
import Users from '../../dao/dbManagers/users.js';

const usersManager = new Users();
const router = Router();

router.get('/', async(req, res) => {
    try {
        const users = await usersManager.getAll();
        res.send({ status: 'success', payload: users });   
    } catch (error) {
        res.status(500).send({ error });
    }
});

router.post('/', async(req, res) => {
    const { first_name, last_name, dni, email, gender } = req.body;

    if(!first_name || !last_name || !dni || !email || !gender) return res.status(400).send({ status: 'error', error: 'Incomplete values' });

    try {
        const result = await usersManager.save({
            first_name,
            last_name,
            dni,
            email,
            gender
        });

        res.send({ result: 'success', payload: result });
    } catch (error) {
        res.status(500).send({ error });
    }
});

export default router;

