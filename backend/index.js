import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import exercisesRouter from "./routes/exercises.js";
import usersRouter from "./routes/users.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

//frontend routes
app.use(express.static("frontend/build"));
app.use("/create", express.static("frontend/build"));
app.use("/user", express.static("frontend/build"));
app.use("/edit/:id", express.static("frontend/build"));

//starting the server
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
