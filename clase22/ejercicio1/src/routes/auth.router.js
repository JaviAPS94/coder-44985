import { Router } from 'express';
import { authToken, generateToken } from '../utils.js';

const router = Router();

const users = [{
    name: 'Alex',
    email: 'ap@gmail.com',
    password: '1234'
}];

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) return res.status(400).send({ status: 'error', error: 'invalid credentials' });

    const accessToken = generateToken(user);

    res.cookie('coderCookieToken', accessToken, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .send({ status: 'success', message: 'login success' });
});

router.get('/current', authToken, (req, res) => {
    res.send({ status: 'success', payload: req.user });
});

export default router;