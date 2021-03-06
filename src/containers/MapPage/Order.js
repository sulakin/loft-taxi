import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAddresses, fetchAddressRequest } from '../../modules/Address';
import { fetchOrderRequest, getCoords, removeOrder, isLoading } from '../../modules/Order';
import { removeRoute } from '../../helpers/drawRoute';
import { Info } from './Info';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

function Order({
  address,
  fetchAddressRequest,
  fetchOrderRequest,
  isLoading,
  removeOrder,
  coords,
}) {
  const classes = useStyles();
  const [order, setOrder] = useState({
    start: '',
    end: '',
    startAddressList: [],
    endAddressList: [],
  });

  useEffect(() => {
    fetchAddressRequest();
  }, [fetchAddressRequest]);

  useEffect(
    (order) => {
      setOrder({
        ...order,
        startAddressList: address,
        endAddressList: address,
      });
    },
    [address, coords]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { start, end } = order;
    if (start !== null && end !== null) {
      fetchOrderRequest({ start, end });
    }
  };

  const updateAddressList = (exclude) => address.filter((addres) => addres.value !== exclude);

  const clearOrder = () => {
    removeOrder();
    removeRoute();
  };

  return (
    <Paper className={classes.root}>
      {!!coords.length ? (
        <Info clearOrder={clearOrder} />
      ) : (
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
              renderInput={(params) => (
                <TextField {...params} label="Откуда" disabled={isLoading} />
              )}
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
              renderInput={(params) => <TextField {...params} label="Куда" disabled={isLoading} />}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading}
              fullWidth
            >
              Вызвать такси
            </Button>
          </Grid>
        </form>
      )}
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  address: getAddresses(state),
  coords: getCoords(state),
  isLoading: isLoading(state),
});
const mapDispatchToProps = { fetchAddressRequest, fetchOrderRequest, removeOrder };

export default connect(mapStateToProps, mapDispatchToProps)(Order);
