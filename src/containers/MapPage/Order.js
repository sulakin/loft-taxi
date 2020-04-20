import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    width: '28%',
    position: 'absolute',
    top: '110px',
    left: '20px',
    padding: '44px 60px',
    zIndex: 1,
  },
  input: { marginBottom: 30 },
}));

export function Order({ createOrder }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid item xs={12} className={classes.input}>
        <InputLabel htmlFor="startPoint">Откуда</InputLabel>
        <Input id="startPoint" type="text" fullWidth />
      </Grid>

      <Grid item xs={12} className={classes.input}>
        <InputLabel htmlFor="endPoint">Куда</InputLabel>
        <Input id="endPoint" type="text" fullWidth />
      </Grid>

      <Grid item xs={12}>
        <Button onClick={() => createOrder()} variant="contained" color="primary" fullWidth>
          Вызвать такси
        </Button>
      </Grid>
    </Paper>
  );
}

Order.propTypes = {
  createOrder: PropTypes.func,
};
