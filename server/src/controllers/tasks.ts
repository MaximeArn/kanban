import { Request, Response } from "express";
import Task from "../models/task";
import List from "../models/list";

module.exports = {
  getAllCards: async (req: Request, res: Response) => {
    try {
      const cards = await Task.find();
      res.send(cards).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  createCard: async ({ body: { listId, card } }: Request, res: Response) => {
    try {
      const createdCard = await Task.create(card);
      const updatedList = await List.findByIdAndUpdate(
        listId,
        {
          $push: { cards: createdCard },
        },
        { new: true, useFindAndModify: false }
      );
      res.send({ updatedList }).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  modifyTask: async (req: Request, res: Response) => {},
};
