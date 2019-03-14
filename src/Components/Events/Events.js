import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Events.css'
import axios from 'axios'

class Events extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        this.getEvents()
    }

    getEvents = async() => {
        axios.get('https://recyclopedia-backend.herokuapp.com/events')
            .then(res => {
                this.setState({
                    events: res.data.events
                })
            })
    }

    render() {
        return(
            <div className="events">
                <div className="content">
                    <h1>Events</h1>
                    <ul className="eventsList">
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

export default withRouter(Events)