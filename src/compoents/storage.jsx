import React, { Component } from "react";
import Pagination from "./common/pagination";
import StorageTable from "./storageTable";

class Storage extends Component {
  state = {
    data: [
      { filename: "someTest1.txt", date: Date.now(), size: 1 },
      { filename: "someTest2.txt", date: Date.now(), size: 2 },
      { filename: "someTest3.txt", date: Date.now(), size: 3 },
      { filename: "someTest4.txt", date: Date.now(), size: 4 },
      { filename: "someTest5.txt", date: Date.now(), size: 5 },
      { filename: "someTest6.txt", date: Date.now(), size: 6 },
      { filename: "someTest7.txt", date: Date.now(), size: 7 },
      { filename: "someTest8.txt", date: Date.now(), size: 8 },
      { filename: "someTest9.txt", date: Date.now(), size: 9 },
      { filename: "someTest10.txt", date: Date.now(), size: 10 },
      { filename: "someTest11.txt", date: Date.now(), size: 11 },
      { filename: "someTest12.txt", date: Date.now(), size: 12 },
      { filename: "someTest13.txt", date: Date.now(), size: 13 },
    ],
    columns: [
      { path: "filename", label: "Name" },
      { path: "date", label: "Last Modified" },
      { path: "size", label: "File size" },
      {
        key: "delete",
        content: () => (
          <button className="btn btn-danger btn-sm">Delete</button>
        ),
      },
      {
        key: "download",
        content: () => (
          <button className="btn btn-success btn-sm">Download</button>
        ),
      },
    ],
    currentPage: 2,
    pageSize: 4,
  };

  render() {
    return (
      <div className="container">
        <StorageTable columns={this.state.columns} data={this.state.data} />
        <Pagination
          itemsCount={this.state.data.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
        />
      </div>
    );
  }
}

export default Storage;
