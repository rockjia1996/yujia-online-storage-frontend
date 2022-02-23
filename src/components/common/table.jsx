import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

class Table extends Component {
  state = {};
  render() {
    const { columns, entries } = this.props;

    return (
      <table className="table table-striped">
        <TableHeader columns={columns} />
        <TableBody columns={columns} entries={entries} />
      </table>
    );
  }
}

export default Table;
