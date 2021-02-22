import { Request, Response } from "express";
export default ({ body, path }: Request, res: Response) => {
  const data = path.includes("/task") ? body.taskData : body;
  for (const key in data) {
    data[key] = data[key].trim();
  }
  const { info, ...required } = data;

  return !Object.values(required).every((value) => value === true);
};
