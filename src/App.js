import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharactersPage from "./components/pages/characters";
import NoMatch from "./components/pages/noMatch";
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CharactersPage} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;