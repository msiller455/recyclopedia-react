import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './EventShow.css'

class EventShow extends Component {
    state = {
        event: '',
        users: []
    }

    componentDidMount() {
        this.getEvent()
    }

    getEvent = async() => {
        console.log(this.props)
        // axios.get(`https://recyclopedia-backend.herokuapp.com/events/${this.props.match.params.id}`)
        //     .then(res => {
        //         console.log(res.data)
                // this.setState({
                //     event: res.data.event,
                //     users: res.data.events.users
                // })
            // })
    }

    render() {
        return (
            <div className="eventShow">
                <h1>{this.state.event.site_name}</h1>
            </div>
        )
    }
}

export default EventShow