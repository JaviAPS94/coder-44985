import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing de sessions', () => {
    let cookie

    it('Debemos registrar un usuario correctamente', async () => {
        const userMock = {
            first_name: 'Coder',
            last_name: 'House',
            email: 'ch@gmail.com',
            password: '1234'
        };

        const { statusCode, _body } = await requester.post('/api/sessions/register').send(userMock);

        expect(statusCode).to.be.eql(200);
        expect(_body).to.be.ok;
    });

    it('Debemos loguear al usuario y retornar una cookie', async () => {
        const userMock = {
            email: 'ch@gmail.com',
            password: '1234'
        };

        const loginResult = await requester.post('/api/sessions/login').send(userMock);
        const cookieResult = loginResult.headers['set-cookie'][0];

        expect(cookieResult).to.be.ok;

        const cookieResultSplited = cookieResult.split('=');

        cookie = {
            name: cookieResultSplited[0],
            value: cookieResultSplited[1]
        };

        expect(cookie.name).to.be.ok.and.eql('coderCookie');
        expect(cookie.value).to.be.ok;
    });

    it('Debemos enviar una cookie en el servicio current y entregue la informacion del usuario', async () => {
        const { _body } = await requester.get('/api/sessions/current')
            .set('Cookie', [`${cookie.name}=${cookie.value}`]);

        expect(_body.payload.email).to.be.eql('ch@gmail.com');
    });
});