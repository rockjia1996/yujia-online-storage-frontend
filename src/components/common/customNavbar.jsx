import React, { Component } from "react";

import { Navbar, Nav } from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    const { brand, itemList } = this.props;
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        {this.renderBrand(brand)}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">{this.renderItemList(itemList)}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderBrand(brand) {
    const { name, link } = brand;
    return (
      <React.Fragment>
        <Navbar.Brand href={link}>{name}</Navbar.Brand>
      </React.Fragment>
    );
  }

  renderItemList(itemList) {
    return itemList.map((item) => {
      return (
        <Nav.Link href={item.link} key={item.name}>
          {item.name}
        </Nav.Link>
      );
    });
  }
}

export default CustomNavbar;
