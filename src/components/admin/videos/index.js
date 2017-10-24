import React from 'react';
import { connect } from 'react-redux'
import { fetchVideos, deleteVideo } from '../../../actions/admin/videos'
import { Link } from 'react-router-dom'
import Layout from '../layout/index'

import Table from './table'

class Videos extends React.Component {

    componentWillMount(){
        this.props.fetchVideos();
    }

    handleDelete = (event) =>{
        event.preventDefault();
        // console.log(this.props)
        this.props.deleteVideo(event.target.value)
    };

    handleSubmit(event) {
        event.preventDefault();
        this.props.createVideo(event.data)

    }

    reloadPage(e){
        e.preventDefault();
        window.location.reload();
    }
    renderVideos (){
        if (this.props.videos && this.props.videos.length > 0) {

            return (
                // map users to user item
                <Table videos={this.props.videos} delete={this.handleDelete}/>
            );
        } else {
            return (
                <div>
                    <h4 className="card-title">No badges Found!</h4>
                    <p className="card-text">Click 'Reload' to refresh the page.</p>
                </div>
            );
        }
    };

    render() {
        return (
            <Layout>
                <div className="col-sm-9">
                    <div className="title">Videos
                        <Link to="/admin/videos/new" >
                            <button className="btn btn-sec pull-right">
                                <i className="fa fa-plus"></i> Add New Video
                            </button>
                        </Link>
                        <button className="btn btn-default pull-right" style={{marginRight: 10 +"px"}} onClick={this.reloadPage}>
                            <i className="fa fa-refresh"></i> Reload
                        </button>
                    </div>
                    {this.renderVideos()}

                </div>
            </Layout>
        );
    }

}

function mapStateToProp(state) {
    console.log('STATE: ',state);
    return {
        videos: state.adminVideos.videos
    }
}

export default connect (mapStateToProp , {fetchVideos, deleteVideo})(Videos)