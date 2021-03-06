import React from 'react'
import logo from './resources/logo.png'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'


function App() {
  return (
    <Router>
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}><img alt="" src={logo}/></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link style={{color:'white'}} className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link  style={{color:'white'}} className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Login} />
          </Switch>
        </div>
      </div>
    </div></Router>
    
  );
}

export default App;
