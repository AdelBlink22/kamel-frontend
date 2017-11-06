import React from 'react';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

// with cookie
import { withCookies } from 'react-cookie'

import { fetchRequests } from '../../../actions/admin/requests'
import AdminLayout from '../layout/index'
import Table from './table'


class Requests extends React.Component {

    componentWillMount(){
        const { cookies } = this.props;
        if (cookies.get('user')){
            if (cookies.get('user').role === 'Captain') { this.props.history.push('/dashboard')}
            else { this.props.fetchRequests(); }
        } else {
            this.props.history.push('/login')
        }

    }

    reloadPage(e){
        e.preventDefault();
        window.location.reload();
    }

    renderRequests (){
        if (this.props.requests && this.props.requests.length > 0) {

            return (
                // map users to user item
                <Table requests={this.props.requests} />

            );
        } else {
            return (
                <div>
                    <h4 className="card-title">No Requests Found!</h4>
                    <p className="card-text">Click 'Reload' to refresh the page.</p>
                </div>
            );
        }
    };

    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">Requests
                        <button className="btn btn-default pull-right" style={{marginRight: 10 +"px"}} onClick={this.reloadPage}>
                            <i className="fa fa-refresh"></i> Reload
                        </button>
                    </div>
                    {this.renderRequests()}
                </div>
            </AdminLayout>
        );
    }

}


function mapStateToProps(state) {
    return {
        requests: state.adminRequests.requests
    }
}

export default connect (mapStateToProps, { fetchRequests })(withRouter(withCookies(Requests)));