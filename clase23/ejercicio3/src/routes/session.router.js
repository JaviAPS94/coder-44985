import Router from './router.js';
import jwt from 'jsonwebtoken';

export default class SessionRouter extends Router {
    init() {
        this.post('/login', ['PUBLIC'], (req, res) => {
            const user = {
                email: req.body.email,
                role: req.body.role
            };

            const token = jwt.sign(user, 'secretCoder');
            res.sendSuccess({ token })
        })

    }
}