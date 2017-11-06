import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AdminLayout from '../../layout/index'

import { Link } from 'react-router-dom'

import Stepper from 'react-stepper-horizontal'

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step5 from './step5'
import Step6 from './step6'

import { withRouter } from 'react-router-dom'

// with cookie
import { withCookies } from 'react-cookie'

import { postDoc, fetchDoc, incrementPage, decrementPage } from '../../../../actions/admin/docs'
import { fetchRequest, approveRequest } from '../../../../actions/admin/requests';


class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.approveHandler = this.approveHandler.bind(this);
        // this.state = { page: props.page };
    }

    handleSubmit(value){
        // this.props.onSubmit(value)
        // console.log(value);
        this.props.postDoc(value, this.props.request.user);
    }

    componentWillMount(){
        const { cookies } = this.props;
        if (cookies.get('user')){
            if (cookies.get('user').role === 'Captain') { this.props.history.push('/dashboard')}
            else {
                this.props.fetchRequest(this.props.match.params.id);
                this.props.fetchDoc(this.props.match.params.id);
            }
        } else {
            this.props.history.push('/login')
        }
    }

    approveHandler(value){
        this.props.approveRequest(this.props.match.params.id, value);
        // console.log("Approve!!")
    }

    renderSteps(){
        // if there is document in the document table
        // console.log('triggered:::', Object.keys(this.props.doc).length, " ", Object.keys(this.props.doc).length === 0 );
        if (this.props.doc && Object.keys(this.props.doc).length > 0) {
            // if request is approved
            console.log('Has Doc');
            if (this.props.request.status === 'Approved') {

                console.log("Approved");
                // show request has been approved
                return <h4>Request has been approved</h4>;
            }else {
                console.log('Not Approved');
                // else
                // show request at last page where approve form appears
                return (
                    <div>
                        <Stepper steps={ [{title: 'Identification'}, {title: 'Driver License'}, {title: 'Registration'},
                            {title: 'Insurance'}, {title: 'Overview'}, {title: 'Approval'}] } activeStep={ this.props.page - 1 } />
                        <br/>
                        <br/>
                        {this.props.page === 6 &&
                        <Step6
                            previousPage={this.previousPage}
                            onSubmit={this.approveHandler}
                            doc = {this.props.doc}
                        />}
                    </div>
                );
            }
        } else { // else
            console.log('No Docs');
            //show request from first page.
            return (
                <div>
                    <Stepper steps={ [{title: 'Identification'}, {title: 'Driver License'}, {title: 'Registration'},
                        {title: 'Insurance'}, {title: 'Overview'}, {title: 'Approval'}] } activeStep={ this.props.page - 1 } />
                    <br/>
                    <br/>
                    {this.props.page === 1 && <Step1 onSubmit={this.nextPage}
                                          identification={this.props.request.identification}
                                          user={this.props.request.user}
                                          photo={this.props.request.photo}/>
                    }
                    {this.props.page === 2 &&
                    <Step2
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        license = {this.props.request.license}
                    />}
                    {this.props.page === 3 &&
                    <Step3
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        registration= {this.props.request.registration}
                    />}
                    {this.props.page === 4 &&
                    <Step4
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        insurance= {this.props.request.insurance}
                    />}
                    {this.props.page === 5 &&
                    <Step5
                        previousPage={this.previousPage}
                        onSubmit={this.handleSubmit}
                    />}
                </div>
            );
        }
    }


    nextPage() {
        // this.setState({ page: this.state.page + 1 });
        console.log("NEXT");
        this.props.incrementPage();
    }

    previousPage() {
        // this.setState({ page: this.state.page - 1 });
        this.props.decrementPage();
    }


    render() {

        const { onSubmit, page } = this.props;
        // const { page } = this.state;
        console.log("Wizard PROPS", this.props);
        return (
            <AdminLayout>

                <div className="col-sm-9">
                    <div className="title">View Request
                        <Link to="/admin/requests" >
                            <button href="#" className="btn btn-warning pull-right">
                                <i className="fa fa-close"></i> close
                            </button>
                        </Link>
                    </div>
                    {this.renderSteps()}
                    {/*<div>*/}
                        {/*<Stepper steps={ [{title: 'Identification'}, {title: 'Driver License'}, {title: 'Registration'},*/}
                            {/*{title: 'Insurance'}, {title: 'Overview'}, {title: 'Approval'}] } activeStep={ page - 1 } />*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*{page === 1 && <Step1 onSubmit={this.nextPage}*/}
                                              {/*identification={this.props.request.identification}*/}
                                              {/*user={this.props.request.user}*/}
                                              {/*photo={this.props.request.photo}/>*/}
                        {/*}*/}
                        {/*{page === 2 &&*/}
                        {/*<Step2*/}
                            {/*previousPage={this.previousPage}*/}
                            {/*onSubmit={this.nextPage}*/}
                            {/*license = {this.props.request.license}*/}
                        {/*/>}*/}
                        {/*{page === 3 &&*/}
                        {/*<Step3*/}
                            {/*previousPage={this.previousPage}*/}
                            {/*onSubmit={this.nextPage}*/}
                            {/*registration= {this.props.request.registration}*/}
                        {/*/>}*/}
                        {/*{page === 4 &&*/}
                        {/*<Step4*/}
                            {/*previousPage={this.previousPage}*/}
                            {/*onSubmit={this.nextPage}*/}
                            {/*insurance= {this.props.request.insurance}*/}
                        {/*/>}*/}
                        {/*{page === 5 &&*/}
                        {/*<Step5*/}
                            {/*previousPage={this.previousPage}*/}
                            {/*onSubmit={this.handleSubmit}*/}
                        {/*/>}*/}
                        {/*{page === 6 &&*/}
                        {/*<Step6*/}
                            {/*previousPage={this.previousPage}*/}
                            {/*onSubmit={this.handleSubmit}*/}
                            {/*doc = {this.props.doc}*/}
                        {/*/>}*/}
                    {/*</div>*/}
                </div>
            </AdminLayout>
        );
    }

}

// Wizard.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };


function mapStateToProps(state) {
    console.log(state);
    return {
        doc: state.adminDocs.doc,
        page: state.adminDocs.page,
        request: state.adminRequests.request,
        message: state.adminRequests.message,
        error: state.adminRequests.error
    }
}

export default connect (mapStateToProps, { postDoc, fetchDoc, fetchRequest, approveRequest, incrementPage, decrementPage })(withRouter(withCookies(Wizard)));