import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const users = [
//     {
//         name: 'Alex',
//         lastName: 'Pinaida',
//         age: 28,
//         phone: '0987654321',
//         email: 'ap@hotmail.com'
//     },
//     {
//         name: 'Fermin',
//         lastName: 'Garcia',
//         age: 24,
//         phone: '0987654322',
//         email: 'fg@hotmail.com'
//     },
//     {
//         name: 'Frank',
//         lastName: 'Ruiz',
//         age: 25,
//         phone: '0997654321',
//         email: 'fr@hotmail.com'
//     },
//     {
//         name: 'Javier',
//         lastName: 'Lopez',
//         age: 21,
//         phone: '0987654322',
//         email: 'jl@hotmail.com'
//     },
//     {
//         name: 'Gabriel',
//         lastName: 'Godoy',
//         age: 18,
//         phone: '0987354321',
//         email: 'gg@hotmail.com'
//     }
// ]

app.use('/', viewsRouter)
app.use('/api/users', usersRouter);

app.listen(8080, () => console.log('Listening on port 8080'));