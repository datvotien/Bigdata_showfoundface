import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SingleLineGridList from "./SingleList";

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
  title: {
    display: 'none',
    position:'fixed',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

function buildSingleList(){
  return Array.from(Array(10).keys()).map( item => <SingleLineGridList/>)
}

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Finding Face Result
          </Typography>
        </Toolbar>
      </AppBar>
      {buildSingleList()}
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);