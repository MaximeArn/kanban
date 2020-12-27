import { Task } from "./Tasks";

export interface ListsState {
  lists: List[];
}

export interface List {
  name: String;
  color: string;
  tasks: Task[];
}
