import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowAllForks from "./components/ShowAllForks";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route exact path='/login' component={LogIn}/>
        <Route exact path='/show-forks' component={ShowAllForks}/>
      </Switch>
    </Router>
  );
};

export default App;
