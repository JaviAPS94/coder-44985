import express from 'express';
import __dirname from './utils.js';
import usersRouter from './routes/api/users.router.js';
import coursesRouter from './routes/api/courses.router.js';
import viewsRouter from './routes/web/views.router.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

const app = express();

//Config de nuestras vistas
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);

try {
    await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority')
} catch (error) {
    console.log(error);
}

app.listen(8080, () => console.log(`Server running`));