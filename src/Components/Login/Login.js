import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        username: '',
        password: ''
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
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.handleLoginSubmit}>
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
        )
    }
}


export default withRouter(Login)