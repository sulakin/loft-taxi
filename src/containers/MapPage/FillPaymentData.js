import React, { useContext } from 'react';
import { RouteContext } from '../../context/RouteContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export const FillPaymentData = () => {
  const classes = useStyles();
  const { route } = useContext(RouteContext);

  return (
    <Paper className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.header} component="h1" variant="h4" align="left">
          Заполните платежные данные
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.text}>
          Укажите информацию о банковской карте, чтобы сделать заказ.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Button onClick={() => route('profile')} variant="contained" size="medium" color="primary">
          Перейти в профиль
        </Button>
      </Grid>
    </Paper>
  );
};
