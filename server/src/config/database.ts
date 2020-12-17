import { connect, connection } from "mongoose";

connect(`${process.env.DATABASE_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
