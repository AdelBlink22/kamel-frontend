import React from 'react';
import { connect } from 'react-redux'
import {withCookies} from 'react-cookie'

import { logoutUser } from '../../actions/auth'

class Header extends React.Component {


    handleLogout = (e)=> {
        e.preventDefault();
        this.props.logoutUser();
    };

    isAdmin = ()=> {
        return (
            <div className="col-xs-6">
                <div className="user-profile-menu">
                    {/*<a href="request-list.html">*/}
                        {/*<i className="fa fa-bell">*/}
                            {/*<span className="highlight-dot"></span>*/}
                        {/*</i>*/}
                    {/*</a>*/}
                    <a href="/admin">
                        <i className="fa fa-user"></i>
                    </a>
                    <a onClick={this.handleLogout}>
                        <i className="fa fa-sign-out"></i>
                    </a>
                </div>
            </div>
        );

    };

    isCaptain = ()=> {
        return (
            <div className="col-xs-6">
                <nav className="navbar navbar-default nav_menu">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/courses">courses</a></li>
                            <li><a href="/application">Application</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a onClick={this.handleLogout}>Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };

    isGuest = ()=> {
        return (
            <div className="col-xs-6">
                <nav className="navbar navbar-default nav_menu">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };

    renderHeader = (cookie)=> {
        if (cookie){
            if (cookie.role === 'Admin'){
                return this.isAdmin();
            }

            if (cookie.role === 'Captain'){
                return this.isCaptain();
            }
        } else {
            return this.isGuest();
        }

    };

    render() {
        const { cookies } = this.props;
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6">
                            <figure className="logo">
                                <a href="/">
                                    <img src={require('../../utils/images/kamel.svg')} alt="Kasper Cabs" className="img-responsive"/>
                                </a>
                            </figure>
                        </div>
                        { this.renderHeader(cookies.get('user')) }
                    </div>
                </div>
            </header>
        );
    }

}

function mapStateToProps(state) {
    return { };
}

export default connect( mapStateToProps, { logoutUser })(withCookies(Header));