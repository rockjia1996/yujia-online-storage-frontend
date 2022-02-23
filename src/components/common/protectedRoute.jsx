import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import Login from "../pages/login";

class ProtectedRoute extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return user ? <Outlet /> : <Login />;
  }
}

export default ProtectedRoute;
