import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  login: noop,
  logout: noop,
  isLoggedIn: false,
});
