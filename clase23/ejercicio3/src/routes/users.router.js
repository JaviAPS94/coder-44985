import Router from './router.js';

export default class UserRouter extends Router {
    init() {
        this.get('/', ['PUBLIC'], (req, res) => {
            // res.send('Hola coders');
            res.sendSuccess([]);
        });

        this.get('/currentUser', ['USER', 'USER_PREMIUM'], (req, res) => {
            res.sendSuccess(req.user);
        })

    }
}