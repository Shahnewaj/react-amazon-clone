import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Components/Orders/Orders';
 

const promise = loadStripe('pk_test_Jw8FsIp5mTZ5Vth1yOt1nKXK')

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

        <Route path="/orders"  >   
          <Header />
          <Orders />
        </Route>

        <Route path="/checkout"  >   
          <Header />
          <Checkout />
        </Route>

        <Route path="/login"  >   
          <Login />
        </Route>

        <Route path="/payment"  >   
          <Header />
            <Elements  stripe={promise}>
              <Payment />
            </Elements>
        </Route>
        
       
      </Switch>
       
      </div>

    </Router>

  );
}

export default App;
