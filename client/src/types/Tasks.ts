import { AnyAction } from "@reduxjs/toolkit";

export interface TaskType {
  title: string;
  info: string | undefined;
  color: string;
  done: boolean;
  _id: string;
  deleteTask: Function;
  listId: string;
  toggleStatus: Function;
}
