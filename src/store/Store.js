import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducersFactory';
import { routerMiddleware } from 'react-router-redux';
import rootSaga from '../rootSaga';
import { appHistory } from '../services/HistoryConfig';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

if(process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    level: 'info',
    collapsed: true,
  });

  middleware.push(logger);
}

const router = routerMiddleware(appHistory);

middleware.push(router);

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export function configure(initialState) {
  let store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), initialState);

  sagaMiddleware.run(rootSaga, store);

  return store;
}

export default configure();
