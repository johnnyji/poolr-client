import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './index.css';

import App from './components/App';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Login from './components/Login';
import TripsIndex from './components/Trips';
import TripsShow from './components/Trips/show';

const routes = (
  <Route component={App} path='/'>
    <IndexRoute component={Landing} />
    <Route component={Login} path='login' />
    <Route component={Dashboard} path='dashboard'>
      <Route component={TripsIndex} path='trips' />
      <Route component={TripsCreate} path='trips/create' />
    </Route>
  </Route>
);

ReactDOM.render(
  <Provider store={configureStore({})}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
