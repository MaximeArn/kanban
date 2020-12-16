const listsRouter = require("express").Router();

listsRouter.get("/lists", (req: any, res: any) => res.send("get all lists"));

export default listsRouter;
