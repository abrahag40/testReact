import React from "react";
import Home from './Home'
import Registro from './Registro'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function Navbar() {
  return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Prueba de React
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Home" >Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Registro" >Registro</Link>
                </li>
            </ul>
        </div>
        </nav>
        <div>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Registro">
            <Registro />
          </Route>
          <Route path="/Registro">
            <Registro />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default Navbar;
