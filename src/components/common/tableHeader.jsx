import React, { Component } from "react";

class TableHeader extends Component {
  state = {};
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => {
            return column.label ? (
              <th key={column.label}>{column.label}</th>
            ) : (
              <th key={column.key}>{""}</th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
