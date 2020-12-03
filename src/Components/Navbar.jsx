import React from "react";
import Home from "./Home";
import Registro from "./Registro";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

function _Navbar() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Empleados</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Home" className="p-2">Home</Link>
            <Link to="/Registro" className="p-2">Registro</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
      <Redirect from="/" to="Home" />
    </Router>
  );
}

export default _Navbar;
