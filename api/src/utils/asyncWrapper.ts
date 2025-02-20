import { NextFunction, Request, Response } from "express";
import { TypedRequestBody } from "../types";

export default <T>(
  fn: (
    req: TypedRequestBody<T>,
    res: Response,
    next: NextFunction
  ) => Promise<void>
) => {
  return async (
    req: TypedRequestBody<T>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
