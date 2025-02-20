// Core Modules
import http from "http";

// 3rd party packacages
import { config as envConfig } from "dotenv";
envConfig();

// custom modules
import app from "./app";
import Config from "./config";

// constants
const PORT = process.env.PORT ?? "4000";
const dbURI = process.env.DB_URI as string;
const server = http.createServer(app);

new Config()
  .start({ server, PORT }, dbURI)
  .then(() => {
    console.log("server initalized successfully!");
  })
  .catch((err) => {
    console.log("intialization error", err);
    console.log("server initialization failed");
    process.exit();
  });
