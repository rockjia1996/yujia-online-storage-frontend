import React, { Component } from "react";
import Input from "./common/input";
import { register } from "../services/userService";
import { registerValidate } from "../services/validateService";
class RegisterForm extends Component {
  state = {
    account: {
      username: "",
      email: "",
      password: "",
      repeatedPassword: "",
    },
    errors: {},
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const newAccount = { ...this.state.account };

    // Validate Inputs
    const { error: validateError } = registerValidate(newAccount);
    const errorMessages = {};

    if (validateError) {
      for (let item of validateError.details)
        errorMessages[item.path[0]] = item.message;
      return this.setState({ errors: errorMessages || {} });
    }

    // Calling the backend server
    const response = await register(newAccount);
    const { isEmailUsed } = response.data;
    if (isEmailUsed) {
      const errorMessages = {
        email: "Email has been used, please login with it",
      };
      console.log(errorMessages);
      return this.setState({ errors: errorMessages || {} });
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
          onChange={this.handleChange}
          error={this.state.errors["username"]}
        />

        <Input
          name="email"
          value={account.email}
          label="Enter Your Email"
          type="email"
          onChange={this.handleChange}
          error={this.state.errors["email"]}
        />

        <Input
          name="password"
          value={account.password}
          label="Create Your Password"
          type="password"
          onChange={this.handleChange}
          error={this.state.errors["password"]}
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
          error={this.state.errors["repeatedPassword"]}
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
