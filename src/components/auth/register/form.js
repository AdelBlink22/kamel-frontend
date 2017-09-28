import React from 'react';

import { Form, Field, reduxForm } from 'redux-form'

class RegisterForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        return (
        <Form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field name="email" type="email" className="form-control" id="exampleInputEmail1"
                       component="input" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <Field name="phone" type="phone" className="form-control"
                       component='input' id="exampleInputPassword1" placeholder="Enter phone"/>
            </div>
            <div className="form-group">
                <Field name="password" type="password" className="form-control"
                       component='input' id="exampleInputPassword1" placeholder="Enter password"/>
            </div>
            <div className="form-group">
                <p className="card-text">Already have an account? <a href="/login">Login</a></p>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Register</button>
        </Form>
        );
    }

}

RegisterForm = reduxForm({
    form: 'user_register'
})(RegisterForm);

export default RegisterForm;