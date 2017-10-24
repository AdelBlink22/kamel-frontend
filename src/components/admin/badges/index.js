import React from 'react';
import AdminLayout from '../layout/index'
import Table from './table'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchBadges } from '../../../actions/admin/badges'

class Badges extends React.Component {

    componentWillMount(){
        this.props.fetchBadges();
    }

    handleDelete = (event) =>{
        event.preventDefault();
        //console.log(this.props)
        this.props.deleteBadge(event.target.value);
    };

    reloadPage(e){
        e.preventDefault();
        window.location.reload();
    }

    renderBadges (){
        if (this.props.badges && this.props.badges.length > 0) {

            return (
                // map users to user item
                <Table badges={this.props.badges} delete={this.handleDelete} />

            );
        } else {
            return (
                <div>
                    <h4 className="card-title">No badges Found!</h4>
                    <p className="card-text">Click 'Reload' to refresh the page.</p>
                </div>
            );
        }
    };

    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">Users
                        <Link to="users/new" >
                            <button href="#" className="btn btn-sec pull-right">
                                <i className="fa fa-plus"></i> Add New Badge
                            </button>
                        </Link>
                        <button className="btn btn-default pull-right" style={{marginRight: 10 +"px"}} onClick={this.reloadPage}>
                            <i className="fa fa-refresh"></i> Reload
                        </button>
                    </div>
                    {this.renderBadges()}
                </div>
            </AdminLayout>
        );
    }

}

function mapStateToProp(state) {
    console.log(state);
    const { search } = state.adminBadges;
    return {
        badges: state.adminBadges.badges.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase())),
        error: state.adminBadges.error,
        message: state.adminBadges.message
    }
}

export default connect ( mapStateToProp, { fetchBadges })(Badges)