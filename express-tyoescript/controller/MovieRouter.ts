import express, { Request, Response } from "express";
import MovieModel from "../model/MovieModel";

const MovieRouter = express.Router();

MovieRouter.get("/movies/:id", async (req: Request, res: Response) => {
  const result = await MovieModel.find({
    _id: req.params.id,
  }).limit(1);
  return res.status(200).send(result);
});

MovieRouter.get("/movie", async (req: Request, res: Response) => {
  console.log("request hha movie");
  const result = await MovieModel.find({ poster: { $exists: true } }).limit(4);

  res.status(200).send(result);
});

export default MovieRouter;
