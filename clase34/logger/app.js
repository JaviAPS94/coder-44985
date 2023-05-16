import express from 'express';
import { addLogger } from './utils/logger.js';

const app = express();

app.use(addLogger);

app.get('/', (req, res) => {
    //Loguear a nivel consola
    // req.logger.error('Prueba error');
    // req.logger.warn('Prueba warn');
    // req.logger.info('Prueba info');
    // req.logger.debug('Prueba debug');
    // req.logger.silly('Prueba silly');

    //Mensajes niveles custom
    req.logger.fatal('Prueba fatal');
    req.logger.error('Prueba error');
    req.logger.warning('Prueba warning');
    req.logger.info('Prueba info');
    req.logger.debug('Prueba debug');
    
    res.send({ message: 'Prueba logger' });
});

app.listen(8080);