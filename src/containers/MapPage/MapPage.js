import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isProfileFilled } from '../../modules/Profile';
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

  useEffect(() => {
    let ignore = false;

    async function getPaymentData() {
      const paymentData = await JSON.parse(localStorage.getItem('PaymentData'));

      if (paymentData) {
        const hasPaymentData = paymentData.hasPaymentData;

        if (!ignore && hasPaymentData) {
          setValues({ ...values, hasPaymentData });
        }
      }
    }

    getPaymentData();

    return () => {
      ignore = true;
    };
  }, [values]);

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

export default connect(mapStateToProps)(MapPage);
