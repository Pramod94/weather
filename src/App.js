import React, { Component } from 'react';
import Weather from './Components/weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Weather />
      </div>
    );
  }
}

export default App;
