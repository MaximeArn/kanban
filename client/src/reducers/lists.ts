import { AnyAction } from "@reduxjs/toolkit";
import { ListType } from "../types/List";

const initialState = {
  lists: [],
};

const updateTaskArray = (lists: ListType[], newList: ListType) => {
  return lists.map((list: ListType) => {
    return list._id === newList._id ? { ...list, tasks: newList.tasks } : list;
  });
};

const listsReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case "list/getAll":
      return { ...state, lists: payload };

    case "list/create":
      return { ...state, lists: [...state.lists, payload] };

    case "list/delete":
      const filteredLists = state.lists.filter(
        (list: ListType) => list._id !== payload
      );
      return { ...state, lists: filteredLists };

    case "list/edit":
      const updatedLists = state.lists.map((list: ListType) =>
        list._id === payload._id ? payload : list
      );
      return { ...state, lists: updatedLists };

    case "task/delete":
      return { ...state, lists: updateTaskArray(state.lists, payload) };

    case "task/create":
      return { ...state, lists: updateTaskArray(state.lists, payload) };

    case "task/edit":
      return { ...state, lists: updateTaskArray(state.lists, payload) };

    default:
      return state;
  }
};

export default listsReducer;
