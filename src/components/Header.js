import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    zIndex: 2,
  },
}));

export default function Header({ handleRoute, logout }) {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.root}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <span onClick={() => handleRoute('map')}>
            <img src="./images/logo__black.svg" width="160" alt="loft taxi" />
          </span>
          <nav>
            <Button onClick={() => handleRoute('map')}>Карта</Button>
            <Button onClick={() => handleRoute('profile')}>Профиль</Button>
            <Button onClick={() => logout()}>Выйти</Button>
          </nav>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
