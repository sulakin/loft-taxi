import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import { DatePicker } from '@material-ui/pickers';
import { MCIcon } from 'loft-taxi-mui-theme';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  button: { marginTop: '24px' },
  card: {
    width: 240,
    height: 160,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    position: 'relative',
  },
}));

export const PaymentData = ({ paymentData, handleChange, savePaymentData }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={6}>
          <Card elevation={3} className={classes.card}>
            <Box display="flex" height="100%" flexDirection="column" justifyContent="space-around">
              <MCIcon />

              <InputLabel htmlFor="cardNumber">Номер карты</InputLabel>
              <Input
                id="cardNumber"
                type="text"
                placeholder="0000 0000 0000 0000"
                value={paymentData.cardNumber}
                onChange={handleChange('cardNumber')}
              />

              <InputLabel htmlFor="cardNumber">Срок действия</InputLabel>
              <DatePicker
                views={['year', 'month']}
                format="MM/yy"
                value={paymentData.cardDate}
                onChange={handleChange('cardDate')}
              />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card elevation={3} className={classes.card}>
            <Box display="flex" height="100%" flexDirection="column" justifyContent="space-around">
              <InputLabel htmlFor="cardName">Имя владельца</InputLabel>
              <Input
                id="cardName"
                type="text"
                value={paymentData.cardName}
                onChange={handleChange('cardName')}
              />

              <InputLabel htmlFor="cardName">CVC</InputLabel>
              <Input id="cvc" type="text" value={paymentData.cvc} onChange={handleChange('cvc')} />
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
          onClick={(event) => savePaymentData(event)}
        >
          Сохранить
        </Button>
      </Grid>
    </Grid>
  );
};

PaymentData.propTypes = {
  paymentData: PropTypes.exact({
    cardNumber: PropTypes.string,
    cardDate: PropTypes.instanceOf(Date),
    cardName: PropTypes.string,
    cvc: PropTypes.string,
    hasPaymentData: PropTypes.bool,
  }),
  handleChange: PropTypes.func,
  savePaymentData: PropTypes.func,
};
