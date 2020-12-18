import { Router } from "express";
const { createTask, modifyTask } = require("../controllers/tasks");

const tasksRouter = Router();

tasksRouter.post("/", createTask);
tasksRouter.patch("/", modifyTask);

export default tasksRouter;
