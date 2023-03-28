import express from 'express';
import session from 'express-session';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import viewsRouter from './routes/views.router.js';
import sessionsRouter from './routes/sessions.router.js';
import __dirname from './utils.js';
import initializePassport from './config/passport.config.js';
import passport from 'passport';

const app = express();

try {
    await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority');
} catch (error) {
    console.log(error);   
}

app.use(session({
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true
}));

//Configuracion de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/auth', sessionsRouter);

app.listen(8080);