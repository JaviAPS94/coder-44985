import { Router } from 'express';
import Contacts from '../dao/factory.js';
import ContactsRepository from '../repository/contacts.repository.js';

const router = Router();

const contacts = new Contacts();
const contactsRepository = new ContactsRepository(contacts);

router.get('/', async(req, res) => {
    const result = await contactsRepository.getContacts();
    res.json(result);
});

router.post('/', async(req, res) => {
    const { name, lastname, phone } = req.body;
    const contact = {
        name,
        lastname,
        phone
    }

    const result = await contactsRepository.createContact(contact);
    res.json(result);
});

router.put('/:id', async(req, res) => {
    const { name, lastname, phone } = req.body;

    const contact = {
        name,
        lastname,
        phone
    }

    const contactId = req.params.id;

    const result = await contactsRepository.modifyContact(contactId, contact);
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const contactId = req.params.id;
    const result = await contactsRepository.deleteContact(contactId);
    res.json(result);
});

export default router;