import express from "express";
import listRouter from "./routers/lists";
import cardsRouter from "./routers/cards";
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use("/lists", listRouter);
app.use("/cards", cardsRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
