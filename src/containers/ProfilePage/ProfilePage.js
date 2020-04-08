import React, { useContext, useState, useEffect } from 'react';
import { RouteContext } from '../../context/RouteContext';
import { PaymentData } from './PaymentData';
import { GoToOrder } from './GoToOrder';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '48px',
  },
  paper: { padding: '40px 60px' },
  header: { marginBottom: '20px' },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 40,
  },
}));

export const ProfilePage = () => {
  const classes = useStyles();
  const { route } = useContext(RouteContext);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardDate: new Date(),
    cardName: '',
    cvc: '',
    hasPaymentData: false,
  });

  useEffect(() => {
    let ignore = false;

    async function getPaymentData() {
      const paymentData = await JSON.parse(localStorage.getItem('PaymentData'));

      if (paymentData) {
        if (!ignore) {
          setPaymentData({ ...paymentData });
        }
      }
    }

    getPaymentData();

    return () => {
      ignore = true;
    };
  }, [paymentData]);

  const handleChange = (prop) => (event) => {
    setPaymentData({ ...paymentData, [prop]: event.target.value });
  };

  const savePaymentData = (event) => {
    event.preventDefault();
    localStorage.setItem('PaymentData', JSON.stringify({ ...paymentData, hasPaymentData: true }));
    route('map');
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

          {paymentData.hasPaymentData ? (
            <GoToOrder />
          ) : (
            <PaymentData
              paymentData={paymentData}
              handleChange={handleChange}
              savePaymentData={savePaymentData}
            />
          )}
        </form>
      </Paper>
    </Grid>
  );
};
