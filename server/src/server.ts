require("dotenv").config();
import corsConfig from "./config/cors";
import cors from "cors";
import express, { json, urlencoded } from "express";
import listRouter from "./routers/lists";
import tasksRouter from "./routers/tasks";
import trimMiddleware from "./middlewares/trimData";
import errorMiddleware from "./middlewares/error";

require("./config/database")();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(cors(corsConfig));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(trimMiddleware);
app.use(errorMiddleware);
app.use("/lists", listRouter);
app.use("/tasks", tasksRouter);

app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}`));
