import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import MoveiRoute from "./controller/MovieRouter";
import "./config/mongoose-config";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = 6161;

app.use(cors());
app.use(MoveiRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
