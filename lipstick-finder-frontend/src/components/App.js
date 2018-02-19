import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import MakeupContainer from './MakeupContainer'

class App extends Component {
  
  state = {
    user: '',
    showing: 'all'
  }
  
  handleLogin = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({user: json.username}))
  }
  
  handleFavorite = (event) => {
    console.log(this.state.showing)
    this.state.showing === 'all' ? this.setState({showing: 'favorites'}) : this.setState({showing: 'all'})
  }
  
  render() {
    return (
      <div className="App">
        <Navbar handleLogin={this.handleLogin} user={this.state.user} handleFavorite={this.handleFavorite}/>
        <MakeupContainer user={this.state.user} showing={this.state.showing} />
      </div>
    );
  }
}

export default App;
