import { Router } from "express";
const { getAllLists, createList, modifyList } = require("../controllers/lists");

const listsRouter = Router();

listsRouter.get("/", getAllLists);
listsRouter.post("/", createList);
listsRouter.patch("/", modifyList);

export default listsRouter;
