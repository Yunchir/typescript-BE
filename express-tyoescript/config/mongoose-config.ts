import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://yunchir:89545650@cluster0.gqhbgdd.mongodb.net/sample_mflix`
  )
  .then(() => console.log("connect"))
  .catch((err) => console.log("err:", err));

// ${process.env.MONGODB_PASSWORD}
