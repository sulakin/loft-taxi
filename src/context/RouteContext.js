import { createContext } from 'react';

function noop() {}

export const RouteContext = createContext({
  route: noop,
});
