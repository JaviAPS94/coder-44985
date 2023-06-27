import express from 'express';
import CoursesRouter from './routes/courses.router.js';
import initializePassport from './config/passport.config.js';
import passport from 'passport';
import StudentsRouter from './routes/students.router.js';
import UsersRouter from './routes/users.router.js';
import { addLogger, __mainDirname } from './utils/utils.js';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

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

console.log(__mainDirname);
//Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Documentación de nuestra práctica integradora',
            description: 'API usaba para el manejo de estudiantes'
        }
    },
    apis: [`${__mainDirname}/docs/**/*.yaml`]
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

/**
 * Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', usersRouter.getRouter())
app.use('/api/students', studentsRouter.getRouter());
app.use('/api/courses', coursesRouter.getRouter());

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
