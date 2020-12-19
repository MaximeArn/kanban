import { Router } from "express";
const { createTask, modifyTask, removeTask } = require("../controllers/tasks");

const tasksRouter = Router();

tasksRouter.post("/", createTask);
tasksRouter.patch("/", modifyTask);
tasksRouter.delete("/", removeTask);

export default tasksRouter;
