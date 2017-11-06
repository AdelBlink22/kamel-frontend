import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import renderField from './renderField'
import validate from './validate'


class Step5 extends React.Component {
    render() {
        const { handleSubmit, previousPage,
            name, id, dl_rest, dl_type, dl_exp,
            ins_policy, ins_Exp, VINNumber, SN,
            VRType, VRExp, plateEN, plateAR, plateNumber } = this.props;

        console.log(this.props);
        return (
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Identification</h3>
                                <p>Full name: {name}</p>
                                <p>Id #: { id }</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Driver License</h3>
                                <p>Restrictions: {dl_rest}</p>
                                <p>Type: {dl_type}</p>
                                <p>Expiration Date: {dl_exp}</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Insurance</h3>
                                <p>Policy #: {ins_policy}</p>
                                <p>Expiration Date: {ins_Exp} </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Registration</h3>
                                <p>VIN Number: {VINNumber}</p>
                                <p>Serial Number: {SN}</p>
                                <p>Type: {VRType}</p>
                                <p>Expiration Date: {VRExp} </p>
                                <p>Plate Letters - EN: {plateEN} </p>
                                <p>Plate Letters - AR: {plateAR}  </p>
                                <p>Plate Number: {plateNumber}  </p>

                            </div>
                        </div>
                    </div>




                    <div className="col-xs-12">
                        <button className="btn btn-sec pull-left" onClick={previousPage}> Previous </button>
                        <button type="submit" className="btn btn-sec pull-right"> Save </button>
                    </div>
                </form>
            </div>
        );
    }

}



Step5 = reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(Step5);


const values = formValueSelector('wizard')

Step5 = connect(
    state => {


        // ID/Iqama
        const name = values(state, 'fullname');
        const id = values(state, 'idNumber');

        // Driver License
        const dl_rest = values(state, 'DLRestrictions');
        const dl_type = values(state, 'DLType');
        const dl_exp = values(state, 'DLExpiration');

        // Insurance
        const ins_policy = values(state, 'PNumber');
        const ins_Exp = values(state, 'PExpiration');

        // Registration
        const VINNumber = values(state, 'VRNumber');
        const SN = values(state, 'VRSN');
        const VRType = values(state, 'VRType');
        const VRExp = values(state, 'VRExpiration');
        const plateEN = values(state, 'PL_EN');
        const plateAR = values(state, 'PL_AR');
        const plateNumber = values(state, 'PLNumber');




        return { name, id, dl_rest, dl_type, dl_exp, ins_policy, ins_Exp, VINNumber, SN,
                VRType, VRExp, plateEN, plateAR, plateNumber}
    }
)(Step5);

// Step5 = connect(state => ({
//     // alternatively, you can set initial values here...
//     initialValues: {
//         photo: state.adminRequests.request.photo
//     },
//     // ID/Iqama
//     name: values(state, 'fullname'),
//     id : values(state, 'idNumber'),
//     // Driver License
//     dl_rest: values(state, 'DLRestrictions'),
//     dl_type: values(state, 'DLType'),
//     dl_exp: values(state, 'DLExpiration'),
//     // Insurance
//     ins_policy: values(state, 'PNumber'),
//     ins_Exp: values(state, 'PExpiration'),
//     // Registration
//     VINNumber: values(state, 'VRNumber'),
//     SN: values(state, 'VRSN'),
//     VRType: values(state, 'VRType'),
//     VRExp: values(state, 'VRExpiration'),
//     plateEN: values(state, 'PL_EN'),
//     plateAR: values(state, 'PL_AR'),
//     plateNumber: values(state, 'PLNumber'),
//
//
// }))(Step5);


export default Step5;


