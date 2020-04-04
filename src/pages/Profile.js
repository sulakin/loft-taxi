import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '40px',
  },
  paper: {
    padding: theme.spacing(6),
  },
  button: {
    background: '#ffc617',
    color: 'black',
    '&:hover, &:focus, &:active': {
      background: '#ffc617',
      color: 'black',
    },
  },
  h1: {
    marginTop: '0px',
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Профиль</h1>
        <p>Способ оплаты</p>
        <Button className={classes.button} variant="contained" size="medium" color="primary">
          Сохранить
        </Button>
      </Paper>
    </Grid>
  );
}
