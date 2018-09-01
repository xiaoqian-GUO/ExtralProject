import React, { Component } from 'react';
import logo from './logo/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">欢迎来到xiaoqian的第一项目</h1>
        </header>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 查看文件.
        </p>
      </div>
    );
  }
}

export default App;
