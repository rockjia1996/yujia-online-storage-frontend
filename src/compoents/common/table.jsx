import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
