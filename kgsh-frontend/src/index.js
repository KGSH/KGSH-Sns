import React from 'react';
import ReactDOM from 'react-dom';
import { App, Authentication, Home } from './containers';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import './styles/main.scss';

const rootElement = document.getElementById('root');

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <Route>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Authentication}/>
            </div>
        </Route>
    </Router>), rootElement);