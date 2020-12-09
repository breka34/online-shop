import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MenItemsTitle from './components/MenItemsTitle';
import WomenItemsTitle from './components/WomenItemsTitle';
import AllItems from './components/Items';
import Header from './components/Header'
import { CartProvider } from './components/CartContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
// import { CartProvider } from './components/CartContext';

ReactDOM.render(


  <BrowserRouter>
  
    <App/>
    
    <Switch>
   
      <Route exact path="/AllItems" component={AllItems} />
      <Route path="/MenItemsTitle" component={MenItemsTitle} />
      <Route path="/WomenItemsTitle" component={WomenItemsTitle} /> 
    </Switch>
    </BrowserRouter>
    
    
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
