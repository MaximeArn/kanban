import { connect, connection as database } from "mongoose";

connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

database.on("error", () => console.log("error during connection to database"));
database.on("connected", () => console.log("connected to database"));
database.on("disconnected", () => console.log("diconnected from database"));

module.exports = database;
