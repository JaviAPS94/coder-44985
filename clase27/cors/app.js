import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Saludos Clase' });
});

app.listen(3000);