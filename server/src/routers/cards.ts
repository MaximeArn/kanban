import { Router } from "express";
const { getAllCards, createCard } = require("../controllers/cards");

const cardsRouter = Router();

cardsRouter.get("/", getAllCards);
cardsRouter.post("/", createCard);

export default cardsRouter;
