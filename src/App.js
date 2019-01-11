import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


import Register from "./components/Register";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/Register">Register</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/Login">Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <switch>
          <Route path="/Register" exact component={Register} />
          <Route path="/Login" component={Login} />
            </switch>
        </div>
        </Router>
    );
  }
}

export default App;