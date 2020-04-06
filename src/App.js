import React from 'react';
import { LoginPage } from './containers/LoginPage';
import { SignUpPage } from './containers/SignUpPage';
import { MapPage } from './containers/MapPage';
import { ProfilePage } from './containers/ProfilePage';
import { Header } from './components/Header';

class App extends React.Component {
  state = {
    activePage: 'login',
    isAuth: false,
  };

  login = () => {
    this.setState({ isAuth: true });
    this.handleRoute('map');
  };

  logout = () => {
    this.setState({ isAuth: false });
    this.handleRoute('login');
  };

  handleRoute = (path) => {
    this.setState({ activePage: path });
    window.history.pushState(null, null, path);
  };

  renderRoute() {
    switch (this.state.activePage) {
      case 'map':
        return <MapPage handleRoute={this.handleRoute} />;
      case 'profile':
        return <ProfilePage />;
      case 'signup':
        return <SignUpPage login={this.login} handleRoute={this.handleRoute} />;
      default:
        return <LoginPage login={this.login} handleRoute={this.handleRoute} />;
    }
  }

  render() {
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
      <div style={styles.root}>
        {this.state.isAuth && <Header handleRoute={this.handleRoute} logout={this.logout} />}
        {this.renderRoute()}
      </div>
    );
  }
}

export default App;
