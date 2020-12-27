import { TaskType } from "./Tasks";

export interface ListsState {
  lists: ListType[];
}

export interface ListType {
  name: string;
  color: string;
  tasks: TaskType[];
  _id: string;
}
