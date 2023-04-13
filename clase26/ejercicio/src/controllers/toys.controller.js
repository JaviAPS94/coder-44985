import {
    saveToy as saveToyService,
    getToys as getToysService
} from '../services/toys.service.js'

const getToys = async (req, res) => {
    try {
        const toys = await getToysService();
        res.send(toys);
    } catch (error) {
        res.status(500).send(error);
    }
};

const saveToy = async (req, res) => {
    try {
        const toy = req.body;
        await saveToyService(toy);
        res.send(toy);
    } catch (error) {
        res.status(500).send(error);
    }
}

export {
    getToys,
    saveToy
}