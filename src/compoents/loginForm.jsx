import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const userAccount = { ...this.state.account };

    // Calling the backend server
    console.log(userAccount);
  };

  render() {
    const { account } = this.state;
    return (
      <form className="container">
        <Input
          name="email"
          value={account.email}
          label="Email"
          type="email"
          onChange={this.handleChange}
        />

        <Input
          name="password"
          value={account.password}
          label="Password"
          type="password"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default LoginForm;
