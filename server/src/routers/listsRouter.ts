const listsRouter = require("express").Router();

listsRouter.get("/lists", (req, res) => res.send("get all lists"));

module.exports = listsRouter;
