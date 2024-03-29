import express from 'express';
import authRouter from './routes/auth.router.js';
import __dirname from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/api/auth', authRouter);

app.listen(8080);