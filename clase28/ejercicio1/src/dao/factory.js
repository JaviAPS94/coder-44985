import mongoose from "mongoose";
import config from "../config/config.js";

export let Contacts;

const persistence = config.persistence;

switch (persistence) {
    case "MONGO":
        console.log("Usando DAO de mongo");
        await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority');
        const { default: ContactsMongo } = await import('./mongo/contact.mongo.js');
        Contacts = ContactsMongo;
        break;
    case "MEMORY":
        console.log("Usando DAO de memoria");
        const { default: ContactsMemory } = await import('./memory/contact.memory.js');
        Contacts = ContactsMemory;
        break;
}

export default Contacts;