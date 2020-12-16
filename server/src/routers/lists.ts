import { Request, Response, Router } from "express";
const listsRouter = Router();

listsRouter.get("/", (req: Request, res: Response) =>
  res.send("get all lists")
);

export default listsRouter;
