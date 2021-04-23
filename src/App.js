import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import ContactDetail from './components/ContactDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:userName">
            <ContactDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
