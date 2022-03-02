import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

import FileTable from "../fileTable";
import {
  deleteFile,
  downloadFile,
  getFileList,
  uploadFile,
} from "../../services/storageService";
import SearchBar from "../common/searchBar";
import Sidebar from "../sidebar";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import FileSelect from "../fileSelect";
import Dashboard from "../Dashboard";
import AccountWrapper from "../accountWrapper";
import CustomNavbar from "../common/customNavbar";

class Storage extends Component {
  state = {
    fileList: [],
    searchQuery: "",
    currentPage: 1,
    entriesPerPage: 7,
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

    // Calculate the usage of the disk space
    const usage = orginalList.reduce(
      (acc, currentFile) => acc + currentFile.size,
      0
    );
    const free = 100000000 - usage;

    // If no enough space, alert user and terminate the upload
    if (free <= 0 || free <= file.size)
      return toast.error("No Enough Free Space");

    if (file.size > 10000000)
      return toast.error("Exceed File Size Limit 10 Mb");

    try {
      const uploaded = await uploadFile(formData);
      const convertedDate = new Date(uploaded.date);
      uploaded.date = convertedDate.toDateString();
      const updatedList = [...orginalList, uploaded];
      this.setState({ fileList: updatedList });
    } catch (error) {
      console.log(error.message);
    }
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
        <ToastContainer />
        <FileSelect onUpload={this.handleFileUpload} />
        <SearchBar
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <p>Showing {listDetails.totalItems} item(s)</p>
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
    return <AccountWrapper user={this.props.user} />;
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
        <CustomNavbar
          brand={{ name: "Mini Online Storage", link: "/" }}
          itemList={[
            { name: "Home", link: "/" },
            { name: "Storage", link: "/storage" },
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
