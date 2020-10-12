import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';


function App() {

  const [{ } ,dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser)
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[dispatch])

  return (
    <Router >
      <div className="App"> 
      
      <Switch>
      
        <Route path="/" exact >
          <Header />        
          <Home />
        </Route>
        <Route path="/checkout"  >   
        <Header />
          <Checkout />
        </Route>
        <Route path="/login"  >   
          <Login />
        </Route>
       
      </Switch>
       
      </div>

    </Router>

  );
}

export default App;
