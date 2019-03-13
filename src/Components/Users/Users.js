import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Users.css'
import axios from 'axios'

class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async() => {        
        axios.get('https://recyclopedia-backend.herokuapp.com/users')
            .then(res => {
                this.setState({
                    users: res.data.users
                })
            })
    }

    render() {
        return(
            <div className="users">
                <div className="usersContainer">
                    <h1>FIND A CREW</h1>
                    <ul className="usersList">
                    {
                        this.state.users.map((user, i) => 
                            <li className="user" key={i}>
                                <Link className="userLink" to={`/users/${user._id}`}>{user.username}</Link>
                            </li>
                        )
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Users)