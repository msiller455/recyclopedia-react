import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {


    render(){
        return(
            <div className="navBar">
                <div className="loginRegister">
                    {
                        !this.props.currentUser ?
                            [<Link className="navBarLink" to="/login">Login</Link>, 
                            ' | ',
                            <Link className="navBarLink" to="/register">Register</Link>]
                        : [<span>Hello, {this.props.currentUser.username}</span>]
                    }
                </div>
                <div className="userLinks">
                    {
                        !this.props.currentUser ?
                            ['']
                        : [<Link className="navBarLink" to="/home">Home</Link>,
                            ' | ',
                            <Link className="navBarLink" to="/createCleanUp">Create Clean-Up</Link>,
                            ' | ',
                            <Link className="navBarLink" to="/users">Search Users</Link>,
                            ' | ',
                            <Link className="navBarLink" to="#">Search Clean-Up</Link>,
                            ' | ',
                            <a href="#" className="navBarLink" onClick={this.props.handleLogout}>Logout</a>]
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)