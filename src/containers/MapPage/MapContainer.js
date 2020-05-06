import React, { useEffect, createRef } from 'react';
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
  const mapContainer = createRef(null);

  useEffect(() => {
    if (mapContainer) {
      const params = {
        accessToken:
          'pk.eyJ1Ijoic3VsYWtpbiIsImEiOiJjazhldTVuZWQwMGczM250OHkzbHJxd3Z5In0.FrkwPTWbE4mYb6DA0Hu0Pg',
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v10',
        center: [30.26565043575062, 59.80291264492968],
        zoom: 12,
      };
      document.map = new mapboxgl.Map(params);
    }
  }, [mapContainer]);

  useEffect(() => {
    if (!!cords.length) {
      drawRoute(cords);
    }
  }, [cords]);

  return <div id="map" className={classes.root} ref={mapContainer}></div>;
};

const mapStateToProps = (state) => ({ cords: getCords(state) });

export default connect(mapStateToProps)(MapContainer);
