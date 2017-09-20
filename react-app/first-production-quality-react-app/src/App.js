import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="todo-app">
        <form>
        </form>
          <input type="text" />
        </div>
        <div className="todo-list">
          <ul>
            <li><input type="checkbox" />x</li>
            <li><input type="checkbox" />x</li>
            <li><input type="checkbox" />x</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
