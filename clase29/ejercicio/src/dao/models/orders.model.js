import mongoose, { mongo } from 'mongoose';

const ordersCollection = 'orders';

const ordersSchema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    products: [],
    totalPrice: Number,
    status: String
});

ordersSchema.pre('find', function () {
    this.populate('business');
});

const ordersModel = mongoose.model(ordersCollection, ordersSchema);

export default ordersModel;