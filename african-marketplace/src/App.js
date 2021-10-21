import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Signup from './components/Signup';
import Login from './components/Login';
import AddItem from './components/AddItem';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/postitem" component={AddItem}/>
        <Route path='/products'component={Products}/> 
      </Switch>
    </Router>
  );
}

export default App;
