import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Register extends Component {
    state = {
        username: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegisterSubmit = async(e) => {
        e.preventDefault()
        this.props.handleRegister(this.state)
    }

    render() {
        return (
            <div className="Register">
                <h1>Register</h1>
                <form onSubmit={this.handleRegisterSubmit}>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" className="RegisterInput" onChange={this.handleChange}/>
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" className="RegisterInput" onChange={this.handleChange}/>
                    <button type="submit" className="RegisterButton">Login</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Register)