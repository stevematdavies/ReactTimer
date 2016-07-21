const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Router, IndexRoute, hashHistory } = require('react-router')
const Main = require('Main')

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// Custom Styles
require('style!css!sass!ApplicationStyles')


/* Define your routes here */
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}></Route>
    </Router>,
    
    document.getElementById('app')
);