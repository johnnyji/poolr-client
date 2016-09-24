import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers';

// Here we create the final store,
// If we're in production, we want to leave out development middleware/tools
let finalCreateStore;
if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
} else {
  finalCreateStore = applyMiddleware(
    thunkMiddleware,
    createLogger()
  )(createStore);
}

// Exports the function that creates a store
export default function configureStore(initialState) {
  const store = finalCreateStore(reducers, initialState);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('.././reducers/index', () => {
      const nextRootReducer = require('.././reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

