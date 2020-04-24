import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchProfileGet, fetchProfileRequest } from '../../modules/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import { MCIcon } from 'loft-taxi-mui-theme';

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

const PaymentData = (props) => {
  const classes = useStyles();
  const { cardNumber, expiryDate, cardName, cvc } = props.profileData;
  const [values, setValues] = useState({
    cardNumber,
    expiryDate,
    cardName,
    cvc,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchProfileRequest({ ...values });
  };

  return (
    <form onSubmit={handleSubmit}>
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

                <InputLabel htmlFor="number">Номер карты</InputLabel>
                <Input
                  id="number"
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={values.cardNumber}
                  onChange={handleChange('cardNumber')}
                  autoFocus
                />

                <InputLabel htmlFor="date">Срок действия</InputLabel>
                <Input
                  id="date"
                  type="text"
                  placeholder="12/20"
                  value={values.expiryDate}
                  onChange={handleChange('expiryDate')}
                  autoFocus
                />
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
                <InputLabel htmlFor="name">Имя владельца</InputLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иванов Иван"
                  value={values.cardName}
                  onChange={handleChange('cardName')}
                />

                <InputLabel htmlFor="cvc">CVC</InputLabel>
                <Input
                  id="cvc"
                  type="text"
                  placeholder="123"
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
    </form>
  );
};

const mapStateToProps = (state) => ({
  profileData: fetchProfileGet(state),
});
const mapDispatchToProps = { fetchProfileRequest };

export default connect(mapStateToProps, mapDispatchToProps)(PaymentData);
