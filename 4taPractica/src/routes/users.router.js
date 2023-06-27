import Router from './router.js';
import { login, register } from '../controllers/users.controller.js';

export default class UsersRouter extends Router {
    init() {
        this.post('/login', ["PUBLIC"], null, login);
        this.post('/register', ["PUBLIC"], null, register);
    }
}