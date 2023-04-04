import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://yunchir:89545650@cluster0.gqhbgdd.mongodb.net/sample_mflix`
  )
  .then(() => console.log("connect"));

export default mongoose.connection;

// ${process.env.MONGODB_PASSWORD}
