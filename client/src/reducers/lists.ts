import { ListType } from "../types/List";

const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "list/getAll":
      return { ...state, lists: payload };
    case "task/delete":
      const { lists } = state;
      const newLists = lists.map((list: ListType) => {
        return list._id === payload._id
          ? { ...list, tasks: payload.tasks }
          : list;
      });
      return { ...state, lists: newLists };
    default:
      return state;
  }
};

export default listsReducer;
