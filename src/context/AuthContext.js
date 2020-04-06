import { createContext } from 'react';
import PropTypes from 'prop-types';

function noop() {}

export const AuthContext = createContext({
  login: noop,
  logout: noop,
  isLoggedIn: false,
});

AuthContext.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};
