import express from 'express';
import CoursesRouter from './routes/courses.router.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import initializePassport from './config/passport.config.js';
import passport from 'passport';
import StudentsRouter from './routes/students.router.js';
import UsersRouter from './routes/users.router.js';

const coursesRouter = new CoursesRouter();
const studentsRouter = new StudentsRouter();
const usersRouter = new UsersRouter();

const app = express();
const PORT = 8080;
await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority')
/**
 * Template engine
 */

//Passport
initializePassport();
app.use(passport.initialize());

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', usersRouter.getRouter())
app.use('/api/students', studentsRouter.getRouter());
app.use('/api/courses', coursesRouter.getRouter());

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
