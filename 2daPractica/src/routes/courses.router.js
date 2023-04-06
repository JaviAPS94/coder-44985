import Router from './router.js';
import Courses from '../dao/dbManagers/courses.js';
import Students from '../dao/dbManagers/students.js'

const coursesManager = new Courses();
const studentsManager = new Students();

export default class CoursesRouter extends Router {
    init() {
        this.get('/', ["USER"], 'jwt', async (req, res) => {
            try {
                const courses = await coursesManager.getAll();
                res.sendSuccess(courses);
            } catch (error) {
                res.sendServerError(error);
            }

        })

        this.post('/', ['USER', 'USER_PREMIUM', 'ADMIN'], 'jwt', async (req, res) => {
            try {
                const { title, description } = req.body;

                if (!title || !description) {
                    return res.sendClientError('incomplete values');
                }

                let newCourse = {
                    title,
                    description,
                    users: [],
                    teacher: 'sin asignar'
                }

                const result = await coursesManager.saveCourse(newCourse);
                res.sendSuccess(result);
            } catch (error) {
                res.sendServerError(error);
            }
        })

        this.put('/:courseId/student/:studentId', ['USER', 'USER_PREMIUM', 'ADMIN'], 'jwt', async (req, res) => {
            try {
                const { courseId, studentId } = req.params;

                const student = await studentsManager.getById(studentId);

                if (!student) return res.sendNotFoundError('student not found');

                const course = await coursesManager.getById(courseId);

                if (!course) return res.sendNotFoundError('course not found');

                student.courses.push({ course: courseId });

                const result = await studentsManager.updateById(studentId, student);

                res.sendSuccess(result);
            } catch (error) {

            }
        });
    }
}