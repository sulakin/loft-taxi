import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(6),
  },
}));

export const Page404 = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h2" align="center">
          Error 404
        </Typography>
        <Typography align="center" className={classes.subtitle}>
          Page Not Found
        </Typography>
      </Paper>
    </Grid>
  );
};
