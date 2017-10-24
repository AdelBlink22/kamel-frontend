import React from 'react';
import { Field, reduxForm } from 'redux-form'

class UserForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Email:</label>
                    <Field name="email" component='input' type="text" className="form-control" id="recipient-name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Phone:</label>
                    <Field name="phone" component='input' type="text" className="form-control" id="recipient-name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Password:</label>
                    <Field name="password" component='input' className="form-control" type="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Role:</label>
                    <Field name="role" className="form-control" component='select'>
                        <option value="Captain">Captain</option>
                        <option value="Provider">Provider</option>
                        <option value="Admin">Admin</option>
                    </Field>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Create</button>
            </form>
        );
    }

}

UserForm = reduxForm({
    form: 'create_user'
})(UserForm);


export default UserForm;