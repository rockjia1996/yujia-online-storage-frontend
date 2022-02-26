import React, { Component } from "react";

class FileSelect extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex my-3">
        <input className="form-control w-100" type="file" id="uploaded-file" />
        <button className="btn btn-primary mx-2" onClick={this.props.onUpload}>
          Upload
        </button>
      </div>
    );
  }
}

export default FileSelect;
