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
import Courses from './components/courses/index'
import Video from './components/courses/video'
import Profile from './components/profile/index'
import Application from './components/application/index'

//
import Test from './components/application/test'

class Routes extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/"   component={Home}/>
                    <Route path="/login"    component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/dashboard" component={Dashboard}/>

                    <Route exact path="/courses" component={Courses}/>
                    <Route path="/courses/:id" component={Video}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/application" component={Application}/>

                    <Route component={NotFound}/>

                </Switch>
            </Router>
        );
    }
}

export default Routes;