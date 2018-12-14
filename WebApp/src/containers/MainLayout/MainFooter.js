import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class MainFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span />
      </React.Fragment>
    );
  }
}

MainFooter.propTypes = propTypes;
MainFooter.defaultProps = defaultProps;

export default MainFooter;
