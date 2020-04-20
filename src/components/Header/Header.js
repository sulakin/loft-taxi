import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn, logout } from '../../modules/Auth';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    zIndex: 2,
  },
  logo: {
    cursor: 'pointer',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const logoBlack = require('../../assets/images/logo__black.svg');
  const { isLoggedIn, logout } = props;

  const handleLogout = () => {
    logout();
  };

  return (
    isLoggedIn && (
      <AppBar position="relative">
        <Toolbar className={classes.root}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Link to="/map" className={classes.logo}>
              <img src={logoBlack} width="160" alt="loft taxi" />
            </Link>
            <nav>
              <Button>
                <Link to="/map">Карта</Link>
              </Button>
              <Button>
                <Link to="/profile">Профиль</Link>
              </Button>
              {isLoggedIn && <Button onClick={handleLogout}>Выйти</Button>}
            </nav>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
});
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
