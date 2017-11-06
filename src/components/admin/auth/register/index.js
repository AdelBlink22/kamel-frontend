import React from 'react';
import Layout from '../../layout/index'

// react redux connect
import { connect } from 'react-redux'

// with router
import { withRouter } from 'react-router-dom'

// with cookie
import { withCookies } from 'react-cookie'

// create captain
import { registerUser } from '../../../actions/auth'

// component
import RegisterForm from './form'

class Register extends React.Component {
    componentWillMount(){
        const { cookies } = this.props;
        if (cookies.get('user')) { this.props.history.push('/dashboard')}
    }

    componentWillUpdate(){
        if (this.props.authenticated){ this.props.history.push('/login') }
    }

    notification = ()=> {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger" role="alert"><strong>Error!</strong> {this.props.errorMessage}.</div>
            );
        }
    };

    handleSubmit = (value) => {
        this.props.registerUser(value);
    };

    render() {
        return (
            <Layout>
                <div className="text-center btmmargin">
                    <h3 className="uppercase">Create New Account</h3>
                    <p>Register as Captain</p>
                </div>
                <div className="login-form center-form">
                    { this.notification() }
                    <RegisterForm onSubmit={this.handleSubmit}/>
                </div>
                <p class="text-center topmargin">Already a member?<a href="/login"> Login</a></p>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage:   state.auth.error,
        message:        state.auth.message,
        authenticated:  state.auth.authenticated,
    }
}

export default connect(mapStateToProps, { registerUser })(withRouter(withCookies(Register)));