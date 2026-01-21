import { findProdById, deductStock } from "../repositories/productRepo.js";
import { createOrderRecord } from "../repositories/orderRepo.js";

export const createOrder = async (orderData) => {
    const { productId, quantity, status } = orderData;
    if(!productId || !quantity) {
        throw new Error("Product ID and quantity are required to create an order.");
    }
    // Checking product availability
    const product = await findProdById(productId);
    if(!product){
        throw new Error("Product not found.");
    }
    // Deducting stock safely
    const updateProd = await deductStock(productId,quantity);
    if(!updateProd){
        throw new Error("Insufficient stock for the product.");
    }
    // creating order
    const order = await createOrderRecord({ productId, quantity, status });

    return {
        message: "Order created successfully",
        order,
    }
};