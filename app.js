import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";

const app = express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter)


mongoose
  .connect(
    "mongodb+srv://admin:xOU152jtys5nYRaL@cluster0.bc84alo.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Connected to database and listening to port 3000"))
  .catch((err) => console.log(err));

//mongo db password
// xOU152jtys5nYRaL
