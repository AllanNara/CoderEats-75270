import express from "express";
import config from "./config/index.js";

const { PORT } = config;
const app = express();


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
