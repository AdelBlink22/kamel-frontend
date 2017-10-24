import React from 'react';
import { Link } from 'react-router-dom'

export default class Table extends React.Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Email Address</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                {this.props.users.map((user) => (
                    <tr key={user._id}>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td className="success-text">{user.role}</td>
                        <td>
                            <Link to={'users/'+ user._id}>
                                <button className="btn btn-default btn-sm"><i className="fa fa-edit"></i> Edit</button>
                            </Link>
                            <button className="btn btn-danger" value={user._id} onClick={this.props.delete}>
                                <i className="fa fa-trash"></i> Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

}