import React from 'react';
import { connect } from 'react-redux';
import { getProfileData, fetchProfileRequest } from '../../modules/Profile';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import formatPattern from 'format-string-by-pattern';
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

const formatCardsNumber = (value) => {
  const number = value.replace(/[^\d]/g, '');
  return formatPattern('9999 9999 9999 9999', number);
};

const formatCVC = (value) => {
  const number = value.replace(/[^\d]/g, '');
  return formatPattern('999', number);
};

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === '' ? null : value}
      format="MM/YY"
      views={['month', 'year']}
      autoOk={true}
      variant="inline"
    />
  );
}

const PaymentData = ({ profileData, fetchProfileRequest, toggleEdit }) => {
  const classes = useStyles();

  const handleSubmit = (values) => {
    fetchProfileRequest({ ...values });
    toggleEdit();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={profileData}
      render={({ handleSubmit }) => (
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

                    <Field
                      component={TextField}
                      name="cardNumber"
                      label="Номер карты"
                      placeholder="0000 0000 0000 0000"
                      parse={formatCardsNumber}
                      fullWidth={true}
                      required
                    />

                    <MuiPickersUtilsProvider utils={MomentUtils}>
                      <Field
                        component={DatePickerWrapper}
                        name="expiryDate"
                        label="Дата окончания действия"
                        placeholder="12/20"
                        fullWidth={true}
                        required
                      />
                    </MuiPickersUtilsProvider>
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
                    <Field
                      component={TextField}
                      name="cardName"
                      label="Имя владельца"
                      fullWidth={true}
                      required
                    />

                    <Field
                      component={TextField}
                      name="cvc"
                      label="CVC"
                      fullWidth={true}
                      placeholder="123"
                      parse={formatCVC}
                      required
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
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  profileData: getProfileData(state),
});
const mapDispatchToProps = { fetchProfileRequest };

export default connect(mapStateToProps, mapDispatchToProps)(PaymentData);
