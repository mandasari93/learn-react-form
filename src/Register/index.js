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
        this.setState({name: event.taget.value})
    }

    handleEmailInput = event => {
        this.setState({email: event.target.value})
    }

    hanldePasswordInput = event => {
        this.setState({password: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        const result = `${this.state.name} ${this.state.email} ${this.state.password}`
        this.setState({ result: result })
    }

    render() { 
        return (  
            <form onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <label htmlFor="name">Name:</label>
                <input type="name" placeholder="Type your name" />
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Type your email" />
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Make it secure" />
                <br/>
                <input type="submit" value="Register"/>

            </form>
        );
    }
}
 
export default Register;