import { Request, Response, NextFunction } from "express";

export default ({ method, body, path }: Request, res: Response, next: NextFunction) => {
  if (method !== "GET" && method !== "DELETE") {
    if (path.includes("/task")) {
      const { taskData } = body;
      for (const key in taskData) {
        taskData[key] = taskData[key].trim();
      }
    } else {
      console.log("list method");
      for (const key in body) {
        body[key] = body[key].trim();
      }
    }
  }
  next();
};
