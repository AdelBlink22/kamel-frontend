/**
 * Created by tawashy on 9/27/17.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


// static components
import Home from './components/home'
import NotFound from './components/notFount'

class Routes extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        );
    }
}

export default Routes;