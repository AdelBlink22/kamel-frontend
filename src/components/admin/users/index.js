import React from 'react';
import AdminLayout from '../layout/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchUsers, deleteUser} from '../../../actions/admin/users'

import { withRouter } from 'react-router-dom'

// with cookie
import { withCookies } from 'react-cookie'

import Table from './table'

class Users extends React.Component {

    componentWillMount() {
        // Fetch inbox (conversations involving current user)
        const { cookies } = this.props;
        if (cookies.get('user')){
            if (cookies.get('user').role === 'Captain') { this.props.history.push('/dashboard')}
            else {
                this.props.fetchUsers();
            }
        } else {
            this.props.history.push('/login')
        }

    }

    reloadPage(e){
        e.preventDefault();
        window.location.reload();
    }

    handleDelete = (event) =>{
        event.preventDefault();
        // console.log(this.props)
        this.props.deleteUser(event.target.value);
    };

    renderUsers(){
        if (this.props.users && this.props.users.length > 0){
            return (
                // map users to user item
                <Table delete={this.handleDelete} users={this.props.users}/>
            );
        } else {
            return (
                <div>
                    <h4 className="card-title">No Users Found!</h4>
                    <p className="card-text">Click 'New user' button to add new users, or Reload to refresh the page.</p>
                </div>
            );
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">Users
                        <Link to="users/new" >
                            <button href="#" className="btn btn-sec pull-right">
                                <i className="fa fa-plus"></i> Add New User
                            </button>
                        </Link>
                        <button className="btn btn-default pull-right" style={{marginRight: 10 +"px"}} onClick={this.reloadPage}>
                            <i className="fa fa-refresh"></i> Reload
                        </button>
                    </div>
                    <div className="table-search">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Search"/>
                            </div>
                            <button type="submit" className="btn btn-main form-control">Search</button>
                        </form>
                    </div>
                    {this.renderUsers()}
                </div>
            </AdminLayout>
        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.adminUsers.users,
        search: "",
        type: ""
    }
}

export default connect (mapStateToProps, {fetchUsers, deleteUser})(withRouter(withCookies(Users)))