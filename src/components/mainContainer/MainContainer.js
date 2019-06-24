import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from '../header/Header';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as headerActions from '../header/HeaderActions';

class MainContainer extends Component {

  render() {
    const {headerReducer, headerActions} = this.props;
    return (
      <div className='main-container' style={{width: '100vw', height: '100vh'}}>
        <Header headerReducer={headerReducer} headerActions={headerActions}/>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    headerReducer: state.headerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainContainer));