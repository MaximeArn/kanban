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
  modifyList: async ({ body: { name, color } }: Request, res: Response) => {
    try {
      const modifiedList = await List.findByIdAndUpdate(
        "5fdcb35409e144ecf960b71d",
        { name, color },
        { useFindAndModify: false, new: true }
      );
      res.send(modifiedList);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};
