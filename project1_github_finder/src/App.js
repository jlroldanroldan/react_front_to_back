import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component{
  render() {
    const name = "John Doe";

    return (
      <div className = 'App'>
        <h1>Hello {foo()}</h1>
      </div>
    );
  }
}

export default App;
