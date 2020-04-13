import React, { useContext } from 'react';
import { RouteContext } from '../../context/RouteContext';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const GoToOrder = () => {
  const { route } = useContext(RouteContext);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} align="center">
        <Typography>Платёжные данные обновлены. Теперь вы можете заказывать такси.</Typography>
      </Grid>

      <Grid item xs={12} align="center">
        <Button onClick={() => route('map')} variant="contained" color="primary">
          Перейти на карту
        </Button>
      </Grid>
    </Grid>
  );
};
