// 3rd part packages
import { RequestHandler } from "express";

// utilities
import utils from "../utils";
const response = utils.jsonResponse;

const routeNotFound: RequestHandler = (req, res, next) => {
  response(res, {
    status: "success",
    statusCode: 404,
    title: "resource does not exist",
    message: "route not found",
  });
};

export default routeNotFound;
