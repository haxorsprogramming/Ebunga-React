import React, { Component } from 'react';

import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
  render () {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    )
  } 
}

export default Navbar;