import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar.js';
import WordsContainer from './WordsContainer.js';
import WordShow from './WordShow.js';
import WordForm from './WordForm.js';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/words/new"><WordForm /></Route>
        <Route exact path="/words/:id"><WordShow /></Route>
        <Route exact path="/words"><WordsContainer /></Route>
      </Switch>
    </>
  )
}

export default App;
