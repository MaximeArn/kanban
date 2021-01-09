import { TaskType } from "./Tasks";

export interface ListType {
  name: string;
  color: string;
  tasks: TaskType[];
  _id: string;
  deleteList: Function;
}
