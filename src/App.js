import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";


import Register from "./components/Register";
import Login from "./components/Login";

const NavBar = styled.nav`
  font-family: "Dosis", sans-serif;
  display: flex;
  justify-content: center;
  background: tomato;
  padding: 30px;
  font-weight: 600;
  ul {
    text-decoration: none;
    display: flex;
    flex-direction: row;
  }
  li {
    list-style: none;
    margin: 0px 30px 0px 30px;
  }
  .linkStyle {
    color: #ffffff;
    text-decoration: none;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <ul>
              <li>
                <Link className="linkStyle" to="/Register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="linkStyle" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </NavBar>
          <Route path="/Register" exact component={Register} />
          <Route path="/Login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
