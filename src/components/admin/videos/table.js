import React from 'react';
import { Link } from 'react-router-dom'

export default class Table extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Video ID</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.videos.map((data) => (
                    <tr key={data._id}>
                        {/*<th><a href={`/admin/users/${user._id}`}>{user._id}</a></th>*/}
                        <td> {data.title}</td>
                        <td> {data.description} </td>
                        <td> {data.videoId} </td>
                        <td>
                            <Link to={'videos/'+ data._id}>
                                <button className="btn btn-default btn-sm"><i className="fa fa-edit"></i> Edit</button>
                            </Link>
                            <button className="btn btn-danger" value={data._id} onClick={this.props.delete}>
                                <i className="fa fa-trash"></i> Delete
                            </button>
                            {/*<button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Update </button>*/}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

}