import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import {auth} from './firebase';
import { useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe("pk_test_51L51HBSAEvneQ9Q3E6GwjEGtRyzoTNgvkudf2X7ej5gNzj9BGU1kXsxh2gSryF6Fh2SOSFh4hqW0dFY7yjA0XZTi00723Ds5i7");

function App() {
  const[{},dispatch] = useStateValue();
  useEffect(() =>{
      //run only once when app component laods
      auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);
      if(authUser){
        //user logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })

      } else{
        //user logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
      })
  },[])
  
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path ="/login">
          <Login />
        </Route>
        <Route path ="/orders">
          <Header />
          <Orders />
        </Route>
      <Route path="/Checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path ="/payment">
        <Header />
        <Elements stripe={promise}>

       
        <Payment />
        </Elements>
      </Route>
      <Route path="/">
      <Header/>
      <Home/>
      </Route>

      

      </Switch>
     
      
    </div>
    </Router>
  );
}

export default App;
