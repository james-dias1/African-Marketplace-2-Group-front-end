import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import AddItem from './components/AddItem'

function App() {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/products'component={Products}/>
        <Route path='/postitem'component={AddItem}/>
      </Switch>
    </Router>
  );
}

export default App;
