require("dotenv").config();
import express, { json, urlencoded } from "express";
import listRouter from "./routers/lists";
import tasksRouter from "./routers/tasks";
require("./config/database")();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use("/lists", listRouter);
app.use("/tasks", tasksRouter);

app.listen(PORT, () =>
  console.log(`server started on port http://localhost:${PORT}`)
);
