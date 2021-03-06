import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Splash from './Components/Splash/Splash'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import EditUser from './Components/EditUser/EditUser'
import Users from './Components/Users/Users'
import UserShow from './Components/UserShow/UserShow'
import CreateCleanUp from './Components/CreateCleanUp/CreateCleanUp'
import Events from './Components/Events/Events'
import ComingSoon from './Components/ComingSoon/ComingSoon'
import axios from 'axios'
import EventShow from './Components/EventShow/EventShow';


class App extends Component {
  state = {
    currentUser: '',
    message: ''
  }


  handleLogin = (data) => {
    axios.post('https://recyclopedia-backend.herokuapp.com/users/login', data)
      .then(res => {
        if(res.data.isLoggedIn) {
          this.setState({
            currentUser: res.data.foundUser
          })
          this.props.history.push('/home')
        } else {
          this.setState({message: res.data.message})
          setTimeout(() => {
            this.setState({
              message: ''
            })
          }, 10000)
          this.props.history.push('/login')
        }
      })
  }

  handleRegister = (data) => {
    axios.post('https://recyclopedia-backend.herokuapp.com/users', data)
      .then(res => {
        if(res.data.isCreated) {
          this.setState({
            currentUser: res.data.createdUser
          })
          this.props.history.push('/home')
        } else {
          this.setState({message: res.data.message})
          setTimeout(() => {
            this.setState({
              message: ''
            })
          }, 10000)
        }
      })
  }

  handleEdit = (data) => {
    axios.put(`https://recyclopedia-backend.herokuapp.com/users/${this.state.currentUser._id}`, data)
        .then(res => {
            if(res.data.isUpdated) {
                this.setState({
                    currentUser: res.data.updatedUser
                })
                this.props.history.push('/home')
            } else {
                this.setState({
                    message: res.data.message
                })
                setTimeout(() => {
                    this.setState({
                        message: ''
                    })
                }, 10000)
                this.props.history.push('/editUser')
            }
        })
}

  handleLogout = () => {
    axios.get('https://recyclopedia-backend.herokuapp.com/users/logout')
      .then(res => {
        this.setState({
          currentUser: ''
        })
        this.props.history.push('/')
      })
  }


  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path={'/'} component={() => <Splash />} />
          <Route exact path={'/login'} component={() => <Login message={this.state.message} currentUser={this.state.currentUser} handleLogin={this.handleLogin}/>}/>
          <Route exact path={'/register'} component={() => <Register message={this.state.message} currentUser={this.state.currentUser} handleRegister={this.handleRegister}/>}/>
          <Route exact path={'/home'} component={() => <Home currentUser={this.state.currentUser}/>}/>
          <Route exact path={'/editUser'} component={() => <EditUser handleLogout={this.handleLogout} message={this.state.message} currentUser={this.state.currentUser} handleEdit={this.handleEdit}/>}/>
          <Route exact path={'/users'} component={() => <Users currentUser={this.state.currentUser} />}/>
          <Route exact path={'/users/:id'} component={() => <UserShow currentUser={this.state.currentUser} />}/>
          <Route exact path={'/createCleanUp'} component={() => <CreateCleanUp currentUser={this.state.currentUser} />}/>
          <Route exact path={'/events'} component={() => <Events currentUser={this.state.currentUser}/>}/>
          <Route exact path={'/events/:id'} component={() => <EventShow currentUser={this.state.currentUser} />} />
          <Route exact path={'/comingSoon'} component={() => <ComingSoon />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
