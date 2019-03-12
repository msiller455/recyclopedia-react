import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './UserShow.css'

class UserShow extends Component {
    state = {
        user: ''
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async() => {
        axios.get(`http://localhost:3030/users/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    user: res.data.user
                })
            })
    }

    render() {
        return(
            <div className="userShow">
                {/* <div className="userInfo">
                    <h1>{this.state.user.username}</h1>
                    <h3>{this.state.user.email}</h3>
                </div>
                <div className="userEvents">
                    <h2>Upcoming Events</h2>
                    <ul className="userEventsList">
                    {
                        this.state.user.events.map((event, i) => 
                            <li className="event" key={i}>
                                <Link className="eventLink" to={`/events/${event._id}`}>{event.name}</Link>
                            </li>
                        )
                    }
                    </ul>
                </div> */}
            </div>
        )
    }
}

export default withRouter(UserShow)