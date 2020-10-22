import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar.js';
import WordsContainer from './WordsContainer.js';
import WordShow from './WordShow.js';
import WordForm from './WordForm.js';
import NewUserForm from './NewUserForm.js';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/words/new"><WordForm /></Route>
        <Route exact path="/words/:id"><WordShow /></Route>
        <Route exact path="/words"><WordsContainer /></Route>
        <Route exact path="/users/new"><NewUserForm /></Route>
      </Switch>
     <Footer/>
    </>
  )
}

export default App;