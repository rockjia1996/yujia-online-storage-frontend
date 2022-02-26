import React, { Component } from "react";
import Navbar from "../common/navbar";
class NotFound extends Component {
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

        <div className="container m-4">
          <h1>Page Not Found</h1>
          <p>The page that you are looking for is not exist!</p>
        </div>
      </div>
    );
  }
}

export default NotFound;