import React from 'react';
import { connect } from 'react-redux';
import { isProfileFilled, fetchProfileGet } from '../../modules/Profile';
import { FillPaymentData } from './FillPaymentData';
import Order from './Order';
import Grid from '@material-ui/core/Grid';

const MapPage = (props) => {
  return <Grid container>{!props.isProfileData ? <FillPaymentData /> : <Order />}</Grid>;
};

const mapStateToProps = (state) => ({
  isProfileData: isProfileFilled(state),
});
const mapDispatchToProps = { fetchProfileGet };

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
