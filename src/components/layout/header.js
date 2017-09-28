import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <figure className="logo">
                        <a href="/">
                            <img src={require('../../utils/images/logo-2.svg')} alt="Kasper Cabs" className="img-responsive"/>
                        </a>
                    </figure>
                </div>
            </header>
        );
    }

}