import { Request, Response, NextFunction } from "express";

export default ({ method, body, path }: Request, res: Response, next: NextFunction) => {
  if (method !== "GET" && method !== "DELETE") {
    const data = path.includes("/task") ? body.taskData : body;
    for (const key in data) {
      data[key] = data[key].trim();
    }
    const { info, ...required } = data;

    !Object.values(required).every((value) => value === true) &&
      console.log("some required fields are not provided");
  }
  next();
};
