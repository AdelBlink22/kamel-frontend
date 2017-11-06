import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField'
import validate from './validate'


// Driver License
// DLRestrictions
// DLType
// DLExpiration

class Step2 extends React.Component {
    render() {
        const { handleSubmit, previousPage } = this.props;
        return (
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-xs-6">
                        <img src={this.props.license}/>
                    </div>
                    <div className="col-xs-6">
                        <Field
                            name="DLRestrictions"
                            type="text"
                            component={renderField}
                            label="Restrictions"
                        />
                        <Field
                            name="DLType"
                            type="text"
                            component={renderField}
                            label="Type"
                        />
                        <Field
                            name="DLExpiration"
                            type="text"
                            component={renderField}
                            label="Expiration Date"
                        />
                    </div>
                    <div className="col-xs-12">
                        <button className="btn btn-sec pull-left" onClick={previousPage}> Previous </button>
                        <button type="submit" className="btn btn-sec pull-right"> Next </button>
                    </div>

                </form>

            </div>
        );
    }

}

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(Step2);