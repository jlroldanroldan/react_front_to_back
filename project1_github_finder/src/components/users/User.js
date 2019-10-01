import React from 'react'
import UserItem from "./UserItem"
// import Spinner from '../layout/spinner'

const User = ({user, loading}) =>   {
    if (loading) {
        return <spinner/>
    } else{
        return (
            <div style={userStyle}>
                {user.map(user => (
                    <UserItem key = {user.id} user = {user}  />
                ))}
            </div>
        );
    }
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default User
