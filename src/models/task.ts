import { model } from "mongoose";
import taskSchema from "../schemas/task";

export default model("task", taskSchema);
