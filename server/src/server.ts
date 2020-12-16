import express, { Router } from "express";
import listRouter from "./routers/listsRouter";
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use("/list", listRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
