import React, { useState } from 'react';
import { connect } from 'react-redux';
import { isProfileFilled } from '../../modules/Profile';
import GoToOrder from './GoToOrder';
import PaymentData from './PaymentData';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '48px',
  },
  paper: { padding: '40px 60px' },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    marginBottom: 40,
  },
}));

const ProfilePage = ({ isProfileData }) => {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Typography component="header" variant="h4" align="center">
            Профиль
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography align="center" className={classes.subtitle}>
            Способ оплаты
          </Typography>
        </Grid>

        {isProfileData && !isEdit ? (
          <GoToOrder toggleEdit={toggleEdit} />
        ) : (
          <PaymentData toggleEdit={toggleEdit} />
        )}
      </Paper>
    </Grid>
  );
};

ProfilePage.propTypes = {
  isProfileData: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isProfileData: isProfileFilled(state),
});

export default connect(mapStateToProps)(ProfilePage);
