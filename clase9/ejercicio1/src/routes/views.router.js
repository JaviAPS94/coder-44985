import { Router } from 'express';

const router = Router();

const food = [
    {name: 'Pizza', price: 10.12},
    {name: 'Banana', price: 9.12},
    {name: 'Soda', price: 8.12},
    {name: 'Ensalada', price: 7.12},
    {name: 'Sandia', price: 15.12},
    {name: 'Sandia', price: 15.12},
]

router.get('/', (req, res) => {
    // const testUser = {
    //     name: 'Alex',
    //     lastName: 'Garcia',
    //     role: 'admin'
    // };

    // res.render('index', {
    //     user: testUser,
    //     isAdmin: testUser.role === 'admin',
    //     style: 'index.css',
    //     food
    // });
    // const random = Math.floor(Math.random()*users.length);
    
    // res.render('users', users[random]);
    res.render('register');
});

export default router;