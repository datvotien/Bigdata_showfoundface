import React, { Component } from 'react';
import './App.css';
import Demo from './demo';

//main container or root component which load webSearch component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Demo /> 
      </div>
    );
  }
}

export default App;
