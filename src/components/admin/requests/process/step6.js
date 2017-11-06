import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField'
import validate from './validate'

import { connect } from 'react-redux'

class Step6 extends React.Component {
    render() {
        const {handleSubmit, previousPage } = this.props;
        console.log("PROPS IN STEP 6",this.props.doc);
        return (
            <div className="row">
                <form onSubmit={handleSubmit}>

                    { this.props.doc.name &&
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <div className="caption">
                                    <h3>Identification</h3>
                                    <p>Full name: {this.props.doc.name}</p>
                                    <p>Id #: { this.props.doc.id}</p>

                                </div>
                            </div>
                        </div>

                    }

                    { this.props.doc.DL &&
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <div className="caption">
                                    <h3>Driver License</h3>
                                    <p>Restrictions: {this.props.doc.registration.restrictoins}</p>
                                    <p>Type: {this.props.doc.registration.type}</p>
                                    <p>Expiration Date: {this.props.doc.registration.exp}</p>

                                </div>
                            </div>
                        </div>

                    }
                    { this.props.doc.insurance && Object.keys(this.props.doc.insurance).length > 0 &&
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <div className="caption">
                                    <h3>Insurance</h3>
                                    <p>Policy #: {this.props.doc.insurance.policy}</p>
                                    <p>Expiration Date: {this.props.doc.insurance.exp} </p>
                                </div>
                            </div>
                        </div>
                    }


                    { this.props.doc.registration &&
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <div className="caption">
                                    <h3>Registration</h3>
                                    <p>VIN Number: {this.props.doc.registration.vin}</p>
                                    <p>Serial Number: {this.props.doc.registration.sn}</p>
                                    <p>Type: {this.props.doc.registration.type}</p>
                                    <p>Expiration Date: {this.props.doc.registration.exp} </p>
                                    <p>Plate Letters - EN: {this.props.doc.registration.PL_EN} </p>
                                    <p>Plate Letters - AR: {this.props.doc.registration.PL_AR}  </p>
                                    <p>Plate Number: {this.props.doc.registration.PLNumber}  </p>

                                </div>
                            </div>
                        </div>
                    }


                    <div className="col-xs-12">
                        <button type="submit" className="btn btn-sec pull-right"> Approve </button>
                    </div>
                </form>
            </div>
        );
    }

}

export default reduxForm({
    form: 'approval', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(Step6);