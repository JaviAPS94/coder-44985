import mongoose from "mongoose";
import config from "../config/config.js";

const URI = config.mongoUrl;

try {
    await mongoose.connect(URI);
    console.log('Conectado a base de datos');
} catch (error) {
    console.log(error);
}