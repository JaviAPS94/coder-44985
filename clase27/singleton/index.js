import MongoSingleton from "./Singleton.js";

const firstInstance = MongoSingleton.getInstance();
const secondInstance = MongoSingleton.getInstance();
const thirdInstance = MongoSingleton.getInstance();
const anotherInstance = MongoSingleton.getInstance();