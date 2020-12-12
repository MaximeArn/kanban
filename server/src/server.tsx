const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("route /"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
