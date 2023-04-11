import express from 'express';
import { fork } from 'child_process';

const app = express();

function operacionCompleja() {
    let result = 0;
    for(let i=0; i<5e9;i++) {
        result += i;
    }
    return result;
}

app.get('/suma', (req, res) => {
    const result = operacionCompleja();
    res.send(`Resultado ${result}`);
});

app.get('/suma-fork', (req, res) => {
    const child = fork('./operacionCompleja.js');
    child.send('Inicia el calculo de la operación compleja');
    child.on('message', result => {
        res.send(`Resultado ${result}`);
    })
})

app.get('/test', (req, res) => {
    res.send('Servicio de prueba');
});

app.listen(8080);