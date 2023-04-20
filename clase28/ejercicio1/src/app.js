import express from 'express';
import contactsRouter from './routes/contacts.router.js';

const app = express();

app.use(express.json());

app.use('/api/contacts', contactsRouter);

// try {
//     await mongoose.connect('mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority');
// } catch (error) {
//     console.log(error);
// }

app.listen(8080, () => console.log('Server running'));