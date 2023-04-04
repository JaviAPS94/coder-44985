import { Router } from 'express';

const petsRouter = Router();

const pets = [];

petsRouter.get('/', (req, res) => {
    res.json({ info: 'Pet list', pets })
});

petsRouter.post('/', (req, res) => {
    const { name, type } = req.body;
    pets.push({ name, type });
    res.json({ info: 'Pet created', pet: { name, type } });
});

petsRouter.get('/:name([a-zA-Z20%]+)', (req, res) => {
    // const { name } = req.params;
    // const petFound = pets.find(petDB => petDB.name === name);
    res.json({ info: 'Pet found', pet: req.pet });
})

petsRouter.param('name', (req, res, next, name) => {
    const petFound = pets.find(petDB => petDB.name === name);
    if (!petFound) {
        return res.status(404).send('Pet not found');
    } else {
        req.pet = petFound;
    }
    next();
});

export default petsRouter;