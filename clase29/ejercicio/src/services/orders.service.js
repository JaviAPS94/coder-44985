import OrdersDao from '../dao/classes/orders.dao.js'
import UsersDao from '../dao/classes/users.dao.js'

const ordersDao = new OrdersDao();
const usersDao = new UsersDao();

export const createOrder = async (user, business, products) => {
    // {
    //     number: 'asdasd',
    //     business,
    //     user,
    //     status: 'pending',
    //     products: [1,2,3],
    //     totalPrice
    // }
    console.log(business);
    console.log(products);
    const currentProducts = business.products.filter((product) => 
        products.includes(product.id)
    );

    const sum = currentProducts.reduce((acc, prev) => {
        acc += prev.price;
        return acc;
    }, 0);

    const orderNumber = Date.now() + Math.floor(Math.random() * 100000 + 1);

    const order = {
        number: orderNumber,
        business: business._id,
        user: user._id,
        status: 'pending',
        products: currentProducts.map((product) => product.id),
        totalPrice: sum
    }

    const result = await ordersDao.createOrder(order);

    user.orders.push(result._id);

    await usersDao.updateUser(user._id, user);

    return result;
}

export const getOrders = async () => {
    const result = await ordersDao.getOrders();
    return result;
}

export const getOrderById = async (orderId) => {
    const result = await ordersDao.getOrderById(orderId);
    return result;
}

export const resolveOrder = async (orderResult, status) => {
    orderResult.status = status;
    await ordersDao.resolveOrder(orderResult._id, orderResult);
    return orderResult;
}