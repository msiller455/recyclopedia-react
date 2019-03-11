import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: '',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginSubmit = async(e) => {
        e.preventDefault()
        this.props.handleLogin(this.state)
    }

    render() {
        return (
            <div className="splashImage">
                <div className="Login">
                    <h1>Login</h1>
                    <h4 className="loginMessage">{this.props.message}</h4>
                    <form className="loginForm" onSubmit={this.handleLoginSubmit}>
                        <label>
                            Username:
                        </label>
                        <input type="text" name="username" className="LoginInput" onChange={this.handleChange}/>
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" className="LoginInput" onChange={this.handleChange}/>
                        <button type="submit" className="LoginButton">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default withRouter(Login)