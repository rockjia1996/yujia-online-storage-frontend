import React, { Component } from "react";
import NavBar from "./navbar";

class NotFoundPage extends Component {
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
        <h1>Page not found</h1>
      </div>
    );
  }
}

export default NotFoundPage;
