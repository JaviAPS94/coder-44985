import express from 'express';
import session from 'express-session';
import FileStore from 'session-file-store';
import MongoStore from 'connect-mongo';
import __dirname from './utils.js';

const app = express();

const fileStorage = FileStore(session);

function auth(req, res, next) {
    if (req.session?.user === 'pepe' && req.session?.admin) {
        return next();
    }

    return res.status(401).send('error de autorización');
}

// Persistencia en memoria
// app.use(session({
//     secret: 'secretCoder',
//     resave: true,
//     saveUninitialized: true
// }));

// Persistencia en archivos
// app.use(session({
//     store: new fileStorage({ path: `${__dirname}/sessions`, ttl: 15, retries: 0 }),
//     secret: 'secretCoder',
//     resave: true,
//     saveUninitialized: true
// }));

// Persistencia en BDD
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions: { useNewUrlParser: true },
        ttl: 30
    }),
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true
}));

app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++;
        res.send(`Se ha vistio el sitio ${req.session.counter} veces`);
    } else {
        req.session.counter = 1;
        res.send(`Bienvenido`);
    }
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;

    if (username !== 'pepe' || password !== 'pepepass') {
        return res.send('login fallido');
    }

    req.session.user = username;
    req.session.admin = true;
    res.send('Login exitoso');
});

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) res.send('Logout exitoso')
        else res.send({ error: 'error', body: err });
    });
});

app.get('/privado', auth, (req, res) => {
    res.send('Estas logueado');
});

app.listen(8080, () => console.log('Server running'));
