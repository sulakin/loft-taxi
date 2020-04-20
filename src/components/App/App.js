import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router';
import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';

const loginBg = require('../../assets/images/login__bg.jpg');

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url("${loginBg}")`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
}
