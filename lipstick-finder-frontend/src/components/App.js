import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import MakeupContainer from './MakeupContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MakeupContainer />
      </div>
    );
  }
}

export default App;
