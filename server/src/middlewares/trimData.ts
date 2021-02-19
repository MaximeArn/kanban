import { Request, Response, NextFunction } from "express";

export default ({ method, body }: Request, res: Response, next: NextFunction) => {
  if (method !== "GET" && method !== "DELETE") {
    for (const key in body) {
      body[key] = body[key].trim();
    }
  }
  next();
};
