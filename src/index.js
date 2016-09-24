import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './index.css';

import App from './components/App';
import Landing from './components/Landing';

const routes = (
  <Route component={App} path="/">
    <IndexRoute component={Landing} />
    <Route component={Login} path="login" />
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
