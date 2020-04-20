import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: { height: '100vh' },
  paper: { padding: theme.spacing(6) },
  header: { marginBottom: 30 },
}));

export default (PageNotFound) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography className={classes.header} component="h1" variant="h4" align="left">
            Страница не найдена
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography>
            Похоже, вы перешли по неработающей ссылке или ввели URL, которого нет на этом сайте.
            <br />
            <a href={window.location.origin}>На главную</a>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};
