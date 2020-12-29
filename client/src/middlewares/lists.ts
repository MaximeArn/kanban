import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../environments/api";

const listsMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  switch (action.type) {
    case "getLists":
      axios
        .get(`${apiUrl}/lists`)
        .then(({ data }) => {
          console.log(data);
          next({ type: action.type, payload: data });
        })
        .catch((err) => console.log(err));
      break;

    default:
      return next(action);
  }
};

export default listsMiddleware;
