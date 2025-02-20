import { Response } from "express";
import asyncWrapper from "./asyncWrapper";
import { TServerResponse } from "../types";

const jsonResponse = <T>(
  res: Response,
  config: TServerResponse<T>
): Response => {
  res.status(config.statusCode);
  return res.json({
    status: config.status,
    message: config.message,
    data: config.data,
    title: config.title,
    error: config.error,
  });
};

export default {
  jsonResponse,
  asyncWrapper,
};
