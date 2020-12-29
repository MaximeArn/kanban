import { Middleware } from "@reduxjs/toolkit";

const tasksMiddleware: Middleware = ({ getState, dispatch }) => (next) => (
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case "task/delete":
      console.log(payload);
      break;

    default:
      return next(action);
  }
};

export default tasksMiddleware;
