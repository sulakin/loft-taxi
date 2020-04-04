import React from 'react';
import Button from '@material-ui/core/Button';
import mapboxgl from 'mapbox-gl';
import Paper from '@material-ui/core/Paper';
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends React.Component {
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
    const styles = {
      root: {
        maxWidth: '30%',
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
      button: {
        background: '#ffc617',
        color: 'black',
      },
      h1: {
        marginTop: '0px',
      },
    };

    return (
      <>
        <Paper style={styles.root}>
          <h1 style={styles.h1}>Заполните платежные данные</h1>
          <p>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
          <Button style={styles.button} variant="contained" size="medium" color="primary">
            Перейти в профиль
          </Button>
        </Paper>
        <div id="map" style={styles.map} ref={this.map}></div>
      </>
    );
  }
}

export default Map;
