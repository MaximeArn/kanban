import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../environments/api";

const listsMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type } = action;

  switch (type) {
    case "list/getAll":
      axios
        .get(`${apiUrl}/lists`)
        .then(({ data }) => {
          return next({ type, payload: data });
        })
        .catch((err) => console.log(err));
      break;
    default:
      return next(action);
  }
};

export default listsMiddleware;
