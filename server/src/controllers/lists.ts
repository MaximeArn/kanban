import { Request, Response } from "express";
import List from "../models/list";
import fieldsValidator from "../utils/fieldsValidator";
import hasItBeenChanged from "../utils/hasItBeenChanged";

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
  createList: async (req: Request, res: Response) => {
    try {
      const validated = fieldsValidator(req, res);
      !validated && res.status(500).send("some required fields were not provided");
      const newList = new List(req.body);
      const insertedList = await newList.save();

      res.send(insertedList).status(200);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  modifyList: async ({ body }: Request, res: Response) => {
    try {
      const currentList = await List.findById(body._id);
      const listWasModified = hasItBeenChanged(currentList, body);

      if (listWasModified) {
        const modifiedList = await List.findByIdAndUpdate(body, body, {
          useFindAndModify: false,
          new: true,
        });
        res.send(modifiedList).status(200);
      } else {
        res.send(currentList).status(200);
      }
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
