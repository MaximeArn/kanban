import { Task } from "./Tasks";

export interface ListsState {
  lists: ListType[];
}

export interface ListType {
  name: string;
  color: string;
  tasks: Task[];
}
