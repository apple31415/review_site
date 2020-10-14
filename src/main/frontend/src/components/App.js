import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Navbar.js';
import WordsContainer from './WordsContainer.js';
import WordShow from './WordShow.js';

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route path="/words/:id">
            <WordShow />
          </Route>

          <Route path="/words">
            <Route path="/words">
              <WordsContainer />
            </Route>
          </Route>

          <Route path="/">
            <Redirect to="/words" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;