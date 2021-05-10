import express from "express";
import Exercise from "../models/exercise.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((error) =>
      res
        .status(400)
        .json("Error while finding exercises(exercise.js) " + error)
    );
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added Successfully"))
    .catch((error) =>
      res.status(400).json("Error while adding exercises(exercise.js) " + error)
    );
});

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((error) => res.status(400).json("Error: " + error));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json(`Exercise Deleted ${exercise}`))
    .catch((error) =>
      res
        .status(400)
        .json("Error while deleting exercise(exercise.js): " + error)
    );
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      (exercise.username = req.body.username),
        (exercise.description = req.body.description);
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated Successfully"))
        .catch((error) =>
          res
            .status(400)
            .json("Error while updating Exercise(exercise.js) " + error)
        );
    })
    .catch((error) =>
      res.status(400).json("Error while finding exercise by id " + error)
    );
});

export default router;
