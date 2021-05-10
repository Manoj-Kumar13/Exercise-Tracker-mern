import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log("error fetching exercises" + error);
      });
  }, []);

  const Exercise = (props) => {
    return (
      <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date}</td>
        <td>
          <Link to={`edit/${props.exercise._id}`}>edit</Link>
          {" | "}
          <button
            onClick={() => {
              const key = props.exercise._id;
              axios.delete(`http://localhost:5000/exercises/${key}`);

              setExercises(exercises.filter((del) => del._id !== key));
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => {
            return <Exercise exercise={exercise} key={exercise._id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
