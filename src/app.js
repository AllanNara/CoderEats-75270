import express from "express";
import config from "./config/index.js";
import indexRouter from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors"

const { PORT, MONGO_URI } = config;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use("/api", indexRouter)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected success"))
  .catch((e) => {
    console.error(e.message || e)
    process.exit(1)
  })
