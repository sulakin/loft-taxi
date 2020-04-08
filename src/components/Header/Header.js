import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { RouteContext } from '../../context/RouteContext';
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

export const Header = () => {
  const classes = useStyles();
  const { logout } = useContext(AuthContext);
  const { route } = useContext(RouteContext);

  return (
    <AppBar position="relative">
      <Toolbar className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <span onClick={() => route('map')} className={classes.logo}>
            <img src="./images/logo__black.svg" width="160" alt="loft taxi" />
          </span>
          <nav>
            <Button onClick={() => route('map')}>Карта</Button>
            <Button onClick={() => route('profile')}>Профиль</Button>
            <Button onClick={() => logout()}>Выйти</Button>
          </nav>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
