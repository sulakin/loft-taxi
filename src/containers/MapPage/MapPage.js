import React from 'react';
import { connect } from 'react-redux';
import { isProfileData } from '../../modules/Profile';
import { FillPaymentData } from './FillPaymentData';
import MapContainer from './MapContainer';
import Order from './Order';
import Grid from '@material-ui/core/Grid';

const MapPage = ({ isProfileData }) => {
  return (
    <Grid container>
      {!isProfileData ? <FillPaymentData /> : <Order />}
      <MapContainer />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isProfileData: isProfileData(state),
});

export default connect(mapStateToProps)(MapPage);
