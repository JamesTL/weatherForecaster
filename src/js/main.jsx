require('../css/foundation.min.css');
const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./components/Landing');
const ReactRouter = require('react-router');
const { Router, Route, hashHistory } = ReactRouter;
//create router
const App = () => (
    <Router history={hashHistory}>
        <Route path='/' component={Landing} />
    </Router>
)

ReactDOM.render(<App />, document.getElementById('weather-forecast'));
