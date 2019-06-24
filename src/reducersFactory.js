import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import headerReducer from './components/header/HeaderReducer';
export default combineReducers({
  routing,
  form: formReducer,
  headerReducer,
});
