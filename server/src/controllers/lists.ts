import { Request, Response } from "express";
import List from "../models/list";

module.exports = {
  getAllLists: (req: Request, res: Response) => {
    res.send("get all cards");
  },
  createList: async ({ body: { name, color } }: Request, res: Response) => {
    try {
      const newList = new List({ name: name, color: color });
      const insertedList = await newList.save();
      console.log(insertedList);
      res.send(insertedList);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
};
