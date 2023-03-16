import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser('CoderASDD123ASDF4524ASD'));

app.get('/set-cookies', (req, res) => {
    res.cookie('CoderCookie', 'Esta es una cookie muy poderosa', { maxAge: 30000 }).send('Cookie guardada exitosamente')
});

app.get('/cookies', (req, res) => {
    res.send(req.cookies)
});

app.get('/delete-cookies', (req, res) => {
    res.clearCookie('CoderCookie').send('Cookie eliminada');
});

app.get('/set-signed-cookies', (req, res) => {
    res.cookie('CoderSignedCookie', 'Esta es una cookie firmada muy poderosa', { maxAge: 30000, signed: true }).send('Signed Cookie guardada exitosamente')
});

app.get('/signed-cookies', (req, res) => {
    res.send(req.signedCookies);
});

app.listen(8080, () => console.log('Server running'));
