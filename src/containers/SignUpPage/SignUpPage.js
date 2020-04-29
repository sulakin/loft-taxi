import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchRegisterRequest,
  registerError,
  isLoggedIn,
  isLoading,
  getErrors,
} from '../../modules/Register';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';

const loginBg = require('../../assets/images/login__bg.jpg');

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundImage: `url("{${loginBg}")`,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  },
  paper: { padding: theme.spacing(6) },
  header: { marginBottom: 30 },
  alert: {
    color: 'white',
    fontWeight: 500,
    padding: theme.spacing(1),
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#f44336',
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },
}));

const SignUpPage = ({ fetchRegisterRequest, isLoading, isLoggedIn, registerError, errors }) => {
  const classes = useStyles();
  const logoWhite = require('../../assets/images/logo__white.svg');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values) => {
    if (!!values.password && !!values.email && !!values.name && !!values.surname) {
      fetchRegisterRequest(values);
    } else {
      registerError('Все поля формы должны быть заполнены');
    }
  };

  return isLoggedIn ? (
    <Redirect to="/map" />
  ) : (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={3}>
        <img src={logoWhite} width="180" alt="loft taxi" />
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit }) => (
              <form
                onSubmit={(event) => handleSubmit(event)}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit(event);
                  }
                }}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography className={classes.header} component="h1" variant="h4" align="left">
                      Регистрация
                    </Typography>
                    <Typography className={classes.subheader} component="p" align="left">
                      Уже зарегистрированы? <Link to="/">Войти</Link>
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="email"
                      label="Адрес электронной почты"
                      fullWidth={true}
                      required
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Field
                      component={TextField}
                      name="name"
                      label="Имя"
                      fullWidth={true}
                      required
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Field
                      component={TextField}
                      name="surname"
                      label="Фамилия"
                      fullWidth={true}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      name="password"
                      label="Пароль"
                      type={showPassword ? 'text' : 'password'}
                      fullWidth={true}
                      required
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </Field>
                  </Grid>

                  {errors && (
                    <Grid item xs={12} dir="rtl">
                      <span className={classes.alert}>{errors}</span>
                    </Grid>
                  )}

                  <Grid item xs={12} dir="rtl">
                    <Button
                      disabled={isLoading}
                      type="submit"
                      variant="contained"
                      size="medium"
                      color="primary"
                    >
                      Зарегистрироваться
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
  isLoading: isLoading(state),
  errors: getErrors(state),
});
const mapDispatchToProps = { fetchRegisterRequest, registerError };

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
