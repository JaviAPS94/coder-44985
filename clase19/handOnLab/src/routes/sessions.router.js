import { Router } from 'express';
import userModel from '../models/users.model.js';

const router = Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;

    try {
        const exists = await userModel.findOne({ email });
        if (exists) return res.status(400).send({ status: 'error', error: 'user already exists' });

        const user = {
            first_name,
            last_name,
            email,
            age,
            password
        };

        await userModel.create(user);

        res.send({ status: 'success', message: 'user registered' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ status: 'error', error });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email, password });
        if (!user) return res.status(400).send({ status: 'error', error: 'incorrect credentials' });

        req.session.user = {
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            age: user.age
        }

        res.send({ status: 'success', message: 'login success' });

    } catch (error) {
        res.status(500).send({ status: 'error', error });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send({ status: 'error', error: 'couldnt logout' });
        res.redirect('/');
    })
});

export default router;

