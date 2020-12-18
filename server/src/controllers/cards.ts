import { Request, Response } from "express";
import Card from "../models/card";

module.exports = {
  getAllCards: async (req: Request, res: Response) => {
    try {
      const cards = await Card.find();
      res.send(cards);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },

  createCard: async ({ body }: Request, res: Response) => {
    try {
      const createdCard = await Card.create(body);
      res.send(createdCard);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};
