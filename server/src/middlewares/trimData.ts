import { Request, Response, NextFunction } from "express";

export default ({ method, body, path }: Request, res: Response, next: NextFunction) => {
  try {
    if (method !== "GET" && method !== "DELETE") {
      const data = path.includes("/task") ? body.taskData : body;
      for (const key in data) {
        data[key] = data[key].trim();
      }
      const { info, ...required } = data;

      if (!Object.values(required).every((value) => value === true)) {
        // throw new Error("some required fields are not provided");
        console.log("some required fields are not provided");
      }
    }
    next();
  } catch (error) {
    // res.send(error);
    next();
  }
};
