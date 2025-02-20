// 3rd party packages
import express from "express";
import cors from "cors";

// 3rd Party Modules
import bodyParser from "body-parser";

// custom modules
import routes from "./routes";
import utils from "./utils";
import middlewares from "./middlewares";

// utilities
const { jsonResponse: response } = utils;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  return response(res, {
    status: "success",
    statusCode: 200,
    title: "server status",
    message: "server is active",
  });
});

app.use("/students", routes.studentRouter);

app.use(middlewares.errorHandler);
app.use(middlewares.routeNotFound);

export default app;
