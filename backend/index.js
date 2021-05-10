import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import exercisesRouter from "./routes/exercises.js";
import usersRouter from "./routes/users.js";
import path from "path";

//configuring dotenv
dotenv.config();

//creating the server
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

const URI = process.env.EXERCISE_URI;

//connecting to database
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to database successfully");
});

//base url
// app.get("/", (req, res) => {
//   res.send("Learning MERN Stack");
// });

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 5000;

app.use(express.static("build"));
// if (process.env.NODE_ENV == "production") {
//   app.use(express.static("build"));
// }
//starting the server
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
