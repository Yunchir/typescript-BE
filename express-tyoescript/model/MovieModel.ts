import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    movieId: Number,
    location: {},
  },
  {
    collection: "movies",
  }
);

const MovieModel = mongoose.model("Movies", movieSchema, "movies");

export default MovieModel;
