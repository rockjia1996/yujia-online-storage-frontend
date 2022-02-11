import React, { Component } from "react";
import NavBar from "./navbar";
import RegisterForm from "./registerForm";
import Footer from "./footer";

class Register extends Component {
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
            <h1>Welcome to Mini Online Storage Register Page</h1>
            <p>
              To use the online storage service, you need to create your Mini
              Online Storage account. Please fill out the following form to
              create your Mini Online Storage Account if you are interested in
              the service.
            </p>
            <p>
              Already registered? Visit <a href="/login">here</a> to login.
            </p>
          </div>
          <div style={{ fontSize: "25px" }}>
            <RegisterForm />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
