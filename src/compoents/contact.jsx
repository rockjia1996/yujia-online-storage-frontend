import React, { Component } from "react";
import NavBar from "./navbar";

class Contact extends Component {
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

        <h1>This is contact page</h1>
      </div>
    );
  }
}

export default Contact;
