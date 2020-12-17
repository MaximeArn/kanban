require("dotenv").config();
import express from "express";
import listRouter from "./routers/lists";
import cardsRouter from "./routers/cards";
const database = require("./config/database");

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use("/lists", listRouter);
app.use("/cards", cardsRouter);

database.on("connected", () => console.log("connected to database"));
database.on("disconnected", () => console.log("diconnected from database"));

app.listen(PORT, () =>
  console.log(`server started on port http://localhost:${PORT}`)
);
