import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const studentsCollection = 'Students';

const studentsSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dni: Number,
    birthDate: Date,
    gender: {
        type: String,
        enum: ["M", "F"]
    },
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'courses'
                }
            }
        ],
        default: []
    }
});

studentsSchema.plugin(aggregatePaginate); // mongoose-aggregate-paginate-v2

studentsSchema.pre('find', function () {
    this.populate('courses.course');
});

export const studentsModel = mongoose.model(studentsCollection, studentsSchema);