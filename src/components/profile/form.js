/**
 * Created by tawashy on 9/30/17.
 */

import React from 'react';
import { connect } from 'react-redux'
import {reduxForm, Form, Field} from 'redux-form'

class UpdateProfile extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container" style={{ maxWidth: 600 + 'px', margin: 0 + 'auto' }}>
                <div className="title">Profile Edit</div>

                <Form onSubmit={handleSubmit} className="mt-3">
                    <div className="form-group input-icon">
                        <span className="fa fa-user"></span>
                        <Field id='email' type="email" className="form-control" name="email" component="input" placeholder="Enter email"/>
                    </div>
                    <div className="form-group input-icon">
                        <span className="fa fa-envelope"></span>
                        <label>Phone number</label>
                        <Field id="phone" type="phone" className="form-control" name="phone" component="input" placeholder="Enter phone"/>
                    </div>
                    <div className="form-group input-icon">
                        <span className="fa fa-mobile"></span>
                        <label htmlFor="exampleInputEmail1">New password <small>[optional]</small></label>
                        <Field id="password" type="password" className="form-control" name="password" component="input" placeholder="Enter new password"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-main btn-block btn-lg" type="submit">Save</button>
                        <button id="cancel" className="btn btn-secondary btn-lg btn-block" type="button" onClick={this.props.cancel}>Cancel</button>
                    </div>
                </Form>
            </div>
        );
    }

}

UpdateProfile = reduxForm({
    form: 'update_profile',
    enableReinitialize : true // this is needed!!
})(UpdateProfile);

UpdateProfile = connect(
    state => ({
        initialValues: state.user.user // pull initial values from account reducer
    }),             // bind account loading action creator
)(UpdateProfile);

export default UpdateProfile;
