import React, { Component } from "react";
import FileTable from "../fileTable";
import {
  deleteFile,
  downloadFile,
  getFileList,
  uploadFile,
} from "../../services/storageService";
import Input from "../common/input";
import Navbar from "../common/navbar";

class Storage extends Component {
  state = {
    fileList: [],
  };

  async componentDidMount() {
    const list = await getFileList();
    this.setState({ fileList: list });
  }

  handleFileUpload = async () => {
    const input = document.querySelector('input[type="file"]');
    const file = input.files[0];
    const formData = new FormData();
    formData.append("uploaded_file", file);
    const uploaded = await uploadFile(formData);

    const orginalList = [...this.state.fileList];
    const updatedList = [...orginalList, uploaded];
    this.setState({ fileList: updatedList });
  };

  handleFileDelete = async (filename) => {
    console.log("On Delete: ", filename);
    await deleteFile(filename);

    const filtered = this.state.fileList.filter(
      (entry) => entry.filename !== filename
    );

    this.setState({ fileList: filtered });
  };

  handleFileDownload = async (filename) => {
    console.log("On Download: ", filename);
    await downloadFile(filename);
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
            <div className="col">
              <Input />
              <div className=" my-2">
                <input id="uploaded-file" type="file" />
                <button
                  className="btn btn-primary"
                  onClick={this.handleFileUpload}
                >
                  Upload
                </button>
              </div>
              <FileTable
                entries={this.state.fileList}
                onDelete={this.handleFileDelete}
                onDownload={this.handleFileDownload}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Storage;
