import React, { Component } from 'react';
import './App.css';
import Modal from './Components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello word</h3>
        <h3>This is modal</h3>
        <Modal/>
      </div>
    );
  }
}

export default App;
