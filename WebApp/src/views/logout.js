import React from "react";

const Logout = ({ logout, ...props }) => {
  logout();
  return <div />;
};

export default Logout;
