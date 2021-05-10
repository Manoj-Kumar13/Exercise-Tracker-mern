import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) =>
      res.status(400).json("Error while finding in Users.js" + error)
    );
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("user created Successfully"))
    .catch((error) =>
      res.status(400).json("Error While adding new User(user.js)" + error)
    );
});

export default router;
