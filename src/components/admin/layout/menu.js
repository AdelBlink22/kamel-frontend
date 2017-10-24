import React from 'react';


export default class Menu extends React.Component {
    render() {
        return (
            <div className="col-sm-3 hidden-xs sidebar">
                <div className="panel panel-default">
                    <div className="panel-heading user-profile text-center">
                        <i className="fa fa-user-o"></i>
                        <strong>Admin Name Here</strong>
                    </div>
                    <ul className="list-group">
                        <li><a href="/admin/dashboard" className="list-group-item active"><i className="fa fa-tachometer"></i> Dashboard</a></li>
                        <li><a href="/admin/users" className="list-group-item"><i className="fa fa-users"></i> Users</a></li>
                        <li><a href="/admin/requests" className="list-group-item"><i className="fa fa-bell"></i> Requests</a></li>
                        <li><a href="/admin/badges" className="list-group-item"><i className="fa fa-star"></i> Badges</a></li>
                        <li><a href="/admin/videos" className="list-group-item"><i className="fa fa-video-camera"></i> Videos</a></li>
                    </ul>
                </div>
            </div>
        );
    }

}