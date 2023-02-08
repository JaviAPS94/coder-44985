import express from 'express';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import { __dirname } from './utils.js';

const app = express();

//1ER MIDDLEWARE APLICACION
app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

function middleware1(req, res, next) {
    req.dato1 = 'un dato';
    next();
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/static', express.static(`${__dirname}/public`));

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

app.get('/test', middleware1, (req, res) => {
    console.log(req.dato1);
    console.log(asdasd);
    res.send({message: 'hola'});
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Broken');
});

app.listen(8080, () => console.log('Server running'));