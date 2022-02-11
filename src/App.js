import React, { Component } from "react";
import LoginForm from "./compoents/loginForm";
import RegisterForm from "./compoents/registerForm";
import StorageTable from "./compoents/storageTable";
import Storage from "./compoents/storage";
import Home from "./compoents/home";
import { Routes, Route } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/storage" element={<Storage />} />
      </Routes>
    );
  }
}

export default App;
