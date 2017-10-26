import React from 'react';
import { Link } from 'react-router-dom'

export default class Table extends React.Component {
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.badges.map((data) => (
                    <tr key={data._id}>
                        {/*<th><a href={`/admin/users/${user._id}`}>{user._id}</a></th>*/}
                        <td> <img width='30' height='30' src={data.photo}/></td>
                        <td> {data.name} </td>
                        <td> {data.description} </td>
                        <td>
                            <Link to={'badges/'+ data._id}>
                                <button className="btn btn-default btn-sm">
                                    <i class="fa fa-edit"></i> Edit
                                </button>
                            </Link>
                            <button className="btn btn-danger btn-sm" value={data._id} onClick={this.props.delete}>
                                <i class="fa fa-trash"></i> Delete
                            </button>
                        </td>
                        {/*<td className="text-center">*/}
                            {/*<Link to={'badges/'+ data._id}>*/}
                                {/*<button className="btn btn-primary"> Edit </button>*/}
                            {/*</Link>*/}
                        {/*</td>*/}
                        {/*<td className="text-center">*/}
                            {/**/}
                            {/*<div className="btn-group" role="group" aria-label="...">*/}

                                {/*<button className="btn btn-danger" value={data._id} onClick={this.props.delete}> Delete </button>*/}
                            {/*</div>*/}

                        {/*</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

}