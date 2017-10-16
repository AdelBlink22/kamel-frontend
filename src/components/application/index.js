import React from 'react';

import { withRouter } from 'react-router-dom'

// with cookies
import { withCookies } from 'react-cookie'

import { reduxForm } from 'redux-form'

import Layout from '../layout/index'

import { connect } from 'react-redux'
import { uploadApplication, fetchApplication } from '../../actions/application'
import { UPLOADING_APPLICATION } from '../../actions/types/application'

import FormUpload from './formUpload'


class Application extends React.Component {

    constructor(props){
        super (props);
        this.state = {isUploading: false}
    }
    componentWillMount(){
        const { cookies } = this.props;
        if (!cookies.get('user')) { this.props.history.push('/login')}
        else {
            this.props.fetchApplication(cookies.get('user')._id);
        }

    }

    onSubmit = (data)=> {
        const { cookies } = this.props;
        this.setState({isUploading: true});
        this.props.uploadApplication(cookies.get('user')._id, data)

    };


    renderRequest(){
        if (this.props.application){
            return (
                <div className="white-block kamel-form">
                    <div className="row">
                        <div className="col-xs-3"><i className="fa fa-id-card"></i></div>
                        <div className="col-xs-9">
                            <p>You have a request with a <strong>{this.props.application.status}</strong> status</p>
                            <p className="btmmargin"> Application id: {this.props.application.id}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            console.log(this.props.application);
            return (
                <FormUpload handleSubmit={this.onSubmit}/>
            );
        }
    }


    render() {
        var {handleSubmit, reset} = this.props;

        return (
            <Layout>
                <div className="container" style={{ maxWidth: 600 + 'px', margin: 0 + 'auto' }}>
                    <div className="title">Kamel Application</div>

                    <div className="alert alert-success">
                        <p>Notification Goes here</p>
                    </div>
                    <div className="alert alert-danger">
                        <p>Please upload XXXXX again</p>
                    </div>

                    {this.renderRequest()}

                </div>
            </Layout>
    );
    }

}



Application = reduxForm({
    form: 'application',
})(Application);

function mapStateToProps(state) {
    return {
        application: state.application.application,
        error: state.application.error,
    }

}

export default connect(mapStateToProps, { uploadApplication, fetchApplication })(withRouter(withCookies(Application)));