import mongoose from "mongoose";

export default class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority')
    }

    static getInstance() {
        if(this.#instance) {
            console.log('La conexion ya existe');
            return this.#instance;
        }

        console.log('La conexion no existe, se crea una nueva');
        this.#instance = new MongoSingleton();
        return this.#instance;
    }
}