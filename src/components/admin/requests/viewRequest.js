import React from 'react';
import { connect } from 'react-redux'
import AdminLayout from '../layout/index'

import { Link } from 'react-router-dom'
import Process from './process/index'
import Wizard from "./process/wizard";

import { postDoc, fetchDoc } from '../../../actions/admin/docs'
import { fetchRequest } from '../../../actions/admin/requests';



class ViewRequest extends React.Component {
    constructor(props){
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {page: this.props.page}
    }

    componentWillMount(){
        this.props.fetchRequest(this.props.match.params.id);
        this.props.fetchDoc(this.props.match.params.id);
    }


    submitHandler(value){
        console.log("Form value from viewRequest component: ", value);
        this.props.postDoc(value, this.props.request.user);
    }

    renderWizard(){
        // if there is document in the document table
        console.log('triggered', this.props.numDocs, " ", this.props.numDocs === 0 );
        if (this.props.doc && this.props.doc.length > 0) {
            // if request is approved
            console.log('Has Doc');
            if (this.props.request.approved) {

                console.log("Approved");
                // show request has been approved
                return <h4>Request has been approved</h4>;
            }else {
                console.log('Not Approved');
                // else
                // show request at last page where approve form appears
                return (<Wizard onSubmit={this.submitHandler} request={this.props.request} doc={this.props.doc} page={6}/>);
            }
        } else { // else
            console.log('No Docs');
            //show request from first page.
            return (<Wizard onSubmit={this.submitHandler} request={this.props.request} page={1}/>);
        }
    }



    render() {
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
                    {this.renderWizard()}
                    {/*<Wizard onSubmit={this.submitHandler} request={this.props.request}/>*/}
                </div>
            </AdminLayout>

        );
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {
        doc: state.adminDocs.doc,
        numDocs: Object.keys(state.adminDocs.doc).length,
        request: state.adminRequests.request,
        message: state.adminRequests.message,
        error: state.adminRequests.error
    }
}

export default connect (mapStateToProps, { postDoc, fetchDoc, fetchRequest })(ViewRequest);