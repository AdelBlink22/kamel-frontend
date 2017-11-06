import React from 'react';
import Layout from '../../layout/index'

import { withRouter } from 'react-router-dom'

// connect
import { connect } from 'react-redux'

// with cookie
import { withCookies } from 'react-cookie'

// login form component
import LoginForm from './form'

// Login user action
import {loginUser} from '../../../actions/auth'

class Login extends React.Component {
    componentWillMount(){
        const { cookies } = this.props;
        if (cookies.get('user')) {
            if (cookies.get('user').role === 'Captain') {
                this.props.history.push('/dashboard')
            }
            if (cookies.get('user').role === 'Admin') {
                this.props.history.push('/admin')
            }
        }
    }

    componentWillUpdate(){
        if (this.props.authenticated) {
            const { cookies } = this.props;
            if (cookies.get('user').role === 'Captain') {
                this.props.history.push('/dashboard')
            }
            if (cookies.get('user').role === 'Admin') {
                this.props.history.push('/admin')
            }
        }
    }

    // handles login action from
    handleSubmit = (value)=> {
        this.props.loginUser(value);
    };

    notification = ()=> {
        if(this.props.errorMessage){
            return (
                <div className="alert alert-danger" role="alert"> <strong>Error!</strong> {this.props.errorMessage}. </div>
            );
        }
    };

    render() {
        return (
            <Layout>
                <div className="text-center btmmargin">
                    <h3 className="uppercase">Login</h3>
                    <p>Login as Captain</p>
                </div>
                <div className="login-form center-form">
                    {this.notification()}
                    <LoginForm onSubmit={this.handleSubmit}/>
                </div>
                {/*<div className="row justify-content-center mt-3">*/}
                    {/*<div className="col">*/}
                        {/*{this.notification()}*/}
                        {/*<div className="card">*/}
                            {/*<div className="card-body">*/}
                                {/*<h4 className="card-title">Login</h4>*/}
                                {/*<p className="card-text"> Login as Captain  </p>*/}
                                {/*<LoginForm onSubmit={this.handleSubmit}/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <p className="text-center topmargin">You don't have account?<a href="/register"> Register</a></p>
            </Layout>
        );
    }

}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, { loginUser })(withRouter(withCookies(Login)));