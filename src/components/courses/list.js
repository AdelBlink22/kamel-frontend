import React from 'react';

import Item from './item'

export default class List extends React.Component {
    render() {
        return (
            <div>
                {this.props.videos.map((video) => {
                    return (<Item key={video._id}  id={video._id} title={video.title} description={video.description}/>);
                })}
            </div>
        );
    }

}