import { Router } from "express";
const {
  createTask,
  modifyTask,
  removeTask,
  moveTask,
} = require("../controllers/tasks");

const tasksRouter = Router();

tasksRouter.post("/", createTask);
tasksRouter.patch("/", modifyTask);
tasksRouter.patch("/move", moveTask);
tasksRouter.delete("/", removeTask);

export default tasksRouter;
