import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((c) => {
            if (c.path)
              return (
                <th key={c.path} scope="col">
                  {c.label}
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
