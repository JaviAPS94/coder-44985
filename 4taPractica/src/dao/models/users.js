import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  rol: {
    type: String,
    require: true,
    default: 'user',
  }
});

export const usersModel = mongoose.model('Users', usersSchema);