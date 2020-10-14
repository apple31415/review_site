import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;