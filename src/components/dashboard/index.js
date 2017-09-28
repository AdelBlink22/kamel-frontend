import React from 'react';
import { connect } from 'react-redux'


// with router
import { withRouter } from 'react-router-dom'

// with cookies
import { withCookies } from 'react-cookie'

// log out action
import { logoutUser } from '../../actions/auth'

class Dashboard extends React.Component {
    componentWillMount(){
        const { cookies } = this.props;
        if (!cookies.get('user')) { this.props.history.push('/login')}
    }

    logOut = (e)=> {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <div>
                <button onClick={this.logOut}> Log out </button>
            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
      progress: '',
      application: ''
    };
}

export default connect(mapStateToProps, { logoutUser })(withRouter(withCookies(Dashboard)));