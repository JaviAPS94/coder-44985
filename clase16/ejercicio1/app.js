import userModel from "./models/users.js";
import studentsModel from "./models/students.js";
import courseModel from "./models/courses.js";
import mongoose from 'mongoose';

const environment = async () => {
    try {
        await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority');
        // const response = await userModel.find({ first_name: 'Jose'}).explain('executionStats');
        // console.log(response);
        // await studentsModel.create({
        //     first_name: 'Gabriel',
        //     last_name: 'Godoy',
        //     email: 'gg@gmail.com',
        //     gender: 'male'
        // });

        // await courseModel.create({
        //     title: 'Programación en java',
        //     description: 'Curso de programación en java 8',
        //     teacher: 'Juan Sanchez'
        // })
        // const student = await studentsModel.findOne({_id: '640928c4e99efee4b976a9e7'});

        // student.courses.push({course: '6409292d0c0a6e48dd68f11f'});

        // const result = await studentsModel.updateOne({_id: '640928c4e99efee4b976a9e7'}, student);

        // console.log(result);

        // const response = await studentsModel.find();
        // console.log(JSON.stringify(response, null, '\t'));
        const response = await studentsModel.find({ "courses.teacher": 'Juan Sanchez' });
        console.log(JSON.stringify(response, null, '\t'));

    } catch (error) {
        console.log(error);
    }
};

environment();