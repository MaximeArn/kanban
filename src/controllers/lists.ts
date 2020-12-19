import { Request, Response } from "express";
import List from "../models/list";

module.exports = {
  getAllLists: async (req: Request, res: Response) => {
    try {
      const lists = await List.find();
      res.send(lists).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  createList: async ({ body }: Request, res: Response) => {
    try {
      const newList = new List(body);
      const insertedList = await newList.save();

      res.send(insertedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  modifyList: async ({ body }: Request, res: Response) => {
    try {
      const modifiedList = await List.findByIdAndUpdate(body, body, {
        useFindAndModify: false,
        new: true,
      });
      res.send(modifiedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  deleteList: async ({ body: { id } }: Request, res: Response) => {
    try {
      const deletedList = await List.findByIdAndDelete(id);
      res.send(deletedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};
