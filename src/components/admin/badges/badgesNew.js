import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminLayout from '../layout/index'
import { createBadge } from '../../../actions/admin/badges'
import NewForm from './newForm'

class BadgesNew extends React.Component {

    handelSubmit = (values) =>{
        console.log(values);
        this.props.createBadge(values);
    }

    renderAlerts(){
        if (this.props.message) {
            return (
                <div className="alert alert-success">
                    {this.props.message}
                </div>
            );
        }

        if (this.props.error) {
            return (
                <div className="alert alert-danger">
                    {this.props.error}
                </div>
            );
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">New Badge
                        <Link to="/admin/badges" >
                            <button className="btn btn-warning pull-right">
                                <i className="fa fa-close"></i> close
                            </button>
                        </Link>
                    </div>
                    {this.renderAlerts()}
                    <NewForm error={this.props.error} message={this.props.message}
                                refresh={this.reloadPage} onSubmit={this.handelSubmit}/>
                </div>
            </AdminLayout>
        );
    }

}

function mapStateToProp(state) {
    const { search } = state.adminBadges;
    return {
        badges: state.adminBadges.badges.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase())),
        error: state.adminBadges.error,
        message: state.adminBadges.message
    }
}

export default connect (mapStateToProp, { createBadge })(BadgesNew)