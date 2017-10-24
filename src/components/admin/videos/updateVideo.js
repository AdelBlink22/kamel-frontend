import React from 'react';
import AdminLayout from '../layout/index'
import { Link } from 'react-router-dom'
import UpdateForm from './updateForm'
import { connect } from 'react-redux'
import { updateVideo } from '../../../actions/admin/videos'

class UpdateVideo extends React.Component {

    handelSubmit = (values) =>{
        console.log('Updated Value: ',values);
        this.props.updateVideo(this.props.match.params.id, values);
    };

    renderAlerts(){
        if (this.props.message) {
            return (
                <div className="alert alert-success">
                    {this.props.message}
                </div>
            );
        }

        if (this.props.error) {
            return (
                <div className="alert alert-danger">
                    {this.props.error}
                </div>
            );
        }
    }

    render() {
        return (
            <AdminLayout>
                <div className="col-sm-9">
                    <div className="title">Update Video
                        <Link to="/admin/videos" >
                            <button className="btn btn-warning pull-right">
                                <i className="fa fa-close"></i> close
                            </button>
                        </Link>
                    </div>
                    {this.renderAlerts()}
                    {console.log("MATCH: ",this.props.match)}
                    <UpdateForm userId={this.props.match.params.id} error={this.props.error} message={this.props.message}
                                refresh={this.reloadPage} onSubmit={this.handelSubmit}/>
                </div>
            </AdminLayout>
        );
    }

}

function mapStateToProp(state) {
    console.log(state);
    return {
        user: state.adminVideos.video,
        error: state.adminVideos.error,
        message: state.adminVideos.message
    }
}


export default connect( mapStateToProp, { updateVideo })(UpdateVideo);