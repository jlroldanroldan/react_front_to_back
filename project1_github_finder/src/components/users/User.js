import React, { Component } from 'react'
import UserItem from "./UserItem"

const User = ({user, loading}) =>   {
    return (
        <div style={userStyle}>
            {user.map(user => (
                <UserItem key = {user.id} user = {user}  />
            ))}
        </div>
    );
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default User
