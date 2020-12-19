import { Schema } from "mongoose";

export default new Schema({
  title: String,
  info: { type: String, default: null },
  color: { type: String, default: "#fff" },
});
