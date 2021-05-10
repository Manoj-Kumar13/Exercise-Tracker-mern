import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ExerciseList from "./components/exerciseList";
import EditExercise from "./components/editExercise";
import CreateExercise from "./components/createExercise";
import CreateUser from "./components/createUser";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ExerciseList />
        </Route>
        <Route exact path="/edit/:id">
          <EditExercise />
        </Route>
        <Route exact path="/create">
          <CreateExercise />
        </Route>
        <Route exact path="/user">
          <CreateUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
