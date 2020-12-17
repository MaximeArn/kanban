require("dotenv").config();
import express, { urlencoded } from "express";
import listRouter from "./routers/lists";
import cardsRouter from "./routers/cards";

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(urlencoded({ extended: true }));
app.use("/lists", listRouter);
app.use("/cards", cardsRouter);

app.listen(PORT, () =>
  console.log(`server started on port http://localhost:${PORT}`)
);
