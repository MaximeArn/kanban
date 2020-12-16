import { AnyAction } from "redux";

const initialState = {
  register: {
    name: "",
    firstname: "",
    password: "",
    confirmPassword: "",
  },
};

const auth = (state = initialState, { type }: AnyAction) => {
  switch (type) {
    default:
      return state;
  }
};

export {};
