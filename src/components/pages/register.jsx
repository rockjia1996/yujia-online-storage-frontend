import React, { Component } from "react";
import CustomNavbar from "../common/customNavbar";
import RegisterForm from "../registerForm";

class Register extends Component {
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
          className="d-flex flex-column justify-content-between my-4 py-4"
          style={{ height: "100vh" }}
        >
          <div className="register-header">
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

          {/* Register Form*/}
          <RegisterForm />

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

export default Register;
