import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import Store from '../store/Store';

const history = createHashHistory();

export const appHistory = syncHistoryWithStore(history, Store);