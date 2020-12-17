import { Request, Response } from "express";

module.exports = {
  getAllCards: (req: Request, res: Response) => {
    res.send("get all cards !");
  },

  createCard: (req: Request, res: Response) => {
    res.send("create card");
  },
};
