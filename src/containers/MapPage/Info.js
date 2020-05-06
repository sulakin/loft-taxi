import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  text: { marginBottom: 30 },
  header: { marginBottom: 30 },
}));

export const Info = ({ clearOrder }) => {
  const classes = useStyles();

  return (
    <>
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
        <Button onClick={() => clearOrder()} variant="contained" color="primary" fullWidth>
          Сделать новый заказ
        </Button>
      </Grid>
    </>
  );
};

Info.propTypes = {
  removeOrder: PropTypes.func,
};
