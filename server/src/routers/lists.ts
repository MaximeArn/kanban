import { Router } from "express";
const { getAllLists, createList } = require("../controllers/lists");

const listsRouter = Router();

listsRouter.get("/", getAllLists);
listsRouter.post("/", createList);

export default listsRouter;
