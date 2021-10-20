import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';

import Login from './components/Login';
import AddItem from './components/AddItem';

function App() {

  const [items, setItems] = useState([]);

  return (
    <Router>
      <Header />
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/postitem" component={AddItem} setItems={setItems} items={items}/>
        <Route path='/products'component={Products} setItems={setItems} items={items}/> 
      </Switch>
    </Router>
  );
}

export default App;
