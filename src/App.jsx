import React, { Component } from "react";

import jwtDecode from "jwt-decode";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Updates from "./components/pages/updates";
import About from "./components/pages/about";
import Storage from "./components/pages/storage";
import NotFound from "./components/pages/notFound";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    } catch (ex) {}
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home user={this.state.user} />} />
        <Route path="/updates" element={<Updates user={this.state.user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About user={this.state.user} />} />

        {/* Protected Application Route */}
        <Route element={<ProtectedRoute user={this.state.user} />}>
          <Route path="/storage" element={<Storage user={this.state.user} />} />
        </Route>

        {/* Catch all the unspecified routes*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
