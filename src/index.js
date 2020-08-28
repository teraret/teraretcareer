import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Screen/jobsearch/Home';
import SignIn from './Screen/login/SignIn';
import SignUp from './Screen/register/SignUp';
import Search from './Screen/jobsearch/Search';
import Dashboard from './Screen/dashboard/Dashboard';
import * as serviceWorker from './serviceWorker';
import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'


function Index(props) {

  return ( < BrowserRouter forceRefresh = {
      true
    } >
    <
    Switch >
    <
    Route exact path = "/" >
    <
    Home / >
    <
    /Route>  <
    Route path = "/dasboard" >
    <
    Dashboard / >
    <
    /Route> <
    Route path = "/login" >
    <
    SignIn / >
    <
    /Route> <
    Route path = "/register" >
    <
    SignUp / >
    <
    /Route>   < /
    Switch > <
    /BrowserRouter>)      

  }

  ReactDOM.render( < React.StrictMode >
    <
    Index / >
    <
    /React.StrictMode>,
    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
