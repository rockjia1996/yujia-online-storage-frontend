import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  state = {};
  render() {
    const { brandName, navLinks } = this.props;
    const tabs = Object.keys(navLinks);

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          {brandName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {tabs.map((label) => {
              return (
                <li className="nav-item">
                  <NavLink className="nav-link" to={navLinks[label]}>
                    {label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
