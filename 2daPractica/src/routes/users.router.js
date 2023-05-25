import Router from './router.js';
import { generateToken } from '../utils.js';
import { compareHashedData, hashData } from '../utils.js';
import UsersManager from '../dao/dbManagers/users.js';

const usersManager = new UsersManager();

export default class UsersRouter extends Router {
    init() {
        this.post('/login', ["PUBLIC"], null, async (req, res) => {
            const { email, password } = req.body;
            const user = await usersManager.getByEmail(email);
        
            if (!user) return res.sendClientError('incorrect credentials');
        
            const comparePassword = await compareHashedData(
                password,
                user.password
            );
        
            if (!comparePassword) {
                return res.sendClientError('incorrect credentials');
            }
        
            const accessToken = generateToken(user);
        
            res.sendSuccess({ accessToken });
        });
        
        this.post('/register', ["PUBLIC"], null, async (req, res) => {
            try {
                const { first_name, last_name, rol, email, password } = req.body;
                
                if (!first_name || !last_name || !email || !password || !rol) {
                    return res.sendClientError('incomplete values');
                }
        
                const userDB = await usersManager.getByEmail(email);
        
                if (userDB) {
                    return res.sendClientError('user already exists');
                } else {
                    const hashPassword = await hashData(password);
                    
                    const newUser = {
                        ...req.body,
                    };
                    
                    newUser.password = hashPassword;
        
                    const newUserDB = await usersManager.saveUser(newUser);
                    res.sendSuccess(newUserDB);
                }
            } catch (error) {
                console.log(error);
                res.sendServerError(error);
            }
        });
    }
}