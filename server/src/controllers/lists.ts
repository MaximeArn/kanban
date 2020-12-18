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
  createList: async ({ body: { name, color } }: Request, res: Response) => {
    try {
      const newList = new List({ name: name, color: color });
      const insertedList = await newList.save();

      res.send(insertedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};
