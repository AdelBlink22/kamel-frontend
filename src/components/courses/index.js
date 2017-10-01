import React from 'react';
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import { withRouter } from 'react-router-dom'

import Layout from '../layout/index'
import List from './list'

import { fetchCourses } from '../../actions/courses'

class Courses extends React.Component {
    componentWillMount(){
        const { cookies } = this.props;
        if (!cookies.get('user')) { this.props.history.push('/login')}
        else {
            this.props.fetchCourses();
        }
    }

    renderCourses = ()=> {
        if (this.props.courses && this.props.courses.length > 0){
            return (<List videos={this.props.courses}/>);
        } else {
            return (<h2> No Courses Found !</h2>);
        }
    };

    render() {
        return (
            <Layout>
                <div className="container" style={{ maxWidth: 600 + 'px', margin: 0 + 'auto' }}>
                    <div className="title">Courses</div>

                    {this.renderCourses()}
                    {/*<div className="white-block user-course">*/}
                        {/*<h2>KasperCab Short Movie</h2>*/}
                        {/*<p className="btmmargin">A short video explaining KasperCab work</p>*/}
                        {/*<div><a href="video.html" className="btn btn-sec">Watch</a></div>*/}
                    {/*</div>*/}

                </div>
            </Layout>);
    }

}

function mapPropsToState(state) {
    console.log(state)
    return {
        courses: state.courses.videos
    };
}

export default connect(mapPropsToState, { fetchCourses })(withRouter(withCookies(Courses)));