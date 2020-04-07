import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import mapboxgl from 'mapbox-gl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';

export class MapPage extends Component {
  state = {
    startPoint: '',
    endPoint: '',
    hasPaymentData: false,
    isOrderCreated: false,
  };

  static propTypes = {
    handleRoute: PropTypes.func,
  };

  map = React.createRef();
  mapbox = null;

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic3VsYWtpbiIsImEiOiJjazhldTVuZWQwMGczM250OHkzbHJxd3Z5In0.FrkwPTWbE4mYb6DA0Hu0Pg';
    this.mapbox = new mapboxgl.Map({
      container: this.map.current,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [37.61167343575062, 55.75166954492968],
      zoom: 12,
    });
  }

  componentWillUnmount() {
    this.mapbox.remove();
  }

  render() {
    const { handleRoute } = this.props;
    const styles = {
      root: {
        width: '28%',
        position: 'absolute',
        top: '110px',
        left: '20px',
        padding: '44px 60px',
        zIndex: 1,
      },
      map: {
        position: 'fixed',
        width: '100vw',
        height: 'calc(100vh - 68px)',
        border: 'none',
        bottom: 0,
        zIndex: 0,
      },
      input: { marginBottom: 30 },
      text: { marginBottom: 30 },
      header: { marginBottom: 30 },
    };

    return (
      <>
        <Grid container>
          {!this.state.hasPaymentData ? (
            <Paper style={styles.root}>
              <Grid item xs={12}>
                <Typography style={styles.header} component="h1" variant="h4" align="left">
                  Заполните платежные данные
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography style={styles.text}>
                  Укажите информацию о банковской карте, чтобы сделать заказ.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button
                  onClick={() => handleRoute('profile')}
                  variant="contained"
                  size="medium"
                  color="primary"
                >
                  Перейти в профиль
                </Button>
              </Grid>
            </Paper>
          ) : !this.state.isOrderCreated ? (
            <Paper style={styles.root}>
              <Grid item xs={12} style={styles.input}>
                <InputLabel htmlFor="startPoint">Откуда</InputLabel>
                <Input id="startPoint" type="text" fullWidth />
              </Grid>

              <Grid item xs={12} style={styles.input}>
                <InputLabel htmlFor="endPoint">Куда</InputLabel>
                <Input id="endPoint" type="text" fullWidth />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Вызвать такси
                </Button>
              </Grid>
            </Paper>
          ) : (
            <Paper style={styles.root}>
              <Grid item xs={12}>
                <Typography style={styles.header} component="h1" variant="h4" align="left">
                  Заказ размещён
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography style={styles.text}>
                  Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={this.reset}>
                  Сделать новый заказ
                </Button>
              </Grid>
            </Paper>
          )}
        </Grid>

        <div id="map" style={styles.map} ref={this.map}></div>
      </>
    );
  }
}
