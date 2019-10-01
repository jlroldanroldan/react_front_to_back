import React, {  Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import './App.css';
import axios from 'axios';

class App extends Component{
    state = {
        user: [],
        loading: false,
        alert: null
    }

    // search github users
    searchUsers = async text => {
        this.setState({loading : true})

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
            }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        this.setState({user: res.data.items, loading: false });
    };

    // clear users from state
    clearUsers = () => this.setState({user: [], loading: false});

    // Set alert
    setAlert = (msg, type) => {
        this.setState({alert: {msg,type}});

        setTimeout(() => this.setState({ alert: null}), 5000)
    }

    render() {
        const {user, loading} = this.state;

        return (
        <Router>
        <div className = 'App'>
            <Navbar />
            <div className = "container">
                <Alert alert = {this.state.alert} />
                <Switch>
                    <Route 
                        exact 
                        path = '/' 
                        render = {props => (
                            <Fragment>
                                <Search 
                                    searchUsers = {this.searchUsers} 
                                    clearUsers = {this.clearUsers} 
                                    showClear= {user.length > 0 ? true : false}
                                    setAlert = {this.setAlert}
                                />
                                <User loading = {loading} user={user}/>
                            </Fragment>
                        )} 
                    />
                    <Route exact path = '/about' component = {About}/>
                </Switch>
               
            </div>

        </div>
        </Router>
        );
    }
}

export default App;
 