import { ListType } from "../types/List";

const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "list/getAll":
      return { ...state, lists: payload };
    case "task/delete":
      console.log(payload);
      const { lists } = state;
      const filteredLists: ListType[] = lists.filter(
        ({ _id }) => _id !== payload._id
      );
      filteredLists.push(payload);
      console.log(filteredLists);
      return { ...state, lists: filteredLists };
    default:
      return state;
  }
};

export default listsReducer;
