import React from 'react';
import { connect } from 'react-redux'
import { createUser } from '../../../actions/admin/users'

import { Link } from 'react-router-dom'


import AdminLayout from '../layout/index'
import UserForm from './userForm'

class NewUser extends React.Component {

    handelSubmit = (values) =>{
        console.log(values);
        this.props.createUser(values);
    }

    renderAlerts(){
        if (this.props.message) {
            return (
                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div>
            );
        }

        if (this.props.error) {
            return (
                <div className="alert alert-danger" role="alert">
                    {this.props.error}
                </div>
            );
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">New User
                        <Link to="/admin/users" >
                            <button className="btn btn-warning pull-right">
                                <i className="fa fa-close"></i> close
                            </button>
                        </Link>
                    </div>

                    {this.renderAlerts()}
                    <UserForm error={this.props.error} message={this.props.message}
                              refresh={this.reloadPage} onSubmit={this.handelSubmit}/>
                </div>
            </AdminLayout>
        );
    }

}

function mapStateToProp(state) {
    return {
        error: state.adminUsers.error,
        message: state.adminUsers.message
    }
}


export default connect (mapStateToProp, { createUser })(NewUser)