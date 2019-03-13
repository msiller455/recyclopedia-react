import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './UserShow.css'

class UserShow extends Component {
    state = {
        user: '',
        events:[]
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async() => {
        axios.get(`http://localhost:3030/users/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    user: res.data.user,
                    events: res.data.user.events
                })
            })
    }

    render() {
        return(
            <div className="userShow">
                <div className="userInfo">
                    <h1>{this.state.user.username}</h1>
                    <h3>{this.state.user.email}</h3>
                </div>
                <div className="addFriend"></div>
                <div className="userEvents">
                    <h2>Upcoming Events</h2>
                    <ul className="userEventsList">
                    {
                        this.state.events.map((event, i) => 
                            <li className="event" key={i}>
                                <Link className="eventLink" to={`/events/${event._id}`}>{event.site_name}</Link>
                            </li>
                        )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(UserShow)