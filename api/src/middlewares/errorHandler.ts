// 3rd Party packages
import { NextFunction, Request, Response } from "express";

// utilities
import utils from "../utils";
const response = utils.jsonResponse;

export default async (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("Some Error Has Occured:", err);
  return response(res, {
    status: "success",
    statusCode: 500,
    title: "fatal error",
    message: "internal server error",
  });
};
