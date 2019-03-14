import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div className="home">
                    <div className="userInfo">
                        <h1>{this.props.currentUser.username}</h1>
                        <Link className="homeLink" to="/comingSoon"><h4>View Friends</h4></Link>
                        <Link className="homeLink" to="/comingSoon"><h4>Edit Profile</h4></Link>
                    </div>
                    <div className="eventStream">
                        <h1>Upcoming Events</h1>
                    </div>
            </div>
        )
    }
}

export default withRouter(Home)