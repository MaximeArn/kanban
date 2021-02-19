import { Request, Response, NextFunction } from "express";

export default ({ method, body, path }: Request, res: Response, next: NextFunction) => {
  if (method !== "GET" && method !== "DELETE") {
    const data = path.includes("/task") ? body.taskData : body;
    console.log(data);
    for (const key in data) {
      data[key] = data[key].trim();
    }
    console.log(data);
  }
  next();
};
