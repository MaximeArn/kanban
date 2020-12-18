import { model } from "mongoose";
import cardSchema from "../schemas/card";

export default model("card", cardSchema);
