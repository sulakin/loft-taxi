import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
  text: { marginBottom: 30 },
  header: { marginBottom: 30 },
}));

export const Info = ({ removeOrder }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.header} component="h1" variant="h4" align="left">
          Заказ размещён
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.text}>
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button onClick={() => removeOrder()} variant="contained" color="primary" fullWidth>
          Сделать новый заказ
        </Button>
      </Grid>
    </Paper>
  );
};

Info.propTypes = {
  removeOrder: PropTypes.func,
};
