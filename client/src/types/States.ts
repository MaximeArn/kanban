import { ListType } from "./List";

export interface RootReducer {
  listsReducer: {
    lists: ListType[];
  };
}
