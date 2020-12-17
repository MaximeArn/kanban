import { Request, Response } from "express";

module.exports = {
  getAllLists: (req: Request, res: Response) => {
    res.send("get all cards");
  },
  createList: (req: Request, res: Response) => {
    res.send("create list");
  },
};
