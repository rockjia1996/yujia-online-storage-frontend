import React, { Component } from "react";
import Table from "./common/table";

class StorageTable extends Component {
  columns = [
    { path: "filename", label: "Name" },
    { path: "date", label: "Last Modified" },
    { path: "size", label: "File size" },
    {
      key: "delete",
      content: (filename) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            this.props.onDelete(filename);
          }}
        >
          Delete
        </button>
      ),
    },
    {
      key: "download",
      content: () => (
        <button className="btn btn-success btn-sm">Download</button>
      ),
    },
  ];

  render() {
    const { data, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        data={data}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default StorageTable;
