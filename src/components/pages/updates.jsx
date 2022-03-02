import React, { Component } from "react";
import CustomNavbar from "../common/customNavbar";
class Updates extends Component {
  state = {};
  render() {
    const itemList =
      this.props.user && localStorage.getItem("token")
        ? [
            { name: "Home", link: "/" },
            { name: "Storage", link: "/storage" },
            { name: "Updates", link: "/updates" },
            { name: "About", link: "/about" },
          ]
        : [
            { name: "Home", link: "/" },
            { name: "Updates", link: "/updates" },
            { name: "Login", link: "/login" },
            { name: "Register", link: "/register" },
            { name: "About", link: "/about" },
          ];

    return (
      <div>
        <CustomNavbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={itemList}
        />
        <div className="container">
          <table className="table m-4">
            <thead>
              <tr>
                <th>Update 0.0.0</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lanuched the prototype of the website</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Updates;
