export default class ToysDao {
    constructor() {
        this.data = [];
    }

    async getAll() {
        return this.data;
    }

    async save(toy) {
        this.data.push(toy);
        return toy;
    }
}