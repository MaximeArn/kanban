import { Router } from "express";
const { getAllCards, createCard, modifyTask } = require("../controllers/tasks");

const cardsRouter = Router();

cardsRouter.get("/", getAllCards);
cardsRouter.post("/", createCard);
cardsRouter.post("/", modifyTask);
export default cardsRouter;
