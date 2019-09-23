import React, { Component } from 'react'
import UserItem from "./UserItem"
class User extends Component {
    state = {
        users: [
            {
                id: '1',
                login: 'jroldanroldan',
                avatar_url: 'https://avatars3.githubusercontent.com/u/38052476?s=460&v=4',
                html_url: 'https://github.com/jroldanroldan'
            },
            {
                id: '2',
                login: 'randomgithub1',
                avatar_url: 'https://avatars3.githubusercontent.com/u/38052476?s=460&v=4',
                html_url: 'https://github.com/jroldanroldan'
            },
            {
                id: '3',
                login: 'randomgithub2',
                avatar_url: 'https://avatars3.githubusercontent.com/u/38052476?s=460&v=4',
                html_url: 'https://github.com/jroldanroldan'
            }
        ]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key = {user.id} user = {user}  />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User
