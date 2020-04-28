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
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
  const [values, setValues] = useState({
    email: '',
    name: '',
    surname: '',
    password: '',
    showPassword: false,
  });

  const logoWhite = require('../../assets/images/logo__white.svg');

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Адрес электронной почты</InputLabel>
                  <Input
                    id="email"
                    type="text"
                    value={values.email}
                    onChange={handleChange('email')}
                    autoFocus
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="name">Имя</InputLabel>
                  <Input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange('name')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="surname">Фамилия</InputLabel>
                  <Input
                    id="surname"
                    type="text"
                    value={values.surname}
                    onChange={handleChange('surname')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="password">Пароль</InputLabel>
                  <Input
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
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
