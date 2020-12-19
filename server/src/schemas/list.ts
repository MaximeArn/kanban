import { Schema } from "mongoose";
import taskSchema from "./task";

export default new Schema({
  name: String,
  color: { type: String, default: "#ffffff" },
  tasks: [taskSchema],
});
