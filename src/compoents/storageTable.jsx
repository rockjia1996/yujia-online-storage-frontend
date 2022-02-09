import React, { Component } from "react";
import Table from "./common/table";

class StorageTable extends Component {
  render() {
    return <Table columns={this.props.columns} data={this.props.data} />;
  }
}

export default StorageTable;
