import React, { Component } from 'react'

export class UserIndividual extends Component {
    componentDidMount() {
        this.props.getUser(this.props.math.params.params.login)
    }


    render() {
        const {} = this.props.userIndividual;
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            htm_url,
            followers,
            following,
            public_repos,
            public_gist,
            hireable
        } = this.props.userIndividual;

        const {loading} = this.props;



        return <div> {name} </div> ;
    }
}

export default UserIndividual
