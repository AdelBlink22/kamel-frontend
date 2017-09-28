/**
 * Created by tawashy on 9/27/17.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// static components
import Home from './components/home'
import NotFound from './components/notFount'

// authentication routes
import Login from './components/auth/login/index'
import Register from './components/auth/register/index'

//main pages
import Dashboard from './components/dashboard/index'

class Routes extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/"   component={Home}/>
                    <Route path="/login"    component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>

                    <Route component={NotFound}/>

                </Switch>
            </Router>
        );
    }
}

export default Routes;