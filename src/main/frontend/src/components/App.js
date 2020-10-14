import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar.js';
import WordsContainer from './WordsContainer.js';
import WordShow from './WordShow.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/words">
            <WordsContainer />
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