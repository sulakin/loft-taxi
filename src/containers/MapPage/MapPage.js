import React from 'react';
import { connect } from 'react-redux';
import { isProfileData, getProfileData } from '../../modules/Profile';
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
const mapDispatchToProps = { getProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
