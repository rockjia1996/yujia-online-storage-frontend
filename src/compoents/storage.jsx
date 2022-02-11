import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import StorageTable from "./storageTable";
import _ from "lodash";
import { getData } from "../service/fakeBackendService";
import NavBar from "./navbar";
import SearchBar from "./common/serachBar";
class Storage extends Component {
  state = {
    data: [],
    filtered: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "filename", order: "asc" },
    searchInput: "",
  };

  componentDidMount() {
    this.setState({ data: getData(), filtered: getData() });
  }

  getPageData = () => {
    const { pageSize, currentPage, filtered } = this.state;
    const paginatedData = paginate(filtered, currentPage, pageSize);
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

  handleSearchInputChange = (e) => {
    console.log("change detected in search bar");
    const input = e.currentTarget.value;

    if (input.length > 0) {
      const deepCloneData = _.cloneDeep(this.state.data);
      const filtered = deepCloneData.filter((entry) => {
        if (entry.filename.includes(input)) return entry;
      });

      console.log("change detected in search bar, input > 0");
      this.setState({ searchInput: input, filtered: filtered });
    }
    if (input.length === 0)
      this.setState({ searchInput: input, filtered: this.state.data });
  };

  render() {
    const data = this.getPageData();
    const { sortColumn, searchInput } = this.state;

    return (
      <div>
        <NavBar
          brandName={{ name: "Mini Online Storage", url: "/storage" }}
          navLinks={{
            Storage: "/storage",
            Settings: "/settings",
            Account: "/account",
          }}
        />

        <SearchBar
          value={searchInput}
          onChange={this.handleSearchInputChange}
        />
        <StorageTable
          data={data}
          sortColumn={sortColumn}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={this.state.filtered.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Storage;
