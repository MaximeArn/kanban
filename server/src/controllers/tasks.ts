import { Request, Response } from "express";
import Task from "../models/task";
import List from "../models/list";
import task from "../schemas/task";

module.exports = {
  createTask: async ({ body: { listId, task } }: Request, res: Response) => {
    try {
      const createdCard = await Task.create(task);
      const updatedList = await List.findByIdAndUpdate(
        listId,
        {
          $push: { tasks: createdCard },
        },
        { new: true, useFindAndModify: false }
      );
      res.send({ updatedList }).status(200);
    } catch (error) {
      console.error(error);
      res.send(error).status(500);
    }
  },

  modifyTask: async (
    { body: { listId, taskData } }: Request,
    res: Response
  ) => {
    try {
      const updatedList = await List.findOneAndUpdate(
        { _id: listId, "tasks._id": taskData.id },
        { $set: { "tasks.$": taskData } },
        { new: true, useFindAndModify: false }
      );

      res.send(updatedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error).status(500);
    }
  },
  removeTask: async (
    { body: { listId, taskData } }: Request,
    res: Response
  ) => {
    try {
      const deletedList = await List.findOneAndUpdate(
        { _id: listId, "tasks._id": taskData.id },
        {
          $pull: {
            tasks: { _id: taskData.id },
          },
        },
        { new: true, useFindAndModify: false }
      );

      res.send(deletedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error).status(500);
    }
  },
};
