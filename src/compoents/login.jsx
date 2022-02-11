import React, { Component } from "react";
import NavBar from "./navbar";
import LoginForm from "./loginForm";
import Footer from "./footer";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar
          brandName={{ name: "Mini Online Storage", url: "/" }}
          navLinks={{
            About: "/about",
            Updates: "/update",
            Contact: "/contact",
            Login: "/login",
          }}
        />

        <div
          className="d-flex flex-column  justify-content-between"
          style={{ height: "100vh" }}
        >
          <div className="login-header">
            <h1>Welcome to Mini Online Storage Login Page</h1>
            <p>
              To use the online storage service, you need to login to your Mini
              Online Storage account.
            </p>
            <p>
              Don't have a Mini Online Storage account? Visit{" "}
              <a href="/register">here</a> to sign up!
            </p>
          </div>
          <div style={{ fontSize: "25px" }}>
            <LoginForm />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
