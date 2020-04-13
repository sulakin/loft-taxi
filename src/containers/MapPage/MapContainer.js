import React, { useCallback } from 'react';
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

export const MapContainer = () => {
  const classes = useStyles();

  const mapContainer = useCallback((node) => {
    if (node !== null) {
      new mapboxgl.Map({
        accessToken:
          'pk.eyJ1Ijoic3VsYWtpbiIsImEiOiJjazhldTVuZWQwMGczM250OHkzbHJxd3Z5In0.FrkwPTWbE4mYb6DA0Hu0Pg',
        container: node,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [37.61167343575062, 55.75166954492968],
        zoom: 12,
      });
    }
  }, []);

  return <div id="map" className={classes.root} ref={mapContainer}></div>;
};
