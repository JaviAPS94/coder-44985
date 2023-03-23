import { Router } from 'express';
import userModel from '../models/users.model.js';
import passport from 'passport';
import { createHash } from '../utils.js'

const router = Router();

router.post('/register', passport.authenticate('register', { failureRedirect: 'fail-register' }), async (req, res) => {
    res.send({ status: 'success', message: 'user registered' })
});

router.get('/fail-register', async (req, res) => {
    res.send({ status: 'error', message: 'register failed' });
});

router.post('/login', passport.authenticate('login', { failureRedirect: 'fail-login' }), async (req, res) => {
    if (!req.user) return res.status(400)
        .send({ status: 'error', message: 'Invalid credentials' });

    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email,
    }

    res.send({ status: 'success', message: 'login success' });
});

router.get('/fail-login', async (req, res) => {
    res.send({ status: 'error', message: 'login failed' });
});

router.post('/reset', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400)
        .send({ status: 'error', message: 'Incomplete values' });

    try {
        const user = await userModel.findOne({ email });

        if (!user) return res.status(404).send({ status: 'error', message: 'User not found' });

        user.password = createHash(password);

        await userModel.updateOne({ email }, user);

        res.send({ status: 'success', message: 'reset success' });

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

