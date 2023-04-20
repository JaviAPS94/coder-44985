import mongoose from 'mongoose';

const contactsCollections = 'contacts';

const contactsSchema = new mongoose.Schema({
    name: String,
    phone: String
});

const contactsModel = mongoose.model(contactsCollections, contactsSchema);

export default contactsModel;