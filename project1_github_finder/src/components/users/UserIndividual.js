import React, { Fragment, Component } from 'react'
import Spinner from '../layout/spinner'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export class UserIndividual extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        userIndividual: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired
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

        // if (loading) return <Spinner />;

        return <Fragment>
            <Link to='/' className = 'btn btn-light'>
                Back to search
            </Link>
        </Fragment>;
    }
}

export default UserIndividual
