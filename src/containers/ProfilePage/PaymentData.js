import React from 'react';
import { connect } from 'react-redux';
import { getProfileData, setProfileRequest, profileError, getErrors } from '../../modules/Profile';
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
  alert: {
    color: 'white',
    fontWeight: 500,
    padding: theme.spacing(1),
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#f44336',
    display: 'inline-block',
    width: '100%',
    marginTop: '20px',
    textAlign: 'center',
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
      required
    />
  );
}

const PaymentData = ({ profileData, setProfileRequest, toggleEdit, profileError, errors }) => {
  const classes = useStyles();

  const handleSubmit = (values) => {
    if (!!values.cardNumber && !!values.expiryDate && !!values.cardName && !!values.cvc) {
      setProfileRequest({ ...values });
    } else {
      profileError('Все поля должны быть заполнены');
    }
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
                    />
                  </Box>
                </Card>
              </Grid>
            </Grid>

            {errors && (
              <Grid item xs={12} dir="rtl">
                <span className={classes.alert}>{errors}</span>
              </Grid>
            )}

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
  errors: getErrors(state),
});
const mapDispatchToProps = { setProfileRequest, profileError };

export default connect(mapStateToProps, mapDispatchToProps)(PaymentData);
