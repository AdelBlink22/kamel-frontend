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
                <div className="mt-3">
                    <div className="alert alert-danger" role="alert">
                        <strong>{this.props.errorMessage}</strong>
                    </div>
                </div>
            );
        }
    };

    handleSubmit = (value) => {
        this.props.registerUser(value);
    };

    render() {
        return (
            <Layout>
                <div className="row justify-content-center mt-3">
                    <div className="col">
                        {this.notification()}
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Registration</h4>
                                <p className="card-text"> Register as Captain  </p>
                                <RegisterForm onSubmit={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
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