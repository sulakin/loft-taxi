import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCords } from '../../modules/Order';
import { drawRoute } from '../../helpers/drawRoute';
import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    width: '100vw',
    height: 'calc(100vh - 68px)',
    border: 'none',
    bottom: 0,
    zIndex: 0,
  },
}));

const MapContainer = ({ cords }) => {
  const classes = useStyles();
  const mapContainer = useCallback((node) => {
    if (node !== null) {
      document.map = new mapboxgl.Map({
        accessToken:
          'pk.eyJ1Ijoic3VsYWtpbiIsImEiOiJjazhldTVuZWQwMGczM250OHkzbHJxd3Z5In0.FrkwPTWbE4mYb6DA0Hu0Pg',
        container: node,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [37.61167343575062, 55.75166954492968],
        zoom: 12,
      });
    }
  }, []);

  useEffect(() => {
    if (!!cords.length && !!document.map) {
      setTimeout(() => {
        drawRoute(cords);
      });
    }
  }, [cords]);

  return <div id="map" className={classes.root} ref={mapContainer}></div>;
};

const mapStateToProps = (state) => ({ cords: getCords(state) });

export default connect(mapStateToProps)(MapContainer);
