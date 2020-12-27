const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "getLists":
      return { ...state, lists: payload };
    default:
      return state;
  }
};

export default listsReducer;
