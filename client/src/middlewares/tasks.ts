import { Middleware } from "@reduxjs/toolkit";

const tasksMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  switch (action.type) {
    case "task/delete":
      console.log("task middleware");
      break;

    default:
      next(action);
  }
};

export default tasksMiddleware;
