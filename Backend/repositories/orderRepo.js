import Order from "../models/order-model.js";

export const createOrderRecord = async (orderData) => {
    return await Order.create(orderData);
}