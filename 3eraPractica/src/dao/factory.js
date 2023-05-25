import mongoose from "mongoose";
import config from "../config/config.js";

export let Users;
export let Students;

const persistence = config.persistence;

switch (persistence) {
    case "MONGO":
        console.log("Usando DAO de mongo");
        await mongoose.connect(config.mongoUrl);
        const { default: UsersMongo } = await import('./dbManagers/users.js');
        const { default: StudentsMongo } = await import('./dbManagers/students.js');
        Users = UsersMongo;
        Students = StudentsMongo;
        break;
    case "MEMORY":
        console.log("Usando DAO de memoria");
        const { default: UsersMemory } = await import('./fileManagers/users.js');
        const { default: StudentsMemory } = await import('./fileManagers/students.js');
        Users = UsersMemory;
        Students = StudentsMemory;
        break;
}