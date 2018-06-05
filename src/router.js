import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router';

import Home from './pages/Home/Home.js';
import Page1 from './pages/Page1/Page1.js';

export default (
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/page1' component={Page1}/>
    </Switch>
)