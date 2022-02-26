import React, { Component } from "react";
import Input from "./common/input";
import { login } from "../services/authService";
class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const userAccount = { ...this.state.account };

    // Calling the backend server
    await login(userAccount.email, userAccount.password);
    window.location = "/storage";
  };

  render() {
    const { account } = this.state;
    return (
      <form className="container">
        {/* Email Input Field*/}
        <Input
          type="email"
          value={account.email}
          label="Email"
          name="email"
          placeholder="Enter your email ..."
          onChange={(e) => this.handleChange(e)}
        />

        {/* Password Input Field */}
        <Input
          type="password"
          value={account.password}
          label="Password"
          name="password"
          placeholder="Enter your password ..."
          onChange={(e) => this.handleChange(e)}
        />

        {/* Submit Button*/}
        <div className="form-group m-4">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
