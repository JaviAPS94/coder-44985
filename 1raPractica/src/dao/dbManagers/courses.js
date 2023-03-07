import { coursesModel } from '../models/courses.js';

export default class Courses {
    constructor() {
        console.log('Working courses with DB in mongoDB');
    }

    // array entrada -> array salida
    getAll = async () => {
        const courses = await coursesModel.find();
        return courses.map(course => course.toObject());
    }

    save = async (course) => {
        const result = await coursesModel.create(course);
        return result;
    }

    update = async (id, course) => {
        const result = await coursesModel.updateOne({_id: id}, course);
        return result;
    }
}