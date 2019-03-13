import React, { Component} from 'react'
import { withRouter } from 'react-router-dom'
import './EditUser.css'
import axios from 'axios';

class EditUser extends Component {
    state = {
        currentUser: '',
        username: '',
        name: '',
        email: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleEditSubmit = async(e) => {
        e.preventDefault()
        this.props.handleEdit(this.state)
    }

    deleteUser = async(e) => {
        e.preventDefault()
        axios.delete(`https://recyclopedia-backend.herokuapp.com/users/${this.props.currentUser._id}`)
            .then(res => {
                console.log(res.data.deletedUser, ' ----THIS USER IS DELETED------')
                this.props.handleLogout()
            })
    }

    render() {
        return (
            <div className="editImage">
                <div className="editUser">
                    <h1>Edit Profile</h1>
                    <h4 className="editMessage">{this.props.message}</h4>
                    <form className="editForm" onSubmit={this.handleEditSubmit}>
                        <label>
                            Username:
                        </label>
                        <input type="text" name="username" className="EditInput" defaultValue={this.props.currentUser.username} placeholder={this.props.currentUser.username} onChange={this.handleChange}/>
                        <label>
                            Name:
                        </label>
                        <input type="text" name="name" className="EditInput" defaultValue={this.props.currentUser.name} placeholder={this.props.currentUser.name} onChange={this.handleChange}/>
                        <label>
                            Email:
                        </label>
                        <input type="email" name="email" className="EditInput" defaultValue={this.props.currentUser.email} placeholder={this.props.currentUser.email} onChange={this.handleChange}/>
                        <button type="submit" className="EditButton">Edit Profile</button>
                    </form>
                    <button className="deleteUser" onClick={this.deleteUser}>Delete Profile</button>
                </div>
            </div>
        )
    }
}

export default withRouter(EditUser)