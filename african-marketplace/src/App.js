import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import AddItem from './components/AddItem';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/additem" component={AddItem} />
        <Route path='/products'component={Products}/> 
      </Switch>
    </Router>
  );
}

export default App;
