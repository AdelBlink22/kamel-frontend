import React from 'react';

// Form, Field, and reduxForm from redux-form
import { Form, Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Field name="email" type="email" className="form-control" id="exampleInputEmail1"
                           component="input" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <Field name="password" type="password" className="form-control"
                           component='input' id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <p className="card-text">You don't have an account? <a href="/register">Register</a></p>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </Form>
        );
    }

}

LoginForm = reduxForm({
    form: 'user_login'
})(LoginForm);

export default LoginForm;