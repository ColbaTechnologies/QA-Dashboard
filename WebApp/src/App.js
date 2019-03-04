import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import "./App.scss";
import firebase, { auth, provider } from "./firebase/firebase";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const MainLayout = Loadable({
  loader: () => import("./containers/MainLayout"),
  loading
});

const TestExecutionDetail = Loadable({
  loader: () =>
    import("./views/Projects/TestExecutionDetail/testExecutionDetail"),
  loading
});
const Logout = Loadable({
  loader: () => import("./views/logout"),
  loading
});
const Login = Loadable({
  loader: () => import("./views/Pages/Login/Login"),
  loading
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }
  logout = () => {
    auth.signOut().then(result => {
      this.setState({
        user: null
      });
    });
  };
  login() {
    auth.signInWithPopup(provider).then(result => {
      this.setState({
        user: result.user
      });
    });
  }

  render() {
    if (this.state.user === null) {
      if (window.location.hash.match(/logout/)) {
        window.location.replace("/");
      }

      return <Login login={() => this.login()} />;
    }
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/executions/view/:testExecutionId"
            name="Execution in Detail"
            component={TestExecutionDetail}
          />
          <Route exact path="/login" name="login">
            <Login login={() => this.login()} />;
          </Route>
          <Route
            path="/logout"
            name="Logout"
            component={props => <Logout logout={e => this.logout(e)} />}
          />
          <Route
            path="/"
            name="Home"
            component={props => (
              <MainLayout {...props} user={this.state.user} />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
