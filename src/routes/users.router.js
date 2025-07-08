import { Router } from "express";
import UserController from "../controllers/users.controller.js";

const userController = new UserController();
const router = Router();

router.get("/", userController.getUsers)
router.post("/", userController.saveUser)
router.get("/:uid", userController.getUserById)

export default router

