import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {appHistory} from './services/HistoryConfig';
import {Router, Route, Redirect} from 'react-router';
import Store from './store/Store';
import MainContainer from './components/mainContainer/MainContainer';
import Landing from './landing/Landing';
import Conversion from './conversion/Conversion';
import * as headerActions from './components/header/HeaderActions';
class Main extends Component {

  checkName = () => {
    if(localStorage.name && localStorage.name !== 'null')
      Store.dispatch(headerActions.onModalStateChange(false));
    return localStorage.name && localStorage.name !== 'null'
  };

  renderHome = (props) => (
    this.checkName() ? <Redirect to="/conversion" /> : <Landing />
  );
 renderConversion = () => (
   this.checkName() ? <Conversion/> : <Redirect to="/" />
);

  render() {
    return (
      <Provider store={Store}>
        <Router history={appHistory}>
          <MainContainer>
            <Route
              exact
              path="/"
              render={this.renderHome}
            />
            <Route
              exact
              path="/conversion"
              render={this.renderConversion}
            />
          </MainContainer>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);