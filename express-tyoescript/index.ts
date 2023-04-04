import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import MoveiRoute from "./controller/MovieRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(MoveiRoute);

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
