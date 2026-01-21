import { createOrder } from '../services/orderService.js';

export const placeOrder = async(req, res) => {
    try {
        const result = await createOrder(req.body);
        res.status(201).json({message: result.message, order: result.order});
    } catch (error) {
      res.status(500).json({ message: error.message });  
    }
}