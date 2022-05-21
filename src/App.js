import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
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
