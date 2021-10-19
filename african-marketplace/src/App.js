import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/products'component={Products}/> 
      </Switch>
    </Router>
  );
}

export default App;
