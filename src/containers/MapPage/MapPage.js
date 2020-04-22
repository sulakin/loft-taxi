import React, { useState } from 'react';
import { connect } from 'react-redux';
import { isProfileFilled, fetchProfileGet } from '../../modules/Profile';
import { MapContainer } from './MapContainer';
import { FillPaymentData } from './FillPaymentData';
import { Order } from './Order';
import { Info } from './Info';
import Grid from '@material-ui/core/Grid';

const MapPage = (props) => {
  const [values, setValues] = useState({
    startPoint: '',
    endPoint: '',
    isOrderCreated: false,
  });

  const createOrder = () => {
    setValues({ ...values, isOrderCreated: true });
  };

  const removeOrder = () => {
    setValues({ ...values, isOrderCreated: false });
  };

  return (
    <Grid container>
      {!props.isProfileData ? (
        <FillPaymentData />
      ) : !values.isOrderCreated ? (
        <Order createOrder={createOrder} />
      ) : (
        <Info removeOrder={removeOrder} />
      )}
      <MapContainer />
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  isProfileData: isProfileFilled(state),
});
const mapDispatchToProps = { fetchProfileGet };

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);
