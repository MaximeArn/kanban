import { Request, Response, Router } from "express";

const cardsRouter = Router();

cardsRouter.get("/", (req: Request, res: Response) =>
  res.send("get all cards")
);

export default cardsRouter;
