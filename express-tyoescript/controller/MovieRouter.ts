import express, { Request, Response } from "express";
import MovieModel from "../model/MovieModel";
import { log } from "console";

const MovieRouter = express.Router();

MovieRouter.get("/movies/:id", async (req: Request, res: Response) => {
  const result = await MovieModel.findOne({
    _id: req.params.id,
  });
  return res.status(200).send(result);
});

MovieRouter.get("/movie", async (req: Request, res: Response) => {
  console.log("request hha movie");
  const result = await MovieModel.find({ poster: { $exists: true } }).limit(10);

  res.status(200).send(result);
});

MovieRouter.get(
  "/movie_id",
  async (req: Request, res: Response): Promise<void> => {
    const query = await MovieModel.find().select({ _id: 1 });
    res.send(query).status(200);
  }
);

export default MovieRouter;
