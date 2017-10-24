import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import Layout from '../layout/index'
import UpdateForm from './updateForm'
import { updateUser } from '../../../actions/admin/users'


class UserUpdate extends React.Component {

    handelSubmit = (values) =>{
        console.log('Updated Value: ',values);
        this.props.updateUser(this.props.match.params.id, values);
    };

    renderAlerts(){
        if (this.props.message) {
            return (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.props.message}
                </div>
            );
        }

        if (this.props.error) {
            return (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {this.props.error}
                </div>
            );
        }
    }

    render() {
        return (
            <Layout>
                <div className="col-sm-9">
                    <div className="title">Update User
                        <Link to="/admin/users" >
                            <button className="btn btn-warning pull-right">
                                <i className="fa fa-close"></i> close
                            </button>
                        </Link>
                    </div>
                    {this.renderAlerts()}
                    {console.log("MATCH: ",this.props.match)}
                    <UpdateForm userId={this.props.match.params.id} error={this.props.error} message={this.props.message}
                          refresh={this.reloadPage} onSubmit={this.handelSubmit}/>
                </div>
            </Layout>);
    }

}

function mapStateToProp(state) {
    console.log(state);
    return {
        user: state.adminUsers.user,
        error: state.adminUsers.error,
        message: state.adminUsers.message
    }
}


export default connect( mapStateToProp, { updateUser })(UserUpdate);