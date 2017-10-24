import React from 'react';

import AdminLayout from '../layout/index'

export default class Dashboard extends React.Component {
    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">Dashboard</div>

                    <div className="row">


                        <div className="col-sm-4">
                            <div className="dashboard-box">
                                <a href="/admin/users">
                                    <i className="fa fa-users"></i>
                                    <strong>9999</strong>
                                    <span>users</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="dashboard-box">
                                <a href="/admin/requests">
                                    <i className="fa fa-bell"></i>
                                    <strong>1000</strong>
                                    <span>Requests</span>
                                </a>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="dashboard-box">
                                <a href="admin-users.html">
                                    <i className="fa fa-file-text"></i>
                                    <strong>400</strong>
                                    <span>Permits</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </AdminLayout>

        );
    }

}