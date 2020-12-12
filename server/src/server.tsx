const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.get("/", (req, res) => res.send("route /"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
