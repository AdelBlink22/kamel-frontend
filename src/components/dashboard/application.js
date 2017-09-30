import React from 'react';


export default class Application extends React.Component {

    renderProgress = ()=> {
        if (this.props.percentage > 0){
            return this.props.percentage + '%';
        } else {
            return '';
        }
    }
    render() {
        return (
            <div className="white-block user-dash">
                <h2 style={{background: '#f6921e' }}>Kamel Application</h2>
                <div><a href="/application"><img src={require('../../utils/images/img2.jpg')}/></a></div>
                <div className="row complete-status">
                    <div className="col-xs-5"><strong>Completed</strong></div>
                    <div className="col-xs-7">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.props.percentage}%`}}>
                                {this.renderProgress()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}