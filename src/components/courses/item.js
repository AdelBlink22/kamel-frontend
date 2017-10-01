import React from 'react';


export default class Item extends React.Component {
    render() {
        return (
            <div className="white-block user-course">
                <h2>{this.props.title}</h2>
                <p className="btmmargin">{this.props.description}</p>
                <div><a href={`/courses/${this.props.id}`} className="btn btn-sec">Watch</a></div>
            </div>
        );
    }

}