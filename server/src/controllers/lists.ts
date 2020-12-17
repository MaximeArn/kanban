import { Request, Response } from "express";

module.exports = {
  getAllLists: (req: Request, res: Response) => {
    res.send("get all cards");
  },
  createList: ({ body: { name, color } }: Request, res: Response) => {
    res.send(`name: ${name}  /  color: ${color}`);
  },
};
