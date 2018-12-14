import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import "./App.scss";

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

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/executions/view/:testExecutionId"
            name="Execution in Detail"
            component={TestExecutionDetail}
          />
          <Route path="/" name="Home" component={MainLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
