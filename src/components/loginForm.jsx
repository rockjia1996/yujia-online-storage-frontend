import React, { Component } from "react";
import Input from "./common/input";
import { login } from "../services/authService";
import { loginValidate } from "../services/validateService";
class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const userAccount = { ...this.state.account };

    // Validate Inputs
    const { error: validateError } = loginValidate(userAccount);
    const errorMessages = {};

    if (validateError) {
      for (let item of validateError.details)
        errorMessages[item.path[0]] = item.message;
      console.log(errorMessages);
      return this.setState({ errors: errorMessages || {} });
    }

    // Calling the backend server

    const loginFeedback = await login(userAccount.email, userAccount.password);

    if (loginFeedback.isAuth === false) {
      const errorMessages = {
        email: "Invalid Email",
        password: "Invalid Password",
      };
      return this.setState({ errors: errorMessages || {} });
    }
    window.location = "/storage";
  };

  render() {
    const { account, errors } = this.state;
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
          error={errors["email"]}
        />

        {/* Password Input Field */}
        <Input
          type="password"
          value={account.password}
          label="Password"
          name="password"
          placeholder="Enter your password ..."
          onChange={(e) => this.handleChange(e)}
          error={errors["password"]}
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
