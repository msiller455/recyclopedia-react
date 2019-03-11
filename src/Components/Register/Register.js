import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Register.css'

class Register extends Component {
    state = {
        username: '',
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
        message: '',
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegisterSubmit = async(e) => {
        e.preventDefault()
        if(this.state.password === this.state.verifyPassword) {
            this.props.handleRegister(this.state)
        } else {
            this.setState({
                message: "Passwords do not match"
            })
            setTimeout(() => {
                this.setState({
                    message: ''
                })
            }, 10000)
        }
    }

    render() {
        return (
            <div className="splashImage">
                <div className="Register">
                    <h1>Register</h1>
                    <h4 className="registerMessage">{this.props.message || this.state.message}</h4>
                    <form className="registerForm" onSubmit={this.handleRegisterSubmit}>
                        <label>
                            Username:
                        </label>
                        <input type="text" name="username" className="RegisterInput" onChange={this.handleChange}/>
                        <label>
                            Name:
                        </label>
                        <input type="text" name="name" className="RegisterInput" onChange={this.handleChange}/>
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" className="RegisterInput" onChange={this.handleChange}/>
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" className="RegisterInput" onChange={this.handleChange}/>
                        <label>
                            Verify Password:
                        </label>
                        <input type="password" name="verifyPassword" className="RegisterInput" onChange={this.handleChange}/>
                        <button type="submit" className="RegisterButton">Create Profile</button>
                    </form>                
                </div>
            </div>
        )
    }
}


export default withRouter(Register)