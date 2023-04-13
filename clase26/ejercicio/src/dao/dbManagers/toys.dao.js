import toysModel from "./models/toys.js";

export default class ToysDao {
    constructor() {}

    async getAll() {
        return await toysModel.find();
    }

    async save(toy) {
        return await toysModel.create(toy);
    }
}