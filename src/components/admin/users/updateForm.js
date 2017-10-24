import React from 'react';

import { connect } from 'react-redux'
import {fetchSingleUser} from '../../../actions/admin/users'
import { Field, reduxForm } from 'redux-form'

class UpdateForm  extends React.Component {
    componentWillMount(){
        this.props.load(this.props.userId);
    }

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
                <button type="submit" className="btn btn-primary btn-block">update</button>
            </form>
        );
    }

}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
UpdateForm = reduxForm({
    form: 'user_update',
    enableReinitialize : true // this is needed!!
})(UpdateForm);


// You have to connect() to any reducers that you wish to connect to yourself
UpdateForm = connect(
    state => ({
        initialValues: state.adminUsers.user // pull initial values from account reducer
    }),
    { load: fetchSingleUser }               // bind account loading action creator
)(UpdateForm);

export default UpdateForm;
