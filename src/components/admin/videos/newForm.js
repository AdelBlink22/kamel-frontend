import React from 'react';
import { Field, reduxForm } from 'redux-form'

class NewForm extends React.Component {
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
                <button type="submit" className="btn btn-primary btn-block">Create</button>
            </form>
        );
    }

}

NewForm = reduxForm({
    form: 'create_video'
})(NewForm);

export default NewForm;
