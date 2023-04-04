import express, { Request, Response } from "express";
import MovieModel from "../model/MovieModel";

const MovieRouter = express.Router();

MovieRouter.get("/", async (req: Request, res: Response) => {
  const result = await MovieModel.find();
  res.status(200).send(result);
});

export default MovieRouter;
