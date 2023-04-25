import ordersModel from '../models/orders.model.js'

export default class OrdersDao {
    getOrders = async () => {
        const result = await ordersModel.find();
        return result;
    }

    getOrderById = async (orderId) => {
        const result = await ordersModel.findById(orderId);
        return result;
    }

    createOrder = async (order) => {
        const result = await ordersModel.create(order);
        return result;
    }

    resolveOrder = async (id, order) => {
        const result = await ordersModel.findByIdAndUpdate(id, order);
        return result;
    }
}