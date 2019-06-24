import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as conversionActions from './ConversionActions';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mainBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


class Landing extends Component {

  componentDidMount(){
    this.props.conversionActions.getBitcoinDataRequest();
  }

  render() {
    const {classes} = this.props;
    return (
      <Box color="text.primary" className={classes.mainBlock}>
        <Typography className={classes.title} variant="h6" noWrap>
          Hello, {localStorage.name}!
        </Typography>

      </Box>
    );
  }
}

function mapStateToProps(state) {
  return {
    //headerReducer: state.headerReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    conversionActions: bindActionCreators(conversionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Landing));