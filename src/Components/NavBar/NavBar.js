import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {

    render(){
        return(
            <div className="navBar">
                {
                    !this.props.currentUser.id ?
                        [<Link className="navBarLink" to="/login">Login</Link>, 
                        ' | ',
                        <Link className="navBarLink" to="#">Register</Link>]
                    : [<span>Hello, {this.props.currentUser.username}</span>]
                }
            </div>
        )
    }
}

export default withRouter(NavBar)