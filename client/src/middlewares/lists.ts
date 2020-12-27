import { Middleware } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../environments/api";

const listsMiddleware: Middleware = ({ getState, dispatch }) => (next) => ({
  type,
}) => {
  switch (type) {
    case "getLists":
      axios
        .get(`${apiUrl}/lists`)
        .then(({ data }) => {
          next({ type, payload: data });
        })
        .catch((err) => console.log(err));
      break;

    default:
      break;
  }
};

export default listsMiddleware;
