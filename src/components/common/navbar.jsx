import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};

  render() {
    const { brand, itemList } = this.props;
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {this.renderBrand(brand)}

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav">{this.renderItemList(itemList)}</div>
          </div>
        </div>
      </nav>
    );
  }

  // Helper method that helps render the brand based on props
  renderBrand(brand) {
    const { name, link } = brand;
    return (
      <React.Fragment>
        <Link className="navbar-brand" to={link}>
          {name}
        </Link>
      </React.Fragment>
    );
  }

  // Helper method that helps render the nav item based on the props
  renderItemList(itemList) {
    return itemList.map((item) => {
      return (
        <li key={item.name} className="nav-item">
          <NavLink className="nav-link" to={item.link}>
            {item.name}
          </NavLink>
        </li>
      );
    });
  }
}

export default Navbar;
