import mongoose from 'mongoose';
import User from '../../src/dao/Users.dao.js';
import Assert from 'assert';

await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/unitTesting44985?retryWrites=true&w=majority');

const assert = Assert.strict;

let usersDao

describe('Probando nuestro dao de usuarios', () => {
    before(() => {
        usersDao = new User();
    });

    beforeEach(async () => {
        try {
            await mongoose.connection.collections.users.drop();  
        } catch (error) {
            console.log(error);
        }
    });

    //Escenario 1
    it('El dao debe poder obtener los usuarios en formato de arreglo', async () => {
        const result = await usersDao.get();
        assert.strictEqual(Array.isArray(result), true);
    });
    //Escenario 2
    it('El dao debe agregar un usuario correctamente a la base de datos', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: '123'
        };

        const result = await usersDao.save(mockUser);
        assert.ok(result._id);
    });
    //Escenario 3
    it('El dao agregará al documento insertado un arreglo de mascotas vacio por defecto', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: '123'
        };

        const result = await usersDao.save(mockUser);

        assert.deepStrictEqual(result.pets, []);
    });

    it('El dao debe poder obtener un usuario por email', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: '123'
        };

        const result = await usersDao.save(mockUser);

        const user = await usersDao.getBy({ email: result.email });

        assert.strictEqual(typeof user, 'object');
    });
})