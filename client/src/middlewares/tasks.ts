import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../environments/api";

const tasksMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "task/delete":
      const { listId, taskId } = payload;
      axios
        .delete(`${apiUrl}/tasks`, {
          data: {
            listId,
            taskId,
          },
        })
        .then(({ data }) => next({ type, payload: data }))
        .catch((error) => console.log(error));
      break;

    default:
      return next(action);
  }
};

export default tasksMiddleware;
