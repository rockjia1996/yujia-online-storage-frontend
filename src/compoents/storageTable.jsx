import React, { Component } from "react";
import Table from "./common/table";

class StorageTable extends Component {
  columns = [
    { path: "filename", label: "Name" },
    { path: "date", label: "Last Modified" },
    { path: "size", label: "File size" },
    { key: "delete", content: () => <button>Delete</button> },
    { key: "download", content: () => <button>Download</button> },
  ];

  render() {
    return <Table />;
  }
}

export default StorageTable;
