import express from 'express';
import userRoutes from './routes/users.router.js';

const app = express();

app.use('/api/users', userRoutes);

app.listen(8080);