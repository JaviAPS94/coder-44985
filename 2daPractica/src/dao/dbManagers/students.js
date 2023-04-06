import { studentsModel } from "../models/students.js"

export default class Users {
    constructor() {
        console.log(`Working users with Database persistence in mongodb`)
    }

    getAll = async () => {
        let users = await studentsModel.find();
        return users.map(user=>user.toObject())
    }

    getAllPaginated = async (limit, page) => {
        let users = await studentsModel.aggregatePaginate({}, { limit, page });
        return users;
    }

    save = async (user) => {
        let result = await studentsModel.create(user);
        return result;
    }

    getById = async (id) => {
        let user = await studentsModel.findOne({_id: id});
        return user.toObject()
    }

    updateById = async (id, student) => {
        let user = await studentsModel.updateOne({_id: id}, student);
        return user
    }
}