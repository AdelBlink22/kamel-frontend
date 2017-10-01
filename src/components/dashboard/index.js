import React from 'react';

import { connect } from 'react-redux'

// with router
import { withRouter } from 'react-router-dom'

// with cookies
import { withCookies } from 'react-cookie'

// number of courses completed action
import { fetchCoursesCompleted } from '../../actions/courses'
import { fetchApplicationProgress } from '../../actions/application'

import Layout from '../layout/index'
import Courses from './courses'
import Application from './application'
import Permit from './permit'

class Dashboard extends React.Component {
    componentWillMount(){
        const { cookies } = this.props;
        if (!cookies.get('user')) { this.props.history.push('/login')}
        this.props.fetchCoursesCompleted(cookies.get('user')._id);
        this.props.fetchApplicationProgress(cookies.get('user')._id);
    }

    logOut = (e)=> {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <Layout>
                <div className="container" style={{ maxWidth: 600 + 'px', margin: 0 + 'auto' }}>
                    <div className="alert alert-info">
                        <h4>Hello, Captain!</h4>
                        <p>Please complete the courses and fill out the application to obtain KAMEL's permit</p>
                    </div>

                    {/* Permit component will be visible if the user have finished the two sections */}
                    <Permit/>

                    {/* Courses component */}
                    <Courses videos={this.props.progress.videos} complete={this.props.progress.watched}/>

                    {/* Application component */}
                    <Application percentage={this.props.percentage} />
                </div>

            </Layout>

        );
    }

}

function mapStateToProps(state) {
    return {
      progress: state.courses.progress,
      percentage: state.application.progress
    };
}

export default connect(mapStateToProps, { fetchCoursesCompleted, fetchApplicationProgress })(withRouter(withCookies(Dashboard)));