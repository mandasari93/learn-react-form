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

    

    render() { 
        return (  
            <form onSubmit={this.handle.submit}>
                <h3>Register</h3>
                <label htmlFor="name">Name:</label>
                <input type="name" placeholder="Type your name" />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Type your email" />
                <label htmlFor="password" placeholder="Make it secure"></label>

            </form>
        );
    }
}
 
export default Register;