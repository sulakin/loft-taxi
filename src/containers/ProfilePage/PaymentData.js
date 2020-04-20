import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getProfileData, profileSubmit } from '../../modules/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
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

const PaymentData = (props) => {
  const classes = useStyles();
  const { number, date, name, cvc } = props.profileData;
  const [values, setValues] = useState({
    number,
    date,
    name,
    cvc,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.profileSubmit({ ...values });
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
                  value={values.number}
                  onChange={handleChange('number')}
                  autoFocus
                />

                <InputLabel htmlFor="date">Срок действия</InputLabel>
                <Input
                  id="date"
                  type="text"
                  placeholder="12/20"
                  value={values.date}
                  onChange={handleChange('date')}
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
                  value={values.name}
                  onChange={handleChange('name')}
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

PaymentData.propTypes = {
  profileData: PropTypes.exact({
    number: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    cvc: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  profileData: getProfileData(state),
});
const mapDispatchToProps = { profileSubmit };

export default connect(mapStateToProps, mapDispatchToProps)(PaymentData);
