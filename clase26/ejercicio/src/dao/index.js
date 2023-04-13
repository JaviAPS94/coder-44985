import memoryToysDao from './memoryManagers/toys.dao.js';
import memoryUsersDao from './memoryManagers/users.dao.js';
import mongoToysDao from './dbManagers/toys.dao.js';
import mongoUsersDao from './dbManagers/users.dao.js';
import config from '../config/config.js';

const MemoryToysDao = new memoryToysDao();
const MemoryUsersDao = new memoryUsersDao();

const MongoToysDao = new mongoToysDao();
const MongoUsersDao = new mongoUsersDao();

console.log(config.persistence)

export const TOYSDAO = config.persistence === 'MEMORY' ? MemoryToysDao : MongoToysDao;
export const USERSDAO = config.persistence === 'MEMORY' ? MemoryUsersDao : MongoUsersDao;