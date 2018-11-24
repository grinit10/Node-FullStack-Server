import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    render() {
        console.log(this.props);
        const AuthContent = this.props.auth === null ? '' : (
            this.props.auth === false ? (
                <li><a href="/auth/google">Login with Google</a></li>
            ) : (
                    [
                        <li key='payment'><Payments></Payments></li>,
                        <li key='credits' style={{ margin: '0 10px' }}>Credits:{this.props.auth.credits}</li>,
                        <li key='logout'><a href="/api/logout">Logout</a></li>
                    ]
                )
        );
        const HomeUrl = this.props.auth === null ? '' : (
            this.props.auth === false ? (
                '/'
            ) : (
                    '/surveys'
                )
        );
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #311b92 deep-purple darken-4">
                        <Link to={HomeUrl} className="brand-logo">Myfolio</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {AuthContent}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = auth => auth

export default connect(mapStateToProps)(Header)