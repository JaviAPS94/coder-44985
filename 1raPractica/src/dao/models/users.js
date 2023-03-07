import mongoose from 'mongoose';

const userCollections = 'users';

const usersSchema = new mongoose.Schema({
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
    dni: String,
    gender: {
        type: String,
        enum: ['M', 'F']
    },
    courses: {
        type: Array,
        default: []
    }
});

export const userModel = mongoose.model(userCollections, usersSchema);