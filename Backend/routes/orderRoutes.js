import { Router } from "express";
const router = Router();
import { placeOrder } from "../controllers/orderController.js";

router.post("/", placeOrder);
export default router;