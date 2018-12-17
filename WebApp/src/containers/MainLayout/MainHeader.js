import React, { Component } from "react";
import { Nav } from "reactstrap";
import PropTypes from "prop-types";

import { AppNavbarBrand, AppSidebarToggler } from "@coreui/react";
import logo from "../../assets/img/colba/logo.png";
import sygnet from "../../assets/img/brand/sygnet.svg";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class MainHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 35, alt: "CoreUI Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar />
      </React.Fragment>
    );
  }
}

MainHeader.propTypes = propTypes;
MainHeader.defaultProps = defaultProps;

export default MainHeader;
