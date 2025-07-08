import express from "express";
import config from "./config/index.js";
import indexRouter from "./routes/index.js";

const { PORT } = config;
const app = express();

app.use("/api", indexRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
