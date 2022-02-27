import React, { Component } from "react";

class Account extends Component {
  state = {};

  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.navigate("/", { replace: true });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="my-4">Account</h1>
        <h2 className="my-4">Email</h2>
        <p>Associated Email: &nbsp; {this.props.user.email} </p>
        <h2 className="my-4">Privilege</h2>
        <p>User Type: &nbsp; Regular</p>
        <p>Assigned Disk Space: 100000000 bytes (100 Mb)</p>
        <h2 className="my-4">Logout</h2>
        <button className="btn btn-danger" onClick={this.handleLogout}>
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default Account;
