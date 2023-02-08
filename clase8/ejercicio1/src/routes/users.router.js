import { Router } from 'express';

const router = Router();

const users = [];

router.use((req, res, next) => {
    console.log('Time ROUTER: ', Date.now());
    next();
});

router.get('/', (req, res) => {
    res.send({ users });
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({status: 'success'});
});

export default router;