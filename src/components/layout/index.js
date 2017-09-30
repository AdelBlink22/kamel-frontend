import React from 'react';

import Header from './header'
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <section className="content-wrapper">
                    {this.props.children}
                </section>
            </div>
        );
    }

}