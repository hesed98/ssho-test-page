import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import './App.css';
import {
  LandingPage
} from './pages';

import Questions from './pages/Questions';
import Results from './pages/results';

function App({history}) {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            
            <Route path="/questions" component={Questions} />
            <Route path="/results" component={Results} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
