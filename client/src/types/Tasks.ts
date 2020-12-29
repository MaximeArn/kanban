import { AnyAction } from "@reduxjs/toolkit";

export interface TaskType {
  title: string;
  info: string | null;
  color: string;
  done: boolean;
  _id: string;
  deleteTask: Function;
}
