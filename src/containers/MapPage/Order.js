import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAddresses, fetchAddressRequest } from '../../modules/Address';
import { fetchOrderRequest, getCords, getIsOrder, removeOrder } from '../../modules/Order';
import { Info } from './Info';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Form } from 'react-final-form';
import { TextField } from 'final-form-material-ui';

const useStyles = makeStyles(() => ({
  root: {
    width: '28%',
    position: 'absolute',
    top: '110px',
    left: '20px',
    padding: '44px 60px',
    zIndex: 1,
  },
  input: { marginBottom: 30 },
}));

const Order = ({ address, fetchAddressRequest, fetchOrderRequest, isOrder }) => {
  const classes = useStyles();
  const [order, setOrder] = useState({
    start: '',
    end: '',
    startAddressList: [],
    endAddressList: [],
    isOrder: false,
  });

  useEffect(() => {
    fetchAddressRequest();
  }, [fetchAddressRequest]);

  useEffect(
    (order) => {
      setOrder({ ...order, startAddressList: address, endAddressList: address, isOrder });
    },
    [address, isOrder]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { start, end } = order;
    if (start !== null && end !== null) {
      fetchOrderRequest({ start, end });
      setOrder({ ...order, isOrder: true });
    }
  };

  const updateAddressList = (exclude) => address.filter((addres) => addres.value !== exclude);

  const removeOrder = () => setOrder({ ...order, isOrder: false });

  return (
    <Paper className={classes.root}>
      {order.isOrder ? (
        <Info removeOrder={removeOrder} />
      ) : (
        <Form
          onSubmit={(event) => handleSubmit(event)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              handleSubmit(event);
            }
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} className={classes.input}>
                <Autocomplete
                  name="start"
                  options={order.startAddressList}
                  getOptionLabel={(option) => option.value}
                  onChange={(event, selected) => {
                    if (selected !== null) {
                      setOrder({
                        ...order,
                        endAddressList: updateAddressList(selected.value),
                        start: selected.value,
                      });
                    }
                  }}
                  renderInput={(params) => <TextField {...params} label="Откуда" name="start" />}
                />
              </Grid>

              <Grid item xs={12} className={classes.input}>
                <Autocomplete
                  name="end"
                  options={order.endAddressList}
                  getOptionLabel={(option) => option.value}
                  onChange={(event, selected) => {
                    if (selected !== null) {
                      setOrder({
                        ...order,
                        startAddressList: updateAddressList(selected.value),
                        end: selected.value,
                      });
                    }
                  }}
                  renderInput={(params) => <TextField {...params} label="Куда" name="end" />}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Вызвать такси
                </Button>
              </Grid>
            </form>
          )}
        ></Form>
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  address: getAddresses(state),
  cords: getCords(state),
  isOrder: getIsOrder(state),
});
const mapDispatchToProps = { fetchAddressRequest, fetchOrderRequest, removeOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Order);
