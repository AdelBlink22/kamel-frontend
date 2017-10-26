import React from 'react';
import { Field, reduxForm} from 'redux-form'

class NewForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Photo:</label>
                    <Field name="photo" component='input' type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Name:</label>
                    <Field name="name" component='input' type="text" className="form-control" id="recipient-name" placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="recipient-name" className="form-control-label">Description:</label>
                    <Field name="description" component='input' className="form-control" id="recipient-name"placeholder="Enter Description"/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Create</button>
            </form>
        );
    }

}


NewForm = reduxForm({
    form: 'create_badges'
})(NewForm);

export default NewForm;
