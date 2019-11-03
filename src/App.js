import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ExerciseList from "./components/exerciseList.component"
import EditExercise from "./components/editExercise.component"
import CreateExercise from "./components/createExercise.component"
import CreateUser from "./components/createUser.component"

class App extends React.Component {

render() {
    return (
      <Router>
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Router>
    );
  }
}

export default App;
