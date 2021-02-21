import { Request, Response, NextFunction } from "express";

class HttpError {
  constructor(public status: number, public message: string) {}
}

export default ({ method, body, path }: Request, res: Response, next: NextFunction) => {
  if (method !== "GET" && method !== "DELETE") {
    const data = path.includes("/task") ? body.taskData : body;
    for (const key in data) {
      data[key] = data[key].trim();
    }
    const { info, ...required } = data;

    if (!Object.values(required).every((value) => value === true)) {
      // return res.status(500).send("Some required fileds were not provided");
      next(new HttpError(500, "Some required fileds were not provided"));
    }
  }
  next();
};
