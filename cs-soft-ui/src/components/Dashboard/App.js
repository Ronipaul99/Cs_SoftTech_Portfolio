import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Dashboard from './Dashboard/Dashboard';
function App() {



  return (
    <div className="App">
       <Router>
        <Switch>

              <Route  path="/" component={Dashboard}></Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;