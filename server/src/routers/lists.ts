import { Router } from "express";
const {
  getAllLists,
  createList,
  modifyList,
  deleteList,
} = require("../controllers/lists");

const listsRouter = Router();

listsRouter.get("/", getAllLists);
listsRouter.post("/", createList);
listsRouter.patch("/", modifyList);
listsRouter.delete("/", deleteList);

export default listsRouter;
