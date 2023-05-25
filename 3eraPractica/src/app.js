import express from 'express';
import CoursesRouter from './routes/courses.router.js';
import initializePassport from './config/passport.config.js';
import passport from 'passport';
import StudentsRouter from './routes/students.router.js';
import UsersRouter from './routes/users.router.js';
import { addLogger } from './utils/utils.js';

const coursesRouter = new CoursesRouter();
const studentsRouter = new StudentsRouter();
const usersRouter = new UsersRouter();

const app = express();
const PORT = 8080;
/**
 * Template engine
 */

//Passport
initializePassport();
app.use(passport.initialize());

app.use(addLogger)

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', usersRouter.getRouter())
app.use('/api/students', studentsRouter.getRouter());
app.use('/api/courses', coursesRouter.getRouter());

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
