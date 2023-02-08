import { Router } from 'express';
import { uploader } from '../utils.js';

const router = Router();

const pets = [];

router.get('/all', (req, res) => {
    res.send({ pets });
});

router.post('/', uploader.single('file'), (req, res) => {
    const file = req.file;
    if(!file) return res.send({status: 'error'});
    const pet = req.body;
    pet.profile = req.file.path;
    pets.push(pet);
    res.send({status: 'success'});
});

export default router;