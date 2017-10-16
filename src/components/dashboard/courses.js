import React from 'react';


export default class Courses extends React.Component {
    render() {
        return (
            <div className="white-block user-dash">
                <h2  style={{background: 'rgb(40, 121, 202)'}}>Courses</h2>
                <div><a href="/courses"><img alt="courses" src={require('../../utils/images/img1.jpg')}/></a></div>
                <p className="complete-status">
                    <strong>Completed</strong> <span className="pull-right">{this.props.complete} / {this.props.videos}</span>
                </p>
            </div>
        );
    }

}