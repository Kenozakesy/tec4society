import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import loginPage from './components/loginPage/loginPage'

const routing = (
    <Router>
        <div>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <NavLink exact activeClassName="active" to="/">Home</NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink activeClassName="active" to="/users">Users</NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink activeClassName="active" to="/contact">Contact</NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            {/*<hr />*/}
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Login" component={loginPage} />
                {/*<Route path="/contact" component={Contact} />*/}
                {/*<Route component={Notfound} />*/}
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
