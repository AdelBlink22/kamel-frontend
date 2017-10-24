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

// admin pages
import AdminDashboard from './components/admin/dashboard/index'

import Users from './components/admin/users/index'
import NewUser from './components/admin/users/newUser'
import UpdateUser from './components/admin/users/userUpdate'

import Videos from './components/admin/videos/index'
import NewVideo from './components/admin/videos/newVideo'
import UpdateVideo from './components/admin/videos/updateVideo'

import Badges from './components/admin/badges/index'

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

                    <Route exact path="/admin" component={NotFound}/>
                    <Route path="/admin/dashboard" component={AdminDashboard}/>

                    <Route exact path="/admin/users" component={Users}/>
                    <Route path="/admin/users/new" component={NewUser}/>
                    <Route path="/admin/users/:id" component={UpdateUser}/>


                    <Route exact path="/admin/videos" component={Videos}/>
                    <Route path="/admin/videos/new" component={NewVideo}/>
                    <Route path="/admin/videos/:id" component={UpdateVideo}/>


                    <Route exact path="/admin/badges" component={Badges} />

                    <Route component={NotFound}/>

                </Switch>
            </Router>
        );
    }
}

export default Routes;