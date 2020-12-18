import { Schema, SchemaTypes } from "mongoose";

export default new Schema({
  name: String,
  color: { type: String, default: "#ffffff" },
  cards: [{ _id: SchemaTypes.ObjectId, position: Number }],
});
