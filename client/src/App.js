import { useState } from "react";
import Navigation from './routers/Navigation';
import React from 'react';
import Altas from './components/Altas';
import Admin from './components/Admin';
import Main from './components/Main';
import SignIn from './components/SignIn';
import ErrorNotFound from './components/ErrorNotFound';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  
  
  if (localStorage.getItem('tokenSession') != null 
      && localStorage.getItem('tokenSession').length > 0 ) {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path = "/" exact component={Main} />
            <Route path = "/main" exact component={Main} />
            <Route path = "/altas" exact component={Altas} />
            <Route path = "/admin" exact component={Admin} />
            <Route exact component={ErrorNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }else{
    return <SignIn setToken={localStorage.getItem('tokenSession') } />
  }
}

export default App;
