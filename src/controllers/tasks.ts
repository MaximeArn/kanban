import { Request, Response } from "express";
import Task from "../models/task";
import List from "../models/list";

const tasksController = {
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
    { body: { oldListId, taskData } }: Request,
    res: Response
  ) => {
    try {
      const deletedList = await List.findOneAndUpdate(
        { _id: oldListId, "tasks._id": taskData.id },
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

  moveTask: async (
    { body: { fromListId, toListId, taskData } }: Request,
    res: Response
  ) => {
    try {
      const oldList = await List.findOneAndUpdate(
        { _id: fromListId, "tasks._id": taskData.id },
        {
          $pull: {
            tasks: { _id: taskData.id },
          },
        },
        { new: true, useFindAndModify: false }
      );
      const createdCard = await Task.create(taskData);
      const newList = await List.findByIdAndUpdate(
        toListId,
        {
          $push: { tasks: createdCard },
        },
        { new: true, useFindAndModify: false }
      );
      res.send({ oldList, newList });
    } catch (error) {
      console.error(error);
      res.send(error).status(500);
    }
  },
};

module.exports = tasksController;
