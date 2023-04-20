import ContactDto from "../dao/DTOs/contact.dto.js";

export default class ContactsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getContacts = async () => {
        const result = await this.dao.get();
        return result;
    }

    createContact = async (contact) => {
        const contactDto = new ContactDto(contact);
        const result = await this.dao.create(contactDto);
        return result;
    }

    modifyContact = async (contactId, contact) => {
        const result = await this.dao.modify(contactId, contact);
        return result;
    }

    deleteContact = async (contactId) => {
        const result = await this.dao.delete(contactId);
        return result;
    }
}