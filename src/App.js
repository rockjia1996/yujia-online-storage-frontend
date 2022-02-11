import React, { Component } from "react";
import Login from "./compoents/login";
import RegisterForm from "./compoents/registerForm";
import StorageTable from "./compoents/storageTable";
import Storage from "./compoents/storage";
import Home from "./compoents/home";
import { Routes, Route } from "react-router-dom";
import About from "./compoents/about";
import Updates from "./compoents/updates";
import Contact from "./compoents/contact";
import Register from "./compoents/register";
import Settings from "./compoents/settings";
import NotFoundPage from "./compoents/notFound";
import Account from "./compoents/account";
class App extends Component {
  state = {};
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
}

export default App;
