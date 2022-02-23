import React, { Component } from "react";
import Table from "./common/table";

class FileTable extends Component {
  columns = [
    { path: "filename", label: "Filename" },
    { path: "size", label: "Size" },
    { path: "date", label: "Last Modified" },
    {
      key: "delete",
      content: (filename) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(filename)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "download",
      content: (filename) => (
        <button
          className="btn btn-warning"
          onClick={() => this.props.onDownload(filename)}
        >
          Download
        </button>
      ),
    },
  ];

  render() {
    const { entries } = this.props;
    return <Table columns={this.columns} entries={entries} />;
  }
}
export default FileTable;
