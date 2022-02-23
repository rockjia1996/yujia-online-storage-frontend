import React, { Component } from "react";

class TableBody extends Component {
  state = {};
  render() {
    const { columns, entries } = this.props;
    return (
      <tbody>{entries.map((entry) => this.renderRow(columns, entry))}</tbody>
    );
  }

  renderCell(columns, entry) {
    return columns.map((column) => {
      return column.path ? (
        <td key={column.path}>{entry[column.path]}</td>
      ) : (
        <td key={column.key}>{column.content(entry.filename)}</td>
      );
    });
  }

  renderRow(columns, entry) {
    return <tr key={entry._id}>{this.renderCell(columns, entry)}</tr>;
  }
}

export default TableBody;
