import React from 'react';

import {connect} from 'react-redux'
import {withCookies} from 'react-cookie'
import {withRouter} from 'react-router-dom'
import YouTube from 'react-youtube'

import Layout from '../layout/index'

import {fetchVideo, postVideoCompleted } from '../../actions/courses'

class Video extends React.Component {

    componentWillMount(){
        const { cookies } = this.props;
        if (!cookies.get('user')) { this.props.history.push('/login')}
        else {
            if (cookies.get('user').role === 'Admin') {
                this.props.history.push('/admin')
            } else {
                this.props.fetchVideo(this.props.match.params.id);
            }

        }
    }

    onPause = (event) => {
        console.log(event.target.getCurrentTime());
        // event.target
    };

    onEnd = (event) => {
        const {cookies} = this.props;
        // console.log(event.target.getCurrentTime());
        this.props.postVideoCompleted(cookies.get('user')._id, this.props.video._id)
    };

    render() {
        const opts = {
            height: '250',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 0,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 3,
                modestbranding: 0,
                rel: 0,
                showinfo: 1,
            }
        };
        return (
            <Layout>
                <div className="container" style={{ maxWidth: 600 + 'px', margin: 0 + 'auto' }}>
                    <div className="title">{this.props.video.title}</div>
                    <div>
                        <YouTube videoId={this.props.video.videoId}
                                 opts={opts}
                                 onPause={this.onPause}
                                 onEnd={this.onEnd}/>
                    </div>
                    <p className="topmargin">{this.props.video.description}</p>
                </div>
            </Layout>
        );
    }

}

function mapStateToProps(state) {
    return {
        video: state.courses.video
    }
}


export default connect(mapStateToProps, { fetchVideo, postVideoCompleted })(withRouter(withCookies(Video)));