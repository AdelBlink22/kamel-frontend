import React from 'react';

import { connect } from 'react-redux'
import { fetchVideo } from '../../../actions/admin/videos'
import { Field, reduxForm } from 'redux-form'


class UpdateForm extends React.Component {

    componentWillMount(){
        this.props.load(this.props.userId);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Title:</label>
                    <Field name="title" component='input' type="text" className="form-control" id="recipient-name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Description:</label>
                    <Field name="description" component='input' type="text" className="form-control" id="recipient-name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Video ID:</label>
                    <Field name="videoId" component='input' className="form-control" type="text" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Update</button>
            </form>
        );
    }

}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
UpdateForm = reduxForm({
    form: 'video_update',
    enableReinitialize : true // this is needed!!
})(UpdateForm);


// You have to connect() to any reducers that you wish to connect to yourself
UpdateForm = connect(
    state => ({
        initialValues: state.adminVideos.video // pull initial values from account reducer
    }),
    { load: fetchVideo }               // bind account loading action creator
)(UpdateForm);

export default UpdateForm;