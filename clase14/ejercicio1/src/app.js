import express from 'express';
import userRouter from './routes/users.router.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

//Conexión hacia la base de datos

try {
    await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority');
} catch (error) {
    console.log(`Cannot connect to database: ${error}`);
}

app.listen(8080);