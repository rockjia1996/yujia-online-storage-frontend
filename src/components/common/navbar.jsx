import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const { brand, itemList } = this.props;
    return (
      <nav className="navbar stick-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {this.renderBrand(brand)}
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">{this.renderItemList(itemList)}</div>
          </div>
        </div>
      </nav>
    );
  }

  renderBrand(brand) {
    const { name, link } = brand;
    return (
      <React.Fragment>
        <a className="navbar-brand" href={link}>
          {name}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </React.Fragment>
    );
  }

  renderItemList(itemList) {
    return itemList.map((item) => {
      return (
        <li key={item.name} className="nav-item">
          <a className="nav-link" href={item.link}>
            {item.name}
          </a>
        </li>
      );
    });
  }
}

export default Navbar;
