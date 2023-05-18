import cluster from 'cluster';
import express from 'express';
import { cpus } from 'os';

console.log(cluster.isPrimary);

const numeroProcesadores = cpus().length;
console.log(numeroProcesadores);

if (cluster.isPrimary) {
    console.log('Soy un proceso primario, y mi trabajo es generar workers');
    for (let i = 0; i < numeroProcesadores; i++) {
        cluster.fork();
    }

    cluster.on('message', (worker, message) => {
        console.log(`Mensaje recibido del proceso ${worker.process.pid}`);
        console.log(message);
    });

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker con pid ${worker.process.pid} murió`);
        cluster.fork();
    })
} else {
    console.log('Soy un proceso forkeado, y mi rol es ser worker');
    console.log(`Me presento soy un proceso worker con el id: ${process.pid}`);

    const app = express();

    app.get("/operacionsencilla", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        res.send({ message: "Operación sencilla", result: sum });
    });

    app.get("/operacioncompleja", (req, res) => {
        let sum = 0;
        for (let i = 0; i < 5e8; i++) {
            sum += i;
        }
        res.send({ message: "Operación compleja", result: sum });
    });

    app.listen(3030, () => {
        console.log("Server listening on port 3030");
    });

    process.send({ message: 'Hola soy un proceso worker' });
}