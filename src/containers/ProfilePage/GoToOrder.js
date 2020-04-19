import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function GoToOrder() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} align="center">
        <Typography>Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary">
          <Link to="/map">Перейти на карту</Link>
        </Button>
      </Grid>
    </Grid>
  );
}
