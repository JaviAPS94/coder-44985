import express from 'express';

const app = express();

//HTTP GET, POST, PUT, DELETE, PATCH, OPTIONS
//     READ CREATE UPDATE DELETE (CRUD)

app.get('/saludo', (req, res) => {
    res.send('Hola a todos pero ahora desde express');
});

app.get('/bienvenida', (req, res) => {
    res.send(`<h1 style="color:blue;">Bienvenido a mi primer servidor express!</h1>`)
});

app.get('/usuario', (req, res) => {
    res.send({
        nombre: 'Dylan',
        apellido: 'Corigliano',
        edad: 20,
        correo: 'test@hotmail.com'
    });
})

app.listen(8080, () => console.log('Listening on port 8080'));