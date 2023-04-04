import express from 'express';
import UserRouter from './routes/users.router.js';
import SessionRouter from './routes/session.router.js';

const userRouter = new UserRouter();
const sessionRouter = new SessionRouter();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', sessionRouter.getRouter());
app.use('/api/users', userRouter.getRouter());

app.listen(8080);