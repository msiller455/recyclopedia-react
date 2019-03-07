import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import axios from 'axios'

class App extends Component {
  state = {
    currentUser: ''
  }

  handleLogin = (data) => {
    axios.post('http://localhost:3030/users/login', data)
      .then(res => {
        this.setState({currentUser: res.data})
        // this.props.history.push('/home')
      })
  }

  handleRegister = (data) => {
    axios.post('http://localhost:3030/users', data)
      .then(res => {
        this.setState({currentUser: res.data})
        // this.props.history.push('/home')
      })
  }

  render() {
    return (
      <div className="App">
        <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={'/login'} component={() => <Login handleLogin={this.handleLogin}/>}/>
          <Route exact path={'/register'} component={() => <Register handleRegister={this.handleRegister}/>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
