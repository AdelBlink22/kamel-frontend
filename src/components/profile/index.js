import React from 'react';

import {connect} from 'react-redux'
import {withCookies} from 'react-cookie'
import {withRouter} from 'react-router-dom'

import { editProfileView, fetchProfile, updateProfile } from '../../actions/user'
import UpdateProfile from './form'

import Layout from '../layout/index'

class Profile extends React.Component {
    componentWillMount(){
        const { cookies } = this.props;
        if (!cookies.get('user')) { this.props.history.push('/login')}
        this.props.fetchProfile(cookies.get('user')._id)
    }

    changeView = (e)=> {
        e.preventDefault();
        this.props.editProfileView(e.target.id)
    };

    handleSubmit = (data)=> {
        const { cookies } = this.props;
        console.log(data);
        this.props.updateProfile( cookies.get('user')._id, data);
    };

    renderView = (cookies)=> {
        if (this.props.editable){
            return (
                <UpdateProfile onSubmit={this.handleSubmit} cancel={this.changeView}/>
            );
        } else {
            return (
                <div className="container" style={{ maxWidth: 600 + 'px', margin: 0 + 'auto' }}>
                    <div className="captain-info btmmargin" style={{borderBottom: 1 + 'px' + ' dashed ' + '#ccc', paddingBottom: 15+ 'px'}}>
                        <div className="row">
                            <div className="col-xs-3"><img src={require('../../utils/images/user.png')} width="60"/></div>
                            <div className="col-xs-6">
                                <p className="topmargin"><i className="fa fa-check success-text"></i> <strong>User Name here</strong></p>
                            </div>
                            <div className="col-xs-3 topmargin-sm">
                                <button id="edit" className="btn btn-default btn-block" onClick={this.changeView}> Edit</button>
                            </div>
                        </div>
                    </div>
                    <p><strong>Email: </strong> {this.props.user.email}</p>
                    <p><strong>Mobile: </strong>{this.props.user.phone}</p>
                    <p><strong>Password: </strong>***** </p>

                </div>
                // <div className="mt-3">
                //     <div className="form-group">
                //         <label htmlFor="exampleInputEmail1">Email address</label>
                //         <p>{this.props.user.email}</p>
                //     </div>
                //     <div className="form-group">
                //         <label htmlFor="exampleInputEmail1">Phone number</label>
                //         <p>{this.props.user.phone}</p>
                //     </div>
                //     <div className="form-group">
                //         <label htmlFor="exampleInputEmail1">password</label>
                //         <p>********</p>
                //     </div>
                //     <button id="edit" className="btn btn-primary btn-lg btn-block" onClick={this.changeView}>Edit</button>
                // </div>
            );
        }
    };

    render() {
        const { cookies } = this.props;
        return (
            <Layout>
                {this.renderView(cookies)}
            </Layout>
        );
    }

}

function mapStateToProps(state) {
    return {
        editable: state.user.editable,
        user: state.user.user
    }
}

export default connect(mapStateToProps, {editProfileView, fetchProfile, updateProfile})(withRouter(withCookies(Profile)));
