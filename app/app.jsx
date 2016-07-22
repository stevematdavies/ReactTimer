const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// Load Foundation
$(document).foundation();

// Custom Styles
require('style!css!sass!ApplicationStyles');


/* Define your routes here */
ReactDOM.render(

    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='countdown' component={Countdown} />
            <IndexRoute component= {Timer} />
        </Route>
    </Router>,
    
    document.getElementById('app')
);