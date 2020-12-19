import { Schema } from "mongoose";

export default new Schema({
  name: String,
  color: { type: String, default: "#ffffff" },
  tasks: [{ title: String, infos: String, color: String }],
});
