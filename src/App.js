import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <h3>this is header</h3>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
