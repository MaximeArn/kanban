import { Request, Response, NextFunction } from "express";

export default (
  err: { status: number; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status, message } = err;
  console.log(status, message);
  console.log("error handler");
  res.status(status || 500).json({ message });
  res.send();
};
