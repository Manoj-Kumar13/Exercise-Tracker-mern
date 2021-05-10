import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";

function CreateExercise() {
  //Setting states
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log("error fetching users data from backend" + error);
      });
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };

    console.log(exercise);

    //Sending data to Backend
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .catch((error) => {
        console.log("Error Creating New Exrcise " + error);
      })
      .then((exercise) => {
        console.log("Exercisee created successfully " + exercise);
      });
    window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            // ref="userInput"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="number"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;
