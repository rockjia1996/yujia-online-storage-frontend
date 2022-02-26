import React, { Component } from "react";

class Dashboard extends Component {
  state = {};

  renderStatusBar = (percentage) => {
    const bar = (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {percentage}%
        </div>
      </div>
    );
    return bar;
  };

  render() {
    const { totalSpace, fileList } = this.props;
    const usage = fileList.reduce((acc, currItem) => acc + currItem.size, 0);
    const percentage = Math.ceil((usage / totalSpace) * 100);

    return (
      <React.Fragment>
        <h2 className="my-4">Storage Status</h2>
        <h3>Storage Usage</h3>
        {this.renderStatusBar(percentage)}
        <p>Used vs Total (in bytes): {`${usage} / ${totalSpace}`}</p>
      </React.Fragment>
    );
  }
}

export default Dashboard;
