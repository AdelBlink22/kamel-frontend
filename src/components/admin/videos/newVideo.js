import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withRouter } from 'react-router-dom'

// with cookie
import { withCookies } from 'react-cookie'

import AdminLayout from '../layout/index'
import NewForm from './newForm'
import {createVideo} from '../../../actions/admin/videos'

class NewVideo extends React.Component {

    componentWillMount(){
        const { cookies } = this.props;
        if (cookies.get('user')){
            if (cookies.get('user').role === 'Captain') { this.props.history.push('/dashboard')}
        } else {
            this.props.history.push('/login')
        }
    }

    handelSubmit = (values) =>{
        this.props.createVideo(values);
    };

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
                    <div className="title">New Video
                        <Link to="/admin/videos" >
                            <button className="btn btn-warning pull-right">
                                <i className="fa fa-close"></i> close
                            </button>
                        </Link>
                    </div>
                    {this.renderAlerts()}
                    <NewForm onSubmit={this.handelSubmit}/>
                </div>
            </AdminLayout>
        );
    }

}

function mapStateToProp(state) {
    return {
        error: state.adminVideos.error,
        message: state.adminVideos.message
    }
}



export default connect (mapStateToProp, {createVideo})(withRouter(withCookies(NewVideo)))