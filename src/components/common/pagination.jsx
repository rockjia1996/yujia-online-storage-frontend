import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  state = {};

  renderPageButton = (pages, currentPage, onChange) => {
    const buttons = _.range(1, pages + 1);
    return buttons.map((btn) => (
      <li
        key={btn}
        className={btn === currentPage ? "page-item active" : "page-item"}
      >
        <button className="page-link" onClick={() => onChange(btn)}>
          {btn}
        </button>
      </li>
    ));
  };

  render() {
    const { numOfPages, currentPage, onPageChange } = this.props;
    return (
      <nav>
        <ul className="pagination">
          {this.renderPageButton(numOfPages, currentPage, onPageChange)}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
