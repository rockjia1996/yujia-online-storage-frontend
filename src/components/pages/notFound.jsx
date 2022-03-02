import React, { Component } from "react";
import CustomNavbar from "../common/customNavbar";
class NotFound extends Component {
  state = {};
  render() {
    const itemList =
      this.props.user && localStorage.getItem("token")
        ? [
            { name: "Home", link: "/" },
            { name: "Updates", link: "/updates" },
            { name: "Storage", link: "/storage" },
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

        <div className="container m-4 p-5">
          <h1>Page Not Found</h1>
          <p>The page that you are looking for is not exist!</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
