import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
}));

export default function SignUpPage() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
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

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={3}>
        <img src={logoWhite} width="180" alt="loft taxi" />
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <form
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
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
                  <InputLabel htmlFor="firstname">Имя</InputLabel>
                  <Input
                    id="firstname"
                    type="text"
                    value={values.email}
                    onChange={handleChange('firstname')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="lastname">Фамилия</InputLabel>
                  <Input
                    id="lastname"
                    type="text"
                    value={values.email}
                    onChange={handleChange('lastname')}
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

              <Grid item xs={12} dir="rtl">
                <Button variant="contained" size="medium" color="primary">
                  Зарегистрироваться
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
