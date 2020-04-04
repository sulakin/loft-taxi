import React from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Map from './pages/Map';
import Profile from './pages/Profile';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'login',
      isAuth: false,
    };
    this.handleRoute = this.handleRoute.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ isAuth: true });
    this.handleRoute('map');
  }

  logout() {
    this.setState({ isAuth: false });
    this.handleRoute('login');
  }

  handleRoute(path) {
    this.setState({ activePage: path });
    window.history.pushState(null, null, path);
  }

  renderRoute() {
    switch (this.state.activePage) {
      case 'map':
        return <Map handleRoute={this.handleRoute} />;
      case 'profile':
        return <Profile />;
      case 'signup':
        return <SignUp login={this.login} handleRoute={this.handleRoute} />;
      default:
        return <Login login={this.login} handleRoute={this.handleRoute} />;
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
