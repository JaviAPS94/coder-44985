import mockingoose from 'mockingoose';
import CoursesModel from '../../src/dao/models/courses.js';
import CoursesDao from '../../src/dao/dbManagers/courses.js';
import chai from 'chai';

const expect = chai.expect;

describe('Courses DAO', () => {
    it('Debería retornar el listado de cursos', async () => {
        const coursesDao = new CoursesDao();

        mockingoose(CoursesModel).toReturn([
            {
                title: 'Curso prueba',
                description: 'Curso backend prueba',
                teacher: 'Profesor de prueba',
                students: []
            }
        ], 'find');

        const result = await coursesDao.getAll();

        expect(Array.isArray(result)).to.be.eqls(true);
        expect(result[0].title).to.be.eqls('Curso prueba');
        expect(result[0].description).to.be.eqls('Curso backend prueba');
        expect(result[0].teacher).to.be.eqls('Profesor de prueba');
        expect(result[0].students).to.be.eqls([]);
    });

    it('Debería retornar un courso de acuerdo a su id', async () => {
        const coursesDao = new CoursesDao();

        mockingoose(CoursesModel).toReturn(
            {
                title: 'Curso prueba individual',
                description: 'Curso backend prueba individual',
                teacher: 'Profesor de prueba individual',
                students: []
            }, 'findOne'
        );

        const result = await coursesDao.getById('1234');
        expect(result.title).to.be.eql('Curso prueba individual')
        expect(result.description).to.be.eql('Curso backend prueba individual')
        expect(result.teacher).to.be.eql('Profesor de prueba individual')
        expect(result.students).to.be.eql([])
    });

    it('Debería almancer el curso', async () => {
        const coursesDao = new CoursesDao();

        const course = {
            title: 'Curso prueba individual',
            description: 'Curso backend prueba individual',
            teacher: 'Profesor de prueba individual',
            students: []
        }

        mockingoose(CoursesModel).toReturn(
            {
                id: 'AHSDJHG34SDF',
                title: 'Curso prueba individual',
                description: 'Curso backend prueba individual',
                teacher: 'Profesor de prueba individual',
                students: []
            }, 'create'
        );

        const result = await coursesDao.saveCourse(course);
        expect(result.title).to.be.eql('Curso prueba individual')
        expect(result.description).to.be.eql('Curso backend prueba individual')
        expect(result.teacher).to.be.eql('Profesor de prueba individual')
        expect(result.students).to.be.eql([])
    });
})