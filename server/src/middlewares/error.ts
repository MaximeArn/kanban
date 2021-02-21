import { Request, Response, NextFunction } from "express";

export default (
  err: { status: number; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message } = err;
  res.status(status || 500).send(message || "oups an error occured ");
};
