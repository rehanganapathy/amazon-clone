import React,{useEffect} from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Login';
import {auth} from './firebase';
import { useStateValue} from './StateProvider';

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
      <Route path="/Checkout">
      <Header/>
      <Checkout/>
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
