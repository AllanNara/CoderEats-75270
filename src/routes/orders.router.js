import { Router } from "express";
import OrderController from "../controllers/orders.controller.js";

const orderController = new OrderController();
const router = Router();

router.get("/", orderController.getOrders);
router.get("/:oid", orderController.getOrderById);
router.post("/", orderController.createOrder);
router.post("/:oid", orderController.resolverOrder);

export default router
