import { ListType } from "../types/List";

const initialState = {
  lists: [],
};

const updateTaskArray = (lists: ListType[], newList: ListType) => {
  return lists.map((list: ListType) => {
    return list._id === newList._id ? { ...list, tasks: newList.tasks } : list;
  });
};

const listsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "list/getAll":
      return { ...state, lists: payload };

    case "list/create":
      return { ...state, lists: [...state.lists, payload] };

    case "task/delete":
      return { ...state, lists: updateTaskArray(state.lists, payload) };

    case "task/create":
      return { ...state, lists: updateTaskArray(state.lists, payload) };

    default:
      return state;
  }
};

export default listsReducer;
