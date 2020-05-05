import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  button: { margin: '0 12px' },
}));

export default function GoToOrder({ toggleEdit }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} align="center">
      <Grid item xs={12}>
        <Typography>Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
      </Grid>

      <Grid item xs={12}>
        <Button variant="contained" color="primary" className={classes.button}>
          <Link to="/map">Перейти на карту</Link>
        </Button>

        <Button variant="contained" color="primary" className={classes.button} onClick={toggleEdit}>
          Изменить платежные данные
        </Button>
      </Grid>
    </Grid>
  );
}
