import React, {  Component } from 'react';
import Navbar from './components/layout/Navbar';
import User from './components/users/User'
import Search from './components/users/Search'
import './App.css';
import axios from 'axios';

class App extends Component{
    state = {
        user: [],
        loading: false
    }

    async componentDidMount(){
        this.setState({loading: true});

        const res = await axios.get('https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
        this.setState({user: res.data, loading: false});
    }

    // search github users
    searchUsers = (text) => {
        console.log(text);
    }

    render() {
        return (

        <div className = 'App'>
            <Navbar />
            <div className = "container">
                <Search searchUsers = {this.searchUsers}/>
                <User loading = {this.state.loading} user={this.state.user}/>
            </div>

        </div>
        );
  }
}

export default App;
 