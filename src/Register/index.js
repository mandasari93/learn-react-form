import React, { Component } from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            email: "",
            password: "",
            result: ""
         }
    }

    handleNameInput = event => {
        this.setState({name: event.target.value})
    }

    handleEmailInput = event => {
        this.setState({email: event.target.value})
    }

    hanldePasswordInput = event => {
        this.setState({password: event.target.value})
    }

    handleRegisterSubmit = event => {
        event.preventDefault()
        const result = `${this.state.name} ${this.state.email} ${this.state.password}`
        this.setState({ result: result })
    }

    render() {
        return (
                <form onSubmit={this.handleRegisterSubmit}>
                    <h3>Register</h3>
                    <label htmlFor="name">Name:</label>
                    <input type="name" placeholder="Type your name" onChange={this.handleNameInput} />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Type your email" onChange={this.handleEmailInput} />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Make it secure" onChange={this.handlePasswordInput} />
                    <br />
                    <input type="submit" value="Register" />
                </form>
        )
    }
}
 
export default Register;