import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import App from './components/App.js';

ReactDOM.render(
  <BrowserRouter>
    <Route path={["/words", "/users"]}>
      <App />
    </Route>
    <Route exact path="/">
      <Redirect to="/words" />
    </Route>
  </BrowserRouter>,
  document.getElementById("app")
);
