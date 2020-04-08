import React, { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { RouteContext } from './context/RouteContext';
import { Header } from './components/Header';
import { LoginPage } from './containers/LoginPage';
import { SignUpPage } from './containers/SignUpPage';
import { MapPage } from './containers/MapPage';
import { ProfilePage } from './containers/ProfilePage';
import { Page404 } from './containers/Page404';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("/images/login__bg.jpg")',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  },
}));

export default function App() {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(window.location.pathname.slice(1));
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    handleRoute('map');
  };

  const logout = () => {
    setIsLoggedIn(false);
    handleRoute('login');
  };

  const handleRoute = (path) => {
    setActivePage(path);
    window.history.pushState(null, null, path);
  };

  const renderRoute = () => {
    if (!isLoggedIn && (activePage === 'map' || activePage === 'profile')) {
      return <Page404 handleRoute={handleRoute} />;
    }

    switch (activePage) {
      case 'map':
        return <MapPage handleRoute={handleRoute} />;
      case 'profile':
        return <ProfilePage handleRoute={handleRoute} />;
      case 'signup':
        return <SignUpPage handleRoute={handleRoute} />;
      default:
        return <LoginPage handleRoute={handleRoute} />;
    }
  };

  return (
    <RouteContext.Provider value={{ route: handleRoute }}>
      <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
        <div className={classes.root}>
          {isLoggedIn && <Header handleRoute={handleRoute} />}
          {renderRoute()}
        </div>
      </AuthContext.Provider>
    </RouteContext.Provider>
  );
}
