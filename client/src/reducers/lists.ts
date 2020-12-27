import { Action } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, { type }: Action<any>) => {
  switch (type) {
    default:
      return state;
  }
};

export default listsReducer;
