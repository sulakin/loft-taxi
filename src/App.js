import React from 'react';
import { AuthContext } from './context/AuthContext';
import { LoginPage } from './containers/LoginPage';
import { SignUpPage } from './containers/SignUpPage';
import { MapPage } from './containers/MapPage';
import { ProfilePage } from './containers/ProfilePage';
import { Page404 } from './containers/Page404';
import { Header } from './components/Header';

class App extends React.Component {
  state = {
    activePage: window.location.pathname.slice(1),
    isLoggedIn: false,
  };

  login = () => {
    this.setState({ isLoggedIn: true });
    this.handleRoute('map');
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
    this.handleRoute('login');
  };

  handleRoute = (path) => {
    this.setState({ activePage: path });
    window.history.pushState(null, null, path);
  };

  renderRoute() {
    const { isLoggedIn, activePage } = this.state;

    if (!isLoggedIn && (activePage === 'map' || activePage === 'profile')) {
      return <Page404 handleRoute={this.handleRoute} />;
    }

    switch (activePage) {
      case 'map':
        return <MapPage handleRoute={this.handleRoute} />;
      case 'profile':
        return <ProfilePage />;
      case 'signup':
        return <SignUpPage handleRoute={this.handleRoute} />;
      default:
        return <LoginPage handleRoute={this.handleRoute} />;
    }
  }

  render() {
    const { login, logout, handleRoute } = this;
    const { isLoggedIn } = this.state;
    const styles = {
      root: {
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("/images/login__bg.jpg")',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      },
    };

    return (
      <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
        <div style={styles.root}>
          {this.state.isLoggedIn && <Header handleRoute={handleRoute} />}
          {this.renderRoute()}
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
