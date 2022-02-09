import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { columns, data } = this.props;
    return (
      <table className="table">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    );
  }
}

export default Table;
