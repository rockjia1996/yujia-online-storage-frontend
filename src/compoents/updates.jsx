import React, { Component } from "react";
import NavBar from "./navbar";

class Updates extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar
          brandName={{ name: "Mini Online Storage", url: "/" }}
          navLinks={{
            About: "/about",
            Updates: "/updates",
            Contact: "/contact",
            Login: "/login",
          }}
        />

        <h1>This is updates page</h1>
      </div>
    );
  }
}

export default Updates;
