import React from 'react';

// Form, Field, and reduxForm from redux-form
import { Form, Field, reduxForm } from 'redux-form'

class LoginForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <div className="form-group input-icon">
                    <span className="fa fa-envelope"></span>
                    <Field name="email" type="email" className="form-control" component="input" placeholder="Enter email"/>
                    {/*<input type="text" className="form-control" placeholder="Email Address">*/}
                </div>
                <div className="form-group input-icon">
                    <span className="fa fa-lock"></span>
                    <Field name="password" type="password" className="form-control" component='input' placeholder="Password"/>
                    {/*<input type="'password'" class="form-control" placeholder="Password">*/}
                </div>
                <div className="form-group">
                    <a href="#">Forgot your password?</a>
                </div>
                <div className="form-group"><button type="submit" className="btn btn-main btn-block btn-lg">Log In</button></div>
            </Form>
            // <Form onSubmit={handleSubmit}>
            //     <div className="form-group">
            //         <Field name="email" type="email" className="form-control" id="exampleInputEmail1"
            //                component="input" aria-describedby="emailHelp" placeholder="Enter email"/>
            //     </div>
            //     <div className="form-group">
            //         <Field name="password" type="password" className="form-control"
            //                component='input' id="exampleInputPassword1" placeholder="Password"/>
            //     </div>
            //     <div className="form-group">
            //         <p className="card-text">You don't have an account? <a href="/register">Register</a></p>
            //     </div>
            //     <button type="submit" className="btn btn-primary btn-block">Submit</button>
            // </Form>
        );
    }

}

LoginForm = reduxForm({
    form: 'user_login'
})(LoginForm);

export default LoginForm;