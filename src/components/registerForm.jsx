import React, { Component } from "react";
import Input from "./common/input";
import { register } from "../services/userService";
class RegisterForm extends Component {
  state = {
    account: {
      username: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },
    error: null,
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const newAccount = { ...this.state.account };

    // Calling the backend server
    console.log(newAccount);
    const response = await register(newAccount);
    console.log(response.data);
    const { isEmailUsed } = response.data;
    if (isEmailUsed) {
      window.location = "/register";
      return;
    }
    window.location = "/login";
  };

  render() {
    const { account } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <Input
          name="username"
          value={account.username}
          label="Create Your Username"
          type="text"
          onChange={(e) => this.handleChange}
        />

        <Input
          name="email"
          value={account.email}
          label="Enter Your Email"
          type="email"
          onChange={(e) => this.handleChange}
        />

        <Input
          name="password"
          value={account.password}
          label="Create Your Password"
          type="password"
          onChange={this.handleChange}
        />

        <div className="m-4">
          <small className="form-text text-muted">
            The password can only contain alphabets and numbers.
          </small>
          <br />
          <small className="form-text text-muted">
            The length of password needs to be 3 to 30 characters.
          </small>
        </div>

        <Input
          name="repeatedPassword"
          value={account.repeatedPassword}
          label="Repeat Your Password"
          type="password"
          onChange={this.handleChange}
        />

        <div className="form-group m-4">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
