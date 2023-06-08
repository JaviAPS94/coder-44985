import mongoose from 'mongoose';
import User from '../../src/dao/Users.dao.js';
import chai from 'chai';

await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/unitTesting44985?retryWrites=true&w=majority');

const expect = chai.expect;

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
        //assert.strictEqual(Array.isArray(result), true);
        expect(result).to.be.deep.equal([]);
        expect(Array.isArray(result)).to.be.equal(true);
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
        //assert.ok(result._id);
        expect(result._id).to.be.ok;
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

        //assert.deepStrictEqual(result.pets, []);
        expect(result.pets).to.be.deep.equal([]);
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

        // assert.strictEqual(typeof user, 'object');
        expect(typeof user).to.be.equal('object');
    });

    it('El dao debe poder actualizar el usuario', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: '123'
        };

        const result = await usersDao.save(mockUser);

        const mockUserUpdate = {
            first_name: 'Coder Update',
            last_name: 'House Update',
            email: 'ch@coderhouse.com',
            password: '123'
        }

        await usersDao.update(result._id, mockUserUpdate);

        const user = await usersDao.getBy({ email: result.email });
        //assert.strictEqual(typeof user, 'object');
        expect(user.first_name).to.be.equal('Coder Update');
        expect(user.last_name).to.be.equal('House Update');
    });

    it('El dao debe poder eliminar el usuario', async () => {
        const mockUser = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@coderhouse.com',
            password: '123'
        };

        const result = await usersDao.save(mockUser);

        await usersDao.delete(result._id);

        const users = await usersDao.get();
        //assert.strictEqual(typeof user, 'object');
        expect(users).to.be.deep.equal([]);
    });
})