import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import StorageTable from "./storageTable";
import _ from "lodash";
import { getData } from "../service/fakeBackendService";
import NavBar from "./navbar";
class Storage extends Component {
  state = {
    data: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "filename", order: "asc" },
  };

  componentDidMount() {
    this.setState({ data: getData() });
  }

  getPageData = () => {
    const { pageSize, currentPage, data } = this.state;
    const paginatedData = paginate(data, currentPage, pageSize);
    return paginatedData;
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleSort = (sortColumn) => {
    const data = _.cloneDeep(this.state.data);
    const sorted = _.orderBy(data, [sortColumn.path], [sortColumn.order]);

    this.setState({ data: sorted, sortColumn: sortColumn, currentPage: 1 });
  };

  handleDelete = (filename) => {
    const deepCloneData = _.cloneDeep(this.state.data);

    // Update the UI
    const updatedData = deepCloneData.filter(
      (entry) => entry.filename !== filename
    );

    // TO DO: Call server
    this.setState({ data: updatedData });
  };

  render() {
    const data = this.getPageData();
    const { sortColumn } = this.state;

    return (
      <div>
        <NavBar />
        <StorageTable
          data={data}
          sortColumn={sortColumn}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={this.state.data.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Storage;
