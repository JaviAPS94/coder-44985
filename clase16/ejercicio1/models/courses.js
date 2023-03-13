import mongoose from 'mongoose';

const courseCollection = 'courses';

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    teacher: String,
    students: {
        type: Array,
        default: []
    }
});

const courseModel = mongoose.model(courseCollection, courseSchema);

export default courseModel;