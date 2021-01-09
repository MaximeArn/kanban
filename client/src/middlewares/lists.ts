import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../environments/api";

const listsMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "list/getAll":
      axios
        .get(`${apiUrl}/lists`)
        .then(({ data }) => {
          next({ type, payload: data });
        })
        .catch((err) => console.log(err));
      break;

    case "list/create":
      console.log(payload);
      axios
        .post(`${apiUrl}/lists`, payload)
        .then(({ data }) => {
          console.log(data);
          next({ type, payload: data });
        })
        .catch((err) => console.log(err));
      break;

    case "list/delete":
      axios
        .delete(`${apiUrl}/lists`, { data: payload })
        .then(({ data }) => {
          next({ type, payload: data._id });
        })
        .catch((err) => console.log(err));
      break;

    default:
      next(action);
      break;
  }
};

export default listsMiddleware;
