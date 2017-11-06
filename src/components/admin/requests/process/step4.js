import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField'
import validate from './validate'


class Step4 extends React.Component {
    render() {
        const {handleSubmit, previousPage } = this.props;
        return (
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-xs-6">
                        {this.props.insurance && <img src={this.props.insurance}/>}
                        {!this.props.insurance && <h2> No Photo uploaded </h2>}
                    </div>
                    <div className="col-xs-6">
                        <Field
                            name="PNumber"
                            type="text"
                            component={renderField}
                            label="Policy Number"
                        />
                        <Field
                            name="PExpiration"
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
})(Step4);