import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    async (req, res) => {
        res.send({ status: 'sucess', message: 'user registered' });
    });

router.get('/github-callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
})

export default router;

