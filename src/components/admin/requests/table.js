import React from 'react';
import { Link } from 'react-router-dom'

export default class Table extends React.Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Photo</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.requests.map((data) => (
                    <tr key={data._id}>
                        <td> <img src={data.photo} width={50 + 'px'} /> </td>
                        <td> {data.user.email} </td>
                        <td> {data.status} </td>
                        <td>
                            <Link to={'requests/'+ data._id}>
                                <button className="btn btn-default btn-sm">
                                    <i className="fa fa-edit"></i> view
                                </button>
                            </Link>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

}