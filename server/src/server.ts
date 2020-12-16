import express, { Router } from "express";
// const router = Router();
require("dotenv").config();

// const listRouter = require("./routers/listsRouter");

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// app.use("/list", listRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
