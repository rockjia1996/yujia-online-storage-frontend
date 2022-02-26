import React, { Component } from "react";
import Navbar from "../common/navbar";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={[
            { name: "Home", link: "/" },
            { name: "Updates", link: "/updates" },
            { name: "Login", link: "/login" },
            { name: "Register", link: "/register" },
            { name: "About", link: "/about" },
          ]}
        />

        <div className="container">
          <table className="table m-4">
            <thead>
              <tr>
                <th>About the Site and Developer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Under construction</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default About;