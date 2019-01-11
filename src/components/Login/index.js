import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pass: "",
      result: []
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
    const value = {
      name: this.state.name,
      email: this.state.email,
      pass: this.state.pass
    };

    this.setState(prevState => ({
      result: [...prevState.result, value],
      name: "",
      email: "",
      pass: ""
    }));
  };

  render() {
    return (
      <Form onSubmit={this.handleRegisterSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Type your name"
            value={this.state.name}
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
            value={this.state.email}
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
            value={this.state.pass}
            onChange={this.handlePasswordInput}
          />
        </FormGroup>

        <input type="submit" value="Register" />
      </Form>
    );
  }
}

export default Register;