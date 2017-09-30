import React from 'react';


export default class Permit extends React.Component {
    render() {
        return (
            <div className="captain-info btmmargin">
                <div className="row">
                    <div className="col-xs-3"><img src={require('../../utils/images/user.png')} width="60"/></div>
                    <div className="col-xs-6">
                        <p style={{ marginTop: 5 + 'px'}}>
                            <i className="fa fa-check success-text"></i> <strong>Kamel Permit</strong>
                        </p>
                        <p>
                            <i className="fa fa-calendar"></i> 14 November 2016
                        </p>
                    </div>
                    <div className="col-xs-3 topmargin-sm"><a href="/permit" className="btn btn-sec btn-block">View</a></div>
                </div>
            </div>
        );
    }

}