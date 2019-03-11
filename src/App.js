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
import axios from 'axios'


class App extends Component {
  state = {
    currentUser: '',
    message: ''
  }


  handleLogin = (data) => {
    axios.post('http://localhost:3030/users/login', data)
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
    axios.post('http://localhost:3030/users', data)
      .then(res => {
        if(res.data.isCreated) {
          this.setState({
            currentUser: res.data.createdUser,
            message: 'Welcome to Recyclopedia!'
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
    axios.put(`http://localhost:3030/users/${this.state.currentUser._id}`, data)
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
    axios.get('http://localhost:3030/users/logout')
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
          <Route exact path={'/home'} component={() => <Home currentUser={this.state.currentUser}/>} />
          <Route exact path={'/editUser'} component={() => <EditUser handleLogout={this.handleLogout} message={this.state.message} currentUser={this.state.currentUser} handleEdit={this.handleEdit}/>} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
