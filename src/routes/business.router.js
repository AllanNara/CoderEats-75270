import { Router } from "express";
import BusinessController from "../controllers/business.controller.js";

const businessController = new BusinessController()
const router = Router();

router.get("/", businessController.getBusiness);
router.get("/:bid", businessController.getBusinessById);
router.post("/", businessController.createBusiness);
router.post("/:bid/product", businessController.addProduct);

export default router
