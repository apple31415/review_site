import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar.js';
import WordShow from './WordContainer.js';
import WordShow from './WordShow.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/words">
            <WordContainer />
          </Route>
          <Route exact path="/words/:id">
            <WordShow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;