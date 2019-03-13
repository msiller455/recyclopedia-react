import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="banner">
                    <div className="userInfo">
                        <h2>{this.props.currentUser.username}</h2>
                        <Link className="homeLink" to="/friends"><h4>View Friends</h4></Link>
                        <Link className="homeLink" to="/editUser"><h4>Edit Profile</h4></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)