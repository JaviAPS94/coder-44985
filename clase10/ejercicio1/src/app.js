import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js';

const app = express();
app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);

const server = app.listen(8080, () => console.log('Listening'));

const io = new Server(server);

// io.on('connection', socket => {
//     console.log('Nuevo cliente');

//     socket.on('message', data => {
//         console.log(data);
//     });

//     socket.emit('evento_socket_individual', 'Este mensaje solo lo debe recibir el socket individual');
//     socket.broadcast.emit('evento_todos_menos_actual', 'Lo veran todos menos el que envio el mensaje');
//     io.emit('evento_todos', 'Lo recibiran todos los sockets');
// });

const logs = [];

io.on('connection', socket => {
    console.log('Connected');
    socket.on('message1', data => {
        console.log(data);
        io.emit('log', data);
    })

    socket.on('message2', data => {
        logs.push({socketid: socket.id, message: data});
        io.emit('log', {logs});
    })
});



