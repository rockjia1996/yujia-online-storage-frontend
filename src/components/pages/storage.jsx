import React, { Component } from "react";
import FileTable from "../fileTable";
import {
  deleteFile,
  downloadFile,
  getFileList,
  uploadFile,
} from "../../services/storageService";
import Navbar from "../common/navbar";
import SearchBar from "../common/searchBar";
import Sidebar from "../sidebar";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import FileSelect from "../fileSelect";
import Dashboard from "../Dashboard";
import Account from "../account";

class Storage extends Component {
  state = {
    fileList: [],
    searchQuery: "",
    currentPage: 1,
    entriesPerPage: 4,
    loadStorage: true,
    loadDashboard: false,
    loadAccount: false,
  };

  async componentDidMount() {
    const list = await getFileList();

    list.map((item) => {
      const convertedDate = new Date(item.date);
      item.date = convertedDate.toDateString();
      return item;
    });
    this.setState({ fileList: list });
  }

  handleFileUpload = async () => {
    const orginalList = [...this.state.fileList];

    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
    const formData = new FormData();
    formData.append("uploaded_file", file);

    try {
      const uploaded = await uploadFile(formData);
      const convertedDate = new Date(uploaded.date);
      uploaded.date = convertedDate.toDateString();
      const updatedList = [...orginalList, uploaded];
      this.setState({ fileList: updatedList });
    } catch (error) {}
  };

  handleFileDelete = async (filename) => {
    await deleteFile(filename);

    const filtered = this.state.fileList.filter(
      (entry) => entry.filename !== filename
    );

    this.setState({ fileList: filtered });
  };

  handleFileDownload = async (filename) => {
    await downloadFile(filename);
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleSidebarChange = (tab) => {
    const activeTab = {
      loadStorage: false,
      loadDashboard: false,
      loadAccount: false,
    };

    if (tab === "storage") activeTab.loadStorage = true;
    if (tab === "dashboard") activeTab.loadDashboard = true;
    if (tab === "account") activeTab.loadAccount = true;
    this.setState(activeTab);
  };

  getPageData = () => {
    const queryString = this.state.searchQuery;
    const fileList = [...this.state.fileList];

    const filtered =
      queryString.length !== 0
        ? fileList.filter((entry) => entry.filename.includes(queryString))
        : fileList;

    const entries = paginate(
      filtered,
      this.state.currentPage,
      this.state.entriesPerPage
    );
    return { entries, totalItems: filtered.length };
  };

  renderStorage = () => {
    const listDetails = this.getPageData();
    const list = listDetails.entries;
    const numOfPages = Math.ceil(
      listDetails.totalItems / this.state.entriesPerPage
    );

    return (
      <React.Fragment>
        <FileSelect onUpload={this.handleFileUpload} />
        <SearchBar
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <p>Showing {list.length} item(s)</p>
        <FileTable
          entries={list}
          onDelete={this.handleFileDelete}
          onDownload={this.handleFileDownload}
        />
        <Pagination
          numOfPages={numOfPages}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  };

  renderDashboard = () => {
    return <Dashboard totalSpace={100000000} fileList={this.state.fileList} />;
  };

  renderAccount = () => {
    return <Account />;
  };

  renderMain = () => {
    const { loadStorage, loadDashboard, loadAccount } = this.state;
    if (loadStorage) return this.renderStorage();
    if (loadDashboard) return this.renderDashboard();
    if (loadAccount) return this.renderAccount();
  };

  render() {
    return (
      <div>
        <Navbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={[
            { name: "Home", link: "/" },
            { name: "Updates", link: "/updates" },
            { name: "About", link: "/about" },
          ]}
        />

        <div className="container">
          <div className="row">
            <div className="col my-4">
              <Sidebar
                tabs={["Storage", "Dashboard", "Account"]}
                currentTab={
                  (this.state.loadStorage ? "Storage" : false) ||
                  (this.state.loadDashboard ? "Dashboard" : false) ||
                  (this.state.loadAccount ? "Account" : false)
                }
                onChange={this.handleSidebarChange}
              />
            </div>
            <div className="col-8">{this.renderMain()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Storage;
