import React from 'react';

import Layout from '../../layout/index'
import Menu from './menu'

export default class AdminLayout extends React.Component {
    render() {
        return (
            <Layout>
                <div className="container internal-page">
                    <div className="row">
                        <Menu/>
                        {this.props.children}
                    </div>
                </div>
            </Layout>
        );
    }

}