import React from 'react';

import { Form, Field, reduxForm } from 'redux-form'

class RegisterForm extends React.Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <Form onSubmit={handleSubmit}>
                <div className="form-group input-icon">
                    <span className="fa fa-envelope"></span>
                    <Field name="email" type="email" className="form-control" component="input" placeholder="Enter email"/>
                </div>
                <div className="form-group input-icon">
                    <span className="fa fa-mobile"></span>
                    <Field name="phone" type="phone" className="form-control" component='input' placeholder="+966 51 234 5678"/>
                </div>
                <div className="form-group input-icon">
                    <span className="fa fa-lock"></span>
                    <Field name="password" type="password" className="form-control" component='input' placeholder="Enter password"/>
                </div>
                <div className="form-group"><button type="submit" className="btn btn-main btn-block btn-lg">Register</button></div>
            </Form>
        );
    }

}

RegisterForm = reduxForm({
    form: 'user_register'
})(RegisterForm);

export default RegisterForm;