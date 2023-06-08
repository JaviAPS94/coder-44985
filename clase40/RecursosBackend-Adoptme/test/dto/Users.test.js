import chai from 'chai';
import UserDTO from '../../src/dto/User.dto.js';

const expect = chai.expect;

describe('Probando nuestro dto de usuarios', () => {
    //Escenario 1
    it('Corroborar que el DTO unifique el nombre y apellido en una única propiedad', async () => {
        const user = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@gmail.com',
            password: '1234'
        }

        const result = UserDTO.getUserTokenFrom(user);
        expect(result.name).to.be.equal('Coder House');
    });

    it('El DTO debe eliminar las propiedades innecesarias como password, first_name, last_name', async () => {
        const user = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@gmail.com',
            password: '1234'
        }

        const result = UserDTO.getUserTokenFrom(user);

        expect(result.first_name).to.be.equal(undefined);
        expect(result.last_name).to.be.equal(undefined);
        expect(result.password).to.be.equal(undefined);
    });
});