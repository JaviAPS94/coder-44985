import { Router } from 'express';

const dictionaryRouter = Router();

const words = ['asd'];

dictionaryRouter.get('/:word([a-zA-Z]+)', (req, res) => {
    res.send(req.params.word);
});

dictionaryRouter.get('*', (req, res) => {
    res.status(404).send('Cannot get the specied word');
});

dictionaryRouter.param('word', (req, res, next, word) => {
    const searchWord = words.find(wordDB => wordDB === word);
    if (!searchWord) {
        return res.status(404).send('Word not found');
    };
    next();
});

export default dictionaryRouter;