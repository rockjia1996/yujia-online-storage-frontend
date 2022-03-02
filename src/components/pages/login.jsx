import React, { Component } from "react";
import CustomNavbar from "../common/customNavbar";
import LoginForm from "../loginForm";
class Login extends Component {
  state = {};

  render() {
    return (
      <div>
        <CustomNavbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={[
            { name: "Home", link: "/" },
            { name: "Updates", link: "/updates" },
            { name: "Login", link: "/login" },
            { name: "Register", link: "/register" },
            { name: "About", link: "/about" },
          ]}
        />

        <div
          className="d-flex flex-column justify-content-between my-4 py-3"
          style={{ height: "100vh" }}
        >
          {/* Heading Section */}
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

          {/* Login Form */}
          <LoginForm />

          {/* Footer */}
          <div className="footer">
            <div>
              <h3>About Project</h3>
              <ul>
                <li>Project Report</li>
                <li>Source Code</li>
                <li>Developer</li>
                <li>Credit</li>
              </ul>
            </div>
            <div>
              <h3>Project Updates</h3>
              <ul>
                <li>Logs on Site</li>
                <li>Logs on Github</li>
              </ul>
            </div>
            <div>
              <h3>Contact Developer</h3>
              <ul>
                <li>Phone: (314)-546-1998</li>
                <li>Email: rockjia1996@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
