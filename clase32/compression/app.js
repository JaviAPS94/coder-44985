import express from "express";
import compression from 'express-compression';

const app = express();

// app.use(compression());
app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))

app.get('/cadena', (req, res) => {
    let miCadena = 'Hola coders, este servicio es muy pesado';
    
    for (let i=0; i < 100000;i++) {
        miCadena += 'Hola coder, este servicio es muy pesado';
    };

    res.send(miCadena);
});

app.listen(8080);