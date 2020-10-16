import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar.js';
import WordsContainer from './WordsContainer.js';
import WordShow from './WordShow.js';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/words/:id">
          <WordShow />
        </Route>

        <Route path="/words">
          <WordsContainer />
        </Route>
      </Switch>
    </>
  )
}

export default App;