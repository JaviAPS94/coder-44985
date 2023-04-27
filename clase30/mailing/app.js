import express from 'express';
import nodemailer from 'nodemailer';
import __dirname from './utils.js';

const app = express();

//Configuración SMTP gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'alex.pinaida.44985@gmail.com',
        pass: 'dyirhvbfelepxmqu'
    }
});

app.get('/mail', async(req, res) => {
    await transporter.sendMail({
        from: 'CoderHouse 44985<coderhouse44985@gmail.com>',
        to: 'alex.pinaida94@gmail.com',
        subject: 'Correo de prueba coderhouse 44985',
        html: `<div><h1>Hola, esto es una prueba de envio de correo con una imagen adjunta</h1>
        <img src="cid:dog1"/></div>`,
        attachments: [
            {
                filename: 'dog1.jpeg',
                path: `${__dirname}/dog1.jpeg`,
                cid: 'dog1'
            }
        ]
    });

    res.send('Correo enviado existosamente');
});

app.listen(8080);
