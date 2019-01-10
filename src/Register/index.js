import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      result: ""
    };
  }

  handleNameInput = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailInput = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordInput = event => {
    this.setState({ pass: event.target.value });
  };

  handleRegisterSubmit = event => {
    event.preventDefault();
    const result = `${this.state.name} ${this.state.email} ${this.state.pass}`;
    this.setState({ result: result });
  };

  render() {
    return (
      <form onSubmit={this.handleRegisterSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Type your name"
            onChange={this.handleNameInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Type your email"
            onChange={this.handleEmailInput}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Make it secure"
            onChange={this.handlePasswordInput}
          />
        </FormGroup>

        <input type="submit" value="Register" />

      </form>
    );
  }
}

export default Register;
