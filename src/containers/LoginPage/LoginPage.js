import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { RouteContext } from '../../context/RouteContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
  },
  paper: { padding: theme.spacing(6) },
  header: { marginBottom: 30 },
}));

export const LoginPage = () => {
  const classes = useStyles();
  const { login } = useContext(AuthContext);
  const { route } = useContext(RouteContext);
  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

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
        <img src="./images/logo__white.svg" width="180" alt="loft taxi" />
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <form
            onKeyPress={(event) => {
              if (event.key === 'Enter') login(event);
            }}
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography className={classes.header} component="h1" variant="h4" align="left">
                  Войти
                </Typography>
                <Typography className={classes.subheader} component="p" align="left">
                  Новый пользователь?{' '}
                  <Link href="#" onClick={() => route('signup')}>
                    Зарегистрируйтесь
                  </Link>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="username">Имя пользователя</InputLabel>
                  <Input
                    id="username"
                    type="text"
                    value={values.username}
                    onChange={handleChange('username')}
                    autoFocus
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
                <Button variant="contained" size="medium" color="primary" onClick={() => login()}>
                  Войти
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};
