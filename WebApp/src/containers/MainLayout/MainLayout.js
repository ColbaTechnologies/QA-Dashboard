import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";
import { ProjectService } from "../../services/projectServices";

const MainAside = React.lazy(() => import("./MainAside"));
const MainFooter = React.lazy(() => import("./MainFooter"));
const MainHeader = React.lazy(() => import("./MainHeader"));
const ProjectDetail = React.lazy(() =>
  import("../../views/Projects/ProjectDetail/projectDetail.js")
);

class MainLayout extends Component {
  state = {
    navigation: navigation,
    loading: true
  };
  componentDidMount() {
    this.setRoutes();
  }

  setRoutes = () => {
    ProjectService.getAllProjectsByEmail(this.props.user.email).then(
      projects => {
        navigation.items = [
          ...navigation.items,
          ...projects.map(project => {
            return {
              name: project.name,
              icon: "icon-book-open",
              children: [
                {
                  name: "Test Definitions",
                  url: `/projects/${project._id}`
                },
                {
                  name: "Test Executions",
                  url: `/projects/${project._id}/testExecutions/`
                }
              ]
            };
          })
        ];
        projects.forEach(project => {
          routes.push({
            path: `/projects/${project._id}`,
            exact: true,
            name: project.name,
            component: ProjectDetail
          });
          routes.push({
            path: `/projects/${project._id}/testExecutions`,
            exact: true,
            component: ProjectDetail
          });
        });
        this.setState({
          navigation,
          loading: false,
          routes
        });
      }
    );
  };

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/logout");
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <MainHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={this.state.navigation}
                {...this.props}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={this.state.routes} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {this.state.routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component user={this.props.user} {...props} />
                        )}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/projects" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <MainAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <MainFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default MainLayout;
