import { Request } from "express";

enum RESPONSE_CODES {
  200,
  201,
  202,
  204,
  400,
  401,
  403,
  405,
}

type TServerResponse<T> = {
  statusCode: RESPONSE_CODES;
  status: "success" | "error";
  message?: string;
  title: string;
  data?: T;
  error?: string;
};

type BRANCH_TYPES = "CSE" | "MECH" | "ARCH";
type COURSE_TYPES = "BTECH" | "MTECH";

interface TypedRequestBody<T> extends Request {
  body: T;
}
