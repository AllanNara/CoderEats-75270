import { Router } from "express";
import usersRouter from "./users.router.js";
import businessRouter from "./business.router.js";
import ordersRouter from "./orders.router.js";

const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/business", businessRouter);
indexRouter.use("/orders", ordersRouter)

export default indexRouter;
