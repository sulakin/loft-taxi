import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
import { MCIcon } from 'loft-taxi-mui-theme';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '48px',
  },
  paper: { padding: '40px 60px' },
  button: { marginTop: '24px' },
  header: { marginBottom: '20px' },
  card: {
    width: 240,
    height: 160,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    position: 'relative',
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 40,
  },
}));

export function ProfilePage() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    cardNumber: '',
    cardDate: new Date(),
    cardName: '',
    cvc: '',
    hasPaymentData: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
      <Paper className={classes.paper}>
        <form>
          <Grid item xs={12}>
            <Typography component="header" variant="h4" align="center">
              Профиль
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" className={classes.subtitle}>
              Способ оплаты
            </Typography>
          </Grid>
          {values.hasPaymentData ? (
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <Typography className={classes.message}>
                  Платёжные данные обновлены. Теперь вы можете заказывать такси.
                </Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <Button variant="contained" color="primary">
                  Перейти на карту
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <Grid container justify="center" spacing={4}>
                <Grid item xs={6}>
                  <Card elevation={3} className={classes.card}>
                    <Box
                      display="flex"
                      height="100%"
                      flexDirection="column"
                      justifyContent="space-around"
                    >
                      <MCIcon />
                      <InputLabel htmlFor="cardNumber">Номер карты</InputLabel>
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={values.cardNumber}
                        onChange={handleChange('cardNumber')}
                      />
                      <InputLabel htmlFor="cardNumber">Срок действия</InputLabel>
                      <DatePicker views={['year', 'month']} format="MM/yy" value="04/07" />
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card elevation={3} className={classes.card}>
                    <Box
                      display="flex"
                      height="100%"
                      flexDirection="column"
                      justifyContent="space-around"
                    >
                      <InputLabel htmlFor="cardName">Имя владельца</InputLabel>
                      <Input
                        id="cardName"
                        type="text"
                        value={values.cardName}
                        onChange={handleChange('cardName')}
                      />
                      <InputLabel htmlFor="cardName">CVC</InputLabel>
                      <Input
                        id="cvc"
                        type="text"
                        value={values.cvc}
                        onChange={handleChange('cvc')}
                      />
                    </Box>
                  </Card>
                </Grid>
              </Grid>
              <Grid align="center">
                <Button
                  type="submit"
                  className={classes.button}
                  variant="contained"
                  size="medium"
                  color="primary"
                >
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          )}
        </form>
      </Paper>
    </Grid>
  );
}
