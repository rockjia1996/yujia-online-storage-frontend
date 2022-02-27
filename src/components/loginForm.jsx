import React, { Component } from "react";
import Input from "./common/input";
import { login } from "../services/authService";
import { loginValidate } from "../services/validateService";
class LoginForm extends Component {
  state = {
    account: { email: "", password: "" },
    loginError: { emailError: "", passwordError: "" },
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
    const { error: validateError } = loginValidate({
      email: userAccount.email,
      password: userAccount.password,
    });

    if (validateError) alert(validateError.details[0].message);

    const loginFeedback = await login(userAccount.email, userAccount.password);

    if (loginFeedback.isAuth === false)
      return alert("Please enter the correct email and password");
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
