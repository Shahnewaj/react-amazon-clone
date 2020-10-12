import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <Router >
      <div className="App"> 
      <Header />
      <Switch>
      
        <Route path="/" exact >
         
          <Home />
        </Route>
        <Route path="/checkout"  >
       
          <Checkout />
        </Route>
       
      </Switch>
       
      </div>

    </Router>

  );
}

export default App;
