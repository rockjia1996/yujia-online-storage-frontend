import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon className="mx-2" icon={faArrowUp} />;
    return <FontAwesomeIcon className="mx-2" icon={faArrowDown} />;
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((c) => {
            if (c.path)
              return (
                <th
                  key={c.path || c.key}
                  style={{ cursor: "pointer" }}
                  onClick={() => this.raiseSort(c.path)}
                >
                  {c.label}
                  {this.renderSortIcon(c)}
                </th>
              );
            else
              return (
                <th key={c.key} scope="col">
                  {}
                </th>
              );
          })}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
