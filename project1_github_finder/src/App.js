import React, {  Component } from 'react';
import Navbar from './components/layout/Navbar';
import User from './components/users/User'
import './App.css';
import axios from 'axios';

class App extends Component{
  state = {
    user: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true});

    const res = await axios.get("https://api.github.com/users");
    this.setState({user: res.data, loading: false});
  }


  render() {
    return (

      <div className = 'App'>
        <Navbar title = "Github Finder" icon = "fab fa-github"/>
        <div className = "container">
          <User loading = {this.state.loading} user={this.state.user}/>
        </div>

      </div>
    );
  }
}

export default App;
 