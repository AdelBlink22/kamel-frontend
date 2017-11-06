import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from './renderField'
import validate from './validate'

class Step1 extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="col-xs-6">
                        <img src={this.props.identification}/>
                    </div>
                    <div className="col-xs-6">
                        {/*<input*/}
                            {/*className="form-control"*/}
                            {/*type="text"*/}
                            {/*value={this.props.photo}*/}
                        {/*/>*/}
                        {/*<input*/}
                            {/*className="form-control"*/}
                            {/*type="text"*/}
                            {/*value={this.props.user}*/}
                        {/*/>*/}
                        <Field
                            name="photo"
                            type="hidden"
                            component={renderField}
                            label="photo"
                            value={this.props.photo}
                        />
                        <Field
                            name="fullname"
                            type="text"
                            component={renderField}
                            label="Full Name"
                        />
                        <Field
                            name="idNumber"
                            type="text"
                            component={renderField}
                            label="ID Number"
                        />
                    </div>
                    <div className="col-xs-12">
                        <button className="btn btn-sec pull-left" disabled={true}> Previous </button>
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
})(Step1);