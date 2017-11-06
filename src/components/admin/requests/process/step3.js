import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField'
import validate from './validate'

// registration
// VRNumber
// VRSN
// VRType
// VRExpiration
// CAR Information
// PL_AR
// PL_EN
// PLNumber


class Step3 extends React.Component {
    render() {
        const { handleSubmit, previousPage } = this.props;
        return (
                <form onSubmit={handleSubmit}>
                    <div className="col-xs-6">
                        <img src={this.props.registration}/>
                    </div>
                    <div className="col-xs-6">
                        <Field
                            name="VRNumber"
                            type="text"
                            component={renderField}
                            label="VIN Number"
                        />
                        <Field
                            name="VRSN"
                            type="text"
                            component={renderField}
                            label="Serial Number"
                        />
                        <Field
                            name="VRType"
                            type="text"
                            component={renderField}
                            label="Type"
                        />
                        <Field
                            name="VRExpiration"
                            type="text"
                            component={renderField}
                            label="Expiration Date"
                        />
                        <Field
                            name="PL_AR"
                            type="text"
                            component={renderField}
                            label="Plate Arabic Litters"
                        />
                        <Field
                            name="PL_EN"
                            type="text"
                            component={renderField}
                            label="Plate English Litters"
                        />
                        <Field
                            name="PLNumber"
                            type="text"
                            component={renderField}
                            label="Plate Number"
                        />
                    </div>

                    <div className="col-xs-12">
                        <button className="btn btn-sec pull-left" onClick={previousPage}> Previous </button>
                        <button type="submit" className="btn btn-sec pull-right"> Next </button>
                    </div>
                </form>
        );
    }

}

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(Step3);